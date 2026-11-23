/**
 * Servidor MCP público del manual en `POST /mcp`: sin login, de solo lectura, con dos tools
 * (`search` y `fetch`). Lo monta `server.js` antes del handler de SvelteKit.
 *
 * Transporte Streamable HTTP del SDK oficial en modo stateless: un McpServer y un transport por
 * request, sin sesiones (`sessionIdGenerator: undefined`) y con respuestas JSON (sin SSE).
 *
 * - `GET`/`DELETE` → 405 con `Allow: POST` (no hay stream de notificaciones ni sesión que
 *   cerrar). `OPTIONS` → 204 (preflight CORS).
 * - Body de más de 1 MB → 413. JSON inválido → 400 (-32700).
 * - CORS abierto (`*`, sin credenciales): el contenido es público y no hay cookies ni tokens, así
 *   que un navegador (MCP Inspector) puede leer lo mismo que `curl`. Por la misma razón no se
 *   valida `Origin`: la protección contra DNS rebinding que pide la spec cuida servidores con
 *   datos privados (sobre todo locales); acá un sitio malicioso solo podría leer el manual.
 * - Los códigos JSON-RPC propios son los estándar (-32600, -32700, -32603); no se usan
 *   -32000..-32019. Los errores que arma el SDK (406 por `Accept`, 415 por `Content-Type`)
 *   salen con su -32000.
 * - Rate limit: no se implementa acá; queda para el proxy (Traefik).
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import { buildSearchUnits, fetchDocument, MAX_RESULTS, search } from './mcp-search.mjs';

/** @typedef {import('./mcp-index.mjs').McpIndex} McpIndex */
/** @typedef {import('node:http').IncomingMessage} IncomingMessage */
/** @typedef {import('node:http').ServerResponse} ServerResponse */

/** Ruta del endpoint. */
export const MCP_PATH = '/mcp';

/** Tamaño máximo del body de un POST. */
export const MAX_BODY_BYTES = 1024 * 1024;

export const SERVER_NAME = 'paxapos-manual';
export const SERVER_TITLE = 'Manual de PaxaPos';

export const INSTRUCTIONS =
	'Manual de usuario de PaxaPOS, el sistema de gestión para restaurantes y comercios ' +
	'gastronómicos: salón y ventas, caja y arqueos, medios de pago, facturación electrónica ' +
	'(ARCA), productos, compras, stock, finanzas, RRHH y fichaje, impresoras y drivers, Omnibot y ' +
	'la conexión con asistentes de IA. `search` busca en el manual y devuelve secciones con su ' +
	'id; `fetch` trae con ese id el artículo (o la sección) completo en markdown. Al responder, ' +
	'citá el `url` de lo que usaste.';

/** Headers CORS de todas las respuestas de /mcp. */
const CORS_HEADERS = Object.freeze({
	'Access-Control-Allow-Origin': '*',
});

/** Headers extra del preflight. */
const PREFLIGHT_HEADERS = Object.freeze({
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers':
		'Content-Type, Accept, Authorization, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID',
	'Access-Control-Max-Age': '86400',
});

const READ_ONLY = Object.freeze({
	readOnlyHint: true,
	destructiveHint: false,
	idempotentHint: true,
	openWorldHint: false,
});

const searchInput = {
	query: z
		.string({ error: 'Falta "query": el texto a buscar en el manual.' })
		.describe('Palabras a buscar en el manual, por ejemplo "arqueo de caja".'),
};

const searchOutput = {
	results: z
		.array(
			z.object({
				id: z.string().describe('Id para fetch: manual:<slug> o manual:<slug>#<ancla>.'),
				title: z.string().describe('Título del artículo y de la sección.'),
				url: z.string().describe('URL pública de la sección en doc.paxapos.com.'),
				text: z.string().describe('Fragmento del texto donde aparece la búsqueda.'),
			}),
		)
		.describe(`Hasta ${MAX_RESULTS} secciones, de la más a la menos relevante.`),
};

const fetchInput = {
	id: z
		.string({ error: 'Falta "id": el id que devuelve search, el slug o la URL del artículo.' })
		.describe(
			'Id que devuelve search (manual:<slug> o manual:<slug>#<ancla>), el slug del artículo ' +
				'o su URL https://doc.paxapos.com/user-guide/<slug>.',
		),
};

const fetchOutput = {
	id: z.string().describe('Id del artículo o de la sección.'),
	title: z.string().describe('Título del artículo (y de la sección, si se pidió una).'),
	text: z.string().describe('Texto en markdown.'),
	url: z.string().describe('URL pública en doc.paxapos.com.'),
	metadata: z.object({
		categoria: z.string().describe('Capítulo del manual.'),
		actualizado: z
			.string()
			.nullable()
			.describe('Fecha ISO de la última modificación, o null si no se conoce.'),
		secciones: z
			.array(z.object({ ancla: z.string(), titulo: z.string() }))
			.describe('Secciones del artículo; cada una se pide con manual:<slug>#<ancla>.'),
	}),
};

/**
 * @param {string} message
 * @returns {{ content: { type: 'text', text: string }[], isError: true }}
 */
function toolError(message) {
	return { content: [{ type: 'text', text: message }], isError: true };
}

/**
 * @template {Record<string, unknown>} T
 * @param {T} data
 * @returns {{ content: { type: 'text', text: string }[], structuredContent: T }}
 */
function toolResult(data) {
	return { content: [{ type: 'text', text: JSON.stringify(data) }], structuredContent: data };
}

/**
 * Prepara lo que no cambia entre requests (unidades de búsqueda) y devuelve una fábrica de
 * McpServer con las dos tools registradas.
 * @param {{ index: McpIndex, version: string }} options
 * @returns {() => McpServer}
 */
export function createMcpServerFactory({ index, version }) {
	const units = buildSearchUnits(index);

	return () => {
		const server = new McpServer(
			{ name: SERVER_NAME, title: SERVER_TITLE, version },
			{ instructions: INSTRUCTIONS },
		);

		server.registerTool(
			'search',
			{
				title: 'Buscar en el manual',
				description:
					'Busca en el manual de usuario de PaxaPOS, sin distinguir acentos ni mayúsculas, y ' +
					`devuelve hasta ${MAX_RESULTS} secciones de artículos con su id, título, URL pública ` +
					'y un fragmento del texto donde aparece la búsqueda.',
				inputSchema: searchInput,
				outputSchema: searchOutput,
				annotations: READ_ONLY,
			},
			async ({ query }) => {
				if (!query.trim()) {
					return toolError(
						'La búsqueda está vacía. Pasá en "query" una o más palabras, por ejemplo ' +
							'"arqueo de caja" o "impresora".',
					);
				}
				return toolResult({ results: search(units, query) });
			},
		);

		server.registerTool(
			'fetch',
			{
				title: 'Leer un artículo del manual',
				description:
					'Devuelve en markdown un artículo del manual de PaxaPOS, o una sola sección si el id ' +
					'termina en #<ancla>, con su URL pública, el capítulo, la fecha de la última ' +
					'actualización y la lista de secciones. Acepta el id que devuelve search, el slug ' +
					'del artículo o su URL.',
				inputSchema: fetchInput,
				outputSchema: fetchOutput,
				annotations: READ_ONLY,
			},
			async ({ id }) => {
				const outcome = fetchDocument(index, id);
				return outcome.ok ? toolResult(outcome.document) : toolError(outcome.error);
			},
		);

		return server;
	};
}

/**
 * @param {ServerResponse} res
 * @param {number} status
 * @param {number} code código JSON-RPC
 * @param {string} message
 * @param {Record<string, string>} [headers]
 */
function sendJsonRpcError(res, status, code, message, headers = {}) {
	const body = JSON.stringify({ jsonrpc: '2.0', error: { code, message }, id: null });
	res.writeHead(status, {
		...headers,
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(body),
	});
	res.end(body);
}

/**
 * Lee el body hasta `maxBytes`. `null` si lo supera (por `Content-Length` o por lo recibido).
 * @param {IncomingMessage} req
 * @param {number} maxBytes
 * @returns {Promise<Buffer | null>}
 */
function readBody(req, maxBytes) {
	if (Number(req.headers['content-length']) > maxBytes) return Promise.resolve(null);
	return new Promise((resolve, reject) => {
		/** @type {Buffer[]} */
		const chunks = [];
		let size = 0;
		let tooLarge = false;
		req.on('data', (/** @type {Buffer} */ chunk) => {
			if (tooLarge) return;
			size += chunk.length;
			if (size > maxBytes) {
				tooLarge = true;
				chunks.length = 0;
				resolve(null);
				return;
			}
			chunks.push(chunk);
		});
		req.on('end', () => {
			if (!tooLarge) resolve(Buffer.concat(chunks));
		});
		req.on('error', reject);
	});
}

/**
 * Una línea por `initialize`, para ver qué versión y qué cliente negocia cada uno.
 * @param {unknown} message
 * @param {(line: string) => void} log
 */
function logInitialize(message, log) {
	for (const m of Array.isArray(message) ? message : [message]) {
		if (
			!m ||
			typeof m !== 'object' ||
			/** @type {{ method?: unknown }} */ (m).method !== 'initialize'
		) {
			continue;
		}
		const params =
			/** @type {{ params?: { protocolVersion?: unknown, clientInfo?: unknown } }} */ (m)
				.params;
		const clientInfo = JSON.stringify(params?.clientInfo ?? null).slice(0, 300);
		log(
			`[mcp] initialize protocolVersion=${JSON.stringify(params?.protocolVersion ?? null)} ` +
				`clientInfo=${clientInfo}`,
		);
	}
}

/**
 * Handler HTTP de `/mcp`. Los headers de seguridad ya los puso `server.js`.
 * @param {{ index: McpIndex, version: string, maxBodyBytes?: number, log?: (line: string) => void }} options
 * @returns {(req: IncomingMessage, res: ServerResponse) => Promise<void>}
 */
export function createMcpHandler({
	index,
	version,
	maxBodyBytes = MAX_BODY_BYTES,
	log = (line) => console.log(line),
}) {
	const createServer = createMcpServerFactory({ index, version });

	return async (req, res) => {
		for (const [name, value] of Object.entries(CORS_HEADERS)) res.setHeader(name, value);

		if (req.method === 'OPTIONS') {
			res.writeHead(204, { ...PREFLIGHT_HEADERS, 'Content-Length': 0 });
			res.end();
			return;
		}
		if (req.method !== 'POST') {
			sendJsonRpcError(
				res,
				405,
				-32600,
				'Método no permitido: este servidor MCP solo atiende POST (sin sesiones ni SSE).',
				{ Allow: 'POST' },
			);
			return;
		}

		const raw = await readBody(req, maxBodyBytes);
		if (raw === null) {
			// Sin leer el resto: se corta la conexión después de responder.
			sendJsonRpcError(
				res,
				413,
				-32600,
				`El cuerpo del pedido supera el máximo de ${maxBodyBytes} bytes.`,
				{ Connection: 'close' },
			);
			req.resume();
			return;
		}
		/** @type {unknown} */
		let body;
		try {
			body = JSON.parse(raw.toString('utf-8'));
		} catch {
			sendJsonRpcError(res, 400, -32700, 'Parse error: el cuerpo no es JSON válido.');
			return;
		}
		logInitialize(body, log);

		const server = createServer();
		const transport = new StreamableHTTPServerTransport({
			sessionIdGenerator: undefined,
			enableJsonResponse: true,
		});
		res.on('close', () => {
			void transport.close();
			void server.close();
		});
		try {
			await server.connect(transport);
			await transport.handleRequest(req, res, body);
		} catch (error) {
			console.error('[mcp]', error);
			if (!res.headersSent) sendJsonRpcError(res, 500, -32603, 'Internal error');
			else res.end();
		}
	};
}

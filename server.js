/**
 * Server de producción del manual: `node server.js` (después de `pnpm build`).
 *
 * Aplica las reglas HTTP de `server/http-rules.mjs` (redirects, headers de seguridad, cache,
 * /health, dotfiles) y delega el resto en el handler de SvelteKit (adapter-node), que sirve
 * `build/client` (estáticos), `build/prerendered` (páginas) y, para lo que no existe, la
 * página de error con 404.
 *
 * `POST /mcp` es el servidor MCP público del manual (`server/mcp.mjs`), con el índice que genera
 * `pnpm generate`. Si el índice falta o es de otro formato, el proceso no arranca.
 *
 * Variables: PORT (3000), HOST (0.0.0.0), ORIGIN (la lee adapter-node) y, opcionales,
 * OPENAI_APPS_CHALLENGE y MCP_INDEX_PATH (default `server/mcp-index.json`).
 */
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { handler } from './build/handler.js';
import { finalHeaders, resolveRequest } from './server/http-rules.mjs';
import { createMcpHandler, MCP_PATH } from './server/mcp.mjs';
import { loadMcpIndex, MCP_INDEX_PATH } from './server/mcp-index.mjs';

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

/** @type {(req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => Promise<void>} */
let mcpHandler;
try {
	const index = loadMcpIndex(process.env.MCP_INDEX_PATH || MCP_INDEX_PATH);
	const { version } = JSON.parse(
		readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
	);
	mcpHandler = createMcpHandler({ index, version });
	console.log(
		`MCP: ${index.articulos.length} artículos (índice ${index.version}) en ${MCP_PATH}`,
	);
} catch (error) {
	console.error(`No arranca el server: ${error instanceof Error ? error.message : error}`);
	process.exit(1);
}

/**
 * Llama a `apply(status)` justo antes de enviar los headers, cuando ya se conoce el status
 * final, para fijar los headers que dependen de él (cache) o del Content-Type (charset).
 * @param {import('node:http').ServerResponse} res
 * @param {(status: number) => Record<string, string>} apply
 */
function beforeHeaders(res, apply) {
	const writeHead = res.writeHead;
	/** @type {any} */ (res).writeHead = function (
		/** @type {number} */ status,
		/** @type {any[]} */ ...args
	) {
		const reason = typeof args[0] === 'string' ? args.shift() : undefined;
		const headers = args[0];
		if (Array.isArray(headers)) {
			for (let i = 0; i < headers.length; i += 2) res.setHeader(headers[i], headers[i + 1]);
		} else if (headers) {
			for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
		}
		for (const [name, value] of Object.entries(apply(status))) res.setHeader(name, value);
		return reason === undefined
			? writeHead.call(res, status)
			: writeHead.call(res, status, reason);
	};
}

const server = createServer((req, res) => {
	const action = resolveRequest(req.url ?? '/', process.env);
	for (const [name, value] of Object.entries(action.headers)) res.setHeader(name, value);

	if (action.type === 'redirect') {
		res.writeHead(action.status, { Location: action.location, 'Content-Length': 0 });
		res.end();
		return;
	}

	if (action.type === 'respond') {
		res.writeHead(action.status, {
			'Content-Type': action.contentType,
			'Content-Length': Buffer.byteLength(action.body),
		});
		res.end(action.body);
		return;
	}

	beforeHeaders(res, (status) =>
		finalHeaders({
			cache: action.cache,
			status,
			contentType: /** @type {string | undefined} */ (res.getHeader('content-type')),
			now: Date.now(),
		}),
	);
	req.url = action.url;

	if (new URL(action.url, 'http://localhost').pathname === MCP_PATH) {
		mcpHandler(req, res).catch((/** @type {unknown} */ error) => {
			console.error(error);
			if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end();
		});
		return;
	}

	Promise.resolve(handler(req, res, () => {})).catch((/** @type {unknown} */ error) => {
		console.error(error);
		if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' });
		res.end();
	});
});

server.listen(port, host, () => {
	console.log(`Manual PaxaPOS escuchando en http://${host}:${port}`);
});

// `docker stop` manda SIGTERM: cerrar sin cortar los pedidos en curso.
for (const signal of ['SIGTERM', 'SIGINT']) {
	process.once(signal, () => {
		server.close(() => process.exit(0));
		server.closeIdleConnections();
		setTimeout(() => process.exit(0), 10_000).unref();
	});
}

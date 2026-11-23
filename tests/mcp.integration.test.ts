/**
 * Protocolo MCP de punta a punta: el Client del SDK oficial con `StreamableHTTPClientTransport`
 * contra `node server.js` levantado sobre el `build/` real. Necesita `pnpm build` antes (genera
 * también `server/mcp-index.json`); sin build se saltea.
 */
import { type ChildProcess } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { McpIndex } from '../server/mcp-index.mjs';
import { MCP_INDEX_PATH } from '../server/mcp-index.mjs';
import { MAX_RESPONSE_CHARS } from '../server/mcp-search.mjs';
import { EXPECTED_SECURITY_HEADERS } from './fixtures/http-expectations';
import { ROOT, hasBuild, runServerExpectingExit, startServer, stop } from './fixtures/start-server';

type Tool = Awaited<ReturnType<Client['listTools']>>['tools'][number];
type TextBlock = { type: 'text'; text: string };

const version = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8')).version as string;
const ajv = new AjvJsonSchemaValidator();

async function connect(base: string) {
	const client = new Client({ name: 'vitest-mcp', version: '1.0.0' });
	await client.connect(new StreamableHTTPClientTransport(new URL(`${base}/mcp`)));
	return client;
}

/** El único bloque de texto del resultado, parseado como JSON. */
function textJson(result: Awaited<ReturnType<Client['callTool']>>) {
	const content = result.content as TextBlock[];
	expect(content).toHaveLength(1);
	expect(content[0].type).toBe('text');
	return { raw: content[0].text, data: JSON.parse(content[0].text) as Record<string, unknown> };
}

function rpc(base: string, body: unknown, headers: Record<string, string> = {}) {
	return fetch(`${base}/mcp`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/event-stream',
			'Mcp-Protocol-Version': '2025-06-18',
			...headers,
		},
		body: typeof body === 'string' ? body : JSON.stringify(body),
	});
}

describe.skipIf(!hasBuild)('MCP en /mcp (server.js contra build/)', () => {
	let child: ChildProcess | undefined;
	let base = '';
	let stdout = () => '';
	let client: Client;
	let tools: Tool[] = [];

	beforeAll(async () => {
		({ child, base, stdout } = await startServer());
		client = await connect(base);
		tools = (await client.listTools()).tools;
	}, 20_000);

	afterAll(async () => {
		await client?.close();
		stop(child);
	});

	it('initialize: serverInfo e instructions', () => {
		expect(client.getServerVersion()).toEqual({
			name: 'paxapos-manual',
			title: 'Manual de PaxaPos',
			version,
		});
		const instructions = client.getInstructions() ?? '';
		expect(instructions).toMatch(/manual/i);
		expect(instructions).toContain('search');
		expect(instructions).toContain('fetch');
		expect(instructions).toContain('url');
		expect(client.getServerCapabilities()).toMatchObject({ tools: {} });
		expect(client.getServerCapabilities()?.resources).toBeUndefined();
		expect(client.getServerCapabilities()?.prompts).toBeUndefined();
	});

	it('loguea una línea por initialize con protocolVersion y clientInfo', () => {
		expect(stdout()).toMatch(
			/\[mcp\] initialize protocolVersion="[\d-]+" clientInfo=\{"name":"vitest-mcp","version":"1\.0\.0"\}/,
		);
	});

	it('tools/list: search y fetch, con title, 4 hints y schemas', () => {
		expect(tools.map((t) => t.name).sort()).toEqual(['fetch', 'search']);
		for (const tool of tools) {
			expect(tool.name).toMatch(/^[A-Za-z0-9_.-]{1,64}$/);
			expect(tool.title).toBeTruthy();
			expect(tool.description?.length).toBeGreaterThan(20);
			expect(tool.annotations).toEqual({
				readOnlyHint: true,
				destructiveHint: false,
				idempotentHint: true,
				openWorldHint: false,
			});
			expect(tool.inputSchema.type).toBe('object');
			expect(tool.outputSchema?.type).toBe('object');
		}
		const search = tools.find((t) => t.name === 'search');
		const fetchTool = tools.find((t) => t.name === 'fetch');
		expect(search?.inputSchema.required).toEqual(['query']);
		expect(fetchTool?.inputSchema.required).toEqual(['id']);
	});

	it('inputSchema compatible con Gemini: sin anyOf/oneOf/allOf/$ref/type[]/default/format', () => {
		const forbidden = ['anyOf', 'oneOf', 'allOf', '$ref', 'default', 'format'];
		for (const tool of tools) {
			const schema = tool.inputSchema as Record<string, unknown>;
			for (const key of forbidden)
				expect(schema, `${tool.name}.${key}`).not.toHaveProperty(key);
			expect(typeof schema.type).toBe('string');
			for (const [name, prop] of Object.entries(schema.properties ?? {})) {
				const p = prop as Record<string, unknown>;
				for (const key of forbidden)
					expect(p, `${tool.name}.${name}.${key}`).not.toHaveProperty(key);
				expect(p.type).toBe('string');
			}
		}
	});

	it('search → fetch encadenados con el id devuelto, structuredContent válido (Ajv)', async () => {
		const searchTool = tools.find((t) => t.name === 'search') as Tool;
		const fetchTool = tools.find((t) => t.name === 'fetch') as Tool;

		const found = await client.callTool({
			name: 'search',
			arguments: { query: 'arqueo de caja' },
		});
		expect(found.isError).toBeFalsy();
		const { data } = textJson(found);
		expect(found.structuredContent).toEqual(data);
		const check = ajv.getValidator(searchTool.outputSchema as never)(found.structuredContent);
		expect(check.errorMessage).toBeUndefined();
		const results = data.results as { id: string; title: string; url: string; text: string }[];
		expect(results.length).toBeGreaterThan(0);
		expect(results.length).toBeLessThanOrEqual(10);
		expect(results[0].id).toMatch(/^manual:arqueos-de-caja/);

		const read = await client.callTool({ name: 'fetch', arguments: { id: results[0].id } });
		expect(read.isError).toBeFalsy();
		const doc = textJson(read).data;
		expect(read.structuredContent).toEqual(doc);
		const check2 = ajv.getValidator(fetchTool.outputSchema as never)(read.structuredContent);
		expect(check2.errorMessage).toBeUndefined();
		expect(doc.id).toBe(results[0].id);
		expect(doc.url).toBe(results[0].url);
		// Resultado de sección → solo esa sección; resultado de artículo (intro) → el artículo.
		expect(String(doc.text)).toMatch(results[0].id.includes('#') ? /^## / : /^# /);

		const whole = await client.callTool({
			name: 'fetch',
			arguments: { id: 'manual:arqueos-de-caja' },
		});
		const article = textJson(whole).data;
		expect(String(article.text)).toMatch(/^# Arqueos de Caja/);
		expect(article.metadata).toMatchObject({ categoria: 'Finanzas' });
	});

	it('H1: errores de tool con isError, mensaje en español y sin structuredContent', async () => {
		const cases = [
			{ name: 'search', arguments: { query: '   ' }, match: /búsqueda está vacía/ },
			{
				name: 'fetch',
				arguments: { id: 'manual:no-existe' },
				match: /No existe el artículo/,
			},
			{
				name: 'fetch',
				arguments: { id: 'manual:arqueos-de-caja#nada' },
				match: /no tiene la sección/,
			},
			{ name: 'search', arguments: {}, match: /Falta "query"/ },
		];
		for (const c of cases) {
			const result = await client.callTool({ name: c.name, arguments: c.arguments });
			expect(result.isError, c.name).toBe(true);
			expect(result.structuredContent, c.name).toBeUndefined();
			const content = result.content as TextBlock[];
			expect(content).toHaveLength(1);
			expect(content[0].text).toMatch(c.match);
		}
	});

	it('tool inexistente: el SDK 1.32.1 responde isError con -32602 en el texto', async () => {
		const res = await rpc(base, {
			jsonrpc: '2.0',
			id: 9,
			method: 'tools/call',
			params: { name: 'no_existe', arguments: {} },
		});
		expect(res.status).toBe(200);
		const body = await res.json();
		expect(body.error).toBeUndefined();
		expect(body.result.isError).toBe(true);
		expect(body.result.content[0].text).toMatch(/-32602.*no_existe/);
	});

	it('respuestas con los headers de seguridad, CORS abierto y sin sesión', async () => {
		const res = await rpc(
			base,
			{ jsonrpc: '2.0', id: 1, method: 'tools/list' },
			{
				Origin: 'http://localhost:6274',
			},
		);
		expect(res.status).toBe(200);
		expect(res.headers.get('content-type')).toMatch(/^application\/json/);
		expect(res.headers.get('access-control-allow-origin')).toBe('*');
		expect(res.headers.get('mcp-session-id')).toBeNull();
		for (const [name, value] of Object.entries(EXPECTED_SECURITY_HEADERS)) {
			expect(res.headers.get(name), name).toBe(value);
		}
	});

	it('preflight OPTIONS → 204 con los headers que usa un cliente MCP en el navegador', async () => {
		const res = await fetch(`${base}/mcp`, {
			method: 'OPTIONS',
			headers: {
				Origin: 'http://localhost:6274',
				'Access-Control-Request-Method': 'POST',
				'Access-Control-Request-Headers': 'content-type,mcp-protocol-version',
			},
		});
		expect(res.status).toBe(204);
		expect(res.headers.get('access-control-allow-origin')).toBe('*');
		expect(res.headers.get('access-control-allow-methods')).toContain('POST');
		expect(res.headers.get('access-control-allow-headers')).toMatch(/Mcp-Protocol-Version/);
	});

	it.each(['GET', 'DELETE'])('%s /mcp → 405 con Allow: POST', async (method) => {
		const res = await fetch(`${base}/mcp`, {
			method,
			headers: { Accept: 'text/event-stream' },
		});
		expect(res.status).toBe(405);
		expect(res.headers.get('allow')).toBe('POST');
		const body = await res.json();
		expect(body.error.code).toBe(-32600);
	});

	it('sin OAuth: /.well-known/oauth-protected-resource → 404 y nunca 401', async () => {
		expect((await fetch(`${base}/.well-known/oauth-protected-resource`)).status).toBe(404);
		expect((await fetch(`${base}/.well-known/oauth-authorization-server`)).status).toBe(404);
		const res = await rpc(
			base,
			{ jsonrpc: '2.0', id: 1, method: 'tools/list' },
			{
				Authorization: 'Bearer cualquiera',
			},
		);
		expect(res.status).toBe(200);
	});

	it('body de más de 1 MB → 413', async () => {
		const res = await rpc(
			base,
			`{"jsonrpc":"2.0","id":1,"method":"ping","params":{"x":"${'a'.repeat(1_100_000)}"}}`,
		);
		expect(res.status).toBe(413);
		const body = await res.json();
		expect(body.error.code).toBe(-32600);
	});

	it('JSON inválido → 400 -32700', async () => {
		const res = await rpc(base, '{no es json');
		expect(res.status).toBe(400);
		expect((await res.json()).error.code).toBe(-32700);
	});

	it('las páginas del manual siguen igual al lado del MCP', async () => {
		const res = await fetch(`${base}/user-guide/arqueos-de-caja`, { redirect: 'manual' });
		expect(res.status).toBe(200);
		expect(res.headers.get('access-control-allow-origin')).toBeNull();
		expect(await res.text()).toContain('Arqueos de Caja');
	});
});

describe.skipIf(!hasBuild)('MCP con un índice de prueba', () => {
	let dir = '';
	let child: ChildProcess | undefined;
	let client: Client | undefined;

	beforeAll(() => {
		dir = mkdtempSync(join(tmpdir(), 'mcp-index-'));
	});

	afterAll(async () => {
		await client?.close();
		stop(child);
		rmSync(dir, { recursive: true, force: true });
	});

	it('H6: un artículo de más de 60.000 caracteres se corta en una sección y avisa', async () => {
		const real = JSON.parse(readFileSync(MCP_INDEX_PATH, 'utf-8')) as McpIndex;
		const secciones = Array.from({ length: 25 }, (_, i) => ({
			ancla: `parte-${i + 1}`,
			titulo: `Parte ${i + 1}`,
			texto: `## Parte ${i + 1}\n\n${'Texto de relleno. '.repeat(300)}`,
		}));
		const gigante = {
			...real.articulos[0],
			slug: 'gigante',
			titulo: 'Gigante',
			url: 'https://doc.paxapos.com/user-guide/gigante',
			intro: 'Intro.',
			texto: ['# Gigante', 'Intro.', ...secciones.map((s) => s.texto)].join('\n\n'),
			secciones,
		};
		const path = join(dir, 'index.json');
		writeFileSync(path, JSON.stringify({ ...real, articulos: [...real.articulos, gigante] }));

		let base = '';
		({ child, base } = await startServer({ MCP_INDEX_PATH: path }));
		client = await connect(base);
		await client.listTools();

		const result = await client.callTool({
			name: 'fetch',
			arguments: { id: 'manual:gigante' },
		});
		const { raw, data } = textJson(result);
		expect(raw.length).toBeLessThanOrEqual(MAX_RESPONSE_CHARS);
		const text = String(data.text);
		const included = text.match(/^## Parte \d+$/gm) ?? [];
		expect(included.length).toBeGreaterThan(0);
		expect(included.length).toBeLessThan(25);
		expect(text).toMatch(/Artículo recortado/);
		expect(text).toContain(`manual:gigante#parte-${included.length + 1}`);
		expect(text).toContain('manual:gigante#parte-25');

		const rest = await client.callTool({
			name: 'fetch',
			arguments: { id: `manual:gigante#parte-${included.length + 1}` },
		});
		expect(String(textJson(rest).data.text)).toMatch(
			new RegExp(`^## Parte ${included.length + 1}`),
		);
	}, 20_000);

	it('sin índice o con otra schema_version el server no arranca', async () => {
		const missing = await runServerExpectingExit({
			MCP_INDEX_PATH: join(dir, 'no-existe.json'),
		});
		expect(missing.code).toBe(1);
		expect(missing.stderr).toMatch(/No se pudo leer el índice del MCP/);

		const path = join(dir, 'v2.json');
		writeFileSync(path, JSON.stringify({ schema_version: 2, articulos: [] }));
		const wrong = await runServerExpectingExit({ MCP_INDEX_PATH: path });
		expect(wrong.code).toBe(1);
		expect(wrong.stderr).toMatch(/schema_version 2 .*espera 1/);
	}, 20_000);
});

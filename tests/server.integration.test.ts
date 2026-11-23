/**
 * Levanta `node server.js` contra el `build/` real y verifica la tabla de comportamiento HTTP
 * que antes daba nginx. Necesita `pnpm build` antes; sin build se saltea.
 */
import { type ChildProcess } from 'node:child_process';
import { get as httpGet, type IncomingHttpHeaders } from 'node:http';
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { brotliDecompressSync, gunzipSync } from 'node:zlib';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { EXPECTED_SECURITY_HEADERS, MANUAL_REDIRECT_CASES } from './fixtures/http-expectations';
import { BUILD, ROOT, hasBuild, startServer, stop } from './fixtures/start-server';

if (!hasBuild) {
	console.warn('[server.integration] No hay build/: se saltea. Corré `pnpm build` primero.');
}

function expectSecurityHeaders(res: Response) {
	for (const [name, value] of Object.entries(EXPECTED_SECURITY_HEADERS)) {
		expect(res.headers.get(name), `${name} en ${res.url}`).toBe(value);
	}
	expect(res.headers.get('server')).toBeNull();
}

/** GET sin descompresión automática (fetch descomprime solo). */
function rawGet(
	url: string,
	encoding: string,
): Promise<{ status: number; headers: IncomingHttpHeaders; body: Buffer }> {
	return new Promise((resolve, reject) => {
		httpGet(url, { headers: { 'Accept-Encoding': encoding } }, (res) => {
			const chunks: Buffer[] = [];
			res.on('data', (chunk: Buffer) => chunks.push(chunk));
			res.on('end', () =>
				resolve({
					status: res.statusCode ?? 0,
					headers: res.headers,
					body: Buffer.concat(chunks),
				}),
			);
		}).on('error', reject);
	});
}

/** Todos los .md del manual (el slug sale del nombre sin prefijos numéricos). */
function manualFiles(dir = join(ROOT, 'src/routes/user-guide/Manual-Usuario')): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
		entry.isDirectory()
			? manualFiles(join(dir, entry.name))
			: entry.name.endsWith('.md')
				? [join(dir, entry.name)]
				: [],
	);
}

describe.skipIf(!hasBuild)('server.js contra build/', () => {
	let child: ChildProcess | undefined;
	let base = '';

	const get = (path: string, init: RequestInit = {}) =>
		fetch(`${base}${path}`, { redirect: 'manual', ...init });

	beforeAll(async () => {
		({ child, base } = await startServer());
	}, 20_000);

	afterAll(() => stop(child));

	it('hay un HTML prerendereado por cada .md del manual', () => {
		const pages = readdirSync(join(BUILD, 'prerendered/user-guide')).filter((f) =>
			f.endsWith('.html'),
		);
		const files = manualFiles();
		expect(files.length).toBeGreaterThan(0);
		expect(pages.length, files.map((f) => relative(ROOT, f)).join('\n')).toBe(files.length);
	});

	it('/ → 301 /user-guide', async () => {
		const res = await get('/');
		expect(res.status).toBe(301);
		expect(res.headers.get('location')).toBe('/user-guide');
		expectSecurityHeaders(res);
	});

	it('/index.html → 301 /user-guide', async () => {
		const res = await get('/index.html');
		expect(res.status).toBe(301);
		expect(res.headers.get('location')).toBe('/user-guide');
	});

	it('/user-guide → 200', async () => {
		const res = await get('/user-guide');
		expect(res.status).toBe(200);
		expect(res.headers.get('content-type')).toMatch(/^text\/html;\s*charset=utf-8$/);
		expectSecurityHeaders(res);
	});

	it('/user-guide/ → 301 /user-guide', async () => {
		const res = await get('/user-guide/');
		expect(res.status).toBe(301);
		expect(res.headers.get('location')).toBe('/user-guide');
		expectSecurityHeaders(res);
	});

	it('/user-guide/salon-de-ventas → 200 con el HTML prerendereado', async () => {
		const res = await get('/user-guide/salon-de-ventas');
		expect(res.status).toBe(200);
		expectSecurityHeaders(res);
		expect(res.headers.get('x-robots-tag')).toBeNull();
		expect(res.headers.get('x-sveltekit-page')).toBeNull(); // no pasó por el SSR
		expect(res.headers.get('etag')).toBeTruthy();
		const html = await res.text();
		expect(html).toContain('<link rel="canonical"');
		expect(html).toContain('salon-de-ventas');
	});

	it('/user-guide/salon-de-ventas.html → 301 sin .html (con la query)', async () => {
		const res = await get('/user-guide/salon-de-ventas.html?highlight=mesa');
		expect(res.status).toBe(301);
		expect(res.headers.get('location')).toBe('/user-guide/salon-de-ventas?highlight=mesa');
	});

	it.each(MANUAL_REDIRECT_CASES)('URL vieja %s → 301 %s', async (from, to) => {
		for (const path of [from, `${from}/`]) {
			const res = await get(path);
			expect(res.status, path).toBe(301);
			expect(res.headers.get('location'), path).toBe(to);
			expectSecurityHeaders(res);
		}
		expect((await get(to)).status, `destino ${to}`).toBe(200);
	});

	it('/user-guide/no-existe → 404 real con la página de error y noindex', async () => {
		const res = await get('/user-guide/no-existe');
		expect(res.status).toBe(404);
		expectSecurityHeaders(res);
		expect(res.headers.get('content-type')).toMatch(/^text\/html;\s*charset=utf-8$/);
		expect(res.headers.get('cache-control')).toBeNull();
		const html = await res.text();
		expect(html).toContain('No encontramos esta página');
		expect(html).toMatch(/<meta name="robots" content="noindex, follow"\s*\/?>/);
	});

	it('/404.html → 404 (no se sirve como página)', async () => {
		const res = await get('/404.html');
		expect(res.status).toBe(404);
	});

	it('/health → 200 healthy', async () => {
		const res = await get('/health');
		expect(res.status).toBe(200);
		expect(res.headers.get('content-type')).toBe('text/plain; charset=utf-8');
		expect(await res.text()).toBe('healthy\n');
		expectSecurityHeaders(res);
	});

	it.each(['/.env', '/.git/config', '/.well-known/oauth-protected-resource'])(
		'%s → 404',
		async (path) => {
			const res = await get(path);
			expect(res.status).toBe(404);
			expectSecurityHeaders(res);
		},
	);

	it('/.well-known/openai-apps-challenge → 404 sin OPENAI_APPS_CHALLENGE', async () => {
		expect((await get('/.well-known/openai-apps-challenge')).status).toBe(404);
	});

	it.each(['/llms.txt', '/search-index.json'])(
		'%s → 200 con X-Robots-Tag noindex y cache 1 h',
		async (path) => {
			const res = await get(path);
			expect(res.status).toBe(200);
			expect(res.headers.get('x-robots-tag')).toBe('noindex');
			expect(res.headers.get('cache-control')).toBe('max-age=3600');
			expect(res.headers.get('expires')).toBeTruthy();
			expectSecurityHeaders(res);
		},
	);

	it('/llms.txt va como text/plain con charset utf-8', async () => {
		const res = await get('/llms.txt');
		expect(res.headers.get('content-type')).toBe('text/plain; charset=utf-8');
	});

	it('/llms.txt anuncia el MCP en una línea de comentario', async () => {
		const lines = (await (await get('/llms.txt')).text()).split('\n');
		expect(lines).toContain('# MCP: https://doc.paxapos.com/mcp');
		for (const line of lines.filter((l) => l && !l.startsWith('#'))) {
			expect(line).toMatch(/^https:\/\/doc\.paxapos\.com\/llms\/.+\.txt$/);
		}
	});

	it('/urls.txt y los __data.json → noindex', async () => {
		for (const path of ['/urls.txt', '/user-guide/salon-de-ventas/__data.json']) {
			const res = await get(path);
			expect(res.status, path).toBe(200);
			expect(res.headers.get('x-robots-tag'), path).toBe('noindex');
		}
	});

	it('un asset de _app/immutable → 200 con cache inmutable de 1 año', async () => {
		const dir = join(BUILD, 'client/_app/immutable/entry');
		const file = readdirSync(dir).find((f) => f.endsWith('.js'));
		expect(file).toBeTruthy();
		const res = await get(`/_app/immutable/entry/${file}`);
		expect(res.status).toBe(200);
		expect(res.headers.get('cache-control')).toBe('public, max-age=31536000, immutable');
		expect(res.headers.get('content-type')).toBe('text/javascript; charset=utf-8');
		expectSecurityHeaders(res);
	});

	it('un asset que no existe → 404 sin cache', async () => {
		const res = await get('/images/no-existe.png');
		expect(res.status).toBe(404);
		expect(res.headers.get('cache-control')).toBeNull();
	});

	it('GET /mcp → 405 con Allow: POST (el MCP se prueba en mcp.integration.test.ts)', async () => {
		const res = await get('/mcp');
		expect(res.status).toBe(405);
		expect(res.headers.get('allow')).toBe('POST');
		expectSecurityHeaders(res);
	});

	it('gzip y brotli precomprimidos cuando se piden', async () => {
		const gz = await rawGet(`${base}/user-guide/salon-de-ventas`, 'gzip');
		expect(gz.status).toBe(200);
		expect(gz.headers['content-encoding']).toBe('gzip');
		expect(gz.headers['vary']).toBe('Accept-Encoding');
		expect(gz.headers['content-security-policy']).toBe(
			EXPECTED_SECURITY_HEADERS['Content-Security-Policy'],
		);
		expect(gunzipSync(gz.body).toString('utf-8')).toContain('salon-de-ventas');

		const br = await rawGet(`${base}/llms.txt`, 'br');
		expect(br.headers['content-encoding']).toBe('br');
		expect(brotliDecompressSync(br.body).toString('utf-8').length).toBeGreaterThan(0);

		const plain = await rawGet(`${base}/user-guide/salon-de-ventas`, 'identity');
		expect(plain.headers['content-encoding']).toBeUndefined();
		expect(plain.body.toString('utf-8')).toContain('salon-de-ventas');
	});
});

describe.skipIf(!hasBuild)('server.js con OPENAI_APPS_CHALLENGE', () => {
	let child: ChildProcess | undefined;
	let base = '';

	beforeAll(async () => {
		({ child, base } = await startServer({ OPENAI_APPS_CHALLENGE: 'challenge-de-prueba' }));
	}, 20_000);

	afterAll(() => stop(child));

	it('/.well-known/openai-apps-challenge → 200 con el valor', async () => {
		const res = await fetch(`${base}/.well-known/openai-apps-challenge`, {
			redirect: 'manual',
		});
		expect(res.status).toBe(200);
		expect(res.headers.get('content-type')).toBe('text/plain; charset=utf-8');
		expect(await res.text()).toBe('challenge-de-prueba');
		expectSecurityHeaders(res);
	});

	it('el resto de /.well-known sigue en 404', async () => {
		const res = await fetch(`${base}/.well-known/oauth-protected-resource`, {
			redirect: 'manual',
		});
		expect(res.status).toBe(404);
	});
});

import { describe, it, expect } from 'vitest';
import {
	MANUAL_REDIRECTS,
	cacheHeaders,
	cacheKind,
	encodePath,
	finalHeaders,
	hasDotSegment,
	manualRedirect,
	parseRequestUrl,
	resolveRequest,
	robotsTag,
	withCharset,
} from '../server/http-rules.mjs';
import { EXPECTED_SECURITY_HEADERS, MANUAL_REDIRECT_CASES } from './fixtures/http-expectations';

const env = {};

describe('manualRedirect', () => {
	it('cubre cada entrada del mapa, con y sin barra final', () => {
		expect(MANUAL_REDIRECT_CASES.length).toBeGreaterThanOrEqual(MANUAL_REDIRECTS.length);
		for (const [from, to] of MANUAL_REDIRECT_CASES) {
			expect(manualRedirect(from)).toBe(to);
			expect(manualRedirect(`${from}/`)).toBe(to);
		}
	});

	it('no toca los slugs actuales ni variantes que el regex de nginx no aceptaba', () => {
		expect(manualRedirect('/user-guide/faq-cajero-ingreso-egreso-cajon')).toBeNull();
		expect(manualRedirect('/user-guide/ia-conectar-claude')).toBeNull();
		expect(manualRedirect('/user-guide/permisos-por-rol')).toBeNull();
		expect(manualRedirect('/user-guide/roles-extra')).toBeNull();
		expect(manualRedirect('/user-guide/Roles')).toBeNull(); // nginx: `~` distingue mayúsculas
		expect(manualRedirect('/user-guide/06-FAQ-cajero')).toBeNull();
		expect(manualRedirect('/roles')).toBeNull();
	});
});

describe('parseRequestUrl', () => {
	it('resuelve `..`, junta barras y decodifica como `$uri` de nginx', () => {
		expect(parseRequestUrl('/a/../user-guide?x=1')).toEqual({
			raw: '/user-guide',
			decoded: '/user-guide',
			search: '?x=1',
		});
		expect(parseRequestUrl('//user-guide//roles').decoded).toBe('/user-guide/roles');
		expect(parseRequestUrl('/%2Eenv').decoded).toBe('/.env');
		expect(parseRequestUrl('/caf%C3%A9').decoded).toBe('/café');
	});

	it('no trata `//host` como otro origen', () => {
		expect(parseRequestUrl('//evil.example/x').decoded).toBe('/evil.example/x');
	});

	it('marca la codificación inválida', () => {
		expect(parseRequestUrl('/%E0%A4%A').decoded).toBeNull();
	});
});

describe('encodePath', () => {
	it('codifica lo que no puede ir crudo en Location', () => {
		expect(encodePath('/user-guide/café')).toBe('/user-guide/caf%C3%A9');
		expect(encodePath('/a?b#c')).toBe('/a%3Fb%23c');
	});
});

describe('hasDotSegment', () => {
	it('detecta cualquier segmento que empieza con punto', () => {
		expect(hasDotSegment('/.env')).toBe(true);
		expect(hasDotSegment('/.git/config')).toBe(true);
		expect(hasDotSegment('/images/.DS_Store')).toBe(true);
		expect(hasDotSegment('/.well-known/oauth-protected-resource')).toBe(true);
		expect(hasDotSegment('/user-guide/salon-de-ventas.html')).toBe(false);
		expect(hasDotSegment('/POS-Printer-Driver-Setup-V7.17.zip')).toBe(false);
	});
});

describe('robotsTag', () => {
	it('noindex para /llms/*, /llms.txt, *.json y /urls.txt', () => {
		expect(robotsTag('/llms.txt')).toBe('noindex');
		expect(robotsTag('/llms/salon-de-ventas.txt')).toBe('noindex');
		expect(robotsTag('/llms/')).toBe('noindex');
		expect(robotsTag('/search-index.json')).toBe('noindex');
		expect(robotsTag('/user-guide/salon-de-ventas/__data.json')).toBe('noindex');
		expect(robotsTag('/urls.txt')).toBe('noindex');
	});

	it('las páginas y el resto no llevan header', () => {
		expect(robotsTag('/user-guide')).toBeNull();
		expect(robotsTag('/user-guide/salon-de-ventas')).toBeNull();
		expect(robotsTag('/robots.txt')).toBeNull();
		expect(robotsTag('/sitemap.xml')).toBeNull();
		expect(robotsTag('/llmsfoo')).toBeNull();
		expect(robotsTag('/llms.txt.bak')).toBeNull();
		expect(robotsTag('/data.JSON')).toBeNull(); // el map de nginx distinguía mayúsculas
	});
});

describe('cacheKind', () => {
	it('1 h para los índices generados', () => {
		for (const path of [
			'/search-index.json',
			'/sitemap.xml',
			'/robots.txt',
			'/llms.txt',
			'/llms/salon-de-ventas.txt',
			'/LLMS.TXT',
		]) {
			expect(cacheKind(path)).toBe('generated');
		}
	});

	it('1 año para assets por extensión', () => {
		for (const ext of [
			'js',
			'css',
			'png',
			'jpg',
			'jpeg',
			'gif',
			'ico',
			'svg',
			'woff',
			'woff2',
			'ttf',
			'eot',
			'PNG',
		]) {
			expect(cacheKind(`/images/x.${ext}`)).toBe('asset');
		}
		expect(cacheKind('/_app/immutable/entry/app.abc.js')).toBe('asset');
	});

	it('el resto queda como lo sirve el handler', () => {
		expect(cacheKind('/user-guide/salon-de-ventas')).toBeNull();
		expect(cacheKind('/content-index.json')).toBeNull();
		expect(cacheKind('/urls.txt')).toBeNull();
		expect(cacheKind('/_app/version.json')).toBeNull();
		expect(cacheKind('/POS-Printer-Driver-Setup-V7.17.zip')).toBeNull();
	});
});

describe('cacheHeaders', () => {
	const now = Date.UTC(2026, 0, 1);

	it('arma Cache-Control y Expires', () => {
		expect(cacheHeaders('generated', 200, now)).toEqual({
			'Cache-Control': 'max-age=3600',
			Expires: 'Thu, 01 Jan 2026 01:00:00 GMT',
		});
		expect(cacheHeaders('asset', 304, now)).toEqual({
			'Cache-Control': 'public, max-age=31536000, immutable',
			Expires: 'Fri, 01 Jan 2027 00:00:00 GMT',
		});
	});

	it('no cachea errores ni rutas sin tipo', () => {
		expect(cacheHeaders('asset', 404, now)).toEqual({});
		expect(cacheHeaders('generated', 500, now)).toEqual({});
		expect(cacheHeaders(null, 200, now)).toEqual({});
	});
});

describe('withCharset', () => {
	it('agrega charset a los tipos de texto', () => {
		expect(withCharset('text/plain')).toBe('text/plain; charset=utf-8');
		expect(withCharset('text/html')).toBe('text/html; charset=utf-8');
		expect(withCharset('text/javascript')).toBe('text/javascript; charset=utf-8');
		expect(withCharset('application/xml')).toBe('application/xml; charset=utf-8');
	});

	it('respeta el charset existente y los tipos binarios o JSON', () => {
		expect(withCharset('text/html;charset=utf-8')).toBe('text/html;charset=utf-8');
		expect(withCharset('image/png')).toBe('image/png');
		expect(withCharset('application/json')).toBe('application/json');
		expect(withCharset(undefined)).toBeUndefined();
	});
});

describe('finalHeaders', () => {
	it('junta cache y charset según el status final', () => {
		const now = Date.UTC(2026, 0, 1);
		expect(
			finalHeaders({ cache: 'generated', status: 200, contentType: 'text/plain', now }),
		).toEqual({
			'Cache-Control': 'max-age=3600',
			Expires: 'Thu, 01 Jan 2026 01:00:00 GMT',
			'Content-Type': 'text/plain; charset=utf-8',
		});
		expect(
			finalHeaders({ cache: 'asset', status: 404, contentType: 'text/html', now }),
		).toEqual({
			'Content-Type': 'text/html; charset=utf-8',
		});
		expect(finalHeaders({ cache: null, status: 200, contentType: 'image/png', now })).toEqual(
			{},
		);
	});
});

describe('resolveRequest', () => {
	it('/ e /index.html → 301 /user-guide sin query', () => {
		for (const url of ['/', '/index.html', '/?utm=x', '/index.html?utm=x']) {
			expect(resolveRequest(url, env)).toMatchObject({
				type: 'redirect',
				status: 301,
				location: '/user-guide',
			});
		}
	});

	it('URLs viejas → 301 al artículo actual, sin query', () => {
		expect(resolveRequest('/user-guide/roles/?a=1', env)).toMatchObject({
			type: 'redirect',
			location: '/user-guide/permisos-por-rol',
		});
	});

	it('/x/ y /x.html → 301 /x conservando la query', () => {
		expect(resolveRequest('/user-guide/', env)).toMatchObject({
			type: 'redirect',
			status: 301,
			location: '/user-guide',
		});
		expect(
			resolveRequest('/user-guide/salon-de-ventas.html?highlight=caja', env),
		).toMatchObject({
			type: 'redirect',
			location: '/user-guide/salon-de-ventas?highlight=caja',
		});
		// Un paso por vez, como los `rewrite … permanent` de nginx.
		expect(resolveRequest('/user-guide.html/', env)).toMatchObject({
			location: '/user-guide.html',
		});
	});

	it('los índices generados y los assets no pasan por los redirects de barra ni .html', () => {
		expect(resolveRequest('/llms/', env)).toMatchObject({ type: 'next', cache: 'generated' });
		expect(resolveRequest('/images/logo.png', env)).toMatchObject({
			type: 'next',
			cache: 'asset',
		});
	});

	it('/404.html no se sirve ni redirige: lo resuelve SvelteKit (404)', () => {
		expect(resolveRequest('/404.html', env)).toMatchObject({ type: 'next', cache: null });
	});

	it('/health (prefijo, como en nginx) → 200 healthy', () => {
		for (const url of ['/health', '/health/', '/healthz']) {
			expect(resolveRequest(url, env)).toMatchObject({
				type: 'respond',
				status: 200,
				contentType: 'text/plain; charset=utf-8',
				body: 'healthy\n',
			});
		}
		expect(resolveRequest('/health.js', env)).toMatchObject({ type: 'next', cache: 'asset' });
	});

	it('dotfiles y /.well-known/* → 404', () => {
		for (const url of [
			'/.env',
			'/.git/config',
			'/%2egit/config',
			'/.well-known/oauth-protected-resource',
			'/.well-known/openai-apps-challenge',
			'/llms/.hidden.txt',
		]) {
			expect(resolveRequest(url, env)).toMatchObject({ type: 'respond', status: 404 });
		}
	});

	it('challenge de OpenAI Apps solo con OPENAI_APPS_CHALLENGE', () => {
		const withChallenge = { OPENAI_APPS_CHALLENGE: 'token-123' };
		expect(resolveRequest('/.well-known/openai-apps-challenge', withChallenge)).toMatchObject({
			type: 'respond',
			status: 200,
			contentType: 'text/plain; charset=utf-8',
			body: 'token-123',
		});
		expect(
			resolveRequest('/.well-known/openai-apps-challenge', { OPENAI_APPS_CHALLENGE: '' }),
		).toMatchObject({
			status: 404,
		});
		expect(resolveRequest('/.well-known/otra-cosa', withChallenge)).toMatchObject({
			status: 404,
		});
	});

	it('headers de seguridad en toda respuesta y X-Robots-Tag donde corresponde', () => {
		for (const url of ['/', '/health', '/.env', '/user-guide', '/llms.txt', '/%E0%A4%A']) {
			expect(resolveRequest(url, env).headers).toMatchObject(EXPECTED_SECURITY_HEADERS);
		}
		expect(resolveRequest('/llms.txt', env).headers['X-Robots-Tag']).toBe('noindex');
		expect(resolveRequest('/user-guide', env).headers['X-Robots-Tag']).toBeUndefined();
	});

	it('delega el resto con la URL normalizada', () => {
		expect(resolveRequest('/user-guide/salon-de-ventas', env)).toMatchObject({
			type: 'next',
			url: '/user-guide/salon-de-ventas',
			cache: null,
		});
		expect(resolveRequest('//user-guide/./salon-de-ventas?x=1', env)).toMatchObject({
			type: 'next',
			url: '/user-guide/salon-de-ventas?x=1',
		});
		expect(resolveRequest('/mcp', env)).toMatchObject({ type: 'next' });
	});

	it('codificación inválida → 400', () => {
		expect(resolveRequest('/%E0%A4%A', env)).toMatchObject({ type: 'respond', status: 400 });
	});
});

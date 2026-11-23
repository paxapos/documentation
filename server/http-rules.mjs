/**
 * Reglas HTTP del manual (doc.paxapos.com) como funciones puras.
 *
 * Las aplica `server.js` antes de delegar en el handler de SvelteKit (adapter-node). Van acá
 * y no en `hooks.server.ts` porque adapter-node sirve los archivos estáticos y las páginas
 * prerendereadas antes de llegar a los hooks: un header o un redirect puesto en un hook no
 * alcanzaría a esas respuestas.
 *
 * Portan, regla por regla, lo que hacía `nginx-runtime.conf` hasta el cambio a adapter-node
 * (paxapos/documentation#243). Las diferencias deliberadas están marcadas con "Cambio".
 */

/**
 * Headers que van en todas las respuestas: páginas, assets, redirects, 404 y /health.
 * CSP: `script-src` necesita 'unsafe-inline' por el script de tema de app.html y el arranque
 * de SvelteKit; `style-src` también, porque SvelteKit genera estilos inline.
 * @type {Readonly<Record<string, string>>}
 */
export const SECURITY_HEADERS = Object.freeze({
	'X-Frame-Options': 'SAMEORIGIN',
	'X-Content-Type-Options': 'nosniff',
	'X-XSS-Protection': '0',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
	'Content-Security-Policy':
		"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'",
});

/**
 * 301 de URLs viejas del manual → artículo actual. Aceptan la URL con o sin barra final.
 * **Al renombrar un `.md` (cambia su URL) agregá acá el 301 desde la URL vieja.**
 * Ver paxapos/documentation#241.
 * @type {ReadonlyArray<readonly [RegExp, string]>}
 */
export const MANUAL_REDIRECTS = Object.freeze([
	// Slugs de módulos que ya no existen
	[/^\/user-guide\/arca-y-facturacion\/?$/, '/user-guide/punto-de-venta'],
	[/^\/user-guide\/compras-y-stock\/?$/, '/user-guide/stock-mercaderias'],
	[/^\/user-guide\/reportes\/?$/, '/user-guide/tablero-general'],
	[/^\/user-guide\/dashboard-home\/?$/, '/user-guide/tablero-general'],
	[/^\/user-guide\/roles\/?$/, '/user-guide/permisos-por-rol'],
	[/^\/user-guide\/configuracion-impresion\/?$/, '/user-guide/perfiles-de-impresion'],
	[/^\/user-guide\/configuracion-de-impresoras\/?$/, '/user-guide/impresoras'],
	[/^\/user-guide\/config-del-comercio\/?$/, '/user-guide/configuracion-general'],
	[/^\/user-guide\/crear-usuarios\/?$/, '/user-guide/usuarios-del-sistema'],
	[/^\/user-guide\/agregar-personal\/?$/, '/user-guide/empleados'],

	// FAQ e IA: antes el slug conservaba el sub-número (06-faq-…, 01-ia-…) y Google además
	// rastreó la forma con el prefijo de carpeta (151-06-faq-…). `$1` = el slug actual.
	[/^\/user-guide\/(?:151-)?\d+-(faq-[a-z0-9-]+?)\/?$/, '/user-guide/$1'],
	[/^\/user-guide\/(?:156-)?\d+-(ia-[a-z0-9-]+?)\/?$/, '/user-guide/$1'],
]);

/** Índices generados en build: cambian con cada deploy (cache 1 h). Sin distinguir mayúsculas. */
const GENERATED_INDEX_RE = /^\/(search-index\.json|sitemap\.xml|robots\.txt|llms\.txt|llms\/.*)$/i;

/** Assets estáticos (cache 1 año, inmutable). Sin distinguir mayúsculas. */
const ASSET_RE = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i;

/** Ruta pública del challenge de verificación de dominio de OpenAI Apps. */
export const OPENAI_APPS_CHALLENGE_PATH = '/.well-known/openai-apps-challenge';

/** Segundos de cache por tipo de recurso. */
export const CACHE_MAX_AGE = Object.freeze({ generated: 3600, asset: 31536000 });

/**
 * Status a los que se les agrega cache (los mismos que `expires` y `add_header` sin `always`
 * de nginx). Un 404 de un asset no se cachea.
 */
const CACHEABLE_STATUS = new Set([200, 201, 204, 206, 301, 302, 303, 304, 307, 308]);

/**
 * Tipos a los que se les agrega `charset=utf-8` si no lo traen (los `charset_types` de nginx;
 * `text/javascript` y `application/xml` son como los nombra Node para .js y .xml).
 */
const CHARSET_TYPES = new Set([
	'text/html',
	'text/plain',
	'text/xml',
	'application/xml',
	'text/javascript',
	'application/javascript',
	'application/rss+xml',
]);

/**
 * @typedef {'generated' | 'asset'} CacheKind
 *
 * @typedef {{ type: 'redirect', status: 301, location: string }} RedirectAction
 * @typedef {{ type: 'respond', status: number, contentType: string, body: string }} RespondAction
 * @typedef {{ type: 'next', url: string, cache: CacheKind | null }} NextAction
 *   `url` es la URL normalizada (sin `..` ni barras dobles) que recibe el handler de SvelteKit.
 * @typedef {(RedirectAction | RespondAction | NextAction) & { headers: Record<string, string> }} RequestAction
 */

/**
 * Normaliza la ruta como nginx (`$uri`): resuelve `.`/`..`, junta barras repetidas y
 * decodifica `%XX`.
 * @param {string} url `req.url` tal como llega (ruta + query).
 * @returns {{ raw: string, decoded: string | null, search: string }} `decoded` es null si la
 *   codificación es inválida.
 */
export function parseRequestUrl(url) {
	// Se concatena el origen para que `//host/x` no se interprete como URL de otro host.
	const parsed = new URL(`http://localhost${url.startsWith('/') ? '' : '/'}${url}`);
	const raw = parsed.pathname.replace(/\/{2,}/g, '/');
	/** @type {string | null} */
	let decoded;
	try {
		decoded = decodeURIComponent(raw);
	} catch {
		decoded = null;
	}
	return { raw, decoded, search: parsed.search };
}

/**
 * Codifica una ruta decodificada para usarla en `Location`.
 * @param {string} path
 * @returns {string}
 */
export function encodePath(path) {
	return encodeURI(path).replace(/[?#]/g, (c) => encodeURIComponent(c));
}

/**
 * ¿Algún segmento de la ruta empieza con punto? (`/.env`, `/.git/config`, `/.well-known/x`).
 * @param {string} pathname ruta decodificada
 * @returns {boolean}
 */
export function hasDotSegment(pathname) {
	return pathname.includes('/.');
}

/**
 * Destino del 301 si la ruta es una URL vieja del manual.
 * @param {string} pathname ruta decodificada
 * @returns {string | null}
 */
export function manualRedirect(pathname) {
	for (const [pattern, target] of MANUAL_REDIRECTS) {
		const match = pattern.exec(pathname);
		if (match) return target.replace(/\$(\d)/g, (_, n) => match[Number(n)] ?? '');
	}
	return null;
}

/**
 * `X-Robots-Tag` para archivos que no son páginas: que Google no los indexe. Los .txt de
 * /llms duplican el texto de cada artículo y competían con él; los crawlers de IA los
 * siguen pudiendo leer (noindex no bloquea el acceso).
 * @param {string} pathname ruta decodificada
 * @returns {string | null}
 */
export function robotsTag(pathname) {
	if (/^\/llms(\/|\.txt$)/.test(pathname)) return 'noindex';
	if (/\.json$/.test(pathname)) return 'noindex';
	if (pathname === '/urls.txt') return 'noindex';
	return null;
}

/**
 * Qué cache lleva la ruta (si la respuesta sale bien), o null para dejar la del handler
 * (adapter-node ya pone 1 año inmutable a `/_app/immutable/*`).
 * @param {string} pathname ruta decodificada
 * @returns {CacheKind | null}
 */
export function cacheKind(pathname) {
	if (GENERATED_INDEX_RE.test(pathname)) return 'generated';
	if (ASSET_RE.test(pathname)) return 'asset';
	return null;
}

/**
 * Headers de cache según el tipo y el status final de la respuesta.
 * @param {CacheKind | null} kind
 * @param {number} status
 * @param {number} now `Date.now()`
 * @returns {Record<string, string>}
 */
export function cacheHeaders(kind, status, now) {
	if (!kind || !CACHEABLE_STATUS.has(status)) return {};
	const maxAge = CACHE_MAX_AGE[kind];
	return {
		'Cache-Control':
			kind === 'asset' ? `public, max-age=${maxAge}, immutable` : `max-age=${maxAge}`,
		Expires: new Date(now + maxAge * 1000).toUTCString(),
	};
}

/**
 * Agrega `charset=utf-8` a los tipos de texto que no lo traen.
 * @param {string | undefined} contentType
 * @returns {string | undefined}
 */
export function withCharset(contentType) {
	if (!contentType || /;\s*charset=/i.test(contentType)) return contentType;
	const type = contentType.split(';')[0].trim().toLowerCase();
	return CHARSET_TYPES.has(type) ? `${contentType}; charset=utf-8` : contentType;
}

/**
 * Headers que se fijan recién cuando se conoce el status final (justo antes de enviarlos).
 * @param {{ cache: CacheKind | null, status: number, contentType: string | undefined, now: number }} params
 * @returns {Record<string, string>}
 */
export function finalHeaders({ cache, status, contentType, now }) {
	/** @type {Record<string, string>} */
	const headers = cacheHeaders(cache, status, now);
	const type = withCharset(contentType);
	if (type && type !== contentType) headers['Content-Type'] = type;
	return headers;
}

/**
 * Decide qué hacer con un pedido, en el mismo orden que nginx:
 * challenge/dotfiles → URLs viejas → `/` e `/index.html` → /health → `/x/` y `/x.html` →
 * delegar en SvelteKit.
 *
 * - Los redirects son relativos (como `absolute_redirect off`). Los 301 del mapa y de la raíz
 *   descartan la query; los de `/x/` y `/x.html` la conservan (como `return` vs. `rewrite`).
 * - `/health` es un prefijo, como el `location /health` de nginx: `/healthz` también responde.
 *   Los índices generados y los assets no pasan por `/health` ni por los redirects de barra
 *   final y `.html` (en nginx eran locations regex, que le ganan al prefijo).
 * - `/404.html` no se sirve como página (era `internal` en nginx): lo resuelve SvelteKit con 404.
 * - Cambio: un segmento que empieza con punto da 404 (nginx daba 403), `/.well-known/*`
 *   incluido. Excepción: si existe `OPENAI_APPS_CHALLENGE`, el challenge de OpenAI Apps
 *   responde ese valor.
 *
 * @param {string} url `req.url` (ruta + query)
 * @param {Record<string, string | undefined>} env variables de entorno
 * @returns {RequestAction}
 */
export function resolveRequest(url, env) {
	const { raw, decoded, search } = parseRequestUrl(url);
	if (decoded === null) {
		return { type: 'respond', ...text(400, 'Bad Request\n'), headers: { ...SECURITY_HEADERS } };
	}

	/** @type {Record<string, string>} */
	const headers = { ...SECURITY_HEADERS };
	const robots = robotsTag(decoded);
	if (robots) headers['X-Robots-Tag'] = robots;

	const challenge = env.OPENAI_APPS_CHALLENGE;
	if (decoded === OPENAI_APPS_CHALLENGE_PATH && challenge) {
		return { type: 'respond', ...text(200, challenge), headers };
	}
	if (hasDotSegment(decoded)) {
		return { type: 'respond', ...text(404, 'Not Found\n'), headers };
	}

	const old = manualRedirect(decoded);
	if (old) return { type: 'redirect', status: 301, location: encodePath(old), headers };

	if (decoded === '/' || decoded === '/index.html') {
		return { type: 'redirect', status: 301, location: '/user-guide', headers };
	}

	const cache = cacheKind(decoded);
	if (!cache && decoded !== '/404.html') {
		if (decoded.startsWith('/health')) {
			return { type: 'respond', ...text(200, 'healthy\n'), headers };
		}
		const canonical = /^\/(.+)\/$/.test(decoded)
			? decoded.slice(0, -1)
			: /^\/(.+)\.html$/.test(decoded)
				? decoded.slice(0, -'.html'.length)
				: null;
		if (canonical) {
			return {
				type: 'redirect',
				status: 301,
				location: encodePath(canonical) + search,
				headers,
			};
		}
	}

	return { type: 'next', url: raw + search, cache, headers };
}

/**
 * @param {number} status
 * @param {string} body
 * @returns {{ status: number, contentType: string, body: string }}
 */
function text(status, body) {
	return { status, contentType: 'text/plain; charset=utf-8', body };
}

/**
 * Búsqueda y lectura del manual para las tools `search` y `fetch` del MCP, como funciones puras
 * sobre el índice de `server/mcp-index.mjs` (en memoria, sin dependencias).
 *
 * La búsqueda trabaja por sección: cada artículo aporta su intro (id `manual:<slug>`) y cada
 * sección `##` (id `manual:<slug>#<ancla>`). Sin acentos ni mayúsculas, multi-término, con más
 * peso al título del artículo y al heading de la sección que al cuerpo.
 */
import { manualRedirect } from './http-rules.mjs';

/** @typedef {import('./mcp-index.mjs').McpIndex} McpIndex */
/** @typedef {import('./mcp-index.mjs').McpArticulo} McpArticulo */

/** Máximo de resultados de `search`. */
export const MAX_RESULTS = 10;

/** Máximo de resultados de un mismo artículo (para que no tape a los demás). */
const MAX_PER_ARTICLE = 3;

/** Tope de caracteres del JSON que va en `content[0].text` (H6: `structuredContent` lo repite). */
export const MAX_RESPONSE_CHARS = 60_000;

/** Largo aproximado del fragmento (`text`) de cada resultado. */
const SNIPPET_CHARS = 240;

const WEIGHT = { articleTitle: 8, heading: 5 };

/** Palabras que no aportan a la búsqueda (ya normalizadas). */
const STOPWORDS = new Set(
	(
		'a al como con de del el en es la las lo los mi mis o para por que se si su sus un una unos ' +
		'unas y e ni le les me te tu tus yo mas muy hay cual cuales donde cuando esta este esto'
	).split(' '),
);

/**
 * Minúsculas y sin diacríticos (NFD).
 * @param {string} text
 * @returns {string}
 */
export function normalize(text) {
	return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/**
 * @param {string} text
 * @returns {string[]}
 */
function words(text) {
	return normalize(text)
		.split(/[^a-z0-9]+/)
		.filter(Boolean);
}

/**
 * Términos de la consulta: sin stopwords (salvo que no quede ninguno), sin repetidos.
 * @param {string} query
 * @returns {string[]}
 */
export function queryTerms(query) {
	const all = [...new Set(words(query))];
	const useful = all.filter((w) => !STOPWORDS.has(w));
	return useful.length ? useful : all;
}

/**
 * Raíz para comparar por prefijo: sin el plural ("impresoras" → "impresora"). Los términos de
 * hasta 3 letras se comparan enteros.
 * @param {string} term
 * @returns {string}
 */
function stem(term) {
	if (term.length > 4 && term.endsWith('es')) return term.slice(0, -2);
	if (term.length > 3 && term.endsWith('s')) return term.slice(0, -1);
	return term;
}

/**
 * @param {string} word palabra del texto
 * @param {string} term término de la consulta
 */
function matches(word, term) {
	if (term.length <= 3) return word === term || (/^\d+$/.test(term) && word.startsWith(term));
	return word.startsWith(stem(term));
}

/**
 * Markdown → texto plano de una línea, para el fragmento.
 * @param {string} markdown
 * @returns {string}
 */
function plainText(markdown) {
	return markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/^#{1,6}\s+/gm, '')
		.replace(/^\s*>\s?/gm, '')
		.replace(/(\*\*|__|`)/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * @typedef {{
 *   id: string,
 *   title: string,
 *   url: string,
 *   articleWords: string[],
 *   headingWords: string[],
 *   body: Map<string, number>,
 *   phrase: string,
 *   plain: string,
 * }} SearchUnit
 */

/**
 * Prepara las unidades de búsqueda (una vez, al arrancar).
 * @param {McpIndex} index
 * @returns {SearchUnit[]}
 */
export function buildSearchUnits(index) {
	/** @type {SearchUnit[]} */
	const units = [];
	for (const a of index.articulos) {
		const articleWords = words(a.titulo);
		/** @param {string} id @param {string} title @param {string} url @param {string[]} headingWords @param {string} md */
		const add = (id, title, url, headingWords, md) => {
			const plain = plainText(md);
			/** @type {Map<string, number>} */
			const body = new Map();
			for (const w of words(plain)) body.set(w, (body.get(w) ?? 0) + 1);
			units.push({
				id,
				title,
				url,
				articleWords,
				headingWords,
				body,
				phrase: ` ${words(`${title} ${plain}`).join(' ')} `,
				plain,
			});
		};
		add(`manual:${a.slug}`, a.titulo, a.url, [], `${a.descripcion}\n\n${a.intro}`);
		for (const s of a.secciones) {
			const body = s.texto.replace(/^##\s+.*\n?/, '');
			add(
				`manual:${a.slug}#${s.ancla}`,
				`${a.titulo} › ${s.titulo}`,
				`${a.url}#${s.ancla}`,
				words(s.titulo),
				body,
			);
		}
	}
	return units;
}

/**
 * @typedef {{ id: string, title: string, url: string, text: string }} SearchResult
 */

/**
 * Busca en las unidades. Devuelve como máximo `limit` resultados, de mayor a menor puntaje.
 * @param {SearchUnit[]} units
 * @param {string} query
 * @param {{ limit?: number }} [options]
 * @returns {SearchResult[]}
 */
export function search(units, query, { limit = MAX_RESULTS } = {}) {
	const terms = queryTerms(query);
	if (!terms.length) return [];
	const phrase = words(query).join(' ');

	/** @param {string[]} list @param {string} term */
	const hasTerm = (list, term) => list.some((w) => matches(w, term));
	/** @param {Map<string, number>} body @param {string} term */
	const bodyCount = (body, term) => {
		let n = 0;
		for (const [w, c] of body) if (matches(w, term)) n += c;
		return n;
	};

	const hits = terms.map((term) =>
		units.map((u) => ({
			title: hasTerm(u.articleWords, term),
			heading: hasTerm(u.headingWords, term),
			body: bodyCount(u.body, term),
		})),
	);
	const idf = hits.map((list) => {
		const df = list.filter((h) => h.title || h.heading || h.body).length;
		return Math.log(1 + units.length / (1 + df));
	});

	/** @type {{ unit: SearchUnit, score: number, order: number }[]} */
	const scored = [];
	units.forEach((unit, i) => {
		let score = 0;
		let matched = 0;
		terms.forEach((_, t) => {
			const h = hits[t][i];
			if (!h.title && !h.heading && !h.body) return;
			matched++;
			score +=
				idf[t] *
				((h.title ? WEIGHT.articleTitle : 0) +
					(h.heading ? WEIGHT.heading : 0) +
					Math.log2(1 + h.body));
		});
		if (!matched) return;
		score *= (matched / terms.length) ** 2;
		if (phrase.includes(' ') && unit.phrase.includes(` ${phrase} `)) score *= 1.5;
		scored.push({ unit, score, order: i });
	});
	scored.sort((a, b) => b.score - a.score || a.order - b.order);

	/** @type {SearchResult[]} */
	const results = [];
	/** @type {Map<string, number>} */
	const perArticle = new Map();
	for (const { unit } of scored) {
		if (results.length >= limit) break;
		const slug = unit.id.replace(/^manual:/, '').replace(/#.*$/, '');
		const n = perArticle.get(slug) ?? 0;
		if (n >= MAX_PER_ARTICLE) continue;
		perArticle.set(slug, n + 1);
		results.push({
			id: unit.id,
			title: unit.title,
			url: unit.url,
			text: snippet(unit.plain, terms),
		});
	}
	return results;
}

/**
 * Fragmento de ~SNIPPET_CHARS alrededor de la primera coincidencia (o el principio del texto).
 * @param {string} plain
 * @param {string[]} terms
 * @returns {string}
 */
export function snippet(plain, terms) {
	if (plain.length <= SNIPPET_CHARS) return plain;
	// Normalizado carácter por carácter para poder volver a la posición en el original.
	let norm = '';
	/** @type {number[]} */
	const pos = [];
	for (let i = 0; i < plain.length; i++) {
		const n = normalize(plain[i]);
		norm += n;
		for (let k = 0; k < n.length; k++) pos.push(i);
	}
	let first = -1;
	for (const term of terms) {
		const re = new RegExp(`(^|[^a-z0-9])${escapeRegExp(term.length <= 3 ? term : stem(term))}`);
		const m = re.exec(norm);
		if (m) {
			const at = pos[m.index + m[1].length];
			if (first === -1 || at < first) first = at;
		}
	}
	let start = first <= 0 ? 0 : Math.max(0, first - Math.floor(SNIPPET_CHARS / 3));
	if (start > 0) {
		const space = plain.indexOf(' ', start);
		start = space === -1 || space > first ? start : space + 1;
	}
	let end = Math.min(plain.length, start + SNIPPET_CHARS);
	if (end < plain.length) {
		const space = plain.lastIndexOf(' ', end);
		if (space > start) end = space;
	}
	return `${start > 0 ? '…' : ''}${plain.slice(start, end).trim()}${end < plain.length ? '…' : ''}`;
}

/**
 * @param {string} text
 * @returns {string}
 */
function escapeRegExp(text) {
	return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * @typedef {{
 *   id: string,
 *   title: string,
 *   text: string,
 *   url: string,
 *   metadata: {
 *     categoria: string,
 *     actualizado: string | null,
 *     secciones: { ancla: string, titulo: string }[],
 *   },
 * }} FetchDocument
 * @typedef {{ ok: true, document: FetchDocument } | { ok: false, error: string }} FetchOutcome
 */

/**
 * Interpreta el id de `fetch`: `manual:<slug>[#ancla]`, `<slug>[#ancla]`, la URL del artículo
 * (`https://doc.paxapos.com/user-guide/<slug>#ancla`) o su ruta (`/user-guide/<slug>`).
 * @param {string} id
 * @returns {{ slug: string, ancla: string | null } | null}
 */
export function parseFetchId(id) {
	let value = id.trim();
	if (!value) return null;
	value = value.replace(/^manual:/i, '');
	if (/^https?:\/\//i.test(value)) {
		try {
			const url = new URL(value);
			value = `${url.pathname}${url.hash}`;
		} catch {
			return null;
		}
	}
	const [path, hash = ''] = value.split('#', 2);
	const slug = path
		.replace(/^\/?user-guide\//i, '')
		.replace(/\/+$/, '')
		.replace(/\.html$/i, '')
		.toLowerCase();
	if (!slug || slug.includes('/')) return null;
	let ancla = null;
	if (hash) {
		try {
			ancla = decodeURIComponent(hash);
		} catch {
			ancla = hash;
		}
	}
	return { slug, ancla };
}

/**
 * Busca el artículo por slug, siguiendo los 301 de URLs viejas (`MANUAL_REDIRECTS`).
 * @param {McpIndex} index
 * @param {string} slug
 * @returns {McpArticulo | undefined}
 */
function findArticle(index, slug) {
	const direct = index.articulos.find((a) => a.slug === slug);
	if (direct) return direct;
	const moved = manualRedirect(`/user-guide/${slug}`);
	const target = moved?.replace(/^\/user-guide\//, '');
	return target ? index.articulos.find((a) => a.slug === target) : undefined;
}

/**
 * Largo de `text` una vez escapado dentro de un string JSON (sin las comillas).
 * @param {string} text
 */
function jsonLength(text) {
	return JSON.stringify(text).length - 2;
}

/**
 * Arma el documento de `fetch`. Si el JSON resultante pasaría `maxChars`, corta en límite de
 * sección y al final del texto dice qué secciones faltan y con qué id pedirlas.
 * @param {McpIndex} index
 * @param {string} id
 * @param {{ maxChars?: number }} [options]
 * @returns {FetchOutcome}
 */
export function fetchDocument(index, id, { maxChars = MAX_RESPONSE_CHARS } = {}) {
	const parsed = parseFetchId(id);
	if (!parsed) {
		return {
			ok: false,
			error:
				'Falta el id del artículo. Pasá el id que devuelve search (manual:<slug> o ' +
				'manual:<slug>#<ancla>), el slug o la URL https://doc.paxapos.com/user-guide/<slug>.',
		};
	}
	const article = findArticle(index, parsed.slug);
	if (!article) {
		return {
			ok: false,
			error:
				`No existe el artículo "${parsed.slug}" en el manual. Buscalo con search y usá el id ` +
				'que devuelve (manual:<slug> o manual:<slug>#<ancla>).',
		};
	}
	const metadata = {
		categoria: article.categoria,
		actualizado: article.actualizado,
		secciones: article.secciones.map(({ ancla, titulo }) => ({ ancla, titulo })),
	};

	if (parsed.ancla) {
		const section = article.secciones.find((s) => s.ancla === parsed.ancla);
		if (!section) {
			const list = article.secciones.map((s) => `#${s.ancla}`).join(', ');
			return {
				ok: false,
				error:
					`El artículo "${article.slug}" no tiene la sección #${parsed.ancla}. ` +
					`Sus secciones son: ${list || '(ninguna)'}. Pedí manual:${article.slug} para el ` +
					'artículo completo.',
			};
		}
		/** @type {FetchDocument} */
		const document = {
			id: `manual:${article.slug}#${section.ancla}`,
			title: `${article.titulo} › ${section.titulo}`,
			text: section.texto,
			url: `${article.url}#${section.ancla}`,
			metadata,
		};
		return { ok: true, document: fitSingle(document, maxChars) };
	}

	/** @type {FetchDocument} */
	const document = {
		id: `manual:${article.slug}`,
		title: article.titulo,
		text: article.texto,
		url: article.url,
		metadata,
	};
	if (JSON.stringify(document).length <= maxChars) return { ok: true, document };

	// Recortar: título + intro + secciones enteras mientras entren, y el aviso al final.
	const base = JSON.stringify({ ...document, text: '' }).length;
	/** @param {typeof article.secciones} missing */
	const notice = (missing) =>
		`\n\n---\n[Artículo recortado a ${maxChars.toLocaleString('es-AR')} caracteres. ` +
		`Faltan ${missing.length} secciones; pedí cada una con fetch y su id: ` +
		missing.map((s) => `manual:${article.slug}#${s.ancla} (${s.titulo})`).join(', ') +
		'.]';
	let text = `# ${article.titulo}${article.intro ? `\n\n${article.intro}` : ''}`;
	let included = 0;
	for (const section of article.secciones) {
		const candidate = `${text}\n\n${section.texto}`;
		const rest = article.secciones.slice(included + 1);
		const tail = rest.length ? notice(rest) : '';
		if (base + jsonLength(candidate) + jsonLength(tail) > maxChars) break;
		text = candidate;
		included++;
	}
	const missing = article.secciones.slice(included);
	return {
		ok: true,
		document: fitSingle({ ...document, text: `${text}${notice(missing)}` }, maxChars),
	};
}

/**
 * Último recurso para un texto que solo no entra (una sección gigante): corta en el último
 * párrafo que entra y lo avisa.
 * @param {FetchDocument} document
 * @param {number} maxChars
 * @returns {FetchDocument}
 */
function fitSingle(document, maxChars) {
	if (JSON.stringify(document).length <= maxChars) return document;
	const notice = `\n\n---\n[Texto recortado a ${maxChars.toLocaleString('es-AR')} caracteres: falta el final.]`;
	const budget = maxChars - JSON.stringify({ ...document, text: '' }).length - jsonLength(notice);
	let text = document.text;
	while (text && jsonLength(text) > budget) {
		const cut = text.lastIndexOf('\n\n', Math.min(text.length - 1, budget));
		text = cut > 0 ? text.slice(0, cut) : text.slice(0, Math.max(0, Math.floor(budget / 2)));
	}
	return { ...document, text: `${text}${notice}` };
}

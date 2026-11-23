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

/** Pesos por dónde aparece el término. El cuerpo aporta como mucho `BM25.k1 + 1` (≈ 2,2). */
const WEIGHT = {
	articleTitle: 8,
	sectionArticleTitle: 4,
	heading: 5,
	subheading: 3,
	parentHeading: 2,
};

/** Multiplicador si los términos aparecen seguidos y en orden (sin contar stopwords). */
const PHRASE_BOOST = 2;

/**
 * Consultas que cuentan un problema ("no imprime", "no puedo cerrar", "error") y secciones de
 * problemas comunes: "no" es stopword, pero la intención se conserva. En esas consultas el
 * heading de una sección de problemas cuenta como subheading para los términos de su cuerpo, y
 * la sección vale ×1,25.
 */
const TROUBLE_QUERY = /(^|[^a-z])(no|error|errores|falla|fallas|problema|problemas)([^a-z]|$)/;
const TROUBLE_HEADING = /problema|inconveniente|no sale bien|error|falla/;
const TROUBLE_TIEBREAK = 1.25;

/**
 * Penalidad por repetir artículo en los resultados: el 2º resultado de un mismo artículo vale
 * ×0,6 y el 3º ×0,36, para que una consulta que calza con el título de un artículo no tape a
 * secciones de otros artículos que responden mejor.
 */
const SAME_ARTICLE_DECAY = 0.6;

/** BM25 para el cuerpo: satura la frecuencia y normaliza por el largo de la sección. */
const BM25 = { k1: 1.2, b: 0.75 };

/** Palabras que no aportan a la búsqueda (ya normalizadas), incluidas las conversacionales. */
const STOPWORDS = new Set(
	(
		'a al como con de del el en es la las lo los mi mis o para por que se si su sus un una unos ' +
		'unas y e ni le les me te tu tus yo mas muy hay cual cuales donde cuando esta este esto ' +
		'eso ese esa estas estos estoy estan ser era fue no sí ya tambien sobre aca aqui ahi ' +
		'puedo puede pueden podes podemos poder podria hago hace hacen haces hacemos hacer ' +
		'quiero queres quiere quisiera necesito necesita necesitas tengo tiene tenes tienen ' +
		'debo debe deberia hay algo alguien favor hola saber dar porque'
	).split(' '),
);

/**
 * Raíces que la regla de sufijos no une (verbos irregulares, derivados), por raíz ya recortada.
 * @type {Readonly<Record<string, string>>}
 */
const STEM_ALIASES = Object.freeze({
	cierr: 'cerr', // cierre, cierra ↔ cerrar
	abiert: 'abr', // abierto ↔ abrir
	apertur: 'abr', // apertura ↔ abrir
	impres: 'imprim', // impresión, impreso ↔ imprimir
	impresor: 'imprim', // impresora ↔ imprimir
});

/**
 * Sufijos que se recortan (uno solo, el más largo que calce) y el largo mínimo de lo que queda.
 * Las terminaciones de verbo cortas (-ar, -er, -ir) dejan raíces de 3 letras ("abr"); las
 * derivadas, de 4, para no juntar "estado" con "estación".
 * @type {ReadonlyArray<readonly [string, number]>}
 */
const SUFFIXES = [
	['amiento', 4],
	['imiento', 4],
	['acion', 4],
	['icion', 4],
	['iendo', 4],
	['ando', 4],
	['arlo', 4],
	['arla', 4],
	['erlo', 4],
	['irlo', 4],
	['aste', 4],
	['iste', 4],
	['aria', 4],
	['eria', 4],
	['iria', 4],
	['ion', 4],
	['ado', 4],
	['ada', 4],
	['ido', 4],
	['ida', 4],
	['alo', 4],
	['an', 4],
	['en', 4],
	['ar', 3],
	['er', 3],
	['ir', 3],
];

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
 * Sin el plural ("facturas" → "factura", "impresoras" → "impresora", "meses" → "mes").
 * @param {string} word normalizada
 * @returns {string}
 */
function singular(word) {
	if (/\d/.test(word) || word.length <= 3) return word;
	if (word.length > 4 && word.endsWith('es')) return word.slice(0, -2);
	if (word.endsWith('s')) return word.slice(0, -1);
	return word;
}

/**
 * Stemming liviano para español, sobre una palabra ya normalizada (sin acentos): saca el plural,
 * después un sufijo de verbo o derivado ("facturación", "cerrado", "abrir") o la vocal final
 * ("factura", "cerrá" → "cerra"), y aplica `STEM_ALIASES`. Las palabras de 4 letras no pierden
 * la "a" final ("mesa" ≠ "mes", "caja" ≠ "cajero"); los números quedan enteros.
 * @param {string} word
 * @returns {string}
 */
export function stem(word) {
	if (/\d/.test(word) || word.length <= 3) return word;
	let w = singular(word);

	let cut = false;
	for (const [suffix, min] of SUFFIXES) {
		if (w.endsWith(suffix) && w.length - suffix.length >= min) {
			w = w.slice(0, -suffix.length);
			cut = true;
			break;
		}
	}
	if (!cut && /[aeio]$/.test(w) && w.length >= 4 && !(w.length === 4 && w.endsWith('a'))) {
		w = w.slice(0, -1);
	}
	return STEM_ALIASES[w] ?? w;
}

/**
 * Término de búsqueda: su raíz y, para los largos, la palabra entera para matchear por prefijo
 * ("mercado" → "mercadopago").
 * `words` son las palabras de la consulta con esa raíz, tal cual (sin acentos): si aparecen
 * exactas, cuentan doble en el cuerpo ("facturar" pesa más donde dice "facturar" que donde dice
 * "facturas"; "impresora no imprime" es una raíz con dos palabras).
 * @typedef {{ stem: string, words: string[], prefix: string | null }} Term
 */

/**
 * @param {string} word
 * @returns {Term}
 */
function toTerm(word) {
	return {
		stem: stem(word),
		words: [word],
		prefix: word.length >= 5 && !/\d/.test(word) ? word : null,
	};
}

/**
 * Raíces de las palabras con contenido, en orden, separadas por espacios (para la frase).
 * @param {string} text
 * @returns {string}
 */
function contentPhrase(text) {
	return words(text)
		.filter((w) => !STOPWORDS.has(w))
		.map(stem)
		.join(' ');
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
 * Palabras de un campo: raíces (para comparar) y palabras enteras (para el prefijo).
 * @typedef {{ stems: Map<string, number>, words: Map<string, number>, length: number }} Field
 */

/**
 * @param {string} text
 * @returns {Field}
 */
function field(text) {
	/** @type {Map<string, number>} */
	const stems = new Map();
	/** @type {Map<string, number>} */
	const raw = new Map();
	const list = words(text);
	for (const w of list) {
		raw.set(w, (raw.get(w) ?? 0) + 1);
		const s = stem(w);
		stems.set(s, (stems.get(s) ?? 0) + 1);
	}
	return { stems, words: raw, length: list.length };
}

/**
 * Cuántas veces aparece el término en el campo (por raíz, o por prefijo si es largo).
 * @param {Field} f
 * @param {Term} term
 * @returns {number}
 */
function count(f, term) {
	let n = f.stems.get(term.stem) ?? 0;
	if (term.prefix) {
		for (const [w, c] of f.words) {
			if (
				w.length > term.prefix.length &&
				w.startsWith(term.prefix) &&
				stem(w) !== term.stem
			) {
				n += c;
			}
		}
	}
	return n;
}

/**
 * @typedef {{
 *   id: string,
 *   slug: string,
 *   isIntro: boolean,
 *   isTrouble: boolean,
 *   parentId: string | null,
 *   title: string,
 *   url: string,
 *   article: Field,
 *   heading: Field,
 *   parentHeading: Field,
 *   subheadings: Field,
 *   body: Field,
 *   phrase: string,
 *   plain: string,
 * }} SearchUnit
 */

/**
 * Prepara las unidades de búsqueda (una vez, al arrancar): la intro de cada artículo, cada
 * sección `##` (su heading y lo que hay antes del primer `###`) y cada subsección `###`. Las
 * unidades no se pisan: el texto de un `###` está solo en su subsección.
 * @param {McpIndex} index
 * @returns {SearchUnit[]}
 */
export function buildSearchUnits(index) {
	/** @type {SearchUnit[]} */
	const units = [];
	for (const a of index.articulos) {
		const article = field(a.titulo);
		/**
		 * @param {{ id: string, title: string, url: string, heading: string, parent?: { id: string, heading: string }, md: string }} u
		 */
		const add = ({ id, title, url, heading, parent, md }) => {
			const plain = plainText(md);
			const subheadings = [...md.matchAll(/^#{3,6}\s+(.+)$/gm)].map((m) => m[1]).join(' ');
			units.push({
				id,
				slug: a.slug,
				isIntro: !id.includes('#'),
				isTrouble: TROUBLE_HEADING.test(normalize(`${parent?.heading ?? ''} ${heading}`)),
				parentId: parent?.id ?? null,
				title,
				url,
				article,
				heading: field(heading),
				parentHeading: field(parent?.heading ?? ''),
				subheadings: field(subheadings),
				body: field(plain),
				phrase: ` ${contentPhrase(`${title} ${subheadings} ${plain}`)} `,
				plain,
			});
		};
		add({
			id: `manual:${a.slug}`,
			title: a.titulo,
			url: a.url,
			heading: '',
			md: `${a.descripcion}\n\n${a.intro}`,
		});
		for (const s of a.secciones) {
			const id = `manual:${a.slug}#${s.ancla}`;
			add({
				id,
				title: `${a.titulo} › ${s.titulo}`,
				url: `${a.url}#${s.ancla}`,
				heading: s.titulo,
				md: s.intro.replace(/^##\s+.*\n?/, ''),
			});
			for (const sub of s.subsecciones) {
				add({
					id: `manual:${a.slug}#${sub.ancla}`,
					title: `${a.titulo} › ${s.titulo} › ${sub.titulo}`,
					url: `${a.url}#${sub.ancla}`,
					heading: sub.titulo,
					parent: { id, heading: s.titulo },
					md: sub.texto.replace(/^###\s+.*\n?/, ''),
				});
			}
		}
	}
	return units;
}

/**
 * Une dos palabras seguidas de la consulta si juntas forman una palabra del manual ("mercado
 * pago" → "mercadopago"): si no, la unidad que dice "MercadoPago" calzaría con un solo término.
 * @param {SearchUnit[]} units
 * @param {string[]} terms
 * @returns {string[]}
 */
function joinCompounds(units, terms) {
	/** @type {string[]} */
	const out = [];
	for (let i = 0; i < terms.length; i++) {
		const joined = terms[i] + (terms[i + 1] ?? '');
		if (
			i + 1 < terms.length &&
			units.some((u) => u.body.words.has(joined) || u.heading.words.has(joined))
		) {
			out.push(joined);
			i++;
		} else {
			out.push(terms[i]);
		}
	}
	return out;
}

/**
 * @typedef {{ id: string, title: string, url: string, text: string }} SearchResult
 */

/**
 * Busca en las unidades. Devuelve como máximo `limit` resultados, de mayor a menor puntaje.
 *
 * Puntaje por término: `idf × (título del artículo [8 en la intro, 4 en las secciones] +
 * 5·heading + 3·subheading [####] + 2·heading de la sección madre de un ### + BM25 del cuerpo)`, multiplicado por (términos encontrados /
 * términos)² y ×2 si los términos aparecen seguidos. Si la consulta cuenta un problema, ver
 * `TROUBLE_QUERY`. Después se elige de a uno, penalizando
 * repetir artículo (`SAME_ARTICLE_DECAY`).
 * @param {SearchUnit[]} units
 * @param {string} query
 * @param {{ limit?: number }} [options]
 * @returns {SearchResult[]}
 */
export function search(units, query, { limit = MAX_RESULTS } = {}) {
	/** @type {Map<string, Term>} */
	const byStem = new Map();
	for (const w of joinCompounds(units, queryTerms(query))) {
		const term = toTerm(w);
		const same = byStem.get(term.stem);
		if (same) same.words.push(w);
		else byStem.set(term.stem, term);
	}
	const terms = [...byStem.values()];
	const trouble = TROUBLE_QUERY.test(normalize(query));
	if (!terms.length) return [];
	const phrase = terms.length > 1 ? contentPhrase(query) : '';
	const avgLength = units.reduce((n, u) => n + u.body.length, 0) / units.length || 1;

	const hits = terms.map((term) =>
		units.map((u) => ({
			title: count(u.article, term) > 0,
			heading: count(u.heading, term) > 0,
			subheading: count(u.subheadings, term) > 0,
			parent: count(u.parentHeading, term) > 0,
			body: term.words.reduce((n, w) => n + (u.body.words.get(w) ?? 0), count(u.body, term)),
		})),
	);
	const idf = hits.map((list) => {
		const df = list.filter((h) => h.title || h.heading || h.parent || h.body).length;
		return Math.log(1 + units.length / (1 + df));
	});

	/** @type {{ unit: SearchUnit, score: number, order: number }[]} */
	const scored = [];
	units.forEach((unit, i) => {
		const norm = BM25.k1 * (1 - BM25.b + (BM25.b * unit.body.length) / avgLength);
		let score = 0;
		let matched = 0;
		terms.forEach((_, t) => {
			const h = hits[t][i];
			if (!h.title && !h.heading && !h.parent && !h.body) return;
			matched++;
			const body = h.body ? (h.body * (BM25.k1 + 1)) / (h.body + norm) : 0;
			const titleWeight = unit.isIntro ? WEIGHT.articleTitle : WEIGHT.sectionArticleTitle;
			score +=
				idf[t] *
				((h.title ? titleWeight : 0) +
					(h.heading
						? WEIGHT.heading
						: trouble && unit.isTrouble
							? WEIGHT.subheading
							: 0) +
					(h.subheading ? WEIGHT.subheading : 0) +
					(h.parent ? WEIGHT.parentHeading : 0) +
					body);
		});
		if (!matched) return;
		score *= (matched / terms.length) ** 2;
		if (phrase && unit.phrase.includes(` ${phrase} `)) score *= PHRASE_BOOST;
		if (trouble && unit.isTrouble) score *= TROUBLE_TIEBREAK;
		scored.push({ unit, score, order: i });
	});
	scored.sort((a, b) => b.score - a.score || a.order - b.order);

	// Elegir de a uno el mejor puntaje ya penalizado por cuántos resultados lleva su artículo, sin
	// traer una sección y una de sus subsecciones a la vez (la sección ya contiene el ###).
	/** @type {SearchResult[]} */
	const results = [];
	/** @type {Map<string, number>} */
	const perArticle = new Map();
	/** @type {Set<string>} ids elegidos y secciones madre de los ### elegidos */
	const taken = new Set();
	const pool = scored.slice(0, Math.max(limit * MAX_PER_ARTICLE * 4, 50));
	while (results.length < limit && pool.length) {
		let best = -1;
		let bestScore = -Infinity;
		pool.forEach(({ unit, score }, k) => {
			const n = perArticle.get(unit.slug) ?? 0;
			if (n >= MAX_PER_ARTICLE || taken.has(unit.id)) return;
			if (unit.parentId && taken.has(unit.parentId)) return;
			const adjusted = score * SAME_ARTICLE_DECAY ** n;
			if (adjusted > bestScore) {
				bestScore = adjusted;
				best = k;
			}
		});
		if (best === -1) break;
		const [{ unit }] = pool.splice(best, 1);
		perArticle.set(unit.slug, (perArticle.get(unit.slug) ?? 0) + 1);
		taken.add(unit.id);
		if (unit.parentId) taken.add(unit.parentId);
		results.push({
			id: unit.id,
			title: unit.title,
			url: unit.url,
			text: snippet(
				unit.plain,
				terms.map((t) => t.stem),
			),
		});
	}
	return results;
}

/**
 * Fragmento de ~SNIPPET_CHARS alrededor de la primera palabra cuya raíz está en `stems` (o el
 * principio del texto).
 * @param {string} plain
 * @param {string[]} stems raíces (de `stem`) o palabras de la consulta
 * @returns {string}
 */
export function snippet(plain, stems) {
	if (plain.length <= SNIPPET_CHARS) return plain;
	const wanted = new Set([...stems, ...stems.map(stem)]);
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
	for (const m of norm.matchAll(/[a-z0-9]+/g)) {
		if (wanted.has(stem(m[0]))) {
			first = pos[m.index ?? 0];
			break;
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
		const parent = section
			? null
			: article.secciones.find((s) => s.subsecciones.some((x) => x.ancla === parsed.ancla));
		const sub = parent?.subsecciones.find((x) => x.ancla === parsed.ancla);
		if (parent && sub) {
			/** @type {FetchDocument} */
			const document = {
				id: `manual:${article.slug}#${sub.ancla}`,
				title: `${article.titulo} › ${parent.titulo} › ${sub.titulo}`,
				text: sub.texto,
				url: `${article.url}#${sub.ancla}`,
				metadata,
			};
			return { ok: true, document: fitSingle(document, maxChars) };
		}
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

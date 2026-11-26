#!/usr/bin/env node

/**
 * Genera el índice del servidor MCP (`server/mcp-index.json`): cada artículo del manual con su
 * texto en markdown limpio y partido en secciones `##`, con el ancla de su `<div id>`.
 *
 * Formato y ubicación en `server/mcp-index.mjs`. Reusa slug, fechas y contacto de los demás
 * generadores, y título y descripción de `contentUtils.ts` (los mismos que usa la página).
 */

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { basename, relative, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import {
	BASE_SITE_URL,
	MANUAL_DIR,
	PROJECT_DIR,
	decodeHtmlEntities,
	fileNameToSlug,
	findAllMarkdownFiles,
	loadContentDates,
} from './shared-utils.mjs';
import { applyContactPlaceholders } from '../src/lib/config/contact.js';
import {
	extractDescription,
	extractMarkdownTitle,
	stripEmojis,
	// @ts-expect-error -- Node >= 22.18 importa .ts quitando los tipos; tsc no lo permite en JS.
} from '../src/lib/utils/contentUtils.ts';
import { MCP_INDEX_PATH, MCP_INDEX_SCHEMA_VERSION } from '../server/mcp-index.mjs';

/** @typedef {import('../server/mcp-index.mjs').McpArticulo} McpArticulo */
/** @typedef {import('../server/mcp-index.mjs').McpIndex} McpIndex */

const FENCE_RE = /^\s*(```|~~~)/;
const DIV_ID_RE = /^\s*<div id="([^"]+)"><\/div>\s*$/;

/**
 * Ancla derivada del texto del heading (para una sección sin `<div id>`): minúsculas, sin
 * acentos, sin emojis ni signos, espacios a guiones.
 * @param {string} text
 * @returns {string}
 */
export function deriveAnchor(text) {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

/**
 * Markdown del manual → markdown limpio para un asistente: sin imágenes, comentarios ni HTML,
 * con los links relativos convertidos en absolutos y los emojis fuera de los headings. El
 * contenido de los bloques de código queda tal cual.
 * @param {string} markdown con los placeholders de contacto ya reemplazados
 * @param {{ baseUrl: string, slug: string }} ctx
 * @returns {string}
 */
export function cleanMarkdown(markdown, { baseUrl, slug }) {
	/** @param {string} href */
	const absolute = (href) => {
		if (href.startsWith('#')) return `${baseUrl}/user-guide/${slug}${href}`;
		if (href.startsWith('/')) return `${baseUrl}${href}`;
		return href;
	};
	const withoutComments = markdown.replace(/\r\n/g, '\n').replace(/<!--[\s\S]*?-->/g, '');
	/** @type {string[]} */
	const out = [];
	let inFence = false;
	for (const line of withoutComments.split('\n')) {
		if (FENCE_RE.test(line)) {
			inFence = !inFence;
			out.push(line);
			continue;
		}
		if (inFence) {
			out.push(line);
			continue;
		}
		if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) continue; // separador ---
		let text = line
			.replace(/!\[(?:[^[\]]|\[[^\]]*\])*\]\([^)]*\)/g, '') // imágenes (alt con [corchetes])
			.replace(
				/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
				(_m, href, label) => `[${label}](${href})`,
			)
			.replace(/<br\s*\/?>/gi, ' ')
			.replace(/<[^>]+>/g, '') // resto del HTML (los <div id> de las anclas)
			.replace(/\]\(([^)\s]+)\)/g, (_m, href) => `](${absolute(href)})`);
		text = decodeHtmlEntities(text)
			.replace(/(\S) {2,}/g, '$1 ')
			.replace(/\s+$/, '');
		if (/^#{1,6}\s/.test(text)) {
			const [, hashes, title] = /** @type {RegExpExecArray} */ (
				/^(#{1,6})\s+(.*)$/.exec(text)
			);
			text = `${hashes} ${stripEmojis(title.replace(/\*\*|__/g, ''))}`;
		}
		out.push(text);
	}
	return out
		.join('\n')
		.replace(/\n{3,}/g, '\n\n')
		.trim();
}

/**
 * Texto de un heading para usar como título: sin emojis, negritas ni HTML.
 * @param {string} heading sin los `#`
 * @param {{ baseUrl: string, slug: string }} ctx
 * @returns {string}
 */
function headingText(heading, ctx) {
	return stripEmojis(cleanMarkdown(heading, ctx).replace(/\*\*|__/g, ''));
}

/**
 * Parte un artículo en intro + secciones `##` (los `###` quedan dentro de su sección). El ancla
 * de cada sección es el primer `<div id>` debajo del heading; si falta, se deriva del texto y
 * se avisa en `warnings`.
 * @param {string} markdown con los placeholders de contacto ya reemplazados
 * @param {{ baseUrl: string, slug: string }} ctx
 * @returns {{ intro: string, secciones: import('../server/mcp-index.mjs').McpSeccion[], warnings: string[] }}
 */
export function splitSections(markdown, ctx) {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	/** @type {{ title: string, start: number }[]} */
	const heads = [];
	let inFence = false;
	let h1End = 0;
	lines.forEach((line, i) => {
		if (FENCE_RE.test(line)) inFence = !inFence;
		else if (!inFence && /^##\s+\S/.test(line))
			heads.push({ title: line.replace(/^##\s+/, ''), start: i });
		else if (!inFence && !heads.length && !h1End && /^#\s+\S/.test(line)) h1End = i + 1;
	});

	/** @type {string[]} */
	const warnings = [];
	const used = new Set();
	const secciones = heads.map((head, n) => {
		const end = n + 1 < heads.length ? heads[n + 1].start : lines.length;
		const body = lines.slice(head.start, end);
		/** @type {string | undefined} */
		let ancla;
		for (const line of body.slice(1)) {
			const match = DIV_ID_RE.exec(line);
			if (match) {
				ancla = match[1];
				break;
			}
			if (line.trim()) break;
		}
		const titulo = headingText(head.title, ctx);
		if (!ancla) {
			ancla = deriveAnchor(titulo) || `seccion-${n + 1}`;
			warnings.push(
				`la sección "${titulo}" no tiene <div id>: se usa el ancla derivada #${ancla}`,
			);
		}
		if (used.has(ancla)) {
			const base = ancla;
			for (let k = 2; used.has(ancla); k++) ancla = `${base}-${k}`;
			warnings.push(`ancla repetida #${base}: la sección "${titulo}" queda como #${ancla}`);
		}
		used.add(ancla);
		const { intro: lead, subsecciones } = splitSubsections(body, titulo, ctx, used, warnings);
		return {
			ancla,
			titulo,
			texto: cleanMarkdown(body.join('\n'), ctx),
			intro: lead,
			subsecciones,
		};
	});

	const intro = cleanMarkdown(
		lines.slice(h1End, heads[0]?.start ?? lines.length).join('\n'),
		ctx,
	);
	return { intro, secciones, warnings };
}

/**
 * Parte una sección `##` en su intro (el heading y lo que hay antes del primer `###` con ancla) y
 * sus subsecciones `###`, cada una hasta el próximo `###`. Un `###` sin `<div id>` no se separa
 * (su link no tendría a dónde caer): queda dentro del bloque anterior y se avisa.
 * @param {string[]} lines líneas de la sección, desde su `##`
 * @param {string} seccion título de la sección (para los avisos)
 * @param {{ baseUrl: string, slug: string }} ctx
 * @param {Set<string>} used anclas ya usadas en el artículo
 * @param {string[]} warnings
 * @returns {{ intro: string, subsecciones: import('../server/mcp-index.mjs').McpSubseccion[] }}
 */
function splitSubsections(lines, seccion, ctx, used, warnings) {
	/** @type {{ ancla: string, titulo: string, start: number }[]} */
	const heads = [];
	let inFence = false;
	lines.forEach((line, i) => {
		if (FENCE_RE.test(line)) inFence = !inFence;
		if (inFence || !/^###\s+\S/.test(line)) return;
		const titulo = headingText(line.replace(/^###\s+/, ''), ctx);
		/** @type {string | undefined} */
		let ancla;
		for (const next of lines.slice(i + 1)) {
			const match = DIV_ID_RE.exec(next);
			if (match) {
				ancla = match[1];
				break;
			}
			if (next.trim()) break;
		}
		if (!ancla) {
			warnings.push(
				`la subsección "${titulo}" no tiene <div id>: queda dentro del bloque anterior de "${seccion}"`,
			);
			return;
		}
		if (used.has(ancla)) {
			warnings.push(
				`ancla repetida #${ancla}: la subsección "${titulo}" queda dentro del bloque anterior`,
			);
			return;
		}
		used.add(ancla);
		heads.push({ ancla, titulo, start: i });
	});
	const subsecciones = heads.map((head, n) => ({
		ancla: head.ancla,
		titulo: head.titulo,
		texto: cleanMarkdown(
			lines
				.slice(head.start, n + 1 < heads.length ? heads[n + 1].start : lines.length)
				.join('\n'),
			ctx,
		),
	}));
	return {
		intro: cleanMarkdown(lines.slice(0, heads[0]?.start ?? lines.length).join('\n'), ctx),
		subsecciones,
	};
}

/**
 * Categoría por carpeta (`70-Finanzas/…` → "Finanzas"), como `categorizeByFolder` de
 * `src/lib/server/markdown.ts`.
 * @param {string} relativePath ruta del .md relativa a MANUAL_DIR
 * @returns {{ categoria: string, orden: number }}
 */
function categoryOf(relativePath) {
	const match = /^(\d+)-([^/\\]+)[/\\]/.exec(relativePath);
	return match
		? { categoria: match[2].replace(/-/g, ' '), orden: Number(match[1]) }
		: { categoria: 'Otros', orden: 999 };
}

/**
 * Arma el índice completo en memoria (sin escribir nada).
 * @param {{ manualDir?: string, baseUrl?: string, contentDates?: Record<string, { modified?: string }>, now?: Date }} [options]
 * @returns {{ index: McpIndex, warnings: string[] }}
 */
export function buildMcpIndex({
	manualDir = MANUAL_DIR,
	baseUrl = BASE_SITE_URL,
	contentDates = loadContentDates(),
	now = new Date(),
} = {}) {
	/** @type {string[]} */
	const warnings = [];
	/** @type {{ orden: number, archivo: string, articulo: McpArticulo }[]} */
	const entries = [];
	const slugs = new Map();

	for (const filePath of findAllMarkdownFiles(manualDir)) {
		const archivo = basename(filePath);
		const relPath = relative(manualDir, filePath);
		const slug = fileNameToSlug(archivo);
		if (slugs.has(slug)) {
			throw new Error(`Slug duplicado "${slug}": ${slugs.get(slug)} y ${relPath}.`);
		}
		slugs.set(slug, relPath);

		const markdown = applyContactPlaceholders(readFileSync(filePath, 'utf-8')).normalize('NFC');
		const ctx = { baseUrl, slug };
		const titulo = headingText(extractMarkdownTitle(markdown), ctx);
		const { intro, secciones, warnings: own } = splitSections(markdown, ctx);
		for (const w of own) warnings.push(`${relPath}: ${w}`);
		const { categoria, orden } = categoryOf(relPath);
		const dateKey = relative(PROJECT_DIR, filePath).split(sep).join('/');

		const articulo = {
			slug,
			titulo,
			categoria,
			descripcion: extractDescription(markdown) || `Guía de PaxaPOS: ${titulo}.`,
			url: `${baseUrl}/user-guide/${slug}`,
			actualizado: contentDates[dateKey]?.modified ?? null,
			intro,
			texto: cleanMarkdown(markdown, ctx),
			secciones,
		};
		entries.push({ orden, archivo, articulo });
	}

	entries.sort((a, b) => a.orden - b.orden || a.archivo.localeCompare(b.archivo));
	const articulos = entries.map((e) => e.articulo);
	const version = createHash('sha256')
		.update(JSON.stringify({ baseUrl, articulos }))
		.digest('hex')
		.slice(0, 16);
	return {
		index: {
			schema_version: MCP_INDEX_SCHEMA_VERSION,
			version,
			generado: now.toISOString(),
			base_url: baseUrl,
			articulos,
		},
		warnings,
	};
}

function main() {
	console.log('🧭 Generando índice del MCP...');
	const { index, warnings } = buildMcpIndex();
	for (const w of warnings) console.warn(`⚠️  ${w}`);
	writeFileSync(MCP_INDEX_PATH, JSON.stringify(index));
	const secciones = index.articulos.reduce((n, a) => n + a.secciones.length, 0);
	const kb = (Buffer.byteLength(JSON.stringify(index)) / 1024).toFixed(1);
	console.log(
		`✅ ${relative(PROJECT_DIR, MCP_INDEX_PATH)}: ${index.articulos.length} artículos, ` +
			`${secciones} secciones, ${kb} KB (version ${index.version})`,
	);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();

/**
 * Funciones puras compartidas entre scripts de build Node.js.
 * 
 * REGLA: toda lógica de transformación de texto, slugs y detección de archivos
 * vive aquí. Los scripts de generación (generate-ai-files, generate-seo-files,
 * generate-search-index) IMPORTAN de este módulo. Nunca duplicar.
 *
 * La versión equivalente para código SvelteKit está en src/lib/utils/contentUtils.ts.
 * Si se modifica la lógica de slug aquí, DEBE replicarse allá (y viceversa).
 */

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Constantes ──────────────────────────────────────────────
export const MANUAL_DIR = join(__dirname, '..', 'src', 'routes', 'user-guide', 'Manual-Usuario');
export const STATIC_DIR = join(__dirname, '..', 'static');
export const LLM_DIR = join(STATIC_DIR, 'llms');
export const BASE_SITE_URL =
	process.env.DOCUMENTATION_BASE_URL?.trim() || 'https://doc.paxapos.com';

export const PROJECT_DIR = join(__dirname, '..');
/** Fechas de cada .md según git. Lo lee también src/lib/server/markdown.ts. */
export const CONTENT_DATES_FILE = join(PROJECT_DIR, '.content-dates.json');

// ─── Fechas de contenido (git) ───────────────────────────────
/**
 * { 'src/routes/…/archivo.md': { modified, published } } con fechas ISO del
 * último y del primer commit que tocó cada archivo. Devuelve null si no hay git
 * o si el clone es shallow: ahí todas las fechas serían la del último commit y
 * es mejor no informar ninguna que informar una falsa.
 */
export function computeGitContentDates() {
	try {
		/** @param {string[]} args */
		const git = (args) =>
			execFileSync('git', args, { cwd: PROJECT_DIR, maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] })
				.toString()
				.trim();
		if (git(['rev-parse', '--is-shallow-repository']) === 'true') return null;
		const repoRoot = git(['rev-parse', '--show-toplevel']);
		const log = git(['-c', 'core.quotepath=off', 'log', '--format=%x00%cI', '--name-only', '--', MANUAL_DIR]);

		/** @type {Record<string, { modified: string, published: string }>} */
		const dates = {};
		for (const chunk of log.split('\0').filter(Boolean)) {
			const [date, ...files] = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
			for (const file of files) {
				if (!file.endsWith('.md')) continue;
				const key = relative(PROJECT_DIR, join(repoRoot, file)).split('\\').join('/');
				dates[key] ??= { modified: date, published: date }; // el log viene del más nuevo al más viejo
				dates[key].published = date;
			}
		}
		return dates;
	} catch {
		return null;
	}
}

/**
 * Calcula las fechas con git y las guarda en CONTENT_DATES_FILE. Sin git (por
 * ejemplo dentro del build de Docker) usa el archivo que dejó un paso anterior.
 */
export function loadContentDates() {
	const fresh = computeGitContentDates();
	if (fresh) {
		writeFileSync(CONTENT_DATES_FILE, JSON.stringify(fresh, null, 2));
		return fresh;
	}
	if (existsSync(CONTENT_DATES_FILE)) {
		return JSON.parse(readFileSync(CONTENT_DATES_FILE, 'utf-8'));
	}
	return {};
}

// ─── Slug (Familia B — NFD normalize, estándar Unicode) ─────
/**
 * Convierte un nombre de archivo a un slug URL-friendly.
 * Usa NFD normalize: descompone "á" en "a" + combining accent (U+0301),
 * luego elimina los diacríticos con [\u0300-\u036f].
 * 
 * Mismo algoritmo que GitHub usa para generar anchors de headings.
 * 
 * Ejemplo: "21-Agregar-Personal.md" → "agregar-personal"
 *          "37-ARCA-y-Facturación.md" → "arca-y-facturacion"
 *          "52-Buchón-Bot.md" → "buchon-bot"
 */
/** @param {string} fileName @returns {string} */
export function fileNameToSlug(fileName) {
	return fileName
		.replace(/\.\w+$/, '')        // Remover extensión (.md, .txt)
		.replace(/^(\d+-)+/, '')          // Remover prefijos numéricos (151-06-FAQ → FAQ)
		.toLowerCase()
		.replace(/\s+/g, '-')         // Espacios a guiones
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
		.replace(/[^a-z0-9-]/g, '')   // Solo letras, números y guiones
		.replace(/-+/g, '-')          // Múltiples guiones a uno solo
		.replace(/^-|-$/g, '');        // Remover guiones al inicio y final
}

// ─── Extracción de título ────────────────────────────────────
/**
 * Extrae el título (primer H1 o H2) de un contenido markdown.
 * Limpia emojis unicode comunes de títulos de documentación.
 */
/** @param {string} content @returns {string} */
export function extractTitle(content) {
	const h1Match = content.match(/^#\s+(.+)$/m);
	if (h1Match) {
		return h1Match[1]
			.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
			.trim();
	}

	const h2Match = content.match(/^##\s+(.+)$/m);
	if (h2Match) return h2Match[1].trim();

	return 'Sin título';
}



// ─── Búsqueda recursiva de archivos MD ───────────────────────
/** @param {string} dir @returns {string[]} */
export function findAllMarkdownFiles(dir) {
	/** @type {string[]} */
	const files = [];

	/** @param {string} currentDir */
	function searchDir(currentDir) {
		try {
			const items = readdirSync(currentDir);
			for (const item of items) {
				const fullPath = join(currentDir, item);
				const stat = statSync(fullPath);
				if (stat.isDirectory()) {
					searchDir(fullPath);
				} else if (extname(item) === '.md') {
					files.push(fullPath);
				}
			}
		} catch (error) {
			console.warn(`Error leyendo directorio ${currentDir}:`, /** @type {Error} */ (error).message);
		}
	}

	searchDir(dir);
	return files;
}

// ─── Limpieza de contenido ───────────────────────────────────

/** Elimina etiquetas HTML preservando saltos de línea semánticos @param {string} text */
export function stripHtml(text) {
	return text
		.replace(/<div[^>]*>/g, '\n')
		.replace(/<\/div>/g, '\n')
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<p[^>]*>/g, '\n')
		.replace(/<\/p>/g, '\n')
		.replace(/<[^>]*>/g, '');
}

/** Elimina sintaxis Markdown preservando el texto plano @param {string} text */
export function stripMarkdown(text) {
	return text
		.replace(/^#{1,6}\s+(.+)$/gm, '$1')
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/\*([^*]+)\*/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/^>\s*/gm, '')
		.replace(/^\s*[-*+]\s+/gm, '• ')
		.replace(/^\s*(\d+)\.\s+/gm, '$1. ');
}

/** Normaliza whitespace excesivo @param {string} text */
export function normalizeWhitespace(text) {
	return text
		.replace(/\n{3,}/g, '\n\n')
		.replace(/[ \t]{2,}/g, ' ')
		.replace(/^\s+/gm, '')
		.replace(/\s+$/gm, '')
		.replace(/\n\s*\n/g, '\n\n')
		.trim();
}

/** Decodifica entidades HTML comunes @param {string} text @returns {string} */
export function decodeHtmlEntities(text) {
	return text
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#(\d+);/g, (/** @type {string} */ _match, /** @type {string} */ dec) =>
			String.fromCharCode(Number(dec)),
		)
		.replace(/&#x([0-9a-f]+);/gi, (/** @type {string} */ _match, /** @type {string} */ hex) =>
			String.fromCharCode(parseInt(hex, 16)),
		);
}

/**
 * Pipeline completo de limpieza: HTML → entidades → Markdown → whitespace.
 * Equivalente a la antigua normalizeAndCleanContent pero descompuesta.
 */
/** @param {string} rawMarkdown @returns {string} */
export function cleanContentForTxt(rawMarkdown) {
	let text = rawMarkdown.normalize('NFC');
	text = decodeHtmlEntities(text);
	text = stripHtml(text);
	text = stripMarkdown(text);
	text = normalizeWhitespace(text);
	return text;
}

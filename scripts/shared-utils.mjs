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

import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
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
// Compatibilidad hacia atrás en scripts existentes
export const BASE_URL_GITHUB = BASE_SITE_URL;

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
export function fileNameToSlug(fileName) {
	return fileName
		.replace(/\.\w+$/, '')        // Remover extensión (.md, .txt)
		.replace(/^\d+-/, '')          // Remover prefijo numérico
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

// ─── Categorización por número de archivo ────────────────────
export function categorizeByFileName(fileName) {
	const num = parseInt(fileName.split('-')[0]);

	if (num >= 10 && num <= 19) return { category: 'Primeros Pasos', order: 1 };
	if (num >= 20 && num <= 29) return { category: 'Configuración', order: 2 };
	if (num >= 30 && num <= 39) return { category: 'Operaciones', order: 3 };
	if (num >= 40 && num <= 49) return { category: 'Biblioteca de Drivers', order: 4 };
	if (num >= 50 && num <= 99) return { category: 'Extra', order: 5 };

	return { category: 'Otros', order: 6 };
}

// ─── SEO automático ──────────────────────────────────────────
export function generateSEO(title, content, slug) {
	const description = content
		.replace(/[#*`]/g, '')
		.split('\n')
		.find((line) => line.trim().length > 50)
		?.trim()
		.substring(0, 160) || `Documentación sobre ${title}`;

	return {
		title: `${title} - Manual`,
		description,
		keywords: `PaxaPOS, ${title.toLowerCase()}, restaurant, punto de venta, ${slug.replace(/-/g, ', ')}`,
	};
}

// ─── Búsqueda recursiva de archivos MD ───────────────────────
export function findAllMarkdownFiles(dir) {
	const files = [];

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
			console.warn(`Error leyendo directorio ${currentDir}:`, error.message);
		}
	}

	searchDir(dir);
	return files;
}

// ─── Limpieza de contenido ───────────────────────────────────

/** Elimina etiquetas HTML preservando saltos de línea semánticos */
export function stripHtml(text) {
	return text
		.replace(/<div[^>]*>/g, '\n')
		.replace(/<\/div>/g, '\n')
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<p[^>]*>/g, '\n')
		.replace(/<\/p>/g, '\n')
		.replace(/<[^>]*>/g, '');
}

/** Elimina sintaxis Markdown preservando el texto plano */
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

/** Normaliza whitespace excesivo */
export function normalizeWhitespace(text) {
	return text
		.replace(/\n{3,}/g, '\n\n')
		.replace(/[ \t]{2,}/g, ' ')
		.replace(/^\s+/gm, '')
		.replace(/\s+$/gm, '')
		.replace(/\n\s*\n/g, '\n\n')
		.trim();
}

/** Decodifica entidades HTML comunes */
export function decodeHtmlEntities(text) {
	return text
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec))
		.replace(/&#x([0-9a-f]+);/gi, (_match, hex) => String.fromCharCode(parseInt(hex, 16)));
}

/**
 * Pipeline completo de limpieza: HTML → entidades → Markdown → whitespace.
 * Equivalente a la antigua normalizeAndCleanContent pero descompuesta.
 */
export function cleanContentForTxt(rawMarkdown) {
	let text = rawMarkdown.normalize('NFC');
	text = decodeHtmlEntities(text);
	text = stripHtml(text);
	text = stripMarkdown(text);
	text = normalizeWhitespace(text);
	return text;
}

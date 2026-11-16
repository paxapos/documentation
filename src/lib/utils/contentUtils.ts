/**
 * Funciones utilitarias compartidas para procesamiento de contenido.
 * Centraliza lógica duplicada que antes existía en múltiples componentes.
 */

/**
 * Convierte un nombre de archivo o ID de módulo a un slug URL-friendly.
 * Ejemplo: "21-Crear-Usuarios.md" → "crear-usuarios"
 */
export function fileNameToSlug(fileName: string): string {
	return fileName
		.replace(/\.\w+$/, '') // Remover extensión (.md, .txt)
		.replace(/^(\d+-)+/, '') // Remover prefijos numéricos (151-06-FAQ → FAQ)
		.toLowerCase()
		.replace(/\s+/g, '-') // Espacios a guiones
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
		.replace(/[^a-z0-9-]/g, '') // Solo letras, números y guiones
		.replace(/-+/g, '-') // Múltiples guiones a uno solo
		.replace(/^-|-$/g, ''); // Remover guiones al inicio y final
}

/**
 * Remueve emojis y símbolos pictográficos de un texto, normalizando los espacios.
 * Útil para índices, sidebars y tablas de contenido limpias.
 */
export function stripEmojis(text: string): string {
	return text
		.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\uFE0E\u200D\u200C]/gu, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Agrega botones de "copiar enlace" a los headers del HTML renderizado.
 * Busca patterns como: <h2>Título</h2><div id="ancla"></div>
 */
import type { ArticleHeading } from '$lib/types';

function headingTextToPlainText(html: string): string {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}

export function prepareArticleContent(html: string): {
	content: string;
	tableOfContents: ArticleHeading[];
} {
	const tableOfContents: ArticleHeading[] = [];
	const headerWithIdRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>\s*<div id="([^"]+)"><\/div>/gi;

	const content = html.replace(headerWithIdRegex, (_match, tag, attrs, titleContent, idValue) => {
		const level = Number(tag.slice(1));
		if (level === 2 || level === 3) {
			tableOfContents.push({
				id: idValue,
				title: stripEmojis(headingTextToPlainText(titleContent)),
				level,
			});
		}

		const existingClass = (attrs.match(/class=["']([^"']+)["']/) || [])[1] || '';
		const newClass = existingClass ? `${existingClass} relative` : 'relative';
		const cleanedAttrs = attrs.replace(/class=["']([^"']+)["']/, '');

		return `<${tag}${cleanedAttrs} class="${newClass}">
                ${titleContent}
                <button 
                    class="ml-1.5 text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:text-blue-500 focus:bg-gray-100 focus:outline-none transition-all duration-200 text-sm align-middle px-1 py-0.5 rounded"
                    data-copy-section="${idValue}"
                    title="Copiar enlace a esta sección"
                    aria-label="Copiar enlace a esta sección"
                >
                    🔗
                </button>
            </${tag}>
            <div id="${idValue}"></div>`;
	});

	return { content, tableOfContents };
}

export function addLinkIconsToHeaders(html: string): string {
	return prepareArticleContent(html).content;
}

export function highlightTextInHtml(
	html: string,
	searchTerm: string,
	maxMatches: number = 4,
): string {
	if (!searchTerm || !html) return html;

	const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const regex = new RegExp(`(${escapedTerm})`, 'gi');

	let matchCount = 0;
	const parts = html.split(/(<[^>]+>)/g);

	return parts
		.map((part) => {
			if (part.startsWith('<') && part.endsWith('>')) {
				return part;
			}
			return part.replace(regex, (match) => {
				if (matchCount >= maxMatches) {
					return match;
				}
				matchCount++;
				return `<span class="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-gray-100 px-1 py-0.5 rounded-sm font-medium">${match}</span>`;
			});
		})
		.join('');
}

/**
 * Copia texto al portapapeles usando la Clipboard API con fallback
 * para navegadores antiguos.
 * Retorna true si la copia fue exitosa.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		// Fallback para navegadores que no soportan clipboard API
		return fallbackCopyToClipboard(text);
	}
}

function fallbackCopyToClipboard(text: string): boolean {
	const textArea = document.createElement('textarea');
	textArea.value = text;
	textArea.style.position = 'fixed';
	textArea.style.left = '-999999px';
	textArea.style.top = '-999999px';
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		document.execCommand('copy');
		return true;
	} catch {
		return false;
	} finally {
		document.body.removeChild(textArea);
	}
}

/**
 * Extrae el título (primer H1 o H2) de un contenido markdown.
 */
export function extractMarkdownTitle(content: string): string {
	const h1Match = content.match(/^#\s+(.+)$/m);
	if (h1Match) return h1Match[1].trim();

	const h2Match = content.match(/^##\s+(.+)$/m);
	if (h2Match) return h2Match[1].trim();

	return 'Sin título';
}

/** Markdown inline → texto plano de una línea (para meta description). */
function markdownInlineToText(text: string): string {
	return stripEmojis(
		text
			.replace(/!\[[^\]]*\]\([^)]*\)/g, '') // imágenes
			.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → texto
			.replace(/<[^>]+>/g, '') // HTML
			.replace(/&nbsp;/g, ' ')
			.replace(/&amp;/g, '&')
			.replace(/(\*\*|__|\*|_|`)/g, '') // negrita, cursiva, código
			.replace(/\s+/g, ' '),
	)
		.replace(/:$/, '.')
		.trim();
}

function truncateAtWord(text: string, max: number): string {
	if (text.length <= max) return text;
	// Mejor terminar en una oración completa si queda al menos la mitad del largo.
	const sentenceEnd = text.slice(0, max).search(/[.!?](?=\s)[^.!?]*$/);
	if (sentenceEnd >= max * 0.5) return text.slice(0, sentenceEnd + 1);
	const cut = text.slice(0, max - 1);
	const lastSpace = cut.lastIndexOf(' ');
	return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:—-]+$/, '')}…`;
}

const SKIP_BLOCK = /^(#|<div|!\[|---|```|\||>\s*\*\*¿(Dónde|Quién))/;
const PURPOSE_HEADING = /^#{2,3}\s.*¿(Qué es|Para qué sirve)/;

/**
 * Arma la meta description de un artículo, en este orden:
 * 1. El bloque `> 🎯 **¿Para qué sirve esto?**` (lo tienen casi todos los artículos).
 * 2. Los párrafos bajo un encabezado `## 🎯 ¿Qué es…?` / `¿Para qué sirve…?`.
 * 3. Los primeros párrafos de texto, salteando el bloque `¿Dónde está en el sistema?`,
 *    imágenes, anclas, tablas y listas.
 * Devuelve '' si no encuentra texto; quien llama decide el fallback.
 */
export function extractDescription(markdown: string, maxLength = 155): string {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');

	// 1. Bloque "¿Para qué sirve…?" en cita
	const purposeIdx = lines.findIndex((l) => /^>\s*.*\*\*¿Para qué sirve[^*]*\*\*/.test(l));
	if (purposeIdx !== -1) {
		const body: string[] = [];
		for (let i = purposeIdx + 1; i < lines.length && /^>/.test(lines[i]); i++) {
			body.push(lines[i].replace(/^>\s?/, ''));
		}
		const text = markdownInlineToText(body.join(' '));
		if (text.length >= 40) return truncateAtWord(text, maxLength);
	}

	// 2 y 3. Párrafos de prosa (bajo el encabezado de propósito si existe)
	const headingIdx = lines.findIndex((l) => PURPOSE_HEADING.test(l));
	const blocks = lines
		.slice(headingIdx + 1)
		.join('\n')
		.split(/\n\s*\n/)
		.map((b) => b.trim())
		.filter(Boolean);

	const paragraphs: string[] = [];
	for (const block of blocks) {
		if (headingIdx !== -1 && paragraphs.length && /^#/.test(block)) break; // fin de la sección
		if (SKIP_BLOCK.test(block) || /^([-*+]|\d+\.)\s/.test(block) || /^>/.test(block)) continue;
		const text = markdownInlineToText(block);
		paragraphs.push(/[.!?…]$/.test(text) ? text : `${text}.`);
		if (paragraphs.join(' ').length >= 100) break;
	}

	return truncateAtWord(paragraphs.join(' ').trim(), maxLength);
}

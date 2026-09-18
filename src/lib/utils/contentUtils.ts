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
		.replace(/^\d+-/, '') // Remover prefijo numérico
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

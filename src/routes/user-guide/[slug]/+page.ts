import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { base } from '$app/paths';
import { getMarkdownFile } from '$lib/utils/markdownDetector';
import { addLinkIconsToHeaders } from '$lib/utils/contentUtils';
import type { PageLoad } from './$types';

export const prerender = true;

/**
 * Función para limpiar HTML para SEO, removiendo divs vacíos con ID
 * que se usan solo para navegación interna sin colapsar el formato de código
 */
function cleanHtmlForSEO(html: string): string {
	return (
		html
			// Remover divs vacíos con ID (como <div id="arca-facturacion"></div>)
			.replace(/<div\s+id="[^"]*">\s*<\/div>\s*/g, '')
			// Remover comentarios HTML
			.replace(/<!--[\s\S]*?-->/g, '')
			.trim()
	);
}

function fixImagePaths(html: string): string {
	const imgRegex = /<img([^>]*)\ssrc\s*=\s*["'](?!https?:\/\/)(?!\/)([^"']+)["']([^>]*)>/gi;
	return html.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
		if (src.startsWith('images/')) {
			const newSrc = `${base}/${src}`;
			return `<img${beforeSrc} src="${newSrc}"${afterSrc}>`;
		}
		return match;
	});
}

function wrapTablesForResponsive(html: string): string {
	const tableRegex = /<table(?![^>]*class[^>]*table-wrapper)[^>]*>[\s\S]*?<\/table>/gi;
	return html.replace(tableRegex, (match) => {
		return `<div class="table-wrapper">${match}</div>`;
	});
}

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const markdownData = await getMarkdownFile(slug);

		if (!markdownData) {
			throw error(404, 'Módulo no encontrado');
		}

		let htmlContent = await marked(markdownData.content);

		htmlContent = fixImagePaths(htmlContent);
		htmlContent = wrapTablesForResponsive(htmlContent);
		htmlContent = addLinkIconsToHeaders(htmlContent);

		const cleanContentForSEO = cleanHtmlForSEO(htmlContent);

		return {
			slug,
			title: markdownData.title,
			content: htmlContent,
			cleanContent: cleanContentForSEO,
			rawMarkdown: markdownData.content,
			seo: markdownData.seo,
		};
	} catch (err) {
		console.error('Error loading module:', err);
		throw error(500, 'Error al cargar el módulo');
	}
};

import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { base } from '$app/paths';
import { getAllSlugs, getMarkdownFile, getLlmTxtFile } from '$lib/server/markdown';
import { prepareArticleContent } from '$lib/utils/contentUtils';
import type { PageServerLoad } from './$types';

export const prerender = true;

export async function entries() {
	return (await getAllSlugs()).map((slug) => ({ slug }));
}

function fixImagePaths(html: string): string {
	const imgRegex = /<img([^>]*)\ssrc\s*=\s*["'](?!https?:\/\/)(?!\/)([^"']+)["']([^>]*)>/gi;
	return html.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
		if (src.startsWith('images/')) {
			return `<img${beforeSrc} src="${base}/${src}"${afterSrc}>`;
		}
		return match;
	});
}

function wrapTablesForResponsive(html: string): string {
	const tableRegex = /<table(?![^>]*class[^>]*table-wrapper)[^>]*>[\s\S]*?<\/table>/gi;
	return html.replace(tableRegex, (match) => `<div class="table-wrapper">${match}</div>`);
}

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const markdownData = await getMarkdownFile(slug);

	if (!markdownData) {
		error(404, 'Módulo no encontrado');
	}

	let htmlContent = await marked(markdownData.content);
	htmlContent = fixImagePaths(htmlContent);
	htmlContent = wrapTablesForResponsive(htmlContent);
	const articleContent = prepareArticleContent(htmlContent);

	return {
		slug,
		title: markdownData.title,
		content: articleContent.content,
		tableOfContents: articleContent.tableOfContents,
		seo: markdownData.seo,
		llmTxtFile: getLlmTxtFile(slug),
	};
};

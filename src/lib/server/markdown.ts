import { dev } from '$app/environment';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileNameToSlug, extractMarkdownTitle } from '$lib/utils/contentUtils';
import { applyContactPlaceholders } from '$lib/config/contact';
import type { ModuleCategory, ModuleSeo } from '$lib/types';

interface MarkdownFileData {
	fileName: string;
	path: string;
	title: string;
	content: string;
	category: string;
	categoryOrder: number;
	seo: ModuleSeo;
}

interface MarkdownIndex {
	markdownFiles: Record<string, MarkdownFileData>;
	moduleCategories: ModuleCategory[];
}

let indexCache: Promise<MarkdownIndex> | null = null;

function categorizeByFolder(path: string): { category: string; order: number } {
	const match = path.match(/\/Manual-Usuario\/(\d+)-([^/]+)\//);
	if (match) {
		return { category: match[2].replace(/-/g, ' '), order: parseInt(match[1], 10) };
	}
	return { category: 'Otros', order: 999 };
}

function generateSEO(title: string, content: string, slug: string): ModuleSeo {
	const cleanContent = content
		.replace(/<div\s+id="[^"]*">\s*<\/div>/g, '')
		.replace(/^#.+$/m, '')
		.trim();

	const firstParagraph = cleanContent.split('\n\n')[0] || '';
	const description =
		firstParagraph.length > 160
			? firstParagraph.substring(0, 157) + '...'
			: firstParagraph || `Guía completa sobre ${title}.`;

	return {
		title: `${title} - Manual`,
		description: description.replace(/[#*<>]/g, '').trim(),
		keywords: [
			slug.replace(/-/g, ' '),
			'paxapos',
			title.toLowerCase(),
			'tutorial',
			'guía',
			'manual usuario',
		].join(', '),
	};
}

async function buildIndex(): Promise<MarkdownIndex> {
	const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
		query: '?raw',
		import: 'default',
	});

	const markdownFiles: Record<string, MarkdownFileData> = {};
	const categories: Record<string, ModuleCategory> = {};

	for (const [path, loader] of Object.entries(modules)) {
		const fileName = path.split('/').pop();
		if (!fileName) continue;

		const content = applyContactPlaceholders(String(await loader()));
		const slug = fileNameToSlug(fileName);
		const title = extractMarkdownTitle(content);
		const { category, order } = categorizeByFolder(path);

		markdownFiles[slug] = {
			fileName,
			path,
			title,
			content: content.replace(/^#\s+.+(\r?\n)?/, '').trim(),
			category,
			categoryOrder: order,
			seo: generateSEO(title, content, slug),
		};

		categories[category] ??= { title: category, order, modules: [] };
		categories[category].modules.push({ slug, title, fileName });
	}

	for (const cat of Object.values(categories)) {
		cat.modules.sort((a, b) => a.fileName.localeCompare(b.fileName));
	}

	return {
		markdownFiles,
		moduleCategories: Object.values(categories).sort((a, b) => a.order - b.order),
	};
}

function getIndex(): Promise<MarkdownIndex> {
	if (dev) return buildIndex();
	indexCache ??= buildIndex();
	return indexCache;
}

export async function getMarkdownFile(slug: string): Promise<MarkdownFileData | null> {
	const { markdownFiles } = await getIndex();
	return markdownFiles[slug] ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
	const { markdownFiles } = await getIndex();
	return Object.keys(markdownFiles);
}

export async function getModuleCategories(): Promise<ModuleCategory[]> {
	const { moduleCategories } = await getIndex();
	return moduleCategories;
}

let llmMappingCache: Record<string, string> | null = null;

/** slug → nombre del .txt en static/llms, según el manifiesto de generate-ai-files.mjs. */
export function getLlmTxtFile(slug: string): string | null {
	if (!llmMappingCache) {
		llmMappingCache = {};
		const registerPath = join(process.cwd(), 'static', 'llms', 'files-register.json');
		if (existsSync(registerPath)) {
			const register = JSON.parse(readFileSync(registerPath, 'utf-8'));
			for (const file of register.detailed_files ?? []) {
				llmMappingCache[fileNameToSlug(file.original_md)] = file.txt_file;
			}
		} else {
			console.warn('files-register.json no encontrado. Ejecutar: pnpm run generate:ai');
		}
	}
	return llmMappingCache[slug] ?? null;
}

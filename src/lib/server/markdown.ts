import { dev } from '$app/environment';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileNameToSlug, extractMarkdownTitle, extractDescription } from '$lib/utils/contentUtils';
import { applyContactPlaceholders } from '$lib/config/contact';
import type { ModuleCategory, ModuleSeo } from '$lib/types';

interface ContentDates {
	modified: string;
	published: string;
}

/** Fechas de git por archivo, generadas por scripts/generate-content-dates.mjs. */
function loadContentDates(): Record<string, ContentDates> {
	const datesPath = join(process.cwd(), '.content-dates.json');
	if (!existsSync(datesPath)) return {};
	return JSON.parse(readFileSync(datesPath, 'utf-8'));
}

interface MarkdownFileData {
	fileName: string;
	path: string;
	title: string;
	content: string;
	category: string;
	categoryOrder: number;
	seo: ModuleSeo;
	/** Fecha ISO del último / primer commit; null si no se conoce. */
	modified: string | null;
	published: string | null;
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
	const description = extractDescription(content) || `Guía de PaxaPOS: ${title}.`;

	return {
		title: `${title} - Manual`,
		description,
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

	const contentDates = loadContentDates();
	const markdownFiles: Record<string, MarkdownFileData> = {};
	const categories: Record<string, ModuleCategory> = {};

	for (const [path, loader] of Object.entries(modules)) {
		const fileName = path.split('/').pop();
		if (!fileName) continue;

		const content = applyContactPlaceholders(String(await loader()));
		const slug = fileNameToSlug(fileName);
		if (markdownFiles[slug]) {
			// Dos .md con el mismo slug: uno pisaría al otro y una URL desaparecería sin aviso.
			throw new Error(
				`Slug duplicado "${slug}": ${markdownFiles[slug].path} y ${path}. Renombrá uno de los dos.`,
			);
		}
		const title = extractMarkdownTitle(content);
		const { category, order } = categorizeByFolder(path);

		const seo = generateSEO(title, content, slug);
		markdownFiles[slug] = {
			fileName,
			path,
			title,
			content: content.replace(/^#\s+.+(\r?\n)?/, '').trim(),
			category,
			categoryOrder: order,
			seo,
			modified: contentDates[path.replace(/^\//, '')]?.modified ?? null,
			published: contentDates[path.replace(/^\//, '')]?.published ?? null,
		};

		categories[category] ??= { title: category, order, modules: [] };
		categories[category].modules.push({ slug, title, fileName, description: seo.description });
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

/** Fecha del cambio más reciente en todo el manual (para el índice). */
export async function getLatestModified(): Promise<string | null> {
	const { markdownFiles } = await getIndex();
	const dates = Object.values(markdownFiles)
		.map((f) => f.modified)
		.filter((d): d is string => Boolean(d))
		.sort();
	return dates.at(-1) ?? null;
}

import { dev } from '$app/environment';
import { fileNameToSlug, extractMarkdownTitle } from './contentUtils';

// ─── Tipos ───────────────────────────────────────────────────

interface MarkdownFileData {
	fileName: string;
	path: string;
	title: string;
	content: string;
	category: string;
	categoryOrder: number;
	seo: { title: string; description: string; keywords: string };
}

interface ModuleEntry {
	slug: string;
	title: string;
	fileName: string;
}

interface ModuleCategory {
	title: string;
	order: number;
	modules: ModuleEntry[];
}

interface MarkdownDetectorResult {
	markdownFiles: Record<string, MarkdownFileData>;
	entries: Array<{ slug: string }>;
	moduleCategories: ModuleCategory[];
}

// ─── Cache ───────────────────────────────────────────────────

let markdownCache: MarkdownDetectorResult | null = null;

// ─── Helpers ─────────────────────────────────────────────────

function categorizeByFolder(path: string): { category: string; order: number } {
	if (path.includes('/10-Comenzamos/')) return { category: 'Primeros Pasos', order: 1 };
	if (path.includes('/20-Primeros Pasos/')) return { category: 'Configuración', order: 2 };
	if (path.includes('/30-M')) return { category: 'Operaciones', order: 3 };
	if (path.includes('/40-Biblioteca')) return { category: 'Biblioteca de Drivers', order: 4 };
	if (path.includes('/50-Extra/')) return { category: 'Extra', order: 5 };
	return { category: 'Otros', order: 6 };
}

function generateSEO(
	title: string,
	content: string,
	slug: string,
): { title: string; description: string; keywords: string } {
	const cleanContent = content
		.replace(/<div\s+id="[^"]*">\s*<\/div>/g, '')
		.replace(/^#.+$/m, '')
		.trim();

	const firstParagraph = cleanContent.split('\n\n')[0] || '';
	const description =
		firstParagraph.length > 160
			? firstParagraph.substring(0, 157) + '...'
			: firstParagraph || `Guía completa sobre ${title}.`;

	const keywords = [
		slug.replace(/-/g, ' '),
		'paxapos',
		title.toLowerCase(),
		'tutorial',
		'guía',
		'manual usuario',
	].join(', ');

	return {
		title: `${title} - Manual`,
		description: description.replace(/[#*<>]/g, '').trim(),
		keywords,
	};
}

// ─── API pública ─────────────────────────────────────────────

export async function getMarkdownFiles(): Promise<MarkdownDetectorResult> {
	if (!dev && markdownCache) return markdownCache;

	try {
		const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
			query: '?raw',
			import: 'default',
		});

		const markdownFiles: Record<string, MarkdownFileData> = {};
		const entries: Array<{ slug: string }> = [];
		const categorizedModules: Record<string, ModuleCategory> = {};

		for (const [path, moduleLoader] of Object.entries(modules)) {
			try {
				const content = String(await moduleLoader());
				const fileName = path.split('/').pop();
				if (!fileName) continue;

				const slug = fileNameToSlug(fileName);
				const title = extractMarkdownTitle(content);
				const categoryInfo = categorizeByFolder(path);
				const contentWithoutTitle = content.replace(/^#\s+.+(\r?\n)?/, '').trim();

				markdownFiles[slug] = {
					fileName,
					path,
					title,
					content: contentWithoutTitle,
					category: categoryInfo.category,
					categoryOrder: categoryInfo.order,
					seo: generateSEO(title, content, slug),
				};

				entries.push({ slug });

				if (!categorizedModules[categoryInfo.category]) {
					categorizedModules[categoryInfo.category] = {
						title: categoryInfo.category,
						order: categoryInfo.order,
						modules: [],
					};
				}

				categorizedModules[categoryInfo.category].modules.push({
					slug,
					title,
					fileName,
				});
			} catch (err) {
				console.warn(`Error procesando ${path}:`, err);
			}
		}

		Object.values(categorizedModules).forEach((cat) => {
			cat.modules.sort((a, b) => a.fileName.localeCompare(b.fileName));
		});

		const moduleCategories = Object.values(categorizedModules).sort(
			(a, b) => a.order - b.order,
		);

		const result: MarkdownDetectorResult = { markdownFiles, entries, moduleCategories };

		if (!dev) markdownCache = result;

		return result;
	} catch (error) {
		console.error('Error detectando archivos markdown:', error);
		return { markdownFiles: {}, entries: [], moduleCategories: [] };
	}
}

export async function getMarkdownFile(slug: string): Promise<MarkdownFileData | null> {
	const { markdownFiles } = await getMarkdownFiles();
	return markdownFiles[slug] || null;
}

export async function getAllSlugs(): Promise<Array<{ slug: string }>> {
	const { entries } = await getMarkdownFiles();
	return entries;
}

export async function getModuleCategories(): Promise<ModuleCategory[]> {
	const { moduleCategories } = await getMarkdownFiles();
	return moduleCategories;
}

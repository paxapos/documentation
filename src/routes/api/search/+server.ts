import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { replaceWithVariables } from '$lib/helpers/textReplacer';

export interface SearchableItem {
	title: string;
	href: string;
	type: string;
	content?: string;
	id?: string;
	preview?: string;
}

// Función para extraer el título del contenido markdown
function extractTitle(content: string): string {
	// Buscar el primer h1 (# título)
	const h1Match = content.match(/^#\s+(.+)$/m);
	if (h1Match) {
		return h1Match[1].trim();
	}

	// Si no hay h1, buscar el primer h2
	const h2Match = content.match(/^##\s+(.+)$/m);
	if (h2Match) {
		return h2Match[1].trim();
	}

	return 'Sin título';
}

// Función para limpiar el contenido markdown (remover sintaxis)
function cleanMarkdown(content: string): string {
	return (
		content
			// Remover comentarios HTML
			.replace(/<!--[\s\S]*?-->/g, '')
			// Remover tags HTML
			.replace(/<[^>]*>/g, '')
			// Remover headers pero mantener el texto
			.replace(/^#+\s+/gm, '')
			// Remover bold/italic
			.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
			// Remover links pero mantener el texto
			.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
			// Remover código inline
			.replace(/`([^`]+)`/g, '$1')
			// Remover bullets
			.replace(/^[•\-*]\s+/gm, '')
			// Remover líneas vacías múltiples
			.replace(/\n{3,}/g, '\n\n')
			.trim()
	);
}

// Función para leer todos los archivos markdown recursivamente
async function readMarkdownFiles(dir: string, baseDir: string = dir): Promise<SearchableItem[]> {
	const items: SearchableItem[] = [];

	try {
		const entries = await readdir(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = join(dir, entry.name);

			if (entry.isDirectory()) {
				// Recursivamente leer subdirectorios
				const subItems = await readMarkdownFiles(fullPath, baseDir);
				items.push(...subItems);
			} else if (entry.name.endsWith('.md')) {
				// Leer archivo markdown
				try {
					const content = await readFile(fullPath, 'utf-8');
					const title = extractTitle(content);
					const cleanedContent = cleanMarkdown(content);

					// Extraer ID del nombre del archivo (ej: "11-Introduccion.md" -> "11-Introduccion")
					const id = entry.name.replace('.md', '');

					items.push({
						title,
						href: '/user-guide',
						type: 'Manual de Usuario',
						id,
						content: cleanedContent,
					});
				} catch (error) {
					console.error(`Error leyendo archivo ${fullPath}:`, error);
				}
			}
		}
	} catch (error) {
		console.error(`Error leyendo directorio ${dir}:`, error);
	}

	return items;
}

// Función para convertir IDs de módulos a slugs para URLs
function getSlugFromModuleId(id: string): string {
	return id
		.toLowerCase()
		.replace(/^\d+-/, '') // Remover números del inicio
		.replace(/[()]/g, '') // Remover paréntesis
		.replace(/\s+/g, '-') // Espacios a guiones
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remover acentos
		.replace(/[^a-z0-9-]/g, ''); // Solo letras, números y guiones
}

export async function GET({ url }: RequestEvent) {
	const query = url.searchParams.get('q') || '';
	const limit = parseInt(url.searchParams.get('limit') || '8');

	if (query.length < 2) {
		return json([]);
	}

	// Leer todos los archivos markdown
	const manualDir = join(process.cwd(), 'src/routes/user-guide/Manual-Usuario');
	const allContent = await readMarkdownFiles(manualDir);

	const searchTerm = query.toLowerCase();
	const results: Array<SearchableItem & { score: number }> = [];

	for (const item of allContent) {
		let score = 0;
		let preview = '';

		// Buscar en título (mayor peso)
		if (item.title.toLowerCase().includes(searchTerm)) {
			score += 10;
		}

		// Buscar en tipo
		if (item.type.toLowerCase().includes(searchTerm)) {
			score += 5;
		}

		// Buscar en contenido
		if (item.content && item.content.toLowerCase().includes(searchTerm)) {
			score += 3;

			// Bonus por múltiples ocurrencias en contenido
			const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const matches = (item.content.toLowerCase().match(new RegExp(escapedTerm, 'g')) || [])
				.length;
			score += matches * 0.5;

			// Crear preview del contenido
			const contentLower = item.content.toLowerCase();
			const queryIndex = contentLower.indexOf(searchTerm);
			if (queryIndex !== -1) {
				const start = Math.max(0, queryIndex - 50);
				const end = Math.min(item.content.length, queryIndex + searchTerm.length + 100);
				preview = '...' + item.content.substring(start, end) + '...';
			}
		}

		// Buscar palabras parciales
		const searchWords = searchTerm.split(' ').filter((word) => word.length > 1);
		for (const word of searchWords) {
			if (item.title.toLowerCase().includes(word)) score += 2;
			if (item.content && item.content.toLowerCase().includes(word)) score += 1;
		}

		if (score > 0) {
			results.push({
				...item,
				score,
				preview,
				title: replaceWithVariables(item.title),
				type: replaceWithVariables(item.type),
				content: item.content ? replaceWithVariables(item.content) : undefined,
			});
		}
	}

	// Ordenar por score descendente
	results.sort((a, b) => b.score - a.score);

	// Remover el score del resultado final pero mantener preview
	const finalResults = results.slice(0, limit).map(({ score, ...item }) => item);

	return json(finalResults);
}

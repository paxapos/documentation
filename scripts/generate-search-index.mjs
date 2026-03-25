#!/usr/bin/env node

/**
 * Genera un índice de búsqueda estático (JSON) a partir de los archivos MD.
 * Compatible con GitHub Pages — no requiere servidor Node.js.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { basename } from 'path';
import {
	fileNameToSlug,
	extractTitle,
	findAllMarkdownFiles,
	MANUAL_DIR,
	STATIC_DIR,
} from './shared-utils.mjs';
import { join } from 'path';

/** Limpia markdown para indexación (más conservador que cleanContentForTxt) */
function cleanMarkdownForSearch(content) {
	return content
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/<[^>]*>/g, '')
		.replace(/^#+\s+/gm, '')
		.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/^[•\-*]\s+/gm, '')
		.replace(/!\[.*?\]\(.*?\)/g, '')
		.replace(/\n{3,}/g, '\n\n')
		.trim();
}

// --- Main ---

console.log('🔍 Generando índice de búsqueda...');

const outputPath = join(STATIC_DIR, 'search-index.json');

if (!existsSync(MANUAL_DIR)) {
	console.error(`❌ No se encontró el directorio: ${MANUAL_DIR}`);
	process.exit(1);
}

const mdFiles = findAllMarkdownFiles(MANUAL_DIR);
console.log(`📄 Encontrados ${mdFiles.length} archivos MD`);

const searchIndex = [];

for (const filePath of mdFiles) {
	try {
		const rawContent = readFileSync(filePath, 'utf8');
		const fileName = basename(filePath);
		const id = fileName.replace('.md', '');
		const slug = fileNameToSlug(fileName);
		const title = extractTitle(rawContent);
		const content = cleanMarkdownForSearch(rawContent);

		searchIndex.push({
			id,
			slug,
			title,
			content,
			type: 'Manual de Usuario',
		});
	} catch (error) {
		console.warn(`⚠️ Error procesando ${filePath}:`, error.message);
	}
}

// Ordenar por ID para consistencia
searchIndex.sort((a, b) => a.id.localeCompare(b.id));

// Escribir índice
if (!existsSync(STATIC_DIR)) {
	mkdirSync(STATIC_DIR, { recursive: true });
}

writeFileSync(outputPath, JSON.stringify(searchIndex), 'utf8');

const sizeKB = (Buffer.byteLength(JSON.stringify(searchIndex)) / 1024).toFixed(1);
console.log(`✅ Índice generado: ${outputPath} (${searchIndex.length} entradas, ${sizeKB} KB)`);

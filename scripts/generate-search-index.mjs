#!/usr/bin/env node

/**
 * Genera un índice de búsqueda estático (JSON) a partir de los archivos MD.
 * Este índice se sirve como archivo estático y permite búsqueda client-side
 * sin necesidad de un servidor Node.js — compatible con GitHub Pages.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Convierte nombre de archivo a slug URL-friendly.
 * Replica la misma lógica de src/lib/utils/contentUtils.ts
 */
function fileNameToSlug(fileName) {
	return fileName
		.replace(/\.\w+$/, '')
		.replace(/^\d+-/, '')
		.toLowerCase()
		.replace(/\s+/g, '-')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9-]/g, '')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

/**
 * Extrae el título de un archivo markdown (primer H1 o H2).
 */
function extractTitle(content) {
	const h1Match = content.match(/^#\s+(.+)$/m);
	if (h1Match) return h1Match[1].replace(/[🚀🔑👥💳👨‍💼🖨️🍽️🏪👨‍🍳📊💰📦🏛️📈🤖❓🔧🧠]/g, '').trim();

	const h2Match = content.match(/^##\s+(.+)$/m);
	if (h2Match) return h2Match[1].trim();

	return 'Sin título';
}

/**
 * Limpia contenido markdown para indexación de búsqueda.
 */
function cleanMarkdown(content) {
	return content
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/<[^>]*>/g, '')
		.replace(/^#+\s+/gm, '')
		.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/^[•\-*]\s+/gm, '')
		.replace(/!\[.*?\]\(.*?\)/g, '') // Remover imágenes
		.replace(/\n{3,}/g, '\n\n')
		.trim();
}

/**
 * Busca recursivamente todos los archivos .md en un directorio.
 */
function findAllMarkdownFiles(dir) {
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
			console.warn(`⚠️ Error leyendo directorio ${currentDir}:`, error.message);
		}
	}

	searchDir(dir);
	return files;
}

// --- Main ---

console.log('🔍 Generando índice de búsqueda...');

const manualDir = join(__dirname, '..', 'src', 'routes', 'user-guide', 'Manual-Usuario');
const outputDir = join(__dirname, '..', 'static');
const outputPath = join(outputDir, 'search-index.json');

if (!existsSync(manualDir)) {
	console.error(`❌ No se encontró el directorio: ${manualDir}`);
	process.exit(1);
}

const mdFiles = findAllMarkdownFiles(manualDir);
console.log(`📄 Encontrados ${mdFiles.length} archivos MD`);

const searchIndex = [];

for (const filePath of mdFiles) {
	try {
		const rawContent = readFileSync(filePath, 'utf8');
		const fileName = basename(filePath);
		const id = fileName.replace('.md', '');
		const slug = fileNameToSlug(fileName);
		const title = extractTitle(rawContent);
		const content = cleanMarkdown(rawContent);

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
if (!existsSync(outputDir)) {
	mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, JSON.stringify(searchIndex), 'utf8');

const sizeKB = (Buffer.byteLength(JSON.stringify(searchIndex)) / 1024).toFixed(1);
console.log(`✅ Índice generado: ${outputPath} (${searchIndex.length} entradas, ${sizeKB} KB)`);

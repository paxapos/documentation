#!/usr/bin/env node

/**
 * Pipeline de generación de archivos TXT optimizados para LLMs.
 * 
 * Flujo: discoverFiles() → processFile() → generateIndex() → generateManifest() → cleanOrphans()
 * 
 * Importa funciones puras de shared-utils.mjs — nunca duplicar lógica aquí.
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync } from 'fs';
import { join, basename } from 'path';
import {
	fileNameToSlug,
	findAllMarkdownFiles,
	cleanContentForTxt,
	MANUAL_DIR,
	LLM_DIR,
	STATIC_DIR,
	BASE_URL_GITHUB,
} from './shared-utils.mjs';

const BOM = '\uFEFF';

// ─── Funciones puras (sin side effects) ──────────────────────

/** Genera el nombre de archivo TXT a partir del nombre MD original */
function mdToTxtName(mdFileName) {
	return mdFileName
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[()]/g, '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') + '.txt';
}

/** Escribe un archivo UTF-8 con BOM opcional */
function safeWriteFile(filePath, content, addBOM = true) {
	try {
		const normalized = addBOM ? BOM + content.normalize('NFC') : content.normalize('NFC');
		writeFileSync(filePath, normalized, { encoding: 'utf8', flag: 'w' });
		return true;
	} catch (error) {
		console.error(`❌ Error escribiendo ${filePath}:`, error.message);
		return false;
	}
}

// ─── Etapas del pipeline ─────────────────────────────────────

function discoverFiles() {
	if (!existsSync(MANUAL_DIR)) {
		console.error(`❌ Directorio no encontrado: ${MANUAL_DIR}`);
		return [];
	}
	const files = findAllMarkdownFiles(MANUAL_DIR);
	console.log(`📄 Encontrados ${files.length} archivos MD`);
	return files;
}

function processFile(filePath) {
	const rawContent = readFileSync(filePath, 'utf8');
	const fileName = basename(filePath, '.md');
	const cleanContent = cleanContentForTxt(rawContent);

	if (!cleanContent.trim()) return null;

	const txtName = mdToTxtName(fileName);
	const moduleTitle = fileName.replace(/^\d+-/, '').replace(/-/g, ' ');

	return {
		txtName,
		originalMd: fileName,
		title: moduleTitle,
		path: filePath,
		content: `# ${moduleTitle}\n\n${cleanContent}`,
		cleanContent,
	};
}

function generateTxtFiles(processedFiles) {
	if (!existsSync(LLM_DIR)) {
		mkdirSync(LLM_DIR, { recursive: true });
	}

	let count = 0;
	for (const file of processedFiles) {
		const txtPath = join(LLM_DIR, file.txtName);
		if (safeWriteFile(txtPath, file.content, true)) {
			count++;
		}
	}
	console.log(`✅ ${count} archivos TXT generados`);
	return count;
}

function generateIndex(processedFiles) {
	let content = '# Manual Completo PaxaPOS\n\n';
	for (const file of processedFiles) {
		content += `\n\n=== ${file.title} ===\n\n${file.cleanContent}`;
	}

	const indexPath = join(LLM_DIR, 'index.txt');
	if (safeWriteFile(indexPath, content, true)) {
		console.log(`📚 Índice creado: ${indexPath}`);
	}
}

function generateManifest(processedFiles) {
	const manifest = {
		generated_at: new Date().toISOString(),
		total_files: processedFiles.length,
		files: processedFiles.map((f) => f.txtName).sort(),
		detailed_files: processedFiles.map((f) => ({
			txt_file: f.txtName,
			original_md: f.originalMd,
			title: f.title,
			slug: fileNameToSlug(f.originalMd),
			generated_from: f.path,
		})),
	};

	const registerPath = join(LLM_DIR, 'files-register.json');
	writeFileSync(registerPath, JSON.stringify(manifest, null, 2), 'utf8');
	console.log(`📋 Manifiesto creado: ${registerPath}`);
	return manifest;
}

function generateUrls() {
	const basePublic = BASE_URL_GITHUB + '/llms/';
	const filesInDir = readdirSync(LLM_DIR).filter((f) => f.endsWith('.txt'));
	filesInDir.sort();
	const urlsContent = filesInDir.map((f) => basePublic + encodeURIComponent(f)).join('\n') + '\n';
	const urlsPath = join(STATIC_DIR, 'urls.txt');
	safeWriteFile(urlsPath, urlsContent, false);
	console.log(`🌐 URLs generado: ${urlsPath}`);
}

function cleanOrphans(processedFiles) {
	if (!existsSync(LLM_DIR)) return;

	const expectedSet = new Set(processedFiles.map((f) => f.txtName));
	const existingTxts = readdirSync(LLM_DIR).filter(
		(f) => f.endsWith('.txt') && f !== 'index.txt',
	);

	let cleaned = 0;
	for (const txtFile of existingTxts) {
		if (!expectedSet.has(txtFile)) {
			try {
				unlinkSync(join(LLM_DIR, txtFile));
				console.log(`🗑️  Eliminado huérfano: ${txtFile}`);
				cleaned++;
			} catch (err) {
				console.warn(`⚠️  No se pudo eliminar ${txtFile}:`, err.message);
			}
		}
	}
	if (cleaned > 0) console.log(`🧹 ${cleaned} archivo(s) huérfano(s) eliminado(s)`);
}

// ─── Main ────────────────────────────────────────────────────

function main() {
	console.log('🤖 Generando archivos AI...');

	const mdFiles = discoverFiles();
	if (mdFiles.length === 0) return;

	// Limpiar huérfanos antes de generar
	const processedFiles = mdFiles.map(processFile).filter(Boolean);
	cleanOrphans(processedFiles);

	// Generar todo
	generateTxtFiles(processedFiles);
	generateIndex(processedFiles);
	generateManifest(processedFiles);
	generateUrls();

	console.log(`\n🎉 Completado: ${processedFiles.length} archivos procesados`);
}

main();

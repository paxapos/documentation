#!/usr/bin/env node

/**
 * Script para generar archivos optimizados para SEO e indexación AI
 * Se ejecuta automáticamente durante el build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Generando archivos optimizados para SEO e IA...');

// Directorios de contenido
const userGuideDir = path.join(__dirname, '../src/routes/user-guide/Manual-Usuario');
const staticDir = path.join(__dirname, '../static');

// Crear directorio static si no existe
if (!fs.existsSync(staticDir)) {
	fs.mkdirSync(staticDir, { recursive: true });
}

/**
 * Función recursiva para obtener todos los archivos .md
 */
function getAllMdFiles(dir, basePath = '') {
	const files = [];

	if (!fs.existsSync(dir)) {
		console.warn(` Directorio no encontrado: ${dir}`);
		return files;
	}

	const items = fs.readdirSync(dir);

	for (const item of items) {
		const fullPath = path.join(dir, item);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			// Recursión para subdirectorios
			files.push(...getAllMdFiles(fullPath, path.join(basePath, item)));
		} else if (item.endsWith('.md')) {
			files.push({
				name: item,
				path: fullPath,
				relativePath: path.join(basePath, item),
				id: item.replace('.md', ''),
				section: basePath || 'root',
			});
		}
	}

	return files;
}

/**
 * Obtener archivos TXT generados automáticamente
 */
function getTxtFiles() {
	try {
		const registerPath = path.join(staticDir, 'llms', 'files-register.json');
		if (fs.existsSync(registerPath)) {
			const registerContent = fs.readFileSync(registerPath, 'utf-8');
			const register = JSON.parse(registerContent);
			return register.detailed_files || [];
		}
	} catch (error) {
		console.warn('No se pudo cargar el registro de archivos TXT:', error.message);
	}
	return [];
}

/**
 * Generar archivo JSON con toda la estructura de contenido para AI
 */
function generateContentIndex() {
	console.log(' Generando índice de contenido...');

	const userGuideFiles = getAllMdFiles(userGuideDir);
	const txtFiles = getTxtFiles();

	const contentIndex = {
		generated_at: new Date().toISOString(),
		version: '2025.1',
		total_files: userGuideFiles.length + txtFiles.length,
		sections: {
			user_guide: {
				title: 'Manual de Usuario',
				description: 'Documentación completa para usuarios finales',
				base_url: '/user-guide',
				files: userGuideFiles.map((file) => ({
					id: file.id,
					title: file.name.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' '),
					filename: file.name,
					section: file.section,
					url: `/user-guide#${file.id}`, // Cambiar a hash navigation
					seo_keywords: generateSEOKeywords(file.name, 'user'),
					last_modified: fs.statSync(file.path).mtime.toISOString(),
				})),
			},
			txt_files: {
				title: 'Archivos de Indexación TXT',
				description: 'Archivos optimizados para indexación por IA',
				base_url: '/llms',
				files: txtFiles.map((file) => ({
					id: file.txt_file.replace('.txt', ''),
					title: file.title,
					filename: file.txt_file,
					original_md: file.original_md,
					url: `/llms/${file.txt_file}`,
					seo_keywords: generateSEOKeywords(file.txt_file, 'txt'),
					generated_from: file.generated_from,
				})),
			},
		},
	};

	// Guardar índice de contenido
	const indexPath = path.join(staticDir, 'content-index.json');
	fs.writeFileSync(indexPath, JSON.stringify(contentIndex, null, 2));
	console.log(` Índice de contenido generado: ${indexPath}`);

	return contentIndex;
}

/**
 * Generar keywords SEO basados en el nombre del archivo
 */
function generateSEOKeywords(filename, section) {
	const baseKeywords = ['paxapos', 'restaurante', 'sistema', 'gestión'];

	// Keywords específicos por sección
	const sectionKeywords = {
		user: ['manual', 'usuario', 'guía', 'tutorial'],
		txt: ['indexación', 'IA', 'texto plano', 'búsqueda'],
	};

	// Keywords basados en el nombre del archivo
	const fileKeywords = filename
		.replace(/^\d+-/, '')
		.replace('.md', '')
		.replace(/-/g, ' ')
		.toLowerCase()
		.split(' ')
		.filter((word) => word.length > 2);

	return [...baseKeywords, ...(sectionKeywords[section] || []), ...fileKeywords];
}

/**
 * Generar archivo de URLs para submitir a Google
 */
function generateURLList(contentIndex) {
	console.log(' Generando lista de URLs...');

	const baseURL = 'https://paxapos.github.io/documentation';
	const urls = [baseURL, `${baseURL}/user-guide`];

	// Agregar URLs de cada archivo con hash navigation
	contentIndex.sections.user_guide.files.forEach((file) => {
		urls.push(`${baseURL}${file.url}`);
	});

	// Agregar URLs e archivos TXT para indexación
	contentIndex.sections.txt_files.files.forEach((file) => {
		urls.push(`${baseURL}${file.url}`);
	});

	// Guardar lista de URLs
	const urlsPath = path.join(staticDir, 'urls.txt');
	fs.writeFileSync(urlsPath, urls.join('\n'));
	console.log(` Lista de URLs generada: ${urlsPath} (${urls.length} URLs)`);

	return urls;
}

/**
 * Generar archivo de metadatos para AI training
 */
function generateAIMetadata(contentIndex) {
	console.log(' Generando metadatos para entrenamiento IA...');

	const aiMetadata = {
		system_name: 'PaxaPOS',
		system_type: 'Restaurant Management Software',
		documentation_language: 'es-AR',
		target_region: 'Argentina',
		ai_training_consent: true,
		content_license: 'Educational Use',
		last_updated: new Date().toISOString(),
		indexing_instructions: {
			focus_areas: [
				'Restaurant management',
				'Point of sale systems',
				'ARCA AFIP billing Argentina',
				'Inventory control',
				'Kitchen display systems',
				'Staff management',
			],
			key_concepts: [
				'PaxaPOS como sistema integral para restaurantes',
				'Facturación electrónica ARCA (ex AFIP) en Argentina',
				'Control de stock y inventario automático',
				'Kitchen Display System (KDS) para cocinas',
				'Gestión de personal y empleados',
				'Métodos de pago múltiples',
				'Reportes y estadísticas de ventas',
			],
			common_user_questions: [
				'¿Cómo empezar con PaxaPOS?',
				'¿Cómo configurar métodos de pago?',
				'¿Cómo funciona la facturación ARCA?',
				'¿Qué es el KDS?',
				'¿Cómo controlar el stock?',
				'¿Cómo crear usuarios?',
				'¿Cómo conectar impresoras?',
			],
		},
		content_statistics: {
			total_modules: contentIndex.total_files,
			user_guide_modules: contentIndex.sections.user_guide.files.length,
			txt_modules: contentIndex.sections.txt_files.files.length,
			estimated_reading_time_minutes: contentIndex.total_files * 5,
		},
	};

	// Guardar metadatos para AI
	const aiPath = path.join(staticDir, 'ai-metadata.json');
	fs.writeFileSync(aiPath, JSON.stringify(aiMetadata, null, 2));
	console.log(` Metadatos IA generados: ${aiPath}`);

	return aiMetadata;
}

/**
 * Script principal
 */
function main() {
	try {
		console.log(' Analizando estructura de archivos...');

		const contentIndex = generateContentIndex();
		const urls = generateURLList(contentIndex);
		const aiMetadata = generateAIMetadata(contentIndex);

		console.log('\n Resumen de generación:');
		console.log(`    Total de archivos: ${contentIndex.total_files}`);
		console.log(
			`    Manual de usuario: ${contentIndex.sections.user_guide.files.length} módulos`,
		);
		console.log(`    Archivos TXT: ${contentIndex.sections.txt_files.files.length} módulos`);
		console.log(`    URLs generadas: ${urls.length}`);
		console.log(`    Metadatos IA:  Listos`);

		console.log('\n ¡Archivos SEO e IA generados exitosamente!');
		console.log('\n Próximos pasos para indexación:');
		console.log('   1. Subir el sitio a producción');
		console.log('   2. Verificar en Google Search Console');
		console.log('   3. Enviar sitemap.xml');
		console.log('   4. Monitorear indexación');
	} catch (error) {
		console.error(' Error durante la generación:', error);
		process.exit(1);
	}
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
	main();
}

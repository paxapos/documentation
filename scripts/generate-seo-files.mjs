#!/usr/bin/env node

/**
 * Genera archivos SEO: content-index.json, ai-metadata.json, urls.txt.
 * Lee el manifiesto de generate-ai-files.mjs para archivos TXT.
 * Importa utilidades de shared-utils.mjs.
 */

import fs from 'fs';
import path from 'path';
import {
	findAllMarkdownFiles,
	fileNameToSlug,
	MANUAL_DIR,
	STATIC_DIR,
	LLM_DIR,
	BASE_SITE_URL,
} from './shared-utils.mjs';

console.log('Generando archivos optimizados para SEO e IA...');

if (!fs.existsSync(STATIC_DIR)) {
	fs.mkdirSync(STATIC_DIR, { recursive: true });
}

/** Obtiene archivos MD con metadata del filesystem */
function getAllMdFilesWithMeta() {
	const mdPaths = findAllMarkdownFiles(MANUAL_DIR);
	return mdPaths.map((fullPath) => {
		const relativePath = path.relative(MANUAL_DIR, fullPath);
		const name = path.basename(fullPath);
		return {
			name,
			path: fullPath,
			relativePath,
			id: name.replace('.md', ''),
			section: path.dirname(relativePath) || 'root',
		};
	});
}

/** Carga manifiesto TXT generado por generate-ai-files.mjs */
function getTxtFiles() {
	try {
		const registerPath = path.join(LLM_DIR, 'files-register.json');
		if (fs.existsSync(registerPath)) {
			const register = JSON.parse(fs.readFileSync(registerPath, 'utf-8'));
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

	const userGuideFiles = getAllMdFilesWithMeta();
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
					slug: fileNameToSlug(file.name),
					title: file.name.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' '),
					filename: file.name,
					section: file.section,
					url: `/user-guide/${fileNameToSlug(file.name)}`,
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
	const indexPath = path.join(STATIC_DIR, 'content-index.json');
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

	const baseURL = BASE_SITE_URL;
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
	const urlsPath = path.join(STATIC_DIR, 'urls.txt');
	fs.writeFileSync(urlsPath, urls.join('\n'));
	console.log(` Lista de URLs generada: ${urlsPath} (${urls.length} URLs)`);

	return urls;
}

/**
 * Generar sitemap.xml estático con rutas canónicas indexables
 */
function generateSitemap(contentIndex) {
	console.log(' Generando sitemap.xml...');

	const baseURL = BASE_SITE_URL;
	const generatedDate = contentIndex.generated_at.split('T')[0];
	const entries = [
		{ url: `${baseURL}/`, lastmod: generatedDate, changefreq: 'weekly', priority: '1.0' },
		{ url: `${baseURL}/user-guide`, lastmod: generatedDate, changefreq: 'weekly', priority: '0.9' },
		{ url: `${baseURL}/llms/index.txt`, lastmod: generatedDate, changefreq: 'daily', priority: '0.8' },
	];

	for (const file of contentIndex.sections.user_guide.files) {
		entries.push({
			url: `${baseURL}${file.url}`,
			lastmod: file.last_modified.split('T')[0],
			changefreq: 'weekly',
			priority: '0.8',
		});
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		(entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
	)
	.join('\n')}
</urlset>`;

	const sitemapPath = path.join(STATIC_DIR, 'sitemap.xml');
	fs.writeFileSync(sitemapPath, sitemap);
	console.log(` Sitemap generado: ${sitemapPath} (${entries.length} URLs)`);
}

/**
 * Generar robots.txt estático apuntando al sitemap canónico
 */
function generateRobotsTxt() {
	console.log(' Generando robots.txt...');

	const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${BASE_SITE_URL}/sitemap.xml
`;

	const robotsPath = path.join(STATIC_DIR, 'robots.txt');
	fs.writeFileSync(robotsPath, robots);
	console.log(` Robots generado: ${robotsPath}`);
}

/**
 * Genera un índice simple de recursos LLM para crawlers especializados
 */
function generateLlmsTxt(contentIndex) {
	console.log(' Generando llms.txt...');

	const lines = [
		'# PaxaPOS LLM Index',
		`# Updated: ${contentIndex.generated_at}`,
		`${BASE_SITE_URL}/llms/index.txt`,
	];

	for (const file of contentIndex.sections.txt_files.files) {
		lines.push(`${BASE_SITE_URL}${file.url}`);
	}

	const llmsPath = path.join(STATIC_DIR, 'llms.txt');
	fs.writeFileSync(llmsPath, `${lines.join('\n')}\n`);
	console.log(` llms.txt generado: ${llmsPath}`);
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
	const aiPath = path.join(STATIC_DIR, 'ai-metadata.json');
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
		generateSitemap(contentIndex);
		generateRobotsTxt();
		generateLlmsTxt(contentIndex);

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

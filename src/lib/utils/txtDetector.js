// @ts-nocheck
import { dev } from '$app/environment';
import { readFileSync } from 'fs';
import { join } from 'path';

// Cache para evitar múltiples procesados en producción
let txtCache = null;

// Convierte nombre de archivo a slug URL-friendly
function fileNameToSlug(fileName) {
	return fileName
		.replace(/^\d+-/, '') // Remover prefijo numérico (11-, 12-, etc.)
		.replace(/\.txt$/, '') // Remover extensión
		.toLowerCase()
		.replace(/\s+/g, '-') // Espacios a guiones
		.replace(/[áàäâ]/g, 'a')
		.replace(/[éèëê]/g, 'e')
		.replace(/[íìïî]/g, 'i')
		.replace(/[óòöô]/g, 'o')
		.replace(/[úùüû]/g, 'u')
		.replace(/ñ/g, 'n')
		.replace(/[^\w-]/g, '') // Remover caracteres especiales
		.replace(/-+/g, '-') // Múltiples guiones a uno solo
		.replace(/^-|-$/g, ''); // Remover guiones al inicio y final
}

// Extrae título desde el contenido del archivo TXT
function extractTitle(content, fileName) {
	// Buscar líneas que empiecen con # (título markdown style)
	const lines = content.split('\n');
	for (const line of lines) {
		const trimmedLine = line.trim();
		if (trimmedLine.startsWith('# ')) {
			return trimmedLine.substring(2).trim();
		}
	}

	// Si no hay título markdown, usar el nombre del archivo limpio
	return fileName
		.replace(/^\d+-/, '')
		.replace(/\.txt$/, '')
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalizar palabras
}

// Categoriza automáticamente basado en el nombre del archivo
function categorizeByFileName(fileName) {
	const num = parseInt(fileName.split('-')[0]);

	if (num >= 10 && num <= 19) {
		return { category: 'Primeros Pasos', order: 1 };
	}
	if (num >= 20 && num <= 29) {
		return { category: 'Configuración', order: 2 };
	}
	if (num >= 30 && num <= 39) {
		return { category: 'Operaciones', order: 3 };
	}
	if (num >= 40 && num <= 49) {
		return { category: 'Biblioteca de Drivers', order: 4 };
	}
	if (num >= 50 && num <= 99) {
		return { category: 'Extra', order: 5 };
	}

	// Para archivos sin número o con nombres descriptivos
	const lowerName = fileName.toLowerCase();
	if (
		lowerName.includes('driver') ||
		lowerName.includes('impresora') ||
		lowerName.includes('printer')
	) {
		return { category: 'Biblioteca de Drivers', order: 4 };
	}
	if (lowerName.includes('bot') || lowerName.includes('webhook') || lowerName.includes('api')) {
		return { category: 'Extra', order: 5 };
	}

	return { category: 'Otros', order: 6 };
}

// Genera SEO automáticamente basado en el contenido
function generateSEO(title, content, slug) {
	const description =
		content
			.replace(/[#*`]/g, '') // Remover caracteres markdown
			.split('\n')
			.find((line) => line.trim().length > 50) // Primera línea con contenido sustancial
			?.trim()
			.substring(0, 160) || `Documentación sobre ${title}`;

	return {
		title: `${title} - Manual`,
		description,
		keywords: `PaxaPOS, ${title.toLowerCase()}, restaurant, punto de venta, ${slug.replace(/-/g, ', ')}`,
	};
}

// Función para obtener dinámicamente la lista de archivos TXT
async function getAvailableTxtFiles() {
	try {
		// Intentar cargar el registro de archivos generados automáticamente
		const registerResponse = await fetch('/llms/files-register.json');
		if (registerResponse.ok) {
			const register = await registerResponse.json();
			console.log(
				`📄 Cargados ${register.files.length} archivos TXT desde registro automático (${new Date(register.generated_at).toLocaleString()})`,
			);
			return register.files;
		}
	} catch (error) {
		console.warn(
			'No se pudo cargar el registro automático, intentando generar automáticamente...',
			error,
		);

		// En desarrollo, intentar generar archivos si no existen
		if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
			console.log('🔧 Modo desarrollo detectado, usando lista extendida de archivos...');
		}
	}

	// Lista de fallback estática
	return [
		'11-introduccion.txt',
		'12-iniciar-sesion.txt',
		'21-crear-usuarios.txt',
		'22-tipos-de-pago.txt',
		'23-agregar-personal.txt',
		'24-configuracion-de-impresoras.txt',
		'25-menu.txt',
		'32-salon.txt',
		'33-kitchen-display-system-kds.txt',
		'34-contabilidad.txt',
		'35-arqueos.txt',
		'36-compras-y-stock.txt',
		'37-arca-y-facturacion.txt',
		'38-estadisticas.txt',
		'39-business-intelligence.txt',
		'41-biblioteca-de-drivers.txt',
		'42-buchon-bot.txt',
		'43-citizen-ct-s310ii.txt',
		'44-epson-tm-t20.txt',
		'45-drivers-genericos.txt',
		'46-epson-tm-t88.txt',
		'51-buchon-bot.txt',
		'52-preguntas-frecuentes.txt',
	];
}

// Función principal que detecta y procesa todos los archivos TXT
export async function getTxtFiles() {
	// En desarrollo, siempre recarga. En producción, usa cache
	if (!dev && txtCache) {
		return txtCache;
	}

	try {
		const txtFiles = {};
		const entries = [];
		const categorizedModules = {};

		// Obtener la lista dinámica de archivos TXT disponibles
		const availableFiles = await getAvailableTxtFiles();

		// Cargar archivos TXT desde static/llms
		for (const fileName of availableFiles) {
			try {
				// En el navegador, los archivos static se sirven directamente
				const response = await fetch(`/llms/${fileName}`);
				if (!response.ok) continue;

				const content = await response.text();
				const slug = fileNameToSlug(fileName);
				const title = extractTitle(content, fileName);
				const categoryInfo = categorizeByFileName(fileName);

				// Crear entrada para el file mapping
				txtFiles[slug] = {
					fileName,
					title,
					content,
					category: categoryInfo.category,
					categoryOrder: categoryInfo.order,
					seo: generateSEO(title, content, slug),
				};

				// Crear entrada para prerender
				entries.push({ slug });

				// Agrupar por categoría
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
					type: 'txt', // Marcar como archivo TXT
				});
			} catch (error) {
				console.warn(`Error procesando ${fileName}:`, error);
			}
		}

		// Ordenar módulos dentro de cada categoría
		Object.values(categorizedModules).forEach((category) => {
			category.modules.sort((a, b) => a.fileName.localeCompare(b.fileName));
		});

		// Convertir a array ordenado por categoryOrder
		const moduleCategories = Object.values(categorizedModules).sort(
			(a, b) => a.order - b.order,
		);

		const result = {
			txtFiles,
			entries,
			moduleCategories,
		};

		// Cache en producción
		if (!dev) {
			txtCache = result;
		}

		return result;
	} catch (error) {
		console.error('Error detectando archivos TXT:', error);
		return {
			txtFiles: {},
			entries: [],
			moduleCategories: [],
		};
	}
}

// Obtiene un archivo específico por slug
export async function getTxtFile(slug) {
	const { txtFiles } = await getTxtFiles();
	return txtFiles[slug] || null;
}

// Lista todos los slugs disponibles
export async function getAllTxtSlugs() {
	const { entries } = await getTxtFiles();
	return entries;
}

// Obtiene las categorías de módulos para navegación
export async function getTxtModuleCategories() {
	const { moduleCategories } = await getTxtFiles();
	return moduleCategories;
}

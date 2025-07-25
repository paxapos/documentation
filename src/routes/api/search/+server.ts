import { json } from '@sveltejs/kit';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { RequestHandler } from './$types';
import { replacePaxaPOS } from '$lib/helpers/textReplacer';
import { FEATURE_FLAGS } from '$lib/helpers/constants';

export interface SearchableItem {
	title: string;
	href: string;
	type: string;
	content?: string;
	id?: string;
}

// Cache para contenido indexado
let contentCache: SearchableItem[] = [];
let cacheInitialized = false;

function loadAndIndexContent(): SearchableItem[] {
	if (cacheInitialized) {
		return contentCache;
	}

	const indexedContent: SearchableItem[] = [];

	// Definir las rutas de archivos markdown
	const markdownFiles = [
		// Manual de Usuario
		{ path: 'src/routes/user-guide/Manual-Usuario/10-Comenzamos/11-Introduccion.md', id: '11-Introduccion', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/10-Comenzamos/12-Iniciar-sesión.md', id: '12-Iniciar-sesión', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/21-Crear-Usuarios.md', id: '21-Crear-Usuarios', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/22-Tipos-De-Pago.md', id: '22-Tipos-De-Pago', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/23-Agregar-Personal.md', id: '23-Agregar-Personal', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/24-Configuración-de-Impresoras.md', id: '24-Configuración-de-Impresoras', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/25-Menú.md', id: '25-Menú', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/32-Salón.md', id: '32-Salón', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/33-Kitchen-Display-System-(KDS).md', id: '33-Kitchen-Display-System-(KDS)', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/34-Contabilidad.md', id: '34-Contabilidad', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/35-Arqueos.md', id: '35-Arqueos', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/36-Compras-y-Stock.md', id: '36-Compras-y-Stock', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/37-AFIP-y-Facturación.md', id: '37-AFIP-y-Facturación', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/30-Módulos Principales/38-Estadísticas.md', id: '38-Estadísticas', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/40-Extra/42-Buchón-Bot.md', id: '42-Buchón-Bot', type: 'Manual de Usuario', href: '/user-guide' },
		{ path: 'src/routes/user-guide/Manual-Usuario/40-Extra/43-Propina.md', id: '43-Propina', type: 'Manual de Usuario', href: '/user-guide' },
		// Documentación para desarrolladores (solo si está habilitada)
		...(FEATURE_FLAGS.showDevDocumentation ? [
			{ path: 'src/routes/dev/Docs/Documentation-one.md', id: 'Documentation-one', type: 'Documentación Desarrolladores', href: '/dev' },
			{ path: 'src/routes/dev/Docs/Sample-two.md', id: 'Sample-two', type: 'Documentación Desarrolladores', href: '/dev' },
			{ path: 'src/routes/dev/Docs/svelte-mdtest.md', id: 'svelte-mdtest', type: 'Documentación Desarrolladores', href: '/dev' },
			{ path: 'src/routes/dev/Docs/Webhooks.md', id: 'Webhooks', type: 'Documentación Desarrolladores', href: '/dev' }
		] : [])
	];

	// Cargar contenido de cada archivo
	for (const file of markdownFiles) {
		try {
			const fullPath = join(process.cwd(), file.path);
			
			if (existsSync(fullPath)) {
				const content = readFileSync(fullPath, 'utf-8');
				
				// Extraer título del markdown (primera línea que empieza con #)
				const lines = content.split('\n');
				let title = file.id; // fallback al id
				
				for (const line of lines) {
					if (line.trim().startsWith('#')) {
						title = line.replace(/^#+\s*/, '').trim();
						break;
					}
				}

				// Limpiar el contenido markdown para búsqueda
				const cleanContent = content
					.replace(/^#+\s*/gm, '') // remover headers
					.replace(/\*\*/g, '') // remover bold
					.replace(/\*/g, '') // remover italic
					.replace(/`/g, '') // remover code
					.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // extraer texto de links
					.replace(/>/g, '') // remover blockquotes
					.replace(/\n+/g, ' ') // convertir saltos de línea a espacios
					.trim();

				indexedContent.push({
					title: replacePaxaPOS(title),
					href: file.href,
					type: replacePaxaPOS(file.type),
					content: replacePaxaPOS(cleanContent),
					id: file.id
				});
			}
		} catch (error) {
			console.warn(`No se pudo cargar el archivo: ${file.path}`, error);
		}
	}

	contentCache = indexedContent;
	cacheInitialized = true;
	return indexedContent;
}

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q')?.toLowerCase() || '';
	const limit = parseInt(url.searchParams.get('limit') || '8');

	if (query.length < 2) {
		return json([]);
	}

	const content = loadAndIndexContent();
	const results: Array<SearchableItem & { score: number; preview?: string }> = [];
	
	for (const item of content) {
		let score = 0;
		let preview = '';
		
		// Buscar en título (mayor peso)
		if (item.title.toLowerCase().includes(query)) {
			score += 10;
		}
		
		// Buscar en tipo
		if (item.type.toLowerCase().includes(query)) {
			score += 5;
		}
		
		// Buscar en contenido
		if (item.content && item.content.toLowerCase().includes(query)) {
			score += 3;
			
			// Bonus por múltiples ocurrencias en contenido
			const matches = (item.content.toLowerCase().match(new RegExp(query, 'g')) || []).length;
			score += matches * 0.5;
			
			// Crear preview del contenido
			const contentLower = item.content.toLowerCase();
			const queryIndex = contentLower.indexOf(query);
			if (queryIndex !== -1) {
				const start = Math.max(0, queryIndex - 50);
				const end = Math.min(item.content.length, queryIndex + query.length + 100);
				preview = '...' + item.content.substring(start, end) + '...';
			}
		}
		
		// Buscar palabras parciales
		const searchWords = query.split(' ').filter(word => word.length > 1);
		for (const word of searchWords) {
			if (item.title.toLowerCase().includes(word)) score += 2;
			if (item.content && item.content.toLowerCase().includes(word)) score += 1;
		}
		
		if (score > 0) {
			results.push({ ...item, score, preview });
		}
	}
	
	// Ordenar por score descendente
	results.sort((a, b) => b.score - a.score);
	
	// Remover el score del resultado final pero mantener preview
	const finalResults = results.slice(0, limit).map(({ score, ...item }) => item);
	
	return json(finalResults);
};

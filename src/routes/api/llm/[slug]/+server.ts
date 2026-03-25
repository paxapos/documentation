import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { fileNameToSlug } from '$lib/utils/contentUtils';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Carga el manifiesto de archivos TXT generado en build time.
 * Genera un mapeo slug → txt_file usando el algoritmo canónico de fileNameToSlug.
 * NO hay fallback manual: si el manifiesto no existe, el build falló.
 */
function loadSlugMapping(): Record<string, string> {
	const registerPath = join(process.cwd(), 'static', 'llms', 'files-register.json');
	if (!existsSync(registerPath)) {
		console.error('files-register.json no encontrado. Ejecutar: pnpm run generate:ai');
		return {};
	}

	const register = JSON.parse(readFileSync(registerPath, 'utf-8'));
	const mapping: Record<string, string> = {};

	for (const file of register.detailed_files) {
		const slug = fileNameToSlug(file.original_md);
		mapping[slug] = file.txt_file;
	}

	return mapping;
}

// Cargar una sola vez al inicio del módulo (prerender time)
const slugMapping = loadSlugMapping();

export const GET: RequestHandler = async ({ params }) => {
	const { slug } = params;
	const fileName = slugMapping[slug];

	if (!fileName) {
		throw error(404, `Archivo LLM no encontrado para slug: ${slug}`);
	}

	throw redirect(302, `/llms/${fileName}`);
};

/**
 * Genera las entradas de prerender dinámicamente desde el manifiesto.
 * SvelteKit llama esta función en build time para saber qué rutas pre-renderizar.
 * Esto elimina la lista manual de prerender entries en svelte.config.js.
 */
export function entries() {
	return Object.keys(slugMapping).map((slug) => ({ slug }));
}

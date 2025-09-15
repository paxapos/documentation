import { getAllSlugs } from '$lib/utils/markdownDetector.js';

// Generar automáticamente todas las rutas basándose en archivos MD
export async function entries() {
    try {
        const slugs = await getAllSlugs();
        return slugs;
    } catch (error) {
        console.error('Error generando entradas automáticas:', error);
        return [];
    }
}

export { prerender } from './+page.js';

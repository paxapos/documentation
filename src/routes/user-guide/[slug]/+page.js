import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { getMarkdownFile } from '$lib/utils/markdownDetector.js';

export const prerender = true;
export async function load({ params }) {
    const { slug } = params;
    
    try {
        // Usar la utilidad automatizada para obtener el archivo
        const markdownData = await getMarkdownFile(slug);
        
        if (!markdownData) {
            throw error(404, 'Módulo no encontrado');
        }

        // Convertir markdown a HTML
        const htmlContent = await marked(markdownData.content);

        return {
            slug,
            title: markdownData.title,
            content: htmlContent,
            rawMarkdown: markdownData.content,
            seo: markdownData.seo
        };
        
    } catch (err) {
        console.error('Error loading module:', err);
        throw error(500, 'Error al cargar el módulo');
    }
}
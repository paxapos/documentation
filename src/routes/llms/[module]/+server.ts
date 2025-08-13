import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const prerender = false; // Dinámico

// Función para convertir Markdown a texto plano para IA
function markdownToPlainText(markdown: string, moduleId: string): string {
    return markdown
        // Eliminar divs y HTML
        .replace(/<div[^>]*>/g, '')
        .replace(/<\/div>/g, '')
        // Convertir headers a texto plano
        .replace(/^#{1,6}\s+(.+)$/gm, '$1')
        // Convertir negritas y cursivas
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        // Convertir listas
        .replace(/^[\s]*[-*+]\s+/gm, '• ')
        // Convertir enlaces
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Convertir blockquotes
        .replace(/^>\s+/gm, '')
        // Eliminar líneas vacías múltiples
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        // Limpiar espacios extra
        .replace(/[ \t]+$/gm, '')
        .trim();
}

// Función recursiva para buscar archivos MD
function findMarkdownFile(moduleId: string): string | null {
    const possiblePaths = [
        // User guide paths
        `src/routes/user-guide/Manual-Usuario/10-Comenzamos/${moduleId}.md`,
        `src/routes/user-guide/Manual-Usuario/20-Primeros Pasos/${moduleId}.md`,
        `src/routes/user-guide/Manual-Usuario/30-Módulos Principales/${moduleId}.md`,
        `src/routes/user-guide/Manual-Usuario/40-Extras/${moduleId}.md`,
        // Dev paths
        `src/routes/dev/Docs/${moduleId}.md`,
    ];

    for (const relativePath of possiblePaths) {
        const fullPath = join(process.cwd(), relativePath);
        if (existsSync(fullPath)) {
            return fullPath;
        }
    }

    // Búsqueda recursiva manual para Windows
    function searchInDirectory(dir: string, filename: string): string | null {
        try {
            if (!existsSync(dir)) return null;
            
            const { readdirSync, statSync } = require('fs');
            const items = readdirSync(dir);
            
            for (const item of items) {
                const fullPath = join(dir, item);
                const stat = statSync(fullPath);
                
                if (stat.isFile() && item === `${filename}.md`) {
                    return fullPath;
                } else if (stat.isDirectory()) {
                    const found = searchInDirectory(fullPath, filename);
                    if (found) return found;
                }
            }
        } catch (error) {
            // Continuar búsqueda
        }
        return null;
    }

    // Buscar en directorios principales
    const searchDirs = [
        join(process.cwd(), 'src/routes/user-guide/Manual-Usuario'),
        join(process.cwd(), 'src/routes/dev')
    ];

    for (const dir of searchDirs) {
        const found = searchInDirectory(dir, moduleId);
        if (found) return found;
    }

    return null;
}

export const GET: RequestHandler = async ({ params, url }) => {
    const { module: moduleId } = params;
    
    if (!moduleId) {
        throw error(400, 'Module ID is required');
    }

    // Buscar el archivo MD correspondiente
    const markdownPath = findMarkdownFile(moduleId);
    
    if (!markdownPath) {
        throw error(404, `Module "${moduleId}" not found`);
    }

    try {
        // Leer el contenido del archivo MD
        const markdownContent = readFileSync(markdownPath, 'utf-8');
        
        // Convertir a texto plano
        const plainText = markdownToPlainText(markdownContent, moduleId);
        
        // Generar header para el archivo TXT
        const header = `# PaxaPOS - Manual de Usuario
# Módulo: ${moduleId}
# Generado dinámicamente para LLMs/IA - ${new Date().toISOString()}
# URL: ${url.origin}/documentation/llms/${moduleId}
# Fuente: ${markdownPath}

`;
        
        const finalContent = header + plainText;
        
        return new Response(finalContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=300', // Cache por 5 minutos
                'Content-Disposition': `inline; filename="${moduleId}.txt"`
            }
        });
        
    } catch (err) {
        console.error(`Error reading markdown file for ${moduleId}:`, err);
        throw error(500, `Error processing module "${moduleId}"`);
    }
};

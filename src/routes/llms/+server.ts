import type { RequestHandler } from '@sveltejs/kit';
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';

export const prerender = false; // Dinámico

// Función para convertir Markdown a texto plano para IA (misma que en [module])
function markdownToPlainText(markdown: string): string {
    return markdown
        .replace(/<div[^>]*>/g, '')
        .replace(/<\/div>/g, '')
        .replace(/^#{1,6}\s+(.+)$/gm, '$1')
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        .replace(/^[\s]*[-*+]\s+/gm, '• ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^>\s+/gm, '')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/[ \t]+$/gm, '')
        .trim();
}

// Función recursiva para encontrar archivos MD
function findMarkdownFiles(dir: string, files: Array<{path: string, id: string, title: string}> = []): Array<{path: string, id: string, title: string}> {
    if (!existsSync(dir)) return files;
    
    const items = readdirSync(dir);
    
    for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
            findMarkdownFiles(fullPath, files);
        } else if (extname(item).toLowerCase() === '.md') {
            const id = basename(item, '.md');
            const title = id.replace(/[-_]/g, ' ').replace(/^\d+\s*/, ''); // Limpiar números del inicio
            files.push({ path: fullPath, id, title });
        }
    }
    
    return files;
}

export const GET: RequestHandler = async ({ url }) => {
    const type = url.searchParams.get('type') || 'complete';
    
    try {
        // Buscar todos los archivos Markdown
        const projectRoot = process.cwd();
        let allFiles: Array<{path: string, id: string, title: string}> = [];
        
        // Buscar en manual de usuario
        const userGuideDir = join(projectRoot, 'src', 'routes', 'user-guide', 'Manual-Usuario');
        if (existsSync(userGuideDir)) {
            allFiles = [...allFiles, ...findMarkdownFiles(userGuideDir)];
        }
        
        // Buscar en dev docs
        const devDir = join(projectRoot, 'src', 'routes', 'dev');
        if (existsSync(devDir)) {
            allFiles = [...allFiles, ...findMarkdownFiles(devDir)];
        }
        
        if (type === 'list') {
            // Devolver solo la lista de módulos disponibles
            const moduleList = allFiles.map(f => ({
                id: f.id,
                title: f.title,
                url: `${url.origin}/documentation/llms/${f.id}`
            }));
            
            return new Response(JSON.stringify(moduleList, null, 2), {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'public, max-age=300'
                }
            });
        }
        
        // Generar contenido completo
        let completeContent = `# PaxaPOS - Manual Completo para IA/LLM
# Generado dinámicamente - ${new Date().toISOString()}
# Total de módulos: ${allFiles.length}

`;
        
        // Procesar cada archivo
        for (const file of allFiles) {
            try {
                const content = readFileSync(file.path, 'utf-8');
                const plainText = markdownToPlainText(content);
                
                completeContent += `\n=== ${file.title.toUpperCase()} (${file.id}) ===\n\n`;
                completeContent += plainText;
                completeContent += '\n\n---\n';
                
            } catch (error) {
                console.error(`Error processing ${file.path}:`, error);
                completeContent += `\n=== ERROR: ${file.title.toUpperCase()} ===\n`;
                completeContent += `No se pudo procesar el archivo: ${file.path}\n\n---\n`;
            }
        }
        
        // Agregar lista de URLs individuales
        completeContent += '\n\n# URLS INDIVIDUALES DISPONIBLES:\n\n';
        allFiles.forEach(f => {
            completeContent += `• ${f.title}: ${url.origin}/documentation/llms/${f.id}\n`;
        });
        
        return new Response(completeContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=300',
                'Content-Disposition': 'inline; filename="manual-completo-paxapos.txt"'
            }
        });
        
    } catch (error) {
        console.error('Error generating complete manual:', error);
        return new Response('Error generating manual index', {
            status: 500,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
};

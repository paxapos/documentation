import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

// Interfaz para el contenido
interface ContentItem {
    id: string;
    title: string;
    content: string;
    section: string;
}

interface AIResponse {
    success: boolean;
    data?: ContentItem[] | ContentItem | string;
    message?: string;
    totalSections?: number;
    structure?: any;
}

// Función para cargar contenido del manual de usuario
async function loadUserManualContent(): Promise<ContentItem[]> {
    const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    const content: ContentItem[] = [];
    
    for (const [path, markdownContent] of Object.entries(modules)) {
        const fileName = path.split('/').pop();
        const folderName = path.split('/').slice(-2, -1)[0];
        
        if (!fileName) continue;
        
        const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
        const id = fileName.replace('.md', '');
        const section = folderName.replace(/^\d+-/, '').replace(/-/g, ' ');

        content.push({
            id,
            title: cleanTitle,
            content: markdownContent as string,
            section
        });
    }

    return content;
}

// Función para cargar contenido de documentación para desarrolladores
async function loadDevDocsContent(): Promise<ContentItem[]> {
    const modules = import.meta.glob('/src/routes/dev/Docs/**/*.md', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    const content: ContentItem[] = [];
    
    for (const [path, markdownContent] of Object.entries(modules)) {
        const fileName = path.split('/').pop();
        const folderName = path.split('/').slice(-2, -1)[0];
        
        if (!fileName) continue;
        
        const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
        const id = fileName.replace('.md', '');
        const section = folderName.replace(/^\d+-/, '').replace(/-/g, ' ');

        content.push({
            id,
            title: cleanTitle,
            content: markdownContent as string,
            section
        });
    }

    return content;
}

// GET: Obtener contenido para IA
export async function GET({ url }: RequestEvent) {
    try {
        const type = url.searchParams.get('type') || 'all'; // 'user', 'dev', 'all'
        const format = url.searchParams.get('format') || 'json'; // 'json', 'text'
        const moduleId = url.searchParams.get('module'); // ID específico
        const section = url.searchParams.get('section'); // Sección específica

        let userContent: ContentItem[] = [];
        let devContent: ContentItem[] = [];

        // Cargar contenido según el tipo solicitado
        if (type === 'user' || type === 'all') {
            userContent = await loadUserManualContent();
        }
        
        if (type === 'dev' || type === 'all') {
            devContent = await loadDevDocsContent();
        }

        const allContent = [...userContent, ...devContent];

        // Filtrar por módulo específico si se solicita
        if (moduleId) {
            const specificModule = allContent.find(item => item.id === moduleId);
            if (!specificModule) {
                return json({
                    success: false,
                    message: `Módulo "${moduleId}" no encontrado`
                } as AIResponse, { status: 404 });
            }

            if (format === 'text') {
                return new Response(specificModule.content, {
                    headers: {
                        'Content-Type': 'text/plain; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    }
                });
            }

            return json({
                success: true,
                data: specificModule
            } as AIResponse);
        }

        // Filtrar por sección si se solicita
        if (section) {
            const sectionContent = allContent.filter(item => 
                item.section.toLowerCase().includes(section.toLowerCase())
            );
            
            if (format === 'text') {
                const textContent = sectionContent
                    .map(item => `# ${item.title}\n\n${item.content}\n\n---\n\n`)
                    .join('');
                
                return new Response(textContent, {
                    headers: {
                        'Content-Type': 'text/plain; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    }
                });
            }

            return json({
                success: true,
                data: sectionContent,
                totalSections: sectionContent.length
            } as AIResponse);
        }

        // Devolver todo el contenido
        if (format === 'text') {
            const textContent = allContent
                .map(item => `# ${item.section} - ${item.title}\n\n${item.content}\n\n---\n\n`)
                .join('');
            
            return new Response(textContent, {
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }

        // Crear estructura organizada
        const structure = {
            userManual: userContent.reduce((acc, item) => {
                if (!acc[item.section]) acc[item.section] = [];
                acc[item.section].push({
                    id: item.id,
                    title: item.title
                });
                return acc;
            }, {} as Record<string, any[]>),
            devDocs: devContent.reduce((acc, item) => {
                if (!acc[item.section]) acc[item.section] = [];
                acc[item.section].push({
                    id: item.id,
                    title: item.title
                });
                return acc;
            }, {} as Record<string, any[]>)
        };

        return json({
            success: true,
            data: allContent,
            totalSections: allContent.length,
            structure
        } as AIResponse, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });

    } catch (error) {
        console.error('Error en API AI:', error);
        return json({
            success: false,
            message: 'Error interno del servidor'
        } as AIResponse, { status: 500 });
    }
}

// OPTIONS: Para CORS
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

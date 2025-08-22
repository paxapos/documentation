import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
    const { slug } = params;
    
    // Mapeo de slugs a archivos LLM
    const slugToFileMap: Record<string, string> = {
        'introduccion': '11-introduccion.txt',
        'iniciar-sesion': '12-iniciar-sesion.txt',
        'crear-usuarios': '21-crear-usuarios.txt',
        'tipos-de-pago': '22-tipos-de-pago.txt',
        'agregar-personal': '23-agregar-personal.txt',
        'configuracion-impresoras': '24-configuracion-de-impresoras.txt',
        'menu': '25-menu.txt',
        'salon': '32-salon.txt',
        'kds': '33-kitchen-display-system-kds.txt',
        'contabilidad': '34-contabilidad.txt',
        'arqueos': '35-arqueos.txt',
        'compras-stock': '36-compras-y-stock.txt',
        'arca-facturacion': '37-arca-y-facturacion.txt',
        'estadisticas': '38-estadisticas.txt',
        'buchon-bot': '42-buchon-bot.txt'
    };
    
    const fileName = slugToFileMap[slug];
    
    if (!fileName) {
        throw error(404, 'Archivo LLM no encontrado');
    }
    
    try {
        // Usar fetch para cargar el archivo desde static
        const response = await fetch(`/llms/${fileName}`);
        
        if (!response.ok) {
            throw error(404, 'Archivo LLM no encontrado');
        }
        
        const content = await response.text();
        
        // Devolver el contenido como texto plano
        return new Response(content, {
            headers: {
                'content-type': 'text/plain; charset=utf-8',
                'cache-control': 'public, max-age=3600' // Cache por 1 hora
            }
        });
    } catch (err) {
        console.error('Error reading LLM file:', err);
        throw error(500, 'Error al cargar el archivo LLM');
    }
};

export const prerender = true;

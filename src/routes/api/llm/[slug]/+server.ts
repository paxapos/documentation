import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

async function getSlugMapping(): Promise<Record<string, string>> {
    try {
        // Intentar cargar el mapeo dinámico desde files-register.json
        const response = await fetch('/llms/files-register.json');
        if (response.ok) {
            const register = await response.json();
            
            // Generar mapeo dinámico
            const slugMapping: Record<string, string> = {};
            register.detailed_files.forEach((file: any) => {
                const fileSlug = file.original_md
                    .replace(/^\d+-/, '')
                    .replace(/\.md$/, '')
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[áàäâ]/g, 'a')
                    .replace(/[éèëê]/g, 'e')
                    .replace(/[íìïî]/g, 'i')
                    .replace(/[óòöô]/g, 'o')
                    .replace(/[úùüû]/g, 'u')
                    .replace(/ñ/g, 'n')
                    .replace(/[^\w-]/g, '')
                    .replace(/-+/g, '-')
                    .replace(/^-|-$/g, '');
                slugMapping[fileSlug] = file.txt_file;
            });
            
            return slugMapping;
        }
    } catch (error) {
        console.warn('No se pudo cargar registro automático:', error);
    }
    
    // Mapeo de fallback si no se puede cargar el registro
    return {
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
        'preguntas-frecuentes': '52-preguntas-frecuentes.txt',
        'buchon-bot': '51-buchon-bot.txt'
    };
}

export const GET: RequestHandler = async ({ params, url }) => {
    const { slug } = params;
    
    // Obtener mapeo dinámico
    const slugMapping = await getSlugMapping();
    const fileName = slugMapping[slug];
    
    if (!fileName) {
        throw error(404, 'Archivo LLM no encontrado');
    }
    
    // Redirigir directamente al archivo estático
    throw redirect(302, `/llms/${fileName}`);
};

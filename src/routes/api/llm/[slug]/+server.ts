import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
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
    
    // Redirigir directamente al archivo estático
    throw redirect(302, `/llms/${fileName}`);
};

// @ts-nocheck
import { dev } from '$app/environment';

// Cache para mapeos generados
let slugMappingCache = null;

// Función para convertir nombre de archivo MD a slug
function fileNameToSlug(fileName) {
    return fileName
        .replace(/^\d+-/, '') // Remover prefijo numérico
        .replace(/\.md$/, '') // Remover extensión
        .toLowerCase()
        .replace(/\s+/g, '-') // Espacios a guiones
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')  
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[^\w-]/g, '') // Remover caracteres especiales
        .replace(/-+/g, '-') // Múltiples guiones a uno solo
        .replace(/^-|-$/g, ''); // Remover guiones al inicio y final
}

// Generar mapeo automático de slugs a archivos TXT
export async function generateSlugToFileMapping() {
    // En desarrollo, siempre recarga. En producción, usa cache
    if (!dev && slugMappingCache) {
        return slugMappingCache;
    }

    try {
        // Cargar el registro de archivos generados
        const registerResponse = await fetch('/llms/files-register.json');
        if (!registerResponse.ok) {
            throw new Error('No se pudo cargar el registro de archivos');
        }
        
        const register = await registerResponse.json();
        const mapping = {};

        // Generar mapeo automático para cada archivo
        register.detailed_files.forEach(file => {
            // Generar slug desde el archivo MD original
            const slug = fileNameToSlug(file.original_md);
            mapping[slug] = file.txt_file;
        });

        console.log(`🔗 Mapeo automático generado para ${Object.keys(mapping).length} archivos`);
        
        // Cache en producción
        if (!dev) {
            slugMappingCache = mapping;
        }

        return mapping;

    } catch (error) {
        console.warn('Error generando mapeo automático, usando mapeo de fallback:', error);
        
        // Mapeo de fallback estático para desarrollo sin archivos generados
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
            'biblioteca-de-drivers': '41-biblioteca-de-drivers.txt',
            'sam4s-giant-100': '42-sam4s-giant-100.txt',
            'citizen-ct-s310ii': '43-citizen-ct-s310ii.txt',
            'epson-tm-t20': '44-epson-tm-t20.txt',
            'drivers-genericos': '45-drivers-genericos.txt',
            'epson-tm-t88v': '46-epson-tm-t88.txt',
            'preguntas-frecuentes': '51-preguntas-frecuentes.txt',
            'buchon-bot': '52-buchon-bot.txt'
        };
    }
}

// Obtener el archivo TXT correspondiente a un slug
export async function getTxtFileForSlug(slug) {
    const mapping = await generateSlugToFileMapping();
    return mapping[slug] || null;
}

// Obtener todos los slugs disponibles con sus archivos
export async function getAllSlugMappings() {
    return await generateSlugToFileMapping();
}
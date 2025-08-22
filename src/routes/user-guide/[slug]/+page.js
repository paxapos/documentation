import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

// Mapeo de slugs a archivos markdown
const slugToFile = {
    'introduccion': '11-Introduccion.md',
    'iniciar-sesion': '12-Iniciar-sesión.md',
    'crear-usuarios': '21-Crear-Usuarios.md',
    'tipos-de-pago': '22-Tipos-De-Pago.md',
    'agregar-personal': '23-Agregar-Personal.md',
    'configuracion-impresoras': '24-Configuración-de-Impresoras.md',
    'menu': '25-Menú.md',
    'salon': '32-Salón.md',
    'kds': '33-Kitchen-Display-System-(KDS).md',
    'contabilidad': '34-Contabilidad.md',
    'arqueos': '35-Arqueos.md',
    'compras-stock': '36-Compras-y-Stock.md',
    'arca-facturacion': '37-ARCA-y-Facturación.md',
    'estadisticas': '38-Estadísticas.md',
    'buchon-bot': '42-Buchón-Bot.md'
};

// Mapeo de SEO específico por módulo
const seoData = {
    'introduccion': {
        title: 'Introducción a PaxaPOS - Primeros Pasos',
        description: 'Aprende los conceptos básicos de PaxaPOS y cómo dar tus primeros pasos en el sistema de gestión para restaurantes más completo de Argentina.',
        keywords: 'introducción paxapos, primeros pasos, tutorial básico, sistema restaurante'
    },
    'iniciar-sesion': {
        title: 'Cómo Iniciar Sesión en PaxaPOS',
        description: 'Guía paso a paso para acceder a tu cuenta de PaxaPOS, recuperar contraseñas y configurar el acceso seguro a tu sistema.',
        keywords: 'login paxapos, iniciar sesión, acceso sistema, contraseña'
    },
    'crear-usuarios': {
        title: 'Crear y Gestionar Usuarios en PaxaPOS',
        description: 'Aprende a crear usuarios, asignar roles y permisos, gestionar personal y configurar accesos seguros en tu restaurante.',
        keywords: 'crear usuarios paxapos, gestión personal, roles permisos, administración usuarios'
    },
    'tipos-de-pago': {
        title: 'Configurar Métodos de Pago en PaxaPOS',
        description: 'Configura todos los métodos de pago: efectivo, tarjetas, transferencias, QR. Aprende a gestionar comisiones y tiempos de acreditación.',
        keywords: 'métodos pago paxapos, tarjetas crédito débito, efectivo, transferencias, mercadopago'
    },
    'agregar-personal': {
        title: 'Gestión de Personal y Mozos en PaxaPOS',
        description: 'Registra mozos, meseros y vendedores. Controla ventas por empleado y optimiza la gestión del personal en tu restaurante.',
        keywords: 'agregar personal paxapos, mozos meseros, gestión empleados, control ventas'
    },
    'configuracion-impresoras': {
        title: 'Configuración de Impresoras en PaxaPOS',
        description: 'Configura impresoras para tickets, comandas de cocina y facturas. Guía completa para impresión automática.',
        keywords: 'configurar impresoras paxapos, tickets comandas, impresión automática, facturas'
    },
    'menu': {
        title: 'Configuración del Menú en PaxaPOS',
        description: 'Carga productos, crea categorías, gestiona precios y organiza tu menú digital. Guía completa para configurar tu carta.',
        keywords: 'configurar menú paxapos, cargar productos, categorías, precios, carta digital'
    },
    'salon': {
        title: 'Módulo de Salón PaxaPOS - Gestión de Mesas',
        description: 'Aprende a gestionar mesas, tomar pedidos, asignar mozos y optimizar el servicio en tu salón con PaxaPOS.',
        keywords: 'salón paxapos, gestión mesas, tomar pedidos, mozos, servicio restaurante'
    },
    'kds': {
        title: 'KDS - Sistema de Pantalla de Cocina PaxaPOS',
        description: 'Configura y usa el Kitchen Display System para mejorar la comunicación entre salón y cocina, reducir tiempos y optimizar pedidos.',
        keywords: 'KDS paxapos, pantalla cocina, kitchen display system, gestión pedidos, comunicación cocina'
    },
    'contabilidad': {
        title: 'Contabilidad y Reportes en PaxaPOS',
        description: 'Gestiona la contabilidad de tu restaurante: arqueos, reportes de ventas, control de caja y análisis financiero completo.',
        keywords: 'contabilidad paxapos, arqueos, reportes ventas, control caja, análisis financiero'
    },
    'arqueos': {
        title: 'Arqueos de Caja en PaxaPOS',
        description: 'Controla el dinero de tu caja diariamente. Aprende a realizar arqueos, controlar faltantes y mantener el control financiero.',
        keywords: 'arqueos paxapos, control caja, dinero diario, faltantes sobrantes, control financiero'
    },
    'compras-stock': {
        title: 'Gestión de Compras y Stock en PaxaPOS',
        description: 'Administra inventario, controla stock, gestiona proveedores y optimiza las compras de tu restaurante.',
        keywords: 'compras stock paxapos, inventario, proveedores, control mercadería, gestión compras'
    },
    'arca-facturacion': {
        title: 'Facturación AFIP en PaxaPOS',
        description: 'Configura la facturación electrónica con AFIP, emite comprobantes fiscales y cumple todas las normativas argentinas.',
        keywords: 'facturación AFIP paxapos, facturación electrónica argentina, comprobantes fiscales, normativas AFIP'
    },
    'estadisticas': {
        title: 'Estadísticas y Reportes de Ventas PaxaPOS',
        description: 'Analiza el rendimiento de tu negocio con reportes detallados de ventas, estadísticas y métricas de rentabilidad.',
        keywords: 'estadísticas paxapos, reportes ventas, análisis negocio, métricas rentabilidad'
    },
    'buchon-bot': {
        title: 'Buchón Bot - Notificaciones Inteligentes PaxaPOS',
        description: 'Configura alertas automáticas por Telegram para controlar tu negocio a distancia y recibir notificaciones importantes.',
        keywords: 'buchón bot paxapos, notificaciones telegram, alertas automáticas, control remoto'
    }
};

export async function load({ params }) {
    const { slug } = params;
    
    // Verificar si el slug existe
    if (!(slug in slugToFile)) {
        throw error(404, 'Módulo no encontrado');
    }

    const fileName = slugToFile[slug];
    
    try {
        let markdownContent = '';
        let foundPath = '';

        // Importar dinámicamente los módulos
        const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
            query: '?raw',
            import: 'default'
        });

        // Buscar el archivo correcto
        for (const [path, loader] of Object.entries(modules)) {
            if (path.includes(fileName)) {
                markdownContent = String(await loader());
                foundPath = path;
                break;
            }
        }

        if (!markdownContent) {
            throw error(404, 'Contenido no encontrado');
        }

        // Convertir markdown a HTML
        const htmlContent = await marked(markdownContent);
        
        // Extraer título del markdown
        const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1].replace(/[🚀🔑👥💳👨‍💼🖨️🍽️🏪👨‍🍳📊💰📦🏛️📈🤖]/g, '').trim() : fileName.replace('.md', '');

        return {
            slug,
            title,
            content: htmlContent,
            rawMarkdown: markdownContent,
            seo: (slug in seoData) ? seoData[/** @type {keyof typeof seoData} */ (slug)] : {
                title: `${title} - Manual PaxaPOS`,
                description: `Aprende a usar ${title} en PaxaPOS. Guía detallada paso a paso con ejemplos prácticos.`,
                keywords: `${title} paxapos, tutorial, guía, manual usuario`
            }
        };
    } catch (err) {
        console.error('Error loading module:', err);
        throw error(500, 'Error al cargar el módulo');
    }
}
// Definir todas las rutas que deben ser prerenderizadas
export function entries() {
    return [
        { slug: 'introduccion' },
        { slug: 'iniciar-sesion' },
        { slug: 'crear-usuarios' },
        { slug: 'tipos-de-pago' },
        { slug: 'agregar-personal' },
        { slug: 'configuracion-impresoras' },
        { slug: 'menu' },
        { slug: 'salon' },
        { slug: 'kds' },
        { slug: 'contabilidad' },
        { slug: 'arqueos' },
        { slug: 'compras-stock' },
        { slug: 'arca-facturacion' },
        { slug: 'estadisticas' },
        { slug: 'buchon-bot' }
    ];
}

export { prerender } from './+page.js';

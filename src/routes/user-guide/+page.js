// @ts-nocheck
import { getModuleCategories } from '$lib/utils/markdownDetector.js';

export const prerender = true;

export async function load() {
    try {
        const moduleCategories = await getModuleCategories();
        
        // Generar lista plana de módulos con íconos automáticos
        const modulesList = [];
        
        // Mapeo de íconos por categoría
        const categoryIcons = {
            'Primeros Pasos': '🚀',
            'Configuración': '⚙️',
            'Operaciones': '🍽️',
            'Biblioteca de Drivers': '🖨️',
            'Extra': '🔧',
            'Otros': '📄'
        };

        // Mapeo de íconos específicos por tipo de módulo
        const moduleIcons = {
            'introduccion': '🚀',
            'iniciar-sesion': '🔐',
            'crear-usuarios': '👥',
            'tipos-de-pago': '💳',
            'agregar-personal': '👨‍💼',
            'configuracion-impresoras': '🖨️',
            'menu': '🍽️',
            'salon': '🏪',
            'kds': '👨‍🍳',
            'contabilidad': '📊',
            'arqueos': '💰',
            'compras-stock': '📦',
            'arca-facturacion': '🏛️',
            'estadisticas': '📈',
            'buchon-bot': '🤖',
            'biblioteca-de-drivers': '🖨️'
        };

        moduleCategories.forEach(category => {
            category.modules.forEach(module => {
                const icon = moduleIcons[module.slug] || categoryIcons[category.title] || '📄';
                
                modulesList.push({
                    slug: module.slug,
                    title: module.title,
                    description: `Guía completa sobre ${module.title.toLowerCase()} en PaxaPOS`,
                    category: category.title,
                    icon: icon,
                    id: module.fileName.replace('.md', '').toLowerCase()
                });
            });
        });

        return {
            modulesList,
            moduleCategories
        };
    } catch (error) {
        console.error('Error cargando módulos:', error);
        return {
            modulesList: [],
            moduleCategories: []
        };
    }
}

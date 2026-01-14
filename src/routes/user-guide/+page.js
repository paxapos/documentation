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
			Configuración: '⚙️',
			Operaciones: '🍽️',
			'Biblioteca de Drivers': '🖨️',
			Extra: '🔧',
			Otros: '📄',
		};

		// Mapeo de íconos específicos por tipo de módulo
		const moduleIcons = {
			introduccion: '🚀',
			'iniciar-sesion': '🔐',
			'crear-usuarios': '👥',
			'tipos-de-pago': '💳',
			'agregar-personal': '👨‍💼',
			'configuracion-de-impresoras': '🖨️',
			menu: '🍽️',
			salon: '🏪',
			'kitchen-display-system-kds': '👨‍🍳',
			contabilidad: '📊',
			arqueos: '💰',
			'compras-y-stock': '📦',
			'arca-y-facturacion': '🏛️',
			estadisticas: '📈',
			'business-intelligence': '🧠',
			'buchon-bot': '🤖',
			'biblioteca-de-drivers': '🖨️',
			'sam4s-giant-100': '🖨️',
			'citizen-ct-s310ii': '🖨️',
			'epson-tm-t20': '🖨️',
			'epson-tm-t88': '🖨️',
			'drivers-genericos': '🖨️',
			'preguntas-frecuentes': '❓',
		};

		moduleCategories.forEach((category) => {
			category.modules.forEach((module) => {
				const icon = moduleIcons[module.slug] || categoryIcons[category.title] || '📄';

				modulesList.push({
					slug: module.slug,
					title: module.title,
					description: `Guía completa sobre ${module.title.toLowerCase()}`,
					category: category.title,
					icon: icon,
					id: module.fileName.replace('.md', '').toLowerCase(),
				});
			});
		});

		return {
			modulesList,
			moduleCategories,
		};
	} catch (error) {
		console.error('Error cargando módulos:', error);
		return {
			modulesList: [],
			moduleCategories: [],
		};
	}
}

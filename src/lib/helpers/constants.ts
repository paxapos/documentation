
// Datos estáticos para búsqueda de fallback
export const searchableContent = [
	{ title: 'Introduccion', href: '/user-guide', type: 'Manual de Usuario', id: '11-Introduccion' },
	{ title: 'Iniciar sesión', href: '/user-guide', type: 'Manual de Usuario', id: '12-Iniciar-sesión' },
	{ title: 'Crear Usuarios', href: '/user-guide', type: 'Manual de Usuario', id: '21-Crear-Usuarios' },
	{ title: 'Tipos De Pago', href: '/user-guide', type: 'Manual de Usuario', id: '22-Tipos-De-Pago' },
	{ title: 'Agregar Personal', href: '/user-guide', type: 'Manual de Usuario', id: '23-Agregar-Personal' },
	{ title: 'Configuración de Impresoras', href: '/user-guide', type: 'Manual de Usuario', id: '24-Configuración-de-Impresoras' },
	{ title: 'Menú', href: '/user-guide', type: 'Manual de Usuario', id: '25-Menú' },
	{ title: 'Salón', href: '/user-guide', type: 'Manual de Usuario', id: '32-Salón' },
	{ title: 'Kitchen Display System (KDS)', href: '/user-guide', type: 'Manual de Usuario', id: '33-Kitchen-Display-System-(KDS)' },
	{ title: 'Contabilidad', href: '/user-guide', type: 'Manual de Usuario', id: '34-Contabilidad' },
	{ title: 'Arqueos', href: '/user-guide', type: 'Manual de Usuario', id: '35-Arqueos' },
	{ title: 'Compras y Stock', href: '/user-guide', type: 'Manual de Usuario', id: '36-Compras-y-Stock' },
	{ title: 'AFIP y Facturación', href: '/user-guide', type: 'Manual de Usuario', id: '37-AFIP-y-Facturación' },
	{ title: 'Estadísticas', href: '/user-guide', type: 'Manual de Usuario', id: '38-Estadísticas' },
	{ title: 'Buchón Bot', href: '/user-guide', type: 'Manual de Usuario', id: '42-Buchón-Bot' },
	{ title: 'Propina', href: '/user-guide', type: 'Manual de Usuario', id: '43-Propina' },
	// Documentación para desarrolladores
	{ title: 'Documentation one', href: '/dev', type: 'Documentación Desarrolladores', id: 'Documentation-one' },
	{ title: 'Sample two', href: '/dev', type: 'Documentación Desarrolladores', id: 'Sample-two' },
	{ title: 'Svelte mdtest', href: '/dev', type: 'Documentación Desarrolladores', id: 'svelte-mdtest' },
	{ title: 'Webhooks', href: '/dev', type: 'Documentación Desarrolladores', id: 'Webhooks' }
];

export const navigation = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Dev documentation', href: '/dev' },
	{ name: 'Manual de Usuario', href: '/user-guide' }
];

// Función para indexar contenido dinámico
export interface SearchableItem {
	title: string;
	href: string;
	type: string;
	content?: string;
	id?: string;
}

// Función de búsqueda simplificada pero efectiva
export async function searchContent(query: string, limit: number = 8): Promise<SearchableItem[]> {
	if (query.length < 2) return [];
	
	const searchTerm = query.toLowerCase();
	
	// Buscar en contenido estático
	const results = searchableContent.filter(item => {
		const titleMatch = item.title.toLowerCase().includes(searchTerm);
		const typeMatch = item.type.toLowerCase().includes(searchTerm);
		
		return titleMatch || typeMatch;
	});
	
	// Ordenar por relevancia (título primero)
	results.sort((a, b) => {
		const aTitle = a.title.toLowerCase().includes(searchTerm);
		const bTitle = b.title.toLowerCase().includes(searchTerm);
		
		if (aTitle && !bTitle) return -1;
		if (!aTitle && bTitle) return 1;
		
		return 0;
	});
	
	return results.slice(0, limit);
}

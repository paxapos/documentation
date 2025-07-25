
import { replacePaxaPOS } from './textReplacer';

// Configuración de visibilidad de características
export const FEATURE_FLAGS = {
	showDevDocumentation: false, // Cambiar a true para mostrar la documentación de desarrolladores
};

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
	...(FEATURE_FLAGS.showDevDocumentation ? [{ name: 'Dev documentation', href: '/dev' }] : []),
	{ name: 'Manual de Usuario', href: '/user-guide' }
];

// Función para indexar contenido dinámico
export interface SearchableItem {
	title: string;
	href: string;
	type: string;
	content?: string;
	id?: string;
	preview?: string;
}

// Datos dinámicos para búsqueda con contenido real
export const searchableContentWithContent = [
	{ 
		title: 'Bienvenido a PaxaPOS', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '11-Introduccion',
		content: 'PaxaPOS es un sistema de gestión integral pensado para adaptarse a las necesidades de tu comercio. Desde un solo lugar, permite administrar operaciones clave como la toma de pedidos, el control de stock, la facturación, el seguimiento de ventas y la gestión del personal, de forma clara y eficiente. Con una interfaz moderna e intuitiva, PaxaPOS acompaña el trabajo diario, ayudando a reducir errores, optimizar tiempos y mantener una visión ordenada del funcionamiento general del negocio. Optimiza la gestión de ventas y operaciones. Controla el inventario y minimiza pérdidas. Administra eficientemente al personal y sus roles. Accede a estadísticas clave para la toma de decisiones. Gestiona tu cartera de clientes de forma efectiva. Personaliza la plataforma según tus necesidades operativas. Monitorea y opera tu negocio de forma remota.'
	},
	{ 
		title: 'Iniciar sesión', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '12-Iniciar-sesión',
		content: 'Para acceder a PaxaPOS, necesitarás las credenciales proporcionadas por tu administrador. El proceso de login es simple y seguro. Ingresa tu nombre de usuario y contraseña en los campos correspondientes. Una vez autenticado, serás dirigido al panel principal del sistema donde podrás acceder a todas las funcionalidades según tu rol asignado.'
	},
	{ 
		title: 'Primeros pasos para configurar tu sistema', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '21-Crear-Usuarios',
		content: 'Al ingresar al sistema por primera vez, es fundamental realizar algunas configuraciones básicas para sentar las bases de su operación. Estos ajustes te permitirán personalizar el sistema a las necesidades de tu comercio y empezar a trabajar de manera efectiva. En muchos módulos del sistema, algunas opciones de configuración o carga adicional no se muestran de forma directa. Para acceder a estas funciones extras como proveedores, rubros, impuestos, entre otras, haz clic en el ícono de la P roja que se encuentra en la parte superior. Este acceso te muestra configuraciones complementarias específicas del módulo en el que estás trabajando. Una vez dentro del sistema, busca y haz clic en la P roja. Se abrirá una ventana con varias opciones de configuración. Aquí encontrarás los módulos para crear usuarios, definir tipos de pago y agregar a tu equipo de trabajo mozos. Este módulo te permite dar de alta a las personas que utilizarán el sistema, asignándoles roles y permisos específicos. Dentro de la ventana de configuración, selecciona el módulo Crear Usuarios. Deberás completar los siguientes campos para cada nuevo usuario: Nombre El nombre completo del usuario. Mail La dirección de correo electrónico del usuario, que puede servir como identificador de acceso. Contraseña Una contraseña segura para el acceso del usuario al sistema. Rol Asigna un rol al usuario ej., Administrador, Vendedor, Mozo, Cajero. El rol determinará las funcionalidades a las que el usuario tendrá acceso.'
	},
	{ 
		title: 'Tipos De Pago', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '22-Tipos-De-Pago',
		content: 'Configurar los tipos de pago es esencial para que el sistema pueda procesar correctamente las transacciones. En este módulo podrás definir todos los métodos de pago que acepta tu comercio: efectivo, tarjetas de crédito, débito, transferencias, cheques, etc. Cada método puede tener configuraciones específicas como comisiones, límites o integraciones con sistemas de pago externos.'
	},
	{ 
		title: 'Agregar Personal', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '23-Agregar-Personal',
		content: 'La gestión del personal es fundamental para el funcionamiento del negocio. En esta sección podrás dar de alta a mozos, cajeros, cocineros y demás empleados que trabajarán con el sistema. Cada empleado puede tener roles específicos, horarios de trabajo, comisiones asignadas y permisos particulares según su función en el establecimiento.'
	},
	{ 
		title: 'Configuración de Impresoras', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '24-Configuración-de-Impresoras',
		content: 'Una correcta configuración de impresoras es crucial para el funcionamiento del sistema. Aquí podrás configurar impresoras para tickets, comandas de cocina, facturas y reportes. El sistema soporta diferentes tipos de impresoras: térmicas, matriciales y láser. Cada impresora puede asignarse a funciones específicas como caja, cocina o administración.'
	},
	{ 
		title: 'Menú', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '25-Menú',
		content: 'El módulo de menú te permite crear y gestionar todos los productos y servicios que ofrece tu establecimiento. Podrás organizar items por categorías, asignar precios, definir modificadores, ingredientes, y configurar opciones especiales. También puedes manejar promociones, combos y menús del día de manera sencilla y eficiente.'
	},
	{ 
		title: 'Salón', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '32-Salón',
		content: 'El módulo de salón es el corazón operativo del sistema para restaurantes y bares. Aquí podrás gestionar mesas, tomar pedidos, dividir cuentas, aplicar descuentos y procesar pagos. La interfaz visual te permite ver el estado de cada mesa en tiempo real: libre, ocupada, con pedido listo, etc. Facilita enormemente la gestión del servicio al cliente.'
	},
	{ 
		title: 'Kitchen Display System (KDS)', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '33-Kitchen-Display-System-(KDS)',
		content: 'El Kitchen Display System KDS revoluciona la comunicación entre el salón y la cocina. Los pedidos se muestran automáticamente en pantallas de cocina, eliminando la necesidad de tickets impresos. Los cocineros pueden ver los pedidos en tiempo real, marcar platos como listos y gestionar los tiempos de preparación de manera más eficiente.'
	},
	{ 
		title: 'Contabilidad', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '34-Contabilidad',
		content: 'El módulo de contabilidad te proporciona un control completo sobre las finanzas del negocio. Podrás generar reportes de ventas, controlar gastos, manejar cuentas por cobrar y pagar, y llevar un registro detallado de todas las transacciones. Incluye herramientas para el análisis financiero y la toma de decisiones basada en datos reales.'
	},
	{ 
		title: 'Arqueos', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '35-Arqueos',
		content: 'Los arqueos son fundamentales para el control de caja. Este módulo te permite realizar cierres diarios, conciliar efectivo y medios de pago, detectar diferencias y generar reportes detallados. Los arqueos aseguran la transparencia en el manejo del dinero y facilitan la detección temprana de irregularidades.'
	},
	{ 
		title: 'Compras y Stock', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '36-Compras-y-Stock',
		content: 'Gestiona tu inventario de manera inteligente con el módulo de compras y stock. Controla niveles de inventario, genera órdenes de compra automáticas, gestiona proveedores, y rastrea costos. El sistema te alerta cuando los productos están por agotarse y te ayuda a optimizar las compras para minimizar desperdicios y maximizar rentabilidad.'
	},
	{ 
		title: 'AFIP y Facturación', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '37-AFIP-y-Facturación',
		content: 'Mantente al día con las obligaciones fiscales a través del módulo de AFIP y facturación. Genera facturas electrónicas automáticamente, cumple con las normativas vigentes, maneja diferentes tipos de comprobantes y mantén tu situación fiscal en orden. El sistema se integra directamente con los servicios de AFIP para mayor comodidad y precisión.'
	},
	{ 
		title: 'Estadísticas', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '38-Estadísticas',
		content: 'Toma decisiones informadas con el poderoso módulo de estadísticas. Analiza ventas por período, productos más vendidos, rendimiento del personal, horarios de mayor actividad y tendencias del negocio. Los reportes visuales y gráficos te ayudan a identificar oportunidades de crecimiento y áreas de mejora.'
	},
	{ 
		title: 'Buchón Bot', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '42-Buchón-Bot',
		content: 'Buchón Bot es tu asistente inteligente que monitorea el funcionamiento del sistema las 24 horas. Te notifica sobre eventos importantes, irregularidades, recordatorios de tareas pendientes y alertas del sistema. Mantiene informado al personal administrativo sobre el estado general del negocio incluso cuando no están físicamente presentes.'
	},
	{ 
		title: 'Propina', 
		href: '/user-guide', 
		type: 'Manual de Usuario', 
		id: '43-Propina',
		content: 'Gestiona las propinas de manera justa y transparente. El módulo de propinas permite configurar diferentes esquemas de distribución: por porcentaje, por turnos, individual o colectiva. Lleva un registro detallado de las propinas recibidas y su distribución entre el personal, asegurando equidad y motivación en el equipo de trabajo.'
	}
];

// Función de búsqueda de texto completo mejorada
export async function searchContent(query: string, limit: number = 8): Promise<SearchableItem[]> {
	if (query.length < 2) return [];
	
	const searchTerm = query.toLowerCase();
	
	// Filtrar contenido basado en feature flags
	const filteredContent = searchableContentWithContent.filter(item => {
		if (!FEATURE_FLAGS.showDevDocumentation && item.type === 'Documentación Desarrolladores') {
			return false;
		}
		return true;
	});
	
	const results: Array<SearchableItem & { score: number; preview?: string }> = [];
	
	for (const item of filteredContent) {
		let score = 0;
		let preview = '';
		
		// Buscar en título (mayor peso)
		if (item.title.toLowerCase().includes(searchTerm)) {
			score += 10;
		}
		
		// Buscar en tipo
		if (item.type.toLowerCase().includes(searchTerm)) {
			score += 5;
		}
		
		// Buscar en contenido
		if (item.content && item.content.toLowerCase().includes(searchTerm)) {
			score += 3;
			
			// Bonus por múltiples ocurrencias en contenido
			const matches = (item.content.toLowerCase().match(new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
			score += matches * 0.5;
			
			// Crear preview del contenido
			const contentLower = item.content.toLowerCase();
			const queryIndex = contentLower.indexOf(searchTerm);
			if (queryIndex !== -1) {
				const start = Math.max(0, queryIndex - 50);
				const end = Math.min(item.content.length, queryIndex + searchTerm.length + 100);
				preview = '...' + item.content.substring(start, end) + '...';
			}
		}
		
		// Buscar palabras parciales
		const searchWords = searchTerm.split(' ').filter(word => word.length > 1);
		for (const word of searchWords) {
			if (item.title.toLowerCase().includes(word)) score += 2;
			if (item.content && item.content.toLowerCase().includes(word)) score += 1;
		}
		
		if (score > 0) {
			results.push({ 
				...item, 
				score, 
				preview,
				title: replacePaxaPOS(item.title),
				type: replacePaxaPOS(item.type),
				content: item.content ? replacePaxaPOS(item.content) : undefined
			});
		}
	}
	
	// Ordenar por score descendente
	results.sort((a, b) => b.score - a.score);
	
	// Remover el score del resultado final pero mantener preview
	return results.slice(0, limit).map(({ score, ...item }) => item);
}

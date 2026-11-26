/** Cada URL vieja del mapa (con y sin barra final) → destino. Lo usan los tests unitarios y el de integración. */
export const MANUAL_REDIRECT_CASES: ReadonlyArray<readonly [string, string]> = [
	['/user-guide/arca-y-facturacion', '/user-guide/punto-de-venta'],
	['/user-guide/compras-y-stock', '/user-guide/stock-mercaderias'],
	['/user-guide/reportes', '/user-guide/tablero-general'],
	['/user-guide/dashboard-home', '/user-guide/tablero-general'],
	['/user-guide/roles', '/user-guide/permisos-por-rol'],
	['/user-guide/configuracion-impresion', '/user-guide/perfiles-de-impresion'],
	['/user-guide/configuracion-de-impresoras', '/user-guide/impresoras'],
	['/user-guide/config-del-comercio', '/user-guide/configuracion-general'],
	['/user-guide/crear-usuarios', '/user-guide/usuarios-del-sistema'],
	['/user-guide/agregar-personal', '/user-guide/empleados'],
	['/user-guide/factura-manual', '/user-guide/cargar-gasto'],
	['/user-guide/historial-de-facturas', '/user-guide/gastos'],
	['/user-guide/pagos', '/user-guide/pagos-hechos'],
	['/user-guide/resumen-de-deuda', '/user-guide/deuda-con-proveedores'],
	[
		'/user-guide/06-faq-cajero-ingreso-egreso-cajon',
		'/user-guide/faq-cajero-ingreso-egreso-cajon',
	],
	[
		'/user-guide/151-06-faq-cajero-ingreso-egreso-cajon',
		'/user-guide/faq-cajero-ingreso-egreso-cajon',
	],
	['/user-guide/01-ia-conectar-claude', '/user-guide/ia-conectar-claude'],
	['/user-guide/156-01-ia-conectar-claude', '/user-guide/ia-conectar-claude'],
];

/** Headers de seguridad que mandaba nginx (`add_header … always`), copiados tal cual. */
export const EXPECTED_SECURITY_HEADERS: Readonly<Record<string, string>> = {
	'X-Frame-Options': 'SAMEORIGIN',
	'X-Content-Type-Options': 'nosniff',
	'X-XSS-Protection': '0',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
	'Content-Security-Policy':
		"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'",
};

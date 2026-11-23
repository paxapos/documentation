/**
 * Regresión de relevancia de `search` contra el manual real: para cada consulta (como la escribiría
 * un comerciante), alguno de los 3 primeros resultados tiene que ser de un artículo esperado.
 * Si un cambio de contenido o de ranking rompe una fila, mirá el top real antes de tocar la tabla.
 */
import { describe, expect, it } from 'vitest';
import { buildMcpIndex } from '../scripts/generate-mcp-index.mjs';
import { buildSearchUnits, queryTerms, search, stem } from '../server/mcp-search.mjs';

const { index } = buildMcpIndex({ contentDates: {} });
const units = buildSearchUnits(index);

/** La sección de 27 KB de Configuración general que se colaba en casi todo. */
const CONFIG_GIGANTE = 'manual:configuracion-general#como-se-usa-la-pantalla';

/** consulta → prefijos de id aceptables (sin `manual:`) dentro del top 3. */
const CASES: ReadonlyArray<readonly [string, readonly string[]]> = [
	// Facturar a un cliente: se emite desde la mesa (Paso 8 del Salón) y requiere el trámite en
	// ARCA y el punto de venta. Factura Manual es para facturas de proveedores: no es la respuesta.
	['cómo facturar', ['salon-de-ventas', 'punto-de-venta', 'puntos-de-venta-pdv']],
	['como hago una factura', ['salon-de-ventas', 'punto-de-venta', 'puntos-de-venta-pdv']],
	['propinas', ['medios-de-cobro']],
	['no puedo cerrar la mesa', ['salon-de-ventas']],
	['agregar un producto nuevo', ['maestro-de-productos']],
	['facturación electrónica', ['punto-de-venta', 'puntos-de-venta-pdv']],
	['arqueo de caja', ['arqueos-de-caja']],
	['cierre de caja', ['arqueos-de-caja']],
	['conectar claude', ['ia-conectar-claude']],
	['impresora no imprime', ['impresoras']],
	['manual desde asistente', ['ia-manual-por-mcp']],
	['dar de alta un empleado', ['empleados']],
	['cargar una compra', ['crear-orden-compra', 'factura-manual', 'historial-de-compras']],
	['stock', ['stock-mercaderias', 'stock-subproductos', 'movimientos-de-stock']],
	['cambiar el precio de un producto', ['menu#paso-3', 'maestro-de-productos']],
	['abrir turno', ['arqueos-de-caja']],
	['nota de crédito', ['salon-de-ventas', 'tablero-general', 'factura-manual']],
	[
		'mercado pago',
		['transacciones-mercadopago', 'medios-de-cobro', 'configuracion-procesadores'],
	],
	['recuperar contraseña', ['recuperar-contrasena']],
	['reservas', ['nueva-reserva', 'listado-de-reservas', 'grilla-de-reservas']],
	['sueldos', ['sueldos-y-jornales']],
	['bot de whatsapp', ['omnibot-']],
	['proveedores', ['proveedores']],
	['hacer un descuento', ['descuentos']],
	['reabrir una mesa cerrada', ['faq-mozo-reabrir-mesa-anulada']],
];

/** Consultas de configuración: ahí la sección grande de Configuración general sí puede salir. */
const CONFIG_QUERIES = ['datos fiscales del comercio', 'configuración general'];

const top3 = (query: string) => search(units, query, { limit: 3 }).map((r) => r.id);

describe('relevancia: tabla de regresión (top 3)', () => {
	it.each(CASES)('"%s"', (query, expected) => {
		const ids = top3(query);
		const ok = ids.some((id) =>
			expected.some((prefix) => id.replace(/^manual:/, '').startsWith(prefix)),
		);
		expect(ok, `top 3 de "${query}": ${ids.join(', ')}`).toBe(true);
	});

	it.each(CASES.map(([q]) => q))('"%s" no trae la sección gigante de configuración', (query) => {
		expect(top3(query)).not.toContain(CONFIG_GIGANTE);
	});

	it.each(CONFIG_QUERIES)('"%s" (de configuración) → configuracion-general', (query) => {
		expect(top3(query).some((id) => id.startsWith('manual:configuracion-general'))).toBe(true);
	});
});

describe('relevancia: subsecciones ### (paso exacto)', () => {
	it.each([
		['cómo facturar', 'manual:salon-de-ventas#paso-8-emiti-la-factura'],
		['como hago una factura', 'manual:salon-de-ventas#paso-8-emiti-la-factura'],
		['agregar un producto nuevo', 'manual:maestro-de-productos#paso-3-crea-un-producto'],
		['cerrar la mesa', 'manual:salon-de-ventas#paso-6-'],
		['factura responsable inscripto', 'manual:salon-de-ventas#paso-8-emiti-la-factura'],
	])('"%s" → %s en el top 3', (query, prefix) => {
		const ids = top3(query);
		expect(
			ids.some((id) => id.startsWith(prefix)),
			ids.join(', '),
		).toBe(true);
	});

	it('no repite el mismo contenido como sección y como subsección en el top 10', () => {
		for (const [query] of CASES) {
			const ids = search(units, query).map((r) => r.id);
			for (const id of ids) {
				const unit = units.find((u) => u.id === id);
				if (unit?.parentId) expect(ids, `${query}: ${id}`).not.toContain(unit.parentId);
			}
		}
	});
});

describe('relevancia: consultas que cuentan un problema', () => {
	it.each([
		['impresora no imprime', 'manual:impresoras#resolucion-de-inconvenientes'],
		['no puedo cerrar la mesa', 'manual:faq-mozo-reabrir-mesa-anulada#problemas-comunes'],
	])('"%s" trae la sección de problemas (%s) en el top 3', (query, prefix) => {
		const ids = top3(query);
		expect(
			ids.some((id) => id.startsWith(prefix)),
			ids.join(', '),
		).toBe(true);
	});
});

describe('stemming liviano', () => {
	const same = (words: string[]) => new Set(words.map(stem)).size;

	it.each([
		[['facturar', 'factura', 'facturas', 'facturacion', 'facturado', 'facturada', 'facturan']],
		[['cerrar', 'cerra', 'cerrada', 'cerrado', 'cierre', 'cierra', 'cierres', 'cerralo']],
		[['abrir', 'abri', 'abierto', 'abierta', 'apertura']],
		[['imprimir', 'imprime', 'impresora', 'impresoras', 'impresion']],
		[['cargar', 'carga', 'cargas', 'cargado']],
		[['agregar', 'agrega', 'agregado']],
		[['buscar', 'busca', 'buscado']],
		[['propina', 'propinas']],
		[['producto', 'productos']],
		[['pago', 'pagos', 'pagar']],
	])('agrupa %j', (words) => {
		expect(same(words)).toBe(1);
	});

	it.each([
		['mesa', 'mes'],
		['mesas', 'meses'],
		['pago', 'pagina'],
		['caja', 'cajero'],
		['caja', 'cajon'],
		['estado', 'estacion'],
	])('no junta %s con %s', (a, b) => {
		expect(stem(a)).not.toBe(stem(b));
	});
});

describe('stopwords conversacionales', () => {
	it('se van "no", "puedo", "hago", "quiero", "necesito", "tengo"…', () => {
		expect(queryTerms('no puedo cerrar la mesa')).toEqual(['cerrar', 'mesa']);
		expect(queryTerms('como hago una factura')).toEqual(['factura']);
		expect(queryTerms('quiero saber como necesito tengo que debo hacer el arqueo')).toEqual([
			'arqueo',
		]);
	});
});

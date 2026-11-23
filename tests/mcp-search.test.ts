/** Búsqueda y lectura del MCP (`server/mcp-search.mjs`), con el manual real y con índices chicos. */
import { describe, expect, it } from 'vitest';
import { buildMcpIndex } from '../scripts/generate-mcp-index.mjs';
import type { McpArticulo, McpIndex } from '../server/mcp-index.mjs';
import {
	MAX_RESPONSE_CHARS,
	MAX_RESULTS,
	buildSearchUnits,
	fetchDocument,
	normalize,
	parseFetchId,
	queryTerms,
	search,
	snippet,
} from '../server/mcp-search.mjs';

const { index } = buildMcpIndex({ contentDates: {} });
const units = buildSearchUnits(index);
const slugOf = (id: string) => id.replace(/^manual:/, '').replace(/#.*$/, '');

function article(
	slug: string,
	titulo: string,
	secciones: [string, string][],
	intro = '',
): McpArticulo {
	const secs = secciones.map(([ancla, texto]) => ({
		ancla,
		titulo: ancla,
		texto: `## ${ancla}\n\n${texto}`,
	}));
	return {
		slug,
		titulo,
		categoria: 'Prueba',
		descripcion: `Descripción de ${titulo}.`,
		url: `https://doc.paxapos.com/user-guide/${slug}`,
		actualizado: null,
		intro,
		texto: [`# ${titulo}`, intro, ...secs.map((s) => s.texto)].filter(Boolean).join('\n\n'),
		secciones: secs,
	};
}

function tinyIndex(articulos: McpArticulo[]): McpIndex {
	return {
		schema_version: 1,
		version: 'test',
		generado: '2026-01-01T00:00:00.000Z',
		base_url: 'https://doc.paxapos.com',
		articulos,
	};
}

describe('normalización y términos', () => {
	it('sin acentos ni mayúsculas', () => {
		expect(normalize('Facturación ELECTRÓNICA Ñandú')).toBe('facturacion electronica nandu');
	});

	it('saca stopwords y repetidos, salvo que no quede nada', () => {
		expect(queryTerms('Arqueo de la Caja caja')).toEqual(['arqueo', 'caja']);
		expect(queryTerms('de la')).toEqual(['de', 'la']);
		expect(queryTerms('  ¿?  ')).toEqual([]);
	});
});

describe('search (manual real)', () => {
	it('"arqueo de caja" → primero el artículo de arqueos', () => {
		const results = search(units, 'arqueo de caja');
		expect(slugOf(results[0].id)).toBe('arqueos-de-caja');
		expect(results[0].url).toMatch(/^https:\/\/doc\.paxapos\.com\/user-guide\/arqueos-de-caja/);
	});

	it('"impresora" → primero el artículo de impresoras (plural/singular)', () => {
		const results = search(units, 'impresora');
		expect(slugOf(results[0].id)).toBe('impresoras');
	});

	it('"conectar claude" → primero el artículo de conectar Claude', () => {
		const results = search(units, 'conectar claude');
		expect(slugOf(results[0].id)).toBe('ia-conectar-claude');
	});

	it('acentos: "facturacion electronica" y "Facturación Electrónica" dan lo mismo', () => {
		expect(search(units, 'facturacion electronica')).toEqual(
			search(units, 'Facturación Electrónica'),
		);
		expect(search(units, 'facturacion electronica').length).toBeGreaterThan(0);
	});

	it('máximo 10 resultados, ids y URLs coherentes, con fragmento', () => {
		const results = search(units, 'caja');
		expect(results).toHaveLength(MAX_RESULTS);
		for (const r of results) {
			expect(r.id).toMatch(/^manual:[a-z0-9-]+(#[a-z0-9-]+)?$/);
			const [slug, ancla] = r.id.replace(/^manual:/, '').split('#');
			expect(r.url).toBe(
				`https://doc.paxapos.com/user-guide/${slug}${ancla ? `#${ancla}` : ''}`,
			);
			expect(r.text.length).toBeGreaterThan(0);
			expect(r.text.length).toBeLessThanOrEqual(250);
		}
		expect(new Set(results.map((r) => r.id)).size).toBe(results.length);
	});

	it('sin resultados → []', () => {
		expect(search(units, 'xyzzyqwerty')).toEqual([]);
		expect(search(units, '   ')).toEqual([]);
	});
});

describe('search (índice chico)', () => {
	const small = buildSearchUnits(
		tinyIndex([
			article('cuerpo', 'Otra cosa', [
				['a', 'Acá se habla de la propina varias veces: propina.'],
			]),
			article('titulo', 'Propinas', [['b', 'Texto sin la palabra.']]),
			article('heading', 'Ventas', [['propina-del-mozo', 'Texto.']]),
			article('ambos', 'Mesas', [
				['x', 'Abrir una mesa y cobrar la propina.'],
				['y', 'Solo la mesa.'],
			]),
		]),
	);

	it('título del artículo > heading de la sección > cuerpo', () => {
		const ids = search(small, 'propina').map((r) => r.id);
		expect(ids.indexOf('manual:titulo')).toBeLessThan(
			ids.indexOf('manual:heading#propina-del-mozo'),
		);
		expect(ids.indexOf('manual:heading#propina-del-mozo')).toBeLessThan(
			ids.indexOf('manual:cuerpo#a'),
		);
	});

	it('multi-término: gana la sección que tiene todos los términos', () => {
		const [first] = search(small, 'mesa propina');
		expect(first.id).toBe('manual:ambos#x');
	});

	it('respeta el límite', () => {
		expect(search(small, 'propina mesa texto', { limit: 2 })).toHaveLength(2);
	});
});

describe('snippet', () => {
	it('recorta alrededor de la coincidencia, sin acentos', () => {
		const text = `${'relleno '.repeat(60)}acá está la facturación electrónica ${'fin '.repeat(60)}`;
		const s = snippet(text, ['facturacion']);
		expect(s).toContain('facturación');
		expect(s.startsWith('…')).toBe(true);
		expect(s.endsWith('…')).toBe(true);
	});
});

describe('fetch', () => {
	it('acepta id de search, slug pelado, URL, ruta y URLs viejas', () => {
		expect(parseFetchId('manual:arqueos-de-caja#paso-2')).toEqual({
			slug: 'arqueos-de-caja',
			ancla: 'paso-2',
		});
		expect(parseFetchId('https://doc.paxapos.com/user-guide/Impresoras#x')).toEqual({
			slug: 'impresoras',
			ancla: 'x',
		});
		expect(parseFetchId('/user-guide/impresoras/')).toEqual({
			slug: 'impresoras',
			ancla: null,
		});
		expect(parseFetchId('')).toBeNull();
		for (const id of [
			'manual:impresoras',
			'impresoras',
			'https://doc.paxapos.com/user-guide/impresoras',
		]) {
			const out = fetchDocument(index, id);
			expect(out.ok && out.document.id, id).toBe('manual:impresoras');
		}
		const old = fetchDocument(index, 'https://doc.paxapos.com/user-guide/roles');
		expect(old.ok && old.document.id).toBe('manual:permisos-por-rol');
	});

	it('artículo completo en markdown con metadata', () => {
		const out = fetchDocument(index, 'manual:arqueos-de-caja');
		if (!out.ok) throw new Error(out.error);
		expect(out.document.title).toBe('Arqueos de Caja');
		expect(out.document.text.startsWith('# Arqueos de Caja')).toBe(true);
		expect(out.document.url).toBe('https://doc.paxapos.com/user-guide/arqueos-de-caja');
		expect(out.document.metadata.categoria).toBe('Finanzas');
		expect(out.document.metadata.secciones.length).toBeGreaterThan(3);
	});

	it('con #ancla devuelve solo esa sección', () => {
		const out = fetchDocument(index, 'manual:arqueos-de-caja#paso-2-busca-un-arqueo');
		if (!out.ok) throw new Error(out.error);
		expect(out.document.text.startsWith('## Paso 2')).toBe(true);
		expect(out.document.text).not.toContain('## Paso 3');
		expect(out.document.url).toMatch(/#paso-2-busca-un-arqueo$/);
	});

	it('errores accionables: id vacío, artículo o sección inexistente', () => {
		const empty = fetchDocument(index, '  ');
		expect(empty.ok).toBe(false);
		const missing = fetchDocument(index, 'manual:no-existe');
		expect(!missing.ok && missing.error).toMatch(/No existe el artículo "no-existe".*search/);
		const section = fetchDocument(index, 'manual:arqueos-de-caja#no-existe');
		expect(!section.ok && section.error).toMatch(
			/no tiene la sección #no-existe.*#antes-de-empezar/,
		);
	});

	it('ningún artículo real pasa el tope (H6)', () => {
		for (const a of index.articulos) {
			const out = fetchDocument(index, a.slug);
			expect(out.ok && JSON.stringify(out.document).length, a.slug).toBeLessThanOrEqual(
				MAX_RESPONSE_CHARS,
			);
		}
	});

	it('H6: artículo gigante → corta en límite de sección y lista lo que falta', () => {
		const big = tinyIndex([
			article(
				'gigante',
				'Gigante',
				Array.from({ length: 30 }, (_, i) => [`seccion-${i + 1}`, 'x'.repeat(5000)]),
				'Intro.',
			),
		]);
		const out = fetchDocument(big, 'manual:gigante');
		if (!out.ok) throw new Error(out.error);
		expect(JSON.stringify(out.document).length).toBeLessThanOrEqual(MAX_RESPONSE_CHARS);
		const included = out.document.text.match(/^## seccion-\d+$/gm) ?? [];
		expect(included.length).toBeGreaterThan(5);
		expect(included.length).toBeLessThan(30);
		const next = included.length + 1;
		expect(out.document.text).toContain(`manual:gigante#seccion-${next}`);
		expect(out.document.text).toContain('manual:gigante#seccion-30');
		expect(out.document.text).not.toContain(`manual:gigante#seccion-${included.length} `);
		const rest = fetchDocument(big, `manual:gigante#seccion-${next}`);
		expect(rest.ok && rest.document.text.startsWith(`## seccion-${next}`)).toBe(true);
	});

	it('H6: una sola sección gigante se corta en un párrafo', () => {
		const big = tinyIndex([
			article('enorme', 'Enorme', [['unica', Array(200).fill('y'.repeat(500)).join('\n\n')]]),
		]);
		const out = fetchDocument(big, 'manual:enorme#unica');
		if (!out.ok) throw new Error(out.error);
		expect(JSON.stringify(out.document).length).toBeLessThanOrEqual(MAX_RESPONSE_CHARS);
		expect(out.document.text).toMatch(/Texto recortado/);
	});
});

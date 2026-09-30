import { describe, it, expect } from 'vitest';
import {
	addLinkIconsToHeaders,
	fileNameToSlug,
	extractMarkdownTitle,
	highlightTextInHtml,
	prepareArticleContent,
	stripEmojis,
} from '../contentUtils';

describe('stripEmojis', () => {
	it('remueve emojis simples al inicio, medio y fin', () => {
		expect(stripEmojis('🎯 Primer paso')).toBe('Primer paso');
		expect(stripEmojis('Paso 1 🚀')).toBe('Paso 1');
		expect(stripEmojis('Paso ☕ y galletita')).toBe('Paso y galletita');
	});

	it('remueve secuencias con variación y ZWJ', () => {
		expect(stripEmojis('✔ Listo')).toBe('Listo');
		expect(stripEmojis('📖 Manual de Usuario: Solución Inicial')).toBe(
			'Manual de Usuario: Solución Inicial',
		);
		expect(stripEmojis('👩‍💻 Soporte técnico')).toBe('Soporte técnico');
	});

	it('normaliza múltiples espacios tras remover emojis', () => {
		expect(stripEmojis('  🎯   ¿Qué es esto?  ')).toBe('¿Qué es esto?');
	});

	it('mantiene caracteres especiales válidos y acentos', () => {
		expect(stripEmojis('Configuración & Parámetros (2026) - Versión 1.0')).toBe(
			'Configuración & Parámetros (2026) - Versión 1.0',
		);
	});
});

describe('fileNameToSlug', () => {
	it('convierte nombre de archivo con prefijo numérico y extensión', () => {
		expect(fileNameToSlug('21-Crear-Usuarios.md')).toBe('crear-usuarios');
	});

	it('remueve acentos (NFD normalize)', () => {
		expect(fileNameToSlug('12-Iniciar-sesión.md')).toBe('iniciar-sesion');
		expect(fileNameToSlug('37-ARCA-y-Facturación.md')).toBe('arca-y-facturacion');
	});

	it('convierte espacios a guiones', () => {
		expect(fileNameToSlug('Mi Archivo Largo.md')).toBe('mi-archivo-largo');
	});

	it('colapsa guiones múltiples', () => {
		expect(fileNameToSlug('algo---raro.md')).toBe('algo-raro');
	});

	it('remueve caracteres especiales', () => {
		expect(fileNameToSlug('25-Menú.md')).toBe('menu');
		expect(fileNameToSlug('archivo_con_underscore.md')).toBe('archivoconunderscore');
	});

	it('funciona sin extensión ni prefijo', () => {
		expect(fileNameToSlug('crear-usuarios')).toBe('crear-usuarios');
	});

	it('maneja IDs ya limpios idempotentemente', () => {
		const slug = fileNameToSlug('crear-usuarios');
		expect(fileNameToSlug(slug)).toBe(slug);
	});

	it('remueve guiones al inicio y final', () => {
		expect(fileNameToSlug('-algo-')).toBe('algo');
	});

	it('archivos reales del manual producen slugs consistentes', () => {
		const cases: [string, string][] = [
			['11-Introduccion.md', 'introduccion'],
			['24-Configuración-de-Impresoras.md', 'configuracion-de-impresoras'],
			['32-Salón.md', 'salon'],
			['33-Comandero.md', 'comandero'],
			['35-Arqueos.md', 'arqueos'],
			['36-Compras-y-Stock.md', 'compras-y-stock'],
			['42-Sam4s-Giant-100.md', 'sam4s-giant-100'],
			['51-Preguntas-Frecuentes.md', 'preguntas-frecuentes'],
			['52-Buchón-Bot.md', 'buchon-bot'],
		];
		for (const [input, expected] of cases) {
			expect(fileNameToSlug(input)).toBe(expected);
		}
	});
});

describe('extractMarkdownTitle', () => {
	it('extrae H1', () => {
		expect(extractMarkdownTitle('# Mi Título\n\nContenido')).toBe('Mi Título');
	});

	it('extrae H2 si no hay H1', () => {
		expect(extractMarkdownTitle('## Subtítulo\n\nContenido')).toBe('Subtítulo');
	});

	it('devuelve "Sin título" si no hay headers', () => {
		expect(extractMarkdownTitle('Solo texto plano')).toBe('Sin título');
	});

	it('ignora H3+', () => {
		expect(extractMarkdownTitle('### Tercer nivel\n\nTexto')).toBe('Sin título');
	});
});

describe('highlightTextInHtml', () => {
	it('resalta término en HTML', () => {
		const result = highlightTextInHtml('<p>Hola mundo</p>', 'mundo');
		expect(result).toContain('<span');
		expect(result).toContain('mundo');
	});

	it('respeta maxMatches', () => {
		const html = '<p>a a a a a a a a</p>';
		const result = highlightTextInHtml(html, 'a', 2);
		const spans = result.match(/<span/g) || [];
		expect(spans.length).toBe(2);
	});

	it('devuelve input sin cambios si searchTerm vacío', () => {
		expect(highlightTextInHtml('<p>texto</p>', '')).toBe('<p>texto</p>');
	});
});

describe('prepareArticleContent', () => {
	it('extrae H2 y H3 con ancla en orden y limpia el markup del título y los emojis', () => {
		const html = [
			'<h1>Título</h1><div id="titulo"></div>',
			'<h2>🎯 <strong>Primer paso &amp; alcance</strong></h2><div id="primer-paso"></div>',
			'<h3>Detalle <code>rápido</code></h3><div id="detalle-rapido"></div>',
			'<h4>No visible</h4><div id="no-visible"></div>',
			'<h2>Sin ancla</h2>',
		].join('');

		const result = prepareArticleContent(html);

		expect(result.tableOfContents).toEqual([
			{ id: 'primer-paso', title: 'Primer paso & alcance', level: 2 },
			{ id: 'detalle-rapido', title: 'Detalle rápido', level: 3 },
		]);
	});

	it('conserva anclas y agrega controles para copiar enlaces', () => {
		const result = prepareArticleContent(
			'<h2 class="existente">Sección</h2><div id="seccion"></div>',
		);

		expect(result.content).toContain('class="existente relative"');
		expect(result.content).toContain('data-copy-section="seccion"');
		expect(result.content).toContain('<div id="seccion"></div>');
	});

	it('mantiene compatible addLinkIconsToHeaders', () => {
		const html = '<h2>Sección</h2><div id="seccion"></div>';

		expect(addLinkIconsToHeaders(html)).toBe(prepareArticleContent(html).content);
	});
});

import { describe, it, expect } from 'vitest';
import {
	fileNameToSlug,
	extractMarkdownTitle,
	cleanMarkdownContent,
	highlightTextInHtml,
} from '../contentUtils';

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

describe('cleanMarkdownContent', () => {
	it('remueve headers markdown', () => {
		expect(cleanMarkdownContent('## Título\n\nTexto')).toBe('Título\n\nTexto');
	});

	it('remueve bold/italic', () => {
		expect(cleanMarkdownContent('**negrita** y *cursiva*')).toBe('negrita y cursiva');
	});

	it('extrae texto de links', () => {
		expect(cleanMarkdownContent('[texto](https://url.com)')).toBe('texto');
	});

	it('remueve código inline', () => {
		expect(cleanMarkdownContent('usa `comando` aquí')).toBe('usa comando aquí');
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

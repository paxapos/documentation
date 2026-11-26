/** Generador del índice del MCP (`scripts/generate-mcp-index.mjs`), contra el manual real. */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
	buildMcpIndex,
	cleanMarkdown,
	deriveAnchor,
	splitSections,
} from '../scripts/generate-mcp-index.mjs';
import { MCP_INDEX_SCHEMA_VERSION, validateMcpIndex } from '../server/mcp-index.mjs';
import { BUILD, ROOT, hasBuild } from './fixtures/start-server';

const MANUAL = join(ROOT, 'src/routes/user-guide/Manual-Usuario');

function countMarkdown(dir: string): number {
	return readdirSync(dir, { withFileTypes: true }).reduce(
		(n, e) =>
			n +
			(e.isDirectory() ? countMarkdown(join(dir, e.name)) : e.name.endsWith('.md') ? 1 : 0),
		0,
	);
}

const fixedDate = new Date('2026-01-01T00:00:00Z');
const { index, warnings } = buildMcpIndex({ contentDates: {}, now: fixedDate });
const ctx = { baseUrl: 'https://doc.paxapos.com', slug: 'demo' };

describe('buildMcpIndex (manual real)', () => {
	it('un artículo por cada .md (87)', () => {
		expect(index.articulos).toHaveLength(countMarkdown(MANUAL));
		expect(index.articulos).toHaveLength(87);
	});

	it('formato: schema_version, version (hash), base_url y lo que valida el server', () => {
		expect(index.schema_version).toBe(MCP_INDEX_SCHEMA_VERSION);
		expect(index.version).toMatch(/^[0-9a-f]{16}$/);
		expect(index.base_url).toBe('https://doc.paxapos.com');
		expect(index.generado).toBe(fixedDate.toISOString());
		expect(() => validateMcpIndex(index, 'test')).not.toThrow();
	});

	it('la version depende del contenido, no de la hora', () => {
		const again = buildMcpIndex({ contentDates: {}, now: new Date() }).index;
		expect(again.version).toBe(index.version);
	});

	it('slugs únicos y URL pública', () => {
		const slugs = index.articulos.map((a) => a.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
		for (const a of index.articulos) {
			expect(a.slug).toMatch(/^[a-z0-9-]+$/);
			expect(a.url).toBe(`https://doc.paxapos.com/user-guide/${a.slug}`);
			expect(a.titulo.length, a.slug).toBeGreaterThan(0);
			expect(a.categoria.length, a.slug).toBeGreaterThan(0);
			expect(a.descripcion.length, a.slug).toBeGreaterThan(0);
		}
	});

	it('cada sección tiene ancla única dentro de su artículo', () => {
		for (const a of index.articulos) {
			const anclas = a.secciones.map((s) => s.ancla);
			expect(new Set(anclas).size, a.slug).toBe(anclas.length);
			for (const s of a.secciones) {
				expect(s.ancla, `${a.slug} → ${s.titulo}`).toMatch(/^[a-z0-9][a-z0-9-]*$/);
				expect(s.titulo, a.slug).not.toMatch(/\*\*/);
				expect(s.texto.startsWith(`## ${s.titulo}`), `${a.slug}#${s.ancla}`).toBe(true);
			}
		}
		expect(index.articulos.reduce((n, a) => n + a.secciones.length, 0)).toBeGreaterThan(500);
	});

	it('el texto no tiene imágenes, HTML, placeholders de contacto ni links relativos', () => {
		for (const a of index.articulos) {
			for (const text of [a.texto, a.intro, ...a.secciones.map((s) => s.texto)]) {
				expect(text, a.slug).not.toMatch(/!\[/);
				expect(text, a.slug).not.toMatch(/images\//);
				expect(text, a.slug).not.toMatch(/\{\{[A-Z_]+\}\}/);
				expect(text, a.slug).not.toMatch(/<div|<\/?a[\s>]|<!--/);
				expect(text, a.slug).not.toMatch(/\]\(\/(?!\/)/);
			}
		}
		const claude = index.articulos.find((a) => a.slug === 'ia-conectar-claude');
		expect(claude?.texto).toContain('https://wa.me/');
	});

	it('cada sección guarda sus ### con ancla, título y texto', () => {
		const all = index.articulos.flatMap((a) =>
			a.secciones.flatMap((s) => s.subsecciones.map((sub) => ({ a, s, sub }))),
		);
		expect(all.length).toBeGreaterThan(200);
		for (const { a, s, sub } of all) {
			expect(sub.ancla, `${a.slug}#${s.ancla}`).toMatch(/^[a-z0-9][a-z0-9-]*$/);
			expect(sub.texto.startsWith(`### ${sub.titulo}`), `${a.slug}#${sub.ancla}`).toBe(true);
			expect(s.texto, `${a.slug}#${sub.ancla}`).toContain(sub.texto);
		}
		for (const a of index.articulos) {
			const anclas = a.secciones.flatMap((s) => [
				s.ancla,
				...s.subsecciones.map((x) => x.ancla),
			]);
			expect(new Set(anclas).size, a.slug).toBe(anclas.length);
		}
		const salon = index.articulos.find((a) => a.slug === 'salon-de-ventas');
		const guia = salon?.secciones.find((s) => s.ancla === 'guia-paso-a-paso-como-se-usa');
		expect(guia?.subsecciones.map((x) => x.ancla)).toContain('paso-8-emiti-la-factura');
		expect(guia?.intro.startsWith('## ')).toBe(true);
		expect(guia?.intro).not.toContain('### ');
	});

	it('todas las secciones ## y ### tienen su <div id>: el generador no avisa nada', () => {
		expect(warnings).toEqual([]);
		const pedimelo = index.articulos.find(
			(a) => a.slug === 'como-conectar-carta-digital-pedimelo-online',
		);
		expect(pedimelo?.secciones.map((s) => s.ancla)).toContain('parte-2-el-menu');
	});
});

describe('splitSections / cleanMarkdown', () => {
	const md = [
		'# 🎯 Título',
		'',
		'<div id="titulo"></div>',
		'',
		'Intro con ![foto](images/x.png) imagen y [link](/user-guide/otro).',
		'',
		'## 🔑 **Primera**',
		'',
		'<div id="primera"></div>',
		'',
		'Texto [ancla](#segunda) y <a href="https://wa.me/1?">WhatsApp</a>.',
		'',
		'```bash',
		'## esto no es un heading',
		'<b>código</b>',
		'```',
		'',
		'---',
		'',
		'### Sub',
		'',
		'Texto sub.',
		'',
		'### Con ancla',
		'',
		'<div id="con-ancla"></div>',
		'',
		'Texto con ancla.',
		'',
		'## Sin ancla',
		'',
		'Cuerpo.',
		'',
		'## Primera',
		'',
		'<div id="primera"></div>',
	].join('\n');

	const { intro, secciones, warnings: w } = splitSections(md, ctx);

	it('parte por ## (no dentro de bloques de código) y toma el ancla del <div id>', () => {
		expect(secciones.map((s) => s.ancla)).toEqual(['primera', 'sin-ancla', 'primera-2']);
		expect(secciones[0].titulo).toBe('Primera');
		expect(secciones[0].texto).toContain('### Sub');
		expect(secciones[0].texto).toContain('## esto no es un heading');
		expect(secciones[0].texto).toContain('<b>código</b>');
	});

	it('avisa la sección sin ancla, el ### sin ancla y el ancla repetida', () => {
		expect(w).toHaveLength(3);
		expect(w[0]).toMatch(/subsección "Sub" no tiene <div id>/);
		expect(w[1]).toMatch(/Sin ancla.*#sin-ancla/);
		expect(w[2]).toMatch(/repetida #primera/);
	});

	it('guarda los ### con <div id> como subsecciones; uno sin ancla queda en el bloque anterior', () => {
		expect(secciones[0].subsecciones).toEqual([
			{ ancla: 'con-ancla', titulo: 'Con ancla', texto: '### Con ancla\n\nTexto con ancla.' },
		]);
		expect(secciones[0].intro).toContain('### Sub\n\nTexto sub.');
		expect(secciones[0].intro).not.toContain('Con ancla');
		expect(secciones[1].subsecciones).toEqual([]);
		expect(secciones[1].intro).toBe(secciones[1].texto);
	});

	it('limpia imágenes, HTML, separadores y hace absolutos los links', () => {
		expect(intro).toBe('Intro con imagen y [link](https://doc.paxapos.com/user-guide/otro).');
		expect(secciones[0].texto).toContain(
			'[ancla](https://doc.paxapos.com/user-guide/demo#segunda) y [WhatsApp](https://wa.me/1?).',
		);
		expect(secciones[0].texto).not.toMatch(/^---$/m);
		expect(cleanMarkdown('# 🎯 Hola', ctx)).toBe('# Hola');
	});

	it('deriveAnchor: minúsculas, sin acentos ni signos', () => {
		expect(deriveAnchor('¿Qué hacer si algo no sale bien? (Problemas)')).toBe(
			'que-hacer-si-algo-no-sale-bien-problemas',
		);
	});
});

describe('validateMcpIndex', () => {
	it('rechaza otra schema_version, sin artículos o basura', () => {
		expect(() => validateMcpIndex({ ...index, schema_version: 1 }, 'x')).toThrow(
			/schema_version/,
		);
		expect(() => validateMcpIndex({ ...index, articulos: [] }, 'x')).toThrow(/artículos/);
		expect(() => validateMcpIndex(null, 'x')).toThrow(/schema_version/);
	});
});

describe.skipIf(!hasBuild)('anclas del índice en las páginas servidas (build/)', () => {
	it.each(index.articulos.map((a) => [a.slug, a] as const))(
		'%s: cada ancla ## y ### existe en el HTML prerendereado',
		(slug, articulo) => {
			const file = join(BUILD, 'prerendered/user-guide', `${slug}.html`);
			expect(existsSync(file), file).toBe(true);
			const html = readFileSync(file, 'utf-8');
			const anclas = articulo.secciones.flatMap((s) => [
				s.ancla,
				...s.subsecciones.map((x) => x.ancla),
			]);
			for (const ancla of anclas) expect(html, `#${ancla}`).toContain(`id="${ancla}"`);
		},
	);
});

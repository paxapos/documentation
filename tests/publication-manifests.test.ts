/**
 * Manifiestos para publicar el MCP del manual en directorios: `server.json` (MCP Registry
 * oficial) y `gemini-extension.json` (extensión de Gemini CLI), los dos en la raíz.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
import { describe, expect, it } from 'vitest';
import { MCP_PATH, SERVER_TITLE } from '../server/mcp.mjs';
import { ROOT } from './fixtures/start-server';

const readJson = (file: string) => JSON.parse(readFileSync(join(ROOT, file), 'utf-8'));

const MCP_URL = `https://doc.paxapos.com${MCP_PATH}`;
const pkg = readJson('package.json');
const registry = readJson('server.json');
const gemini = readJson('gemini-extension.json');
/** Copia de https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json */
const registrySchema = readJson('tests/fixtures/mcp-registry-server.schema.2025-12-11.json');

describe('server.json (MCP Registry)', () => {
	it('valida contra el esquema del Registry que declara en $schema', () => {
		expect(registry.$schema).toBe(registrySchema.$id);
		const result = new AjvJsonSchemaValidator().getValidator(registrySchema)(registry);
		expect(result.errorMessage).toBeUndefined();
		expect(result.valid).toBe(true);
	});

	it('versión = package.json (la misma que anuncia el server en initialize)', () => {
		expect(registry.version).toBe(pkg.version);
	});

	it('namespace com.paxapos, título del server y un remote streamable-http a /mcp', () => {
		expect(registry.name).toBe('com.paxapos/manual');
		expect(registry.title).toBe(SERVER_TITLE);
		expect(registry.remotes).toEqual([{ type: 'streamable-http', url: MCP_URL }]);
		expect(registry.websiteUrl).toBe('https://doc.paxapos.com/user-guide/ia-manual-por-mcp');
	});
});

describe('gemini-extension.json (Gemini CLI)', () => {
	it('versión = package.json', () => {
		expect(gemini.version).toBe(pkg.version);
	});

	it('nombre en minúsculas con guiones y descripción para la galería', () => {
		expect(gemini.name).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
		expect(typeof gemini.description).toBe('string');
		expect(gemini.description.length).toBeGreaterThan(0);
	});

	it('un solo server MCP remoto por Streamable HTTP (type http; httpUrl está deprecado)', () => {
		expect(gemini.mcpServers).toEqual({ 'paxapos-manual': { type: 'http', url: MCP_URL } });
	});
});

/**
 * Índice del manual para el servidor MCP (`/mcp`): formato, ubicación y carga.
 *
 * Lo genera `scripts/generate-mcp-index.mjs` en `pnpm generate` y lo lee `server.js` una vez al
 * arrancar. Vive en `server/` y no en `static/` para que no se sirva como archivo público: la
 * única forma de leerlo es por las tools del MCP.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** Versión del formato. Si el generador cambia la forma del JSON, se sube acá y en el server. */
export const MCP_INDEX_SCHEMA_VERSION = 1;

/** Ubicación por defecto (la pisa la variable `MCP_INDEX_PATH`). */
export const MCP_INDEX_PATH = fileURLToPath(new URL('./mcp-index.json', import.meta.url));

/**
 * @typedef {{ ancla: string, titulo: string, texto: string }} McpSeccion
 * @typedef {{
 *   slug: string,
 *   titulo: string,
 *   categoria: string,
 *   descripcion: string,
 *   url: string,
 *   actualizado: string | null,
 *   intro: string,
 *   texto: string,
 *   secciones: McpSeccion[],
 * }} McpArticulo
 *   `intro` es el texto entre el `# Título` y la primera sección `##` (lo que busca `search`
 *   cuando el resultado es el artículo y no una sección).
 * @typedef {{
 *   schema_version: number,
 *   version: string,
 *   generado: string,
 *   base_url: string,
 *   articulos: McpArticulo[],
 * }} McpIndex
 */

/**
 * Lee y valida el índice. Tira un error con un mensaje claro si falta, no es JSON, es de otra
 * versión de formato o está vacío: el server no debe arrancar sirviendo un manual vacío.
 * @param {string} [path]
 * @returns {McpIndex}
 */
export function loadMcpIndex(path = MCP_INDEX_PATH) {
	/** @type {string} */
	let raw;
	try {
		raw = readFileSync(path, 'utf-8');
	} catch (error) {
		throw new Error(
			`No se pudo leer el índice del MCP (${path}): ${errorMessage(error)}. ` +
				'Generalo con `pnpm generate` (o `pnpm build`).',
		);
	}
	/** @type {unknown} */
	let data;
	try {
		data = JSON.parse(raw);
	} catch (error) {
		throw new Error(`El índice del MCP (${path}) no es JSON válido: ${errorMessage(error)}.`);
	}
	return validateMcpIndex(data, path);
}

/**
 * @param {unknown} data
 * @param {string} path para el mensaje de error
 * @returns {McpIndex}
 */
export function validateMcpIndex(data, path) {
	const index = /** @type {Partial<McpIndex> | null} */ (
		data && typeof data === 'object' ? data : null
	);
	if (!index || index.schema_version !== MCP_INDEX_SCHEMA_VERSION) {
		throw new Error(
			`El índice del MCP (${path}) tiene schema_version ${JSON.stringify(index?.schema_version)} ` +
				`y este server espera ${MCP_INDEX_SCHEMA_VERSION}. Regeneralo con \`pnpm generate\`.`,
		);
	}
	if (!Array.isArray(index.articulos) || index.articulos.length === 0) {
		throw new Error(`El índice del MCP (${path}) no tiene artículos.`);
	}
	if (typeof index.version !== 'string' || typeof index.base_url !== 'string') {
		throw new Error(`El índice del MCP (${path}) no tiene version o base_url.`);
	}
	return /** @type {McpIndex} */ (index);
}

/**
 * @param {unknown} error
 * @returns {string}
 */
function errorMessage(error) {
	return error instanceof Error ? error.message : String(error);
}

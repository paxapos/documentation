/**
 * Contacto público de PaxaPos — fuente única de verdad.
 *
 * Para cambiar el número de WhatsApp se edita SOLO este archivo: el manual y todo
 * lo generado a partir de él (search index, llms.txt) toman el valor de acá.
 * Los .md del manual escriben los placeholders {{WHATSAPP_URL}}, {{WHATSAPP_NUMBER}}
 * y {{WHATSAPP_DISPLAY}}, que se resuelven al leer el markdown.
 */

/** Número en formato internacional, sin '+' ni separadores (el formato que pide wa.me). */
export const WHATSAPP_NUMBER = '542254629000';

/** Cómo se muestra el número al usuario. */
export const WHATSAPP_DISPLAY = '+54 2254 62-9000';

/** Link directo al chat de WhatsApp. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Reemplaza los placeholders de contacto en un texto (markdown o HTML).
 *
 * @param {string} text
 * @returns {string}
 */
export function applyContactPlaceholders(text) {
	return text
		.replaceAll('{{WHATSAPP_URL}}', WHATSAPP_URL)
		.replaceAll('{{WHATSAPP_NUMBER}}', WHATSAPP_NUMBER)
		.replaceAll('{{WHATSAPP_DISPLAY}}', WHATSAPP_DISPLAY);
}

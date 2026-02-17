/**
 * Funciones utilitarias compartidas para procesamiento de contenido.
 * Centraliza lógica duplicada que antes existía en múltiples componentes.
 */

/**
 * Convierte un nombre de archivo o ID de módulo a un slug URL-friendly.
 * Ejemplo: "21-Crear-Usuarios.md" → "crear-usuarios"
 */
export function fileNameToSlug(fileName: string): string {
	return fileName
		.replace(/\.\w+$/, '') // Remover extensión (.md, .txt)
		.replace(/^\d+-/, '') // Remover prefijo numérico
		.toLowerCase()
		.replace(/\s+/g, '-') // Espacios a guiones
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
		.replace(/[^a-z0-9-]/g, '') // Solo letras, números y guiones
		.replace(/-+/g, '-') // Múltiples guiones a uno solo
		.replace(/^-|-$/g, ''); // Remover guiones al inicio y final
}

/**
 * Agrega botones de "copiar enlace" a los headers del HTML renderizado.
 * Busca patterns como: <h2>Título</h2><div id="ancla"></div>
 */
export function addLinkIconsToHeaders(html: string): string {
	const headerWithIdRegex =
		/<(h[1-6])>([^<>]*(?:<[^>]+>[^<>]*<\/[^>]+>)*[^<>]*)<\/(h[1-6])>\s*<div id="([^"]+)"><\/div>/g;

	return html.replace(
		headerWithIdRegex,
		(_match, headerTag, titleContent, _closingTag, idValue) => {
			return `<${headerTag} class="relative">
                ${titleContent}
                <button 
                    class="ml-1.5 text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:text-blue-500 focus:bg-gray-100 focus:outline-none transition-all duration-200 text-sm align-middle px-1 py-0.5 rounded"
                    onclick="copyLinkToSection('${idValue}')"
                    title="Copiar enlace a esta sección"
                    aria-label="Copiar enlace a esta sección"
                >
                    🔗
                </button>
            </${headerTag}>
            <div id="${idValue}"></div>`;
		},
	);
}

/**
 * Resalta un término de búsqueda en el HTML renderizado.
 * Limita a maxMatches ocurrencias para evitar sobrecarga visual.
 *
 * NOTA: esta implementación es simple y puede resaltar dentro de atributos HTML.
 * Para un sitio de documentación con contenido controlado esto es aceptable.
 */
export function highlightTextInHtml(
	html: string,
	searchTerm: string,
	maxMatches: number = 4,
): string {
	if (!searchTerm || !html) return html;

	const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const regex = new RegExp(`(${escapedTerm})`, 'gi');

	let matchCount = 0;

	return html.replace(regex, (match) => {
		if (matchCount >= maxMatches) {
			return match;
		}
		matchCount++;
		return `<span class="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-1 py-0.5 rounded-sm font-medium border-b border-gray-400 dark:border-gray-400">${match}</span>`;
	});
}

/**
 * Copia texto al portapapeles usando la Clipboard API con fallback
 * para navegadores antiguos.
 * Retorna true si la copia fue exitosa.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		// Fallback para navegadores que no soportan clipboard API
		return fallbackCopyToClipboard(text);
	}
}

function fallbackCopyToClipboard(text: string): boolean {
	const textArea = document.createElement('textarea');
	textArea.value = text;
	textArea.style.position = 'fixed';
	textArea.style.left = '-999999px';
	textArea.style.top = '-999999px';
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		document.execCommand('copy');
		return true;
	} catch {
		return false;
	} finally {
		document.body.removeChild(textArea);
	}
}

/**
 * Limpia contenido markdown removiendo sintaxis para obtener texto plano.
 */
export function cleanMarkdownContent(content: string): string {
	return content
		.replace(/<!--[\s\S]*?-->/g, '') // Comentarios HTML
		.replace(/<[^>]*>/g, '') // Tags HTML
		.replace(/^#+\s+/gm, '') // Headers
		.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1') // Bold/italic
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links
		.replace(/`([^`]+)`/g, '$1') // Código inline
		.replace(/^[•\-*]\s+/gm, '') // Bullets
		.replace(/\n{3,}/g, '\n\n') // Líneas vacías múltiples
		.trim();
}

/**
 * Extrae el título (primer H1 o H2) de un contenido markdown.
 */
export function extractMarkdownTitle(content: string): string {
	const h1Match = content.match(/^#\s+(.+)$/m);
	if (h1Match) return h1Match[1].trim();

	const h2Match = content.match(/^##\s+(.+)$/m);
	if (h2Match) return h2Match[1].trim();

	return 'Sin título';
}

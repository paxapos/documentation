import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';

// Función para obtener configuración de runtime
function getConfig() {
	if (browser && typeof window !== 'undefined' && (window as any).__APP_CONFIG__) {
		const config = (window as any).__APP_CONFIG__;

		if (config.BRAND_NAME && config.BRAND_NAME.includes('{{')) {
			console.error('❌ ERROR: Variables de configuración no reemplazadas');
		}

		return config;
	}

	return {
		BRAND_NAME: '',
		SYSTEM_URL: '',
	};
}

const config = getConfig();
const REPLACEMENT_WORD = config.BRAND_NAME || '{{BRAND_NAME}}';
const DEFAULT_SYSTEM_URL = config.SYSTEM_URL || '{{SYSTEM_URL}}';

export const brandName = writable(REPLACEMENT_WORD);
export const systemUrl = writable(DEFAULT_SYSTEM_URL);

// Variables seguras usando placeholder format
const BRAND_VARIABLE = /\{\{BRAND_NAME\}\}/g;
const SYSTEM_URL_VARIABLE = /\{\{SYSTEM_URL\}\}/g;

function replaceVariables(content: string, brand: string, url: string): string {
	if (!content) return content;

	let result = content;
	result = result.replace(BRAND_VARIABLE, brand || REPLACEMENT_WORD);
	result = result.replace(SYSTEM_URL_VARIABLE, url || DEFAULT_SYSTEM_URL);
	return result;
}

// Store derivado que reacciona a cambios
export const brandReplacer = derived([brandName, systemUrl], ([$brandName, $systemUrl]) => ({
	replace: (content: string): string => {
		return replaceVariables(content, $brandName, $systemUrl);
	},
}));

// Función principal para reemplazo de variables
export function replaceWithVariables(content: string, brand?: string, url?: string): string {
	const currentBrand = brand || get(brandName);
	const currentUrl = url || get(systemUrl);
	return replaceVariables(content, currentBrand, currentUrl);
}

// Función para procesar contenido agrupado
export function processGroupedContent(
	groupedContent: any[],
	newWord?: string,
	newUrl?: string,
): any[] {
	return groupedContent.map((group) => ({
		...group,
		folder: group.folder ? replaceWithVariables(group.folder, newWord, newUrl) : group.folder,
		items: group.items
			? group.items.map((item: any) => ({
					...item,
					title: item.title ? replaceWithVariables(item.title, newWord, newUrl) : item.title,
					html: item.html ? replaceWithVariables(item.html, newWord, newUrl) : item.html,
					rawMarkdown: item.rawMarkdown
						? replaceWithVariables(item.rawMarkdown, newWord, newUrl)
						: item.rawMarkdown,
				}))
			: group.items,
	}));
}

// Función para preparar contenido para exportación
export function prepareForExport(markdownContent: string, newWord?: string, newUrl?: string): string {
	return replaceWithVariables(markdownContent, newWord, newUrl);
}

// Funciones de utilidad
export function setBrandGlobally(newBrand: string) {
	brandName.set(newBrand);
}

export function setSystemUrlGlobally(newUrl: string) {
	systemUrl.set(newUrl);
}

export function getBrandName(): string {
	return get(brandName);
}

export function getSystemUrl(): string {
	return get(systemUrl);
}

// Action para reemplazar automáticamente en toda la página
export function autoReplaceBrand(node: HTMLElement) {
	let unsubscribe: (() => void) | null = null;

	function processTextNodes() {
		const replacer = get(brandReplacer);
		const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
			acceptNode: (textNode) => {
				const parent = textNode.parentElement;
				if (!parent) return NodeFilter.FILTER_REJECT;

				const tagName = parent.tagName.toLowerCase();
				if (['script', 'style', 'code', 'pre'].includes(tagName)) {
					return NodeFilter.FILTER_REJECT;
				}

				return NodeFilter.FILTER_ACCEPT;
			},
		});

		const textNodes: Text[] = [];
		let currentNode;

		while ((currentNode = walker.nextNode())) {
			textNodes.push(currentNode as Text);
		}

		textNodes.forEach((textNode) => {
			const originalText = textNode.textContent || '';
			const replacedText = replacer.replace(originalText);

			if (originalText !== replacedText) {
				textNode.textContent = replacedText;
			}
		});
	}

	processTextNodes();

	unsubscribe = brandReplacer.subscribe(() => {
		processTextNodes();
	});

	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach((addedNode) => {
					if (addedNode.nodeType === Node.ELEMENT_NODE) {
						processTextNodes();
					}
				});
			}
		});
	});

	observer.observe(node, {
		childList: true,
		subtree: true,
	});

	return {
		destroy() {
			unsubscribe?.();
			observer.disconnect();
		},
	};
}

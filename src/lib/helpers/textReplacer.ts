import { browser } from '$app/environment';

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

let currentBrandName = REPLACEMENT_WORD;
let currentSystemUrl = DEFAULT_SYSTEM_URL;

const BRAND_VARIABLE = /\{\{BRAND_NAME\}\}/g;
const SYSTEM_URL_VARIABLE = /\{\{SYSTEM_URL\}\}/g;

function replaceVariables(content: string, brand: string, url: string): string {
	if (!content) return content;

	let result = content;
	result = result.replace(BRAND_VARIABLE, brand || REPLACEMENT_WORD);
	result = result.replace(SYSTEM_URL_VARIABLE, url || DEFAULT_SYSTEM_URL);
	return result;
}

export function replaceWithVariables(content: string, brand?: string, url?: string): string {
	const brandToUse = brand || currentBrandName;
	const urlToUse = url || currentSystemUrl;
	return replaceVariables(content, brandToUse, urlToUse);
}

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

export function setBrandGlobally(newBrand: string) {
	currentBrandName = newBrand;
}

export function setSystemUrlGlobally(newUrl: string) {
	currentSystemUrl = newUrl;
}

export function getBrandName(): string {
	return currentBrandName;
}

export function getSystemUrl(): string {
	return currentSystemUrl;
}

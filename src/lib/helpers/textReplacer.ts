import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';

// Función para obtener configuración de runtime
function getConfig() {
    if (browser && typeof window !== 'undefined' && (window as any).__APP_CONFIG__) {
        return (window as any).__APP_CONFIG__;
    }
    return {
        BRAND_NAME: 'PaxaPOS',
        SYSTEM_URL: 'beta.paxapos.com',
        COMPANY_NAME: ''
    };
}

const config = getConfig();
const REPLACEMENT_WORD = config.BRAND_NAME || "PaxaPOS";
const DEFAULT_SYSTEM_URL = config.SYSTEM_URL || "beta.paxapos.com";
// const DEFAULT_COMPANY_NAME = config.COMPANY_NAME || "Tu Empresa"; // Opcional: descomenta para usar nombre de empresa

export const brandName = writable(REPLACEMENT_WORD);
export const systemUrl = writable(DEFAULT_SYSTEM_URL);
// export const companyName = writable(DEFAULT_COMPANY_NAME); // Opcional: descomenta para usar nombre de empresa

// Variables seguras usando placeholder format
const BRAND_VARIABLE = /\{\{BRAND_NAME\}\}/g;
const SYSTEM_URL_VARIABLE = /\{\{SYSTEM_URL\}\}/g;
// const COMPANY_VARIABLE = /\{\{COMPANY_NAME\}\}/g; // Opcional: descomenta para usar nombre de empresa

// Función principal usando variables seguras
function replaceVariables(content: string, brand: string, url: string /*, company?: string*/): string {
    if (!content) return content;
    
    let result = content;
    
    // Reemplazar variables seguras
    result = result.replace(BRAND_VARIABLE, brand || REPLACEMENT_WORD);
    result = result.replace(SYSTEM_URL_VARIABLE, url || DEFAULT_SYSTEM_URL);
    // result = result.replace(COMPANY_VARIABLE, company || DEFAULT_COMPANY_NAME); // Opcional: descomenta para usar nombre de empresa
    
    return result;
}

// Store derivado que reacciona a cambios (usando variables seguras)
export const brandReplacer = derived([brandName, systemUrl], ([$brandName, $systemUrl]) => ({
    replace: (content: string): string => {
        return replaceVariables(content, $brandName, $systemUrl /*, $companyName*/);
    }
}));

// export const fullReplacer = derived([brandName, systemUrl, companyName], ([$brandName, $systemUrl, $companyName]) => ({
//     replace: (content: string): string => {
//         return replaceVariables(content, $brandName, $systemUrl, $companyName);
//     }
// })); // Opcional: descomenta para usar con nombre de empresa

// Función principal usando variables (recomendada)
export function replaceWithVariables(content: string, brand?: string, url?: string /*, company?: string*/): string {
    const currentBrand = brand || get(brandName);
    const currentUrl = url || get(systemUrl);
    // const currentCompany = company || get(companyName); // Opcional: descomenta para usar nombre de empresa
    
    return replaceVariables(content, currentBrand, currentUrl /*, currentCompany*/);
}

// Función para procesar contenido agrupado (usando variables)
export function processGroupedContent(groupedContent: any[], newWord?: string, newUrl?: string /*, newCompany?: string*/): any[] {
    return groupedContent.map(group => ({
        ...group,
        folder: group.folder ? replaceWithVariables(group.folder, newWord, newUrl /*, newCompany*/) : group.folder,
        items: group.items ? group.items.map((item: any) => ({
            ...item,
            title: item.title ? replaceWithVariables(item.title, newWord, newUrl /*, newCompany*/) : item.title,
            html: item.html ? replaceWithVariables(item.html, newWord, newUrl /*, newCompany*/) : item.html,
            rawMarkdown: item.rawMarkdown ? replaceWithVariables(item.rawMarkdown, newWord, newUrl /*, newCompany*/) : item.rawMarkdown
        })) : group.items
    }));
}

// Función para preparar contenido para exportación (usando variables)
export function prepareForExport(markdownContent: string, newWord?: string, newUrl?: string /*, newCompany?: string*/): string {
    return replaceWithVariables(markdownContent, newWord, newUrl /*, newCompany*/);
}

// Funciones de utilidad
export function setBrandGlobally(newBrand: string) {
    brandName.set(newBrand);
}

export function setSystemUrlGlobally(newUrl: string) {
    systemUrl.set(newUrl);
}

// export function setCompanyGlobally(newCompany: string) {
//     companyName.set(newCompany);
// } // Opcional: descomenta para usar nombre de empresa

export function getBrandName(): string {
    return get(brandName);
}

export function getSystemUrl(): string {
    return get(systemUrl);
}

// export function getCompanyName(): string {
//     return get(companyName);
// } // Opcional: descomenta para usar nombre de empresa

// Action para reemplazar automáticamente en toda la página
export function autoReplaceBrand(node: HTMLElement) {
    let unsubscribe: (() => void) | null = null;
    
    function processTextNodes() {
        const replacer = get(brandReplacer);
        const walker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (textNode) => {
                    const parent = textNode.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    
                    // Excluir elementos que no deben cambiar
                    const tagName = parent.tagName.toLowerCase();
                    if (['script', 'style', 'code', 'pre'].includes(tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        
        const textNodes: Text[] = [];
        let currentNode;
        
        while (currentNode = walker.nextNode()) {
            textNodes.push(currentNode as Text);
        }
        
        textNodes.forEach(textNode => {
            const originalText = textNode.textContent || '';
            const replacedText = replacer.replace(originalText);
            
            if (originalText !== replacedText) {
                textNode.textContent = replacedText;
            }
        });
    }
    
    // Procesar inmediatamente
    processTextNodes();
    
    // Reaccionar a cambios de marca
    unsubscribe = brandReplacer.subscribe(() => {
        processTextNodes();
    });
    
    // Observer para contenido dinámico
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
        subtree: true
    });
    
    return {
        destroy() {
            unsubscribe?.();
            observer.disconnect();
        }
    };
}

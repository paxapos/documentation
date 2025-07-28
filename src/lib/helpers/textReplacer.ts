import { writable, derived, get } from 'svelte/store';

const REPLACEMENT_WORD = "PaxaPOS"; // 👈 CAMBIAR ESTA PALABRA para toda la app

export const brandName = writable(REPLACEMENT_WORD);

const PAXAPOS_REGEX = /\b(?:pax[aá][\s\-_]*pos|paxa[\s\-_]*pos|pax[aá]pos|paxapos|PaxaPos)\b/gi;

// Store derivado que reacciona a cambios
export const brandReplacer = derived(brandName, ($brandName) => ({
    replace: (content: string): string => {
        if (!content || !$brandName.trim()) return content;
        
        return content.replace(PAXAPOS_REGEX, (match) => {
            let separator = '';
            if (match.includes(' ')) separator = ' ';
            else if (match.includes('-')) separator = '-';
            else if (match.includes('_')) separator = '_';
            
            let replacement = $brandName.trim();
            
            if (separator && match.toLowerCase().includes('pos')) {
                replacement = replacement + separator + 'POS';
            }
            
            if (match === match.toUpperCase()) {
                return replacement.toUpperCase();
            } else if (match[0] === match[0].toUpperCase()) {
                return replacement.charAt(0).toUpperCase() + replacement.slice(1);
            } else {
                return replacement.toLowerCase();
            }
        });
    }
}));

export function replacePaxaPOS(content: string, newWord: string = REPLACEMENT_WORD): string {
    if (!content || !newWord.trim()) return content;
    
    return content.replace(PAXAPOS_REGEX, (match) => {
        let separator = '';
        if (match.includes(' ')) separator = ' ';
        else if (match.includes('-')) separator = '-';
        else if (match.includes('_')) separator = '_';
        
        let replacement = newWord.trim();
        
        if (separator && match.toLowerCase().includes('pos')) {
            replacement = replacement + separator + 'POS';
        }
        
        if (match === match.toUpperCase()) {
            return replacement.toUpperCase();
        } else if (match[0] === match[0].toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        } else {
            return replacement.toLowerCase();
        }
    });
}

export function processGroupedContent(groupedContent: any[], newWord: string = REPLACEMENT_WORD): any[] {
    return groupedContent.map(group => ({
        ...group,
        folder: group.folder ? replacePaxaPOS(group.folder, newWord) : group.folder,
        items: group.items ? group.items.map((item: any) => ({
            ...item,
            title: item.title ? replacePaxaPOS(item.title, newWord) : item.title,
            html: item.html ? replacePaxaPOS(item.html, newWord) : item.html,
            rawMarkdown: item.rawMarkdown ? replacePaxaPOS(item.rawMarkdown, newWord) : item.rawMarkdown
        })) : group.items
    }));
}

export function prepareForExport(markdownContent: string, newWord: string = REPLACEMENT_WORD): string {
    return replacePaxaPOS(markdownContent, newWord);
}

// 🔄 NUEVA FUNCIÓN para cambiar la marca globalmente
export function setBrandGlobally(newBrand: string) {
    brandName.set(newBrand);
}

export function getBrandName(): string {
    return get(brandName);
}

// 🤖 ACTION para reemplazar automáticamente en toda la página
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

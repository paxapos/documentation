const REPLACEMENT_WORD = "Paxapos"; // 👈 CAMBIAR ESTA PALABRA

const PAXAPOS_REGEX = /\b(?:pax[aá][\s\-_]*pos|paxa[\s\-_]*pos|pax[aá]pos|paxapos|PaxaPos)\b/gi;

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

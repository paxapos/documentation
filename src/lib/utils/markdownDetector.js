// @ts-nocheck
import { dev } from '$app/environment';

// Cache para evitar múltiples procesados en producción
let markdownCache = null;

// Convierte nombre de archivo a slug URL-friendly
function fileNameToSlug(fileName) {
    return fileName
        .replace(/^\d+-/, '') // Remover prefijo numérico (11-, 12-, etc.)
        .replace(/\.md$/, '') // Remover extensión
        .toLowerCase()
        .replace(/\s+/g, '-') // Espacios a guiones
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')  
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[^\w-]/g, '') // Remover caracteres especiales
        .replace(/-+/g, '-') // Múltiples guiones a uno solo
        .replace(/^-|-$/g, ''); // Remover guiones al inicio y final
}

// Extrae título desde el contenido markdown
function extractTitle(content, fileName) {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) {
        return titleMatch[1].replace(/[🚀🔑👥💳👨‍💼🖨️🍽️🏪👨‍🍳📊💰📦🏛️📈🤖]/g, '').trim();
    }
    return fileName.replace(/^\d+-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
}

// Categoriza automáticamente basado en la estructura de carpetas
function categorizeByFolder(path) {
    if (path.includes('/10-Comenzamos/')) {
        return { category: 'Primeros Pasos', order: 1 };
    }
    if (path.includes('/20-Primeros Pasos/')) {
        return { category: 'Configuración', order: 2 };
    }
    if (path.includes('/30-Módulos Principales/')) {
        return { category: 'Operaciones', order: 3 };
    }
    if (path.includes('/40-Biblioteca-de-Drivers/')) {
        return { category: 'Biblioteca de Drivers', order: 4 };
    }
    if (path.includes('/50-Extra/')) {
        return { category: 'Extra', order: 5 };
    }
    return { category: 'Otros', order: 6 };
}

// Genera SEO automáticamente basado en el contenido
function generateSEO(title, content, slug) {
    // Extrae primeros párrafos como descripción
    const contentWithoutTitle = content.replace(/^#.+$/m, '').trim();
    const firstParagraph = contentWithoutTitle.split('\n\n')[0] || '';
    const description = firstParagraph.length > 160 
        ? firstParagraph.substring(0, 157) + '...' 
        : firstParagraph || `Guía completa sobre ${title}.`;

    // Genera keywords automáticamente
    const keywords = [
        slug.replace(/-/g, ' '),
        'paxapos',
        title.toLowerCase(),
        'tutorial',
        'guía',
        'manual usuario'
    ].join(', ');

    return {
        title: `${title} - Manual`,
        description: description.replace(/[#*]/g, '').trim(),
        keywords
    };
}

// Función principal que detecta y procesa todos los archivos MD
export async function getMarkdownFiles() {
    // En desarrollo, siempre recarga. En producción, usa cache
    if (!dev && markdownCache) {
        return markdownCache;
    }

    try {
        // Importar dinámicamente todos los archivos MD
        const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
            query: '?raw',
            import: 'default'
        });

        const markdownFiles = {};
        const entries = [];
        const categorizedModules = {};

        // Procesar cada archivo
        for (const [path, moduleLoader] of Object.entries(modules)) {
            try {
                const content = String(await moduleLoader());
                const fileName = path.split('/').pop();
                if (!fileName) continue;
                
                const slug = fileNameToSlug(fileName);
                const title = extractTitle(content, fileName);
                const categoryInfo = categorizeByFolder(path);
                
                // Crear entrada para el file mapping
                markdownFiles[slug] = {
                    fileName,
                    path,
                    title,
                    content,
                    category: categoryInfo.category,
                    categoryOrder: categoryInfo.order,
                    seo: generateSEO(title, content, slug)
                };

                // Crear entrada para prerender
                entries.push({ slug });

                // Agrupar por categoría
                if (!categorizedModules[categoryInfo.category]) {
                    categorizedModules[categoryInfo.category] = {
                        title: categoryInfo.category,
                        order: categoryInfo.order,
                        modules: []
                    };
                }

                categorizedModules[categoryInfo.category].modules.push({
                    slug,
                    title,
                    fileName
                });

            } catch (error) {
                console.warn(`Error procesando ${path}:`, error);
            }
        }

        // Ordenar módulos dentro de cada categoría
        Object.values(categorizedModules).forEach(category => {
            category.modules.sort((a, b) => a.fileName.localeCompare(b.fileName));
        });

        // Convertir a array ordenado por categoryOrder
        const moduleCategories = Object.values(categorizedModules)
            .sort((a, b) => a.order - b.order);

        const result = {
            markdownFiles,
            entries,
            moduleCategories
        };

        // Cache en producción
        if (!dev) {
            markdownCache = result;
        }

        return result;

    } catch (error) {
        console.error('Error detectando archivos markdown:', error);
        return {
            markdownFiles: {},
            entries: [],
            moduleCategories: []
        };
    }
}

// Obtiene un archivo específico por slug
export async function getMarkdownFile(slug) {
    const { markdownFiles } = await getMarkdownFiles();
    return markdownFiles[slug] || null;
}

// Lista todos los slugs disponibles
export async function getAllSlugs() {
    const { entries } = await getMarkdownFiles();
    return entries;
}

// Obtiene las categorías de módulos para navegación
export async function getModuleCategories() {
    const { moduleCategories } = await getMarkdownFiles();
    return moduleCategories;
}

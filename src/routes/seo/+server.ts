import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

// Prerender todas las rutas SEO
export const prerender = true;

// Función para cargar contenido existente
function loadContentIndex() {
    try {
        const contentPath = join(process.cwd(), 'static', 'content-index.json');
        const content = readFileSync(contentPath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.warn('No se pudo cargar content-index.json', error);
        return null;
    }
}

function loadAiMetadata() {
    try {
        const metadataPath = join(process.cwd(), 'static', 'ai-metadata.json');
        const content = readFileSync(metadataPath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.warn('No se pudo cargar ai-metadata.json', error);
        return null;
    }
}

// URLs base del proyecto
const BASE_URLS = [
    '/',
    '/dev',
    '/user-guide'
];

// Función para generar sitemap dinámico
function generateSitemap() {
    const baseUrl = 'https://paxapos.github.io/documentation';
    const contentIndex = loadContentIndex();
    
    // URLs base
    let urls = [...BASE_URLS];
    
    // Agregar URLs del content-index si existe
    if (contentIndex?.sections?.user_guide?.files) {
        const userGuideUrls = contentIndex.sections.user_guide.files.map((file: any) => 
            `/user-guide#${file.id}`
        );
        urls.push(...userGuideUrls);
    }
    
    // Agregar URLs de desarrollo si existen
    if (contentIndex?.sections?.dev?.files) {
        const devUrls = contentIndex.sections.dev.files.map((file: any) => 
            `/dev#${file.id}`
        );
        urls.push(...devUrls);
    }
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url: string) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    return sitemap;
}

// Función para generar información de metadatos combinada
function generateMetadata() {
    const aiMetadata = loadAiMetadata();
    const contentIndex = loadContentIndex();
    
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": aiMetadata?.system_name || "PaxaPOS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser, Windows, macOS, Linux",
        "description": "Sistema POS completo para restaurantes y comercios con gestión integral",
        "inLanguage": aiMetadata?.documentation_language || "es-ES",
        "targetRegion": aiMetadata?.target_region || "Argentina",
        "features": aiMetadata?.indexing_instructions?.focus_areas || [],
        "commonQueries": aiMetadata?.indexing_instructions?.common_user_questions || [],
        "documentation": {
            "url": "https://paxapos.github.io/documentation",
            "userGuide": "https://paxapos.github.io/documentation/user-guide",
            "devDocs": "https://paxapos.github.io/documentation/dev"
        },
        "contentStatistics": aiMetadata?.content_statistics || {},
        "lastUpdated": aiMetadata?.last_updated || new Date().toISOString(),
        "version": contentIndex?.version || "2025.1"
    };
}

export const GET: RequestHandler = async ({ url }) => {
    const endpoint = url.searchParams.get('type');
    
    switch (endpoint) {
        case 'sitemap':
            const sitemap = generateSitemap();
            return new Response(sitemap, {
                headers: {
                    'Content-Type': 'application/xml',
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'metadata':
            return json(generateMetadata(), {
                headers: {
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'content-index':
            const contentIndex = loadContentIndex();
            return json(contentIndex || {}, {
                headers: {
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'ai-metadata':
            const aiMetadata = loadAiMetadata();
            return json(aiMetadata || {}, {
                headers: {
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        default:
            // Información de endpoints disponibles
            return json({
                seoEndpoints: {
                    sitemap: '/seo?type=sitemap',
                    metadata: '/seo?type=metadata',
                    contentIndex: '/seo?type=content-index',
                    aiMetadata: '/seo?type=ai-metadata'
                },
                description: 'Endpoints SEO para PaxaPOS Documentation',
                usage: 'Añade ?type=<endpoint> para acceder a cada tipo de contenido'
            });
    }
};

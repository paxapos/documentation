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

        case 'ai-urls':
            // Lista de URLs dinámicas para indexación por IA
            try {
                // Obtener lista de módulos desde el endpoint dinámico
                const response = await fetch(`${url.origin}/documentation/llms?type=list`);
                if (response.ok) {
                    const modules = await response.json();
                    const urls = [
                        `${url.origin}/documentation/llms`,
                        ...modules.map((m: any) => `${url.origin}/documentation/llms/${m.id}`)
                    ];
                    return new Response(urls.join('\n'), {
                        headers: {
                            'Content-Type': 'text/plain',
                            'Cache-Control': 'public, max-age=300'
                        }
                    });
                } else {
                    return json({ error: 'Could not fetch module list' }, { status: 500 });
                }
            } catch (error) {
                return json({ error: 'Error generating AI URLs' }, { status: 500 });
            }

        case 'ai-index':
            // Redirigir al endpoint dinámico del manual completo
            try {
                const response = await fetch(`${url.origin}/documentation/llms`);
                if (response.ok) {
                    const content = await response.text();
                    return new Response(content, {
                        headers: {
                            'Content-Type': 'text/plain; charset=utf-8',
                            'Cache-Control': 'public, max-age=300'
                        }
                    });
                } else {
                    return json({ error: 'Could not fetch complete manual' }, { status: 500 });
                }
            } catch (error) {
                return json({ error: 'AI index not available' }, { status: 500 });
            }

        case 'robots':
            // Generar robots.txt dinámico con referencias a archivos AI
            const robotsContent = `# Robots.txt para PaxaPOS Documentation
# Optimizado para indexación por IA

User-agent: *
Allow: /

# Permitir acceso específico a crawlers de IA
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 1

User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: Applebot
Allow: /
Crawl-delay: 1

# Archivos específicos para indexación por IA
# Manual completo indexado estáticamente
Allow: /documentation/llms/

# URLs importantes para SEO
Sitemap: https://paxapos.github.io/documentation/seo?type=sitemap

# URLs específicas para IA
# Lista completa de archivos indexables
${url.origin}/seo?type=ai-urls
# Contenido completo para IA
${url.origin}/seo?type=ai-index
# Metadatos estructurados
${url.origin}/seo?type=metadata`;
            
            return new Response(robotsContent, {
                headers: {
                    'Content-Type': 'text/plain',
                    'Cache-Control': 'public, max-age=86400'
                }
            });
            
        default:
            // Información de endpoints disponibles
            return json({
                seoEndpoints: {
                    sitemap: '/seo?type=sitemap',
                    robots: '/seo?type=robots',
                    metadata: '/seo?type=metadata',
                    contentIndex: '/seo?type=content-index',
                    aiMetadata: '/seo?type=ai-metadata',
                    aiUrls: '/seo?type=ai-urls',
                    aiIndex: '/seo?type=ai-index'
                },
                description: 'Endpoints SEO para PaxaPOS Documentation',
                usage: 'Añade ?type=<endpoint> para acceder a cada tipo de contenido',
                aiIndexing: {
                    dynamicEndpoints: 'URLs dinámicas desde /llms/[module] y /llms',
                    masterIndex: '/llms (manual completo)',
                    moduleIndex: '/llms/[moduleId] (módulo específico)',
                    moduleList: '/llms?type=list (lista JSON)',
                    seoEndpoints: {
                        aiUrls: '/seo?type=ai-urls',
                        aiIndex: '/seo?type=ai-index'
                    }
                },
                implementation: {
                    status: 'DYNAMIC URLs ✅',
                    lastUpdate: new Date().toISOString(),
                    features: [
                        'URLs dinámicas generadas on-the-fly desde archivos MD',
                        'No requiere regenerar archivos estáticos', 
                        'Siempre sincronizado con contenido fuente',
                        'Manejo de caracteres especiales automático',
                        'Cache inteligente para performance',
                        'Endpoints RESTful para IA'
                    ]
                }
            });
    }
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const metadata = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication", 
        "name": "PaxaPOS Documentation",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser, Windows, macOS, Linux",
        "description": "Sistema POS completo para restaurantes y comercios con gestión integral",
        "inLanguage": "es-ES",
        "targetRegion": "Argentina",
        "documentation": {
            "url": "https://paxapos.github.io/documentation",
            "userGuide": "https://paxapos.github.io/documentation/user-guide",
            "devDocs": "https://paxapos.github.io/documentation/dev",
            "llmEndpoints": [
                "https://paxapos.github.io/documentation/api/llm/introduccion",
                "https://paxapos.github.io/documentation/api/llm/iniciar-sesion",
                "https://paxapos.github.io/documentation/api/llm/crear-usuarios",
                "https://paxapos.github.io/documentation/api/llm/tipos-de-pago",
                "https://paxapos.github.io/documentation/api/llm/agregar-personal",
                "https://paxapos.github.io/documentation/api/llm/configuracion-impresoras",
                "https://paxapos.github.io/documentation/api/llm/menu",
                "https://paxapos.github.io/documentation/api/llm/salon",
                "https://paxapos.github.io/documentation/api/llm/kds",
                "https://paxapos.github.io/documentation/api/llm/contabilidad",
                "https://paxapos.github.io/documentation/api/llm/arqueos",
                "https://paxapos.github.io/documentation/api/llm/compras-stock",
                "https://paxapos.github.io/documentation/api/llm/arca-facturacion",
                "https://paxapos.github.io/documentation/api/llm/estadisticas",
                "https://paxapos.github.io/documentation/api/llm/buchon-bot"
            ]
        },
        "lastUpdated": new Date().toISOString(),
        "version": "2025.1"
    };

    return json(metadata, {
        headers: {
            'Cache-Control': 'public, max-age=3600'
        }
    });
};

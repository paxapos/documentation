import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // default options are fine for most cases
            pages: 'build', // Directorio de salida
            assets: 'build', // Directorio de salida
            fallback: undefined, // No fallback - fully prerendered static site
            precompress: false,
            strict: false // Permitir rutas dinámicas no prerenderizadas
        }),
        prerender: {
            handleHttpError: 'warn',
            entries: [
                '*',
                // Agregar rutas explícitas para los endpoints LLM
                '/api/llm/introduccion',
                '/api/llm/iniciar-sesion',
                '/api/llm/crear-usuarios',
                '/api/llm/tipos-de-pago',
                '/api/llm/agregar-personal',
                '/api/llm/configuracion-impresoras',
                '/api/llm/menu',
                '/api/llm/salon',
                '/api/llm/kds',
                '/api/llm/contabilidad',
                '/api/llm/arqueos',
                '/api/llm/compras-stock',
                '/api/llm/arca-facturacion',
                '/api/llm/estadisticas',
                '/api/llm/buchon-bot'
            ]
        },
        // Path base para GitHub Pages
        paths: {
            base: '/documentation'
        }
    }
};

export default config;

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
            fallback: undefined, // o 'index.html' o '404.html' si necesitas un fallback SPA
            precompress: false,
            strict: true
        }),
        // Asegúrate que el path base sea correcto si tu sitio no está en la raíz del dominio de GitHub Pages
        // paths: {
        //   base: process.env.NODE_ENV === 'production' ? '/tu-repositorio' : '',
        // }
    }
};

export default config;

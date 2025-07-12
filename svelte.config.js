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
            strict: true // Be strict about prerendering
        }),
        prerender: {
            handleMissingId: 'warn', // Only warn about missing IDs instead of failing
            handleHttpError: 'warn' // Only warn about HTTP errors instead of failing
        },
        // Path base para GitHub Pages
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/documentation' : '',
        },
        trailingSlash: 'always'
    }
};

export default config;

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
			strict: false, // Permitir rutas dinámicas no prerenderizadas
		}),
		prerender: {
			handleHttpError: 'warn',
			// Las rutas /api/llm/* se generan dinámicamente via entries() en +server.ts
			// Las rutas /user-guide/[slug] se generan via entries() en +page.server.js
			// '*' cubre todas las rutas estáticas descubiertas por el crawler
			entries: ['*'],
		},
		// Path base removido para dominio personalizado
		// Si necesitas volver a GitHub Pages sin dominio, descomenta:
		// paths: {
		//     base: '/documentation'
		// }
	},
};

export default config;

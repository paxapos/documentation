import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// Sitio 100% prerendereado; 404.html es solo la página que nginx sirve
			// con status 404 para URLs que no existen (ver nginx-runtime.conf).
			fallback: '404.html',
			precompress: false,
			strict: true,
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn', // anclas rotas en contenido md = warning, no abortar el build
			// /user-guide/[slug] se genera via entries() en su +page.server.ts
			entries: ['*'],
		},
	},
};

export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined, // sitio 100% prerendereado
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

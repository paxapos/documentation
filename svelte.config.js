import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Todas las páginas se prerenderean en build (build/prerendered) y el server de Node
		// (server.js) las sirve tal cual. SvelteKit solo renderiza en runtime lo que no
		// existe: la página de error con status 404 real (+error.svelte).
		adapter: adapter({ out: 'build', precompress: true }),
		prerender: {
			// Un enlace roto en un .md avisa; cualquier otro error (un 500 en un load, una
			// entrada de entries() que no renderiza) corta el build.
			handleHttpError: ({ status, referrer, referenceType, message }) => {
				if (status === 404 && referrer && referenceType === 'linked') {
					console.warn(message);
					return;
				}
				throw new Error(message);
			},
			handleMissingId: 'warn', // anclas rotas en contenido md = warning, no abortar el build
			// /user-guide/[slug] se genera via entries() en su +page.server.ts
			entries: ['*'],
		},
	},
};

export default config;

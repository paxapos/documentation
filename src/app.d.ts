// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Configuración de runtime inyectada via config.js
	interface Window {
		__APP_CONFIG__?: {
			BRAND_NAME: string;
			SYSTEM_URL: string;
			COMPANY_NAME: string;
		};
	}
}

export {};

import { browser } from '$app/environment';

let isDarkState = false;

export function getIsDarkMode(): boolean {
	return isDarkState;
}

// Función para aplicar el tema al DOM
export function applyThemeToDOM(dark: boolean) {
	if (!browser) return;
	isDarkState = dark;

	const html = document.documentElement;

	if (dark) {
		html.classList.add('dark');
		html.style.colorScheme = 'dark';
	} else {
		html.classList.remove('dark');
		html.style.colorScheme = 'light';
	}
}

// Función para inicializar el tema
export function initThemeStore() {
	if (!browser) return;

	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

	// Aplicar tema inicial
	const initialDark = mediaQuery.matches;
	applyThemeToDOM(initialDark);

	// Escuchar cambios en las preferencias del sistema
	function handleChange(e: MediaQueryListEvent) {
		applyThemeToDOM(e.matches);
	}

	// Compatibilidad con diferentes navegadores
	if (mediaQuery.addEventListener) {
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	} else if (mediaQuery.addListener) {
		mediaQuery.addListener(handleChange);
		return () => mediaQuery.removeListener(handleChange);
	}
}

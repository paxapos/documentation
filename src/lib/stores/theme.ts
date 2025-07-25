// Theme store para manejo global del tema
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Función para detectar si el usuario prefiere modo oscuro
function getInitialTheme(): boolean {
    if (!browser) return false; // Default para SSR
    
    // Detectar preferencia del usuario
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    }
    
    return false;
}

// Store reactivo para el tema
export const isDarkMode = writable<boolean>(getInitialTheme());

// Función para aplicar el tema al DOM
export function applyThemeToDOM(dark: boolean) {
    if (!browser) return;
    
    const html = document.documentElement;
    
    if (dark) {
        html.classList.add('dark');
        html.style.colorScheme = 'dark';
    } else {
        html.classList.remove('dark');
        html.style.colorScheme = 'light';
    }
}

// Función para inicializar el theme store
export function initThemeStore() {
    if (!browser) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Aplicar tema inicial
    const initialDark = mediaQuery.matches;
    isDarkMode.set(initialDark);
    applyThemeToDOM(initialDark);
    
    // Escuchar cambios en las preferencias del sistema
    function handleChange(e: MediaQueryListEvent) {
        const newDark = e.matches;
        isDarkMode.set(newDark);
        applyThemeToDOM(newDark);
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

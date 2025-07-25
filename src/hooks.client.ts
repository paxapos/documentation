// hooks.client.ts - Ejecutado en el lado del cliente para manejo del tema

export function handleTheme() {
    // Solo ejecutar en el cliente (navegador)
    if (typeof window !== 'undefined') {
        function applyTheme() {
            const html = document.documentElement;
            
            // Detectar preferencia del usuario/sistema
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            // Aplicar clase dark si prefiere modo oscuro
            if (prefersDark) {
                html.classList.add('dark');
                html.style.colorScheme = 'dark';
            } else {
                html.classList.remove('dark');
                html.style.colorScheme = 'light';
            }
            
            // Log para debugging
            console.log('Theme applied:', prefersDark ? 'dark' : 'light');
        }
        
        // Aplicar tema en la carga inicial
        applyTheme();
        
        // Escuchar cambios en las preferencias del sistema
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            // Para navegadores modernos (Chrome 76+, Firefox 55+, Safari 14+)
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', applyTheme);
            } 
            // Para navegadores más antiguos (IE, Safari < 14)
            else if (mediaQuery.addListener) {
                mediaQuery.addListener(applyTheme);
            }
            
            // Cleanup function para SvelteKit
            return () => {
                if (mediaQuery.removeEventListener) {
                    mediaQuery.removeEventListener('change', applyTheme);
                } else if (mediaQuery.removeListener) {
                    mediaQuery.removeListener(applyTheme);
                }
            };
        }
    }
}

// Auto-ejecutar cuando se carga el módulo
if (typeof window !== 'undefined') {
    // Ejecutar inmediatamente y luego en el próximo tick para asegurar que el DOM esté listo
    handleTheme();
    setTimeout(handleTheme, 0);
}

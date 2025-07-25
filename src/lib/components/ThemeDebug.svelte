<!-- Componente para debugging del tema (opcional) -->
<script lang="ts">
	import { isDarkMode } from '$lib/stores/theme';
	import { browser } from '$app/environment';
	
	let systemPreference: string = 'unknown';
	let browserSupport: boolean = false;
	
	$: if (browser) {
		// Detectar soporte del navegador
		browserSupport = !!(window.matchMedia);
		
		// Detectar preferencia del sistema
		if (window.matchMedia) {
			const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const lightQuery = window.matchMedia('(prefers-color-scheme: light)');
			
			if (darkQuery.matches) {
				systemPreference = 'dark';
			} else if (lightQuery.matches) {
				systemPreference = 'light';
			} else {
				systemPreference = 'no-preference';
			}
		}
	}
</script>

<!-- Solo mostrar en desarrollo -->
{#if browser && window.location.hostname === 'localhost'}
	<div class="fixed bottom-4 right-4 z-50 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-xs shadow-lg">
		<div class="font-semibold mb-2 text-gray-900 dark:text-white">Theme Debug</div>
		<div class="space-y-1 text-gray-700 dark:text-gray-300">
			<div>Store: {$isDarkMode ? 'dark' : 'light'}</div>
			<div>System: {systemPreference}</div>
			<div>Browser Support: {browserSupport ? '✅' : '❌'}</div>
			<div>HTML Class: {browser && document.documentElement.classList.contains('dark') ? 'dark' : 'light'}</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import ChatBotSimple from '$lib/components/ChatBotSimple.svelte';
	import { autoReplaceBrand } from '$lib/helpers/textReplacer';
	import { onMount } from 'svelte';
	import { initThemeStore } from '$lib/stores/theme';
	
	let { children } = $props();
	
	// Inicializar el manejo de temas al montar el componente
	onMount(() => {
		const cleanup = initThemeStore();
		
		// Cleanup function
		return cleanup;
	});
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200" use:autoReplaceBrand>
	<!-- Navigation -->
	<Navigation/>

	<!-- Main content -->
	<main class="bg-white dark:bg-gray-900">
		{@render children()}
	</main>

	<!-- ChatBot simple y optimizado -->
	<ChatBotSimple />
</div>

<style>
	/* Estilos básicos sin dependencias externas problemáticas */
	:global(.markdown-content) {
		line-height: 1.6;
		color: rgb(55 65 81); /* gray-700 */
	}
	
	/* Modo oscuro */
	:global(.dark .markdown-content) {
		color: rgb(209 213 219); /* gray-300 */
	}
</style>

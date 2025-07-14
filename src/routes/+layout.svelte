<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
	<!-- Navigation -->
	<Navigation/>

	<!-- Main content -->
	<main class="bg-white dark:bg-gray-900">
		{@render children()}
	</main>
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

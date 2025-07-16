<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import { autoReplaceBrand } from '$lib/helpers/textReplacer';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Meta tags básicos para toda la documentación -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#1f2937" />
	<meta name="color-scheme" content="light dark" />
	
	<!-- Schema.org para DocumentationSite -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "PaxaPOS Documentation",
			"description": "Documentación completa del sistema PaxaPOS - Manual de usuario y guías para desarrolladores",
			"url": "https://docs.paxapos.com/",
			"inLanguage": "es-ES",
			"publisher": {
				"@type": "Organization",
				"name": "PaxaPOS",
				"url": "https://docs.paxapos.com/"
			},
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://docs.paxapos.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200" use:autoReplaceBrand>
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

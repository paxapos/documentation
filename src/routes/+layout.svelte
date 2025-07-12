<script lang="ts">
	import '../app.css';
	import 'github-markdown-css/github-markdown-light.css';
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
	@import 'github-markdown-css/github-markdown-light.css';
	
	/* Estilo para modo oscuro en markdown */
	@media (prefers-color-scheme: dark) {
		@import 'github-markdown-css/github-markdown-dark.css';
	}
</style>

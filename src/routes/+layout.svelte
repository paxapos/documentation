<script lang="ts">
	import '../app.css';
	import 'github-markdown-css/github-markdown.css';
	import Navigation from '$lib/components/Navigation.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen dark:bg-gray-800 dark:text-white">

	<!-- Navigation -->
	<Navigation/>

	<!-- Main content -->
	<main>
		{@render children()}
	</main>
</div>

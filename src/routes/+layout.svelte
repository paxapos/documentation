<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<div
	class="min-h-screen bg-white text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-white"
>
	<!-- Navigation -->
	<Navigation />

	<!-- Main content -->
	<main class="w-full max-w-full overflow-x-clip bg-white dark:bg-gray-900">
		<div class="w-full">
			{@render children()}
		</div>
	</main>
</div>


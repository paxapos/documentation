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
	<main class="w-full max-w-full overflow-x-hidden bg-white dark:bg-gray-900">
		<div class="mx-auto w-full max-w-7xl px-0 sm:px-4 lg:px-8">
			{@render children()}
		</div>
	</main>
</div>


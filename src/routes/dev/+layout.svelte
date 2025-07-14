<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { FEATURE_FLAGS } from '$lib/helpers/constants';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!FEATURE_FLAGS.showDevDocumentation) {
			// Redirigir a la página principal si dev documentation está deshabilitada
			goto(`${base}/`);
		}
	});
</script>

{#if FEATURE_FLAGS.showDevDocumentation}
	<slot />
{:else}
	<!-- Mostrar un mensaje de carga mientras redirige -->
	<div class="flex items-center justify-center min-h-screen">
		<div class="text-center">
			<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
			<p class="mt-4 text-gray-600 dark:text-gray-300">Redirigiendo...</p>
		</div>
	</div>
{/if}

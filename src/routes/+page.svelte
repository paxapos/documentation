<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	// Redirigir automáticamente al manual de usuario
	onMount(() => {
		goto(`${base}/user-guide`);
	});
</script>

<svelte:head>
	<!-- Meta tags básicos -->
	<title>PaxaPOS - Manual de Usuario</title>
	<meta
		name="description"
		content="Manual de usuario completo de PaxaPOS. Aprende a usar todas las funcionalidades del sistema de gestión más completo para comercios."
	/>
	<meta
		name="keywords"
		content="PaxaPOS, manual, usuario, tutorial, guía, sistema de gestión, punto de venta, POS"
	/>
	<meta name="author" content="PaxaPOS" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://doc.paxapos.com/" />
	<meta property="og:title" content="PaxaPOS - Manual de Usuario" />
	<meta
		property="og:description"
		content="Manual completo para aprender a usar todas las funcionalidades de PaxaPOS paso a paso."
	/>
	<meta property="og:site_name" content="PaxaPOS Documentation" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://doc.paxapos.com/" />
	<meta property="twitter:title" content="PaxaPOS - Manual de Usuario" />
	<meta
		property="twitter:description"
		content="Manual completo para aprender a usar todas las funcionalidades de PaxaPOS paso a paso."
	/>

	<!-- Schema.org JSON-LD -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "TechArticle",
			"name": "PaxaPOS - Manual de Usuario",
			"description": "Manual de usuario completo para aprender a utilizar PaxaPOS paso a paso",
			"url": "https://doc.paxapos.com/",
			"publisher": {
				"@type": "Organization",
				"name": "PaxaPOS",
				"url": "https://doc.paxapos.com/"
			},
			"datePublished": "2024-01-01",
			"dateModified": "2025-09-23"
		}
	</script>
</svelte:head>

<!-- Cargando mientras redirige -->
<div class="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
	<div class="text-center">
		<div
			class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"
		></div>
		<p class="text-gray-600 dark:text-gray-400">Cargando manual de usuario...</p>
	</div>
</div>

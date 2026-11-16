<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Página no encontrada | PaxaPOS Documentation</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div class="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
	<p class="mb-2 text-sm font-medium text-blue-700 dark:text-blue-300">Error {page.status}</p>
	<h1 class="mb-4 text-3xl font-bold text-gray-950 dark:text-white">
		{page.status === 404 ? 'No encontramos esta página' : 'Algo salió mal'}
	</h1>
	<p class="mb-8 text-gray-600 dark:text-gray-400">
		Puede que el artículo haya cambiado de nombre. Buscalo en el índice del manual.
	</p>
	<a
		href={resolve('/user-guide')}
		class="inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-5 font-medium text-white hover:bg-blue-700"
	>
		Ir al Manual de Usuario
	</a>
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import {
		searchContent,
		type SearchableItem,
		getSlugFromModuleId,
	} from '$lib/helpers/constants';

	let searchQuery = '';
	let showSearchResults = false;
	let searchResults: SearchableItem[] = [];
	let isSearching = false;
	let searchInputDesktop: HTMLInputElement;
	let searchInputMobile: HTMLInputElement;
	let showMobileSearch = false;

	const handleSearch = async (event: Event) => {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;

		if (searchQuery.length < 2) {
			showSearchResults = false;
			searchResults = [];
			return;
		}

		isSearching = true;
		showSearchResults = true;

		try {
			searchResults = await searchContent(searchQuery, 8);
		} catch (error) {
			console.error('Error en búsqueda:', error);
			searchResults = [];
		} finally {
			isSearching = false;
		}
	};

	const selectSearchResult = (item: SearchableItem) => {
		try {
			console.log('Navegando a:', item);
			const currentSearchQuery = searchQuery;
			searchQuery = '';
			showSearchResults = false;
			searchResults = [];
			showMobileSearch = false; // Cerrar el campo de búsqueda móvil

			// Si tiene ID específico y es de documentación del usuario, navegar a la página individual
			if (item.id && item.href === '/user-guide') {
				const slug = getSlugFromModuleId(item.id);
				const url = `${base}/user-guide/${slug}?highlight=${encodeURIComponent(currentSearchQuery)}`;
				console.log('URL generada para user-guide:', url);
				goto(url);
			} else {
				const url = `${base}${item.href}?highlight=${encodeURIComponent(currentSearchQuery)}`;
				console.log('URL generada genérica:', url);
				goto(url);
			}
		} catch (error) {
			console.error('Error al navegar:', error);
		}
	};

	const handleSearchFocus = () => {
		if (searchQuery.length >= 2) {
			showSearchResults = true;
		}
	};

	const handleSearchBlur = () => {
		setTimeout(() => {
			showSearchResults = false;
			// En mobile, si no hay texto de búsqueda, ocultar el campo de búsqueda
			if (!searchQuery.trim()) {
				showMobileSearch = false;
			}
		}, 200);
	};

	const toggleMobileSearch = () => {
		try {
			showMobileSearch = !showMobileSearch;
			if (showMobileSearch && searchInputMobile) {
				// Pequeño delay para asegurar que el input esté renderizado
				setTimeout(() => {
					searchInputMobile.focus();
					// Scroll suave hacia el campo de búsqueda
					searchInputMobile.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}, 100);
			}
		} catch (error) {
			console.error('Error al enfocar el campo de búsqueda:', error);
		}
	};
</script>

<!-- Search Navigation -->
<nav
	class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80"
>
	<div class="mx-auto w-full max-w-7xl px-0 sm:px-4 lg:px-8">
		<div class="flex h-16 w-full items-center justify-between px-4 sm:px-0">
			<!-- Logo/Title -->
			<div class="min-w-0 flex-shrink-0">
				<a
					href="{base}/user-guide"
					class="truncate text-lg font-bold text-gray-900 sm:text-xl dark:text-white"
				>
					📚 Centro de Documentación
				</a>
			</div>

			<!-- Desktop Search -->
			<div class="mx-8 hidden max-w-lg flex-1 md:block">
				<div class="relative">
					<input
						bind:this={searchInputDesktop}
						type="text"
						placeholder="Buscar en el manual..."
						class="w-full rounded-xl border border-gray-300 bg-white py-3 pr-4 pl-12 text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
						bind:value={searchQuery}
						on:input={handleSearch}
						on:focus={handleSearchFocus}
						on:blur={handleSearchBlur}
					/>
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
					>
						{#if isSearching}
							<svg
								class="h-5 w-5 animate-spin text-gray-400 dark:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						{:else}
							<svg
								class="h-5 w-5 text-gray-400 dark:text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						{/if}
					</div>

					<!-- Search Results Dropdown -->
					{#if showSearchResults}
						<div
							class="absolute top-full right-0 left-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800"
						>
							{#if isSearching}
								<div class="px-4 py-4 text-gray-500 dark:text-gray-400">
									<div class="flex items-center">
										<svg
											class="mr-2 h-4 w-4 animate-spin"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												class="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												stroke-width="4"
											></circle>
											<path
												class="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Buscando...
									</div>
								</div>
							{:else if searchResults.length > 0}
								{#each searchResults as result}
									<button
										type="button"
										class="w-full border-b border-gray-100 px-4 py-4 text-left transition-colors duration-200 last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
										on:click={() => selectSearchResult(result)}
									>
										<div class="font-semibold text-gray-900 dark:text-white">
											{result.title}
										</div>
										<div class="text-sm text-blue-600 dark:text-blue-400">
											{result.type}
										</div>
										{#if result.preview}
											<div
												class="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300"
											>
												{result.preview}
											</div>
										{/if}
									</button>
								{/each}
							{:else}
								<div class="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
									<svg
										class="mx-auto mb-2 h-8 w-8 text-gray-300 dark:text-gray-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
									No se encontraron resultados
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>

			<!-- Mobile Search Button -->
			<div class="flex items-center md:hidden">
				<button
					type="button"
					class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-400"
					on:click={toggleMobileSearch}
				>
					<span class="sr-only">Buscar</span>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Search (Solo visible cuando se presiona el icono) -->
		{#if showMobileSearch}
			<div class="animate-in slide-in-from-top-2 px-0 pb-4 duration-200 md:hidden">
				<div class="relative w-full">
					<input
						bind:this={searchInputMobile}
						type="text"
						placeholder="Buscar en el manual..."
						class="w-full rounded-xl border border-gray-300 bg-white py-3 pr-4 pl-12 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
						bind:value={searchQuery}
						on:input={handleSearch}
						on:focus={handleSearchFocus}
						on:blur={handleSearchBlur}
					/>
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
					>
						{#if isSearching}
							<svg
								class="h-5 w-5 animate-spin text-gray-400 dark:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						{:else}
							<svg
								class="h-5 w-5 text-gray-400 dark:text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						{/if}
					</div>
				</div>

				<!-- Mobile Search Results -->
				{#if showSearchResults && searchQuery.length >= 2}
					<div
						class="mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
					>
						{#if isSearching}
							<div class="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
								<div class="flex items-center justify-center">
									<svg
										class="mr-2 h-4 w-4 animate-spin"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Buscando...
								</div>
							</div>
						{:else if searchResults.length > 0}
							{#each searchResults as result}
								<button
									type="button"
									class="w-full border-b border-gray-100 px-4 py-3 text-left text-sm transition-colors duration-200 last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
									on:click={() => selectSearchResult(result)}
								>
									<div class="font-medium text-gray-900 dark:text-white">
										{result.title}
									</div>
									<div class="text-xs text-blue-600 dark:text-blue-400">
										{result.type}
									</div>
									{#if result.preview}
										<div
											class="mt-1 line-clamp-2 text-xs text-gray-600 dark:text-gray-300"
										>
											{result.preview}
										</div>
									{/if}
								</button>
							{/each}
						{:else}
							<div
								class="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400"
							>
								No se encontraron resultados
							</div>
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</nav>

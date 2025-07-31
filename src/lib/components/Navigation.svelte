<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { searchContent, navigation, type SearchableItem } from '$lib/helpers/constants';

	let mobileMenuOpen = false;
	let searchQuery = '';
	let showSearchResults = false;
	let searchResults: SearchableItem[] = [];
	let isSearching = false;

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
		console.log('Navegando a:', item);
		const currentSearchQuery = searchQuery; // Guardar antes de limpiar
		searchQuery = '';
		showSearchResults = false;
		searchResults = [];
		mobileMenuOpen = false;

		// Si tiene ID específico y es de documentación, navegar con parámetro
		if (item.id && (item.href === '/user-guide' || item.href === '/dev')) {
			const url = `${base}${item.href}?module=${item.id}&highlight=${encodeURIComponent(currentSearchQuery)}`;
			console.log('URL generada:', url);
			goto(url);
		} else {
			goto(`${base}${item.href}?highlight=${encodeURIComponent(currentSearchQuery)}`);
		}
	};

	const handleSearchFocus = () => {
		if (searchQuery.length >= 2) {
			showSearchResults = true;
		}
	};

	const handleSearchBlur = () => {
		// Delay para permitir click en resultados
		setTimeout(() => {
			showSearchResults = false;
		}, 200);
	};
</script>

<!-- Navigation -->
<nav
	class="top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<!-- Logo and primary nav -->
			<div class="flex">
				<div class="flex flex-shrink-0 items-center">
					<a href="{base}/" class="text-xl font-bold text-gray-900 dark:text-white">PaxaPOS Docs</a>
				</div>
				<!-- Desktop navigation -->
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each navigation as item}
						<a
							href="{base}{item.href}"
							class={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
								$page.url.pathname === item.href
									? 'border-blue-500 text-blue-600 dark:text-blue-400'
									: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200'
							}`}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			<!-- Search and mobile menu button -->
			<div class="flex items-center">
				<div class="mr-4 hidden md:block">
					<div class="relative">
						<input
							type="text"
							placeholder="Buscar documentación..."
							class="w-64 rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							bind:value={searchQuery}
							oninput={handleSearch}
							onfocus={handleSearchFocus}
							onblur={handleSearchBlur}
						/>
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
								class="absolute top-full right-0 left-0 z-50 mt-1 max-h-80 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
							>
								{#if isSearching}
									<div class="px-4 py-3 text-gray-500 dark:text-gray-400">
										<div class="flex items-center">
											<svg
												class="mr-2 -ml-1 h-4 w-4 animate-spin"
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
											class="w-full border-b border-gray-100 px-4 py-3 text-left transition-colors duration-200 last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
											onclick={() => selectSearchResult(result)}
										>
											<div class="font-medium text-gray-900 dark:text-white">{result.title}</div>
											<div class="text-sm text-gray-500 dark:text-gray-400">{result.type}</div>
											{#if result.preview}
												<div class="mt-1 line-clamp-2 text-xs text-gray-600 dark:text-gray-300">
													{result.preview}
												</div>
											{/if}
										</button>
									{/each}
								{:else}
									<div class="px-4 py-3 text-gray-500 dark:text-gray-400">
										No se encontraron resultados
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
				<!-- Mobile menu button -->
				<div class="sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset dark:text-gray-500 dark:hover:bg-gray-800"
						onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					>
						<span class="sr-only">Abrir menú principal</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 bg-white sm:hidden dark:border-gray-700 dark:bg-gray-900">
			<div class="space-y-1 pt-2 pb-3">
				{#each navigation as item}
					<a
						href="{base}{item.href}"
						class={`block border-l-4 py-2 pr-4 pl-3 text-base font-medium transition-colors duration-200 ${
							$page.url.pathname === item.href
								? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
								: 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800'
						}`}
						onclick={() => (mobileMenuOpen = false)}
					>
						{item.name}
					</a>
				{/each}
			</div>
			<!-- Mobile search -->
			<div class="border-t border-gray-200 pt-4 pb-3 dark:border-gray-700">
				<div class="px-4">
					<input
						type="text"
						placeholder="Buscar documentación..."
						class="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
						bind:value={searchQuery}
						oninput={handleSearch}
					/>
				</div>
				<!-- Mobile search results -->
				{#if showSearchResults && searchQuery.length >= 2}
					<div class="mx-4 mt-2">
						{#if isSearching}
							<div class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">Buscando...</div>
						{:else if searchResults.length > 0}
							{#each searchResults as result}
								<button
									type="button"
									class="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
									onclick={() => selectSearchResult(result)}
								>
									<div class="font-medium text-gray-900 dark:text-white">{result.title}</div>
									<div class="text-xs text-gray-500 dark:text-gray-400">{result.type}</div>
									{#if result.preview}
										<div class="mt-1 line-clamp-2 text-xs text-gray-600 dark:text-gray-300">
											{result.preview}
										</div>
									{/if}
								</button>
							{/each}
						{:else}
							<div class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
								No se encontraron resultados
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</nav>

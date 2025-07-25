<script lang='ts'>
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
<nav class="shadow-sm border-b top-0 z-50 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<!-- Logo and primary nav -->
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<a href="{base}/" class="text-xl font-bold text-gray-900 dark:text-white">PaxaPOS Docs</a>
				</div>
				<!-- Desktop navigation -->
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each navigation as item}
						<a
							href="{base}{item.href}"
							class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
								$page.url.pathname === item.href
									? 'border-blue-500 text-blue-600 dark:text-blue-400'
									: 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200'
							}`}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			<!-- Search and mobile menu button -->
			<div class="flex items-center">
			<div class="hidden md:block mr-4">
				<div class="relative">
					<input
						type="text"
						placeholder="Buscar documentación..."
						class="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
						bind:value={searchQuery}
						oninput={handleSearch}
						onfocus={handleSearchFocus}
						onblur={handleSearchBlur}
					/>
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						{#if isSearching}
							<svg class="animate-spin h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						{:else}
							<svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						{/if}
					</div>
					<!-- Search Results Dropdown -->
					{#if showSearchResults}
						<div class="absolute top-full left-0 right-0 mt-1 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto bg-white dark:bg-gray-800">
							{#if isSearching}
								<div class="px-4 py-3 text-gray-500 dark:text-gray-400">
									<div class="flex items-center">
										<svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Buscando...
									</div>
								</div>
							{:else if searchResults.length > 0}
								{#each searchResults as result}
									<button
										type="button"
										class="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors duration-200"
										onclick={() => selectSearchResult(result)}
									>
										<div class="font-medium text-gray-900 dark:text-white">{result.title}</div>
										<div class="text-sm text-gray-500 dark:text-gray-400">{result.type}</div>
										{#if result.preview}
											<div class="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{result.preview}</div>
										{/if}
									</button>
								{/each}
							{:else}
								<div class="px-4 py-3 text-gray-500 dark:text-gray-400">No se encontraron resultados</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>
				<!-- Mobile menu button -->
				<div class="sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						onclick={() => mobileMenuOpen = !mobileMenuOpen}
					>
						<span class="sr-only">Abrir menú principal</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
			<div class="pt-2 pb-3 space-y-1">
				{#each navigation as item}
					<a
						href="{base}{item.href}"
						class={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
							$page.url.pathname === item.href
								? 'bg-blue-50 dark:bg-blue-900/50 border-blue-500 text-blue-700 dark:text-blue-300'
								: 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
						}`}
						onclick={() => mobileMenuOpen = false}
					>
						{item.name}
					</a>
				{/each}
			</div>
			<!-- Mobile search -->
			<div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
				<div class="px-4">
					<input
						type="text"
						placeholder="Buscar documentación..."
						class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
						bind:value={searchQuery}
						oninput={handleSearch}
					/>
				</div>
				<!-- Mobile search results -->
				{#if showSearchResults && searchQuery.length >= 2}
					<div class="mt-2 mx-4">
						{#if isSearching}
							<div class="px-3 py-2 text-gray-500 dark:text-gray-400 text-sm">
								Buscando...
							</div>
						{:else if searchResults.length > 0}
							{#each searchResults as result}
								<button
									type="button"
									class="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
									onclick={() => selectSearchResult(result)}
								>
									<div class="font-medium text-gray-900 dark:text-white">{result.title}</div>
									<div class="text-xs text-gray-500 dark:text-gray-400">{result.type}</div>
									{#if result.preview}
										<div class="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{result.preview}</div>
									{/if}
								</button>
							{/each}
						{:else}
							<div class="px-3 py-2 text-gray-500 dark:text-gray-400 text-sm">No se encontraron resultados</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</nav>

<script lang="ts">
	import { tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import {
		searchContent,
		type SearchableItem,
		getSlugFromModuleId,
	} from '$lib/helpers/constants';

	let searchQuery = $state('');
	let showSearchResults = $state(false);
	let searchResults: SearchableItem[] = $state([]);
	let isSearching = $state(false);
	let searchInputDesktop = $state<HTMLInputElement>();
	let searchInputMobile = $state<HTMLInputElement>();
	let showMobileSearch = $state(false);

	let searchTimeout: ReturnType<typeof setTimeout>;

	const handleSearch = (event: Event) => {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;

		if (searchTimeout) clearTimeout(searchTimeout);

		if (searchQuery.length < 2) {
			showSearchResults = false;
			searchResults = [];
			isSearching = false;
			return;
		}

		isSearching = true;
		showSearchResults = true;

		searchTimeout = setTimeout(async () => {
			try {
				searchResults = await searchContent(searchQuery, 8);
			} catch (error) {
				console.error('Error en búsqueda:', error);
				searchResults = [];
			} finally {
				isSearching = false;
			}
		}, 300);
	};

	const selectSearchResult = (item: SearchableItem) => {
		try {
			const currentSearchQuery = searchQuery;
			searchQuery = '';
			showSearchResults = false;
			searchResults = [];
			showMobileSearch = false;

			if (item.id && item.href === '/user-guide') {
				const slug = getSlugFromModuleId(item.id);
				const url = `${base}/user-guide/${slug}?highlight=${encodeURIComponent(currentSearchQuery)}`;
				goto(url);
			} else {
				const url = `${base}${item.href}?highlight=${encodeURIComponent(currentSearchQuery)}`;
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
		}, 200);
	};

	const handleSearchKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && showMobileSearch) toggleMobileSearch();
	};

	const toggleMobileSearch = () => {
		showMobileSearch = !showMobileSearch;
		if (showMobileSearch) {
			tick().then(() => searchInputMobile?.focus());
		} else {
			searchQuery = '';
			showSearchResults = false;
			searchResults = [];
		}
	};
</script>

{#snippet searchIcon()}
	{#if isSearching}
		<svg class="h-5 w-5 animate-spin text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" aria-hidden="true">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	{:else}
		<svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	{/if}
{/snippet}

{#snippet results()}
	{#if showSearchResults && searchQuery.length >= 2}
		<div
			class="absolute top-full right-0 left-0 z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl md:max-h-96 dark:border-gray-600 dark:bg-gray-800"
		>
			{#if isSearching}
				<div class="px-4 py-4 text-center text-gray-500 dark:text-gray-400">Buscando...</div>
			{:else if searchResults.length > 0}
				{#each searchResults as result (result.id ?? result.href)}
					<button
						type="button"
						class="w-full border-b border-gray-100 px-4 py-3 text-left transition-colors duration-200 last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
						onclick={() => selectSearchResult(result)}
					>
						<div class="font-semibold text-gray-900 dark:text-white">{result.title}</div>
						<div class="text-sm text-blue-600 dark:text-blue-400">{result.type}</div>
						{#if result.preview}
							<div class="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
								{result.preview}
							</div>
						{/if}
					</button>
				{/each}
			{:else}
				<div class="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
					No se encontraron resultados
				</div>
			{/if}
		</div>
	{/if}
{/snippet}

<!-- Search Navigation -->
<nav
	class="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90"
>
	<div class="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-4 md:h-16 lg:px-8">
		{#if showMobileSearch}
			<!-- Mobile: el buscador ocupa toda la barra -->
			<div class="relative flex-1 md:hidden">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					{@render searchIcon()}
				</div>
				<input
					bind:this={searchInputMobile}
					type="search"
					placeholder="Buscar en el manual..."
					class="h-10 w-full rounded-lg border border-gray-300 bg-white pr-3 pl-10 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
					bind:value={searchQuery}
					oninput={handleSearch}
					onfocus={handleSearchFocus}
					onblur={handleSearchBlur}
					onkeydown={handleSearchKeydown}
				/>
				{@render results()}
			</div>
			<button
				type="button"
				class="min-h-10 shrink-0 px-1 text-sm font-medium text-blue-700 md:hidden dark:text-blue-300"
				onclick={toggleMobileSearch}
			>
				Cancelar
			</button>
		{/if}

		<a
			href="{base}/user-guide"
			class="min-w-0 truncate text-base font-bold text-gray-900 sm:text-xl dark:text-white {showMobileSearch
				? 'hidden md:block'
				: ''}"
		>
			📚 Centro de Documentación
		</a>

		<!-- Desktop Search -->
		<div class="relative ml-auto hidden w-full max-w-lg md:block">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
				{@render searchIcon()}
			</div>
			<input
				bind:this={searchInputDesktop}
				type="search"
				placeholder="Buscar en el manual..."
				class="h-11 w-full rounded-xl border border-gray-300 bg-white pr-4 pl-12 text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
				bind:value={searchQuery}
				oninput={handleSearch}
				onfocus={handleSearchFocus}
				onblur={handleSearchBlur}
			/>
			{@render results()}
		</div>

		<!-- Mobile Search Button -->
		{#if !showMobileSearch}
			<button
				type="button"
				class="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
				onclick={toggleMobileSearch}
				aria-label="Buscar"
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
		{/if}
	</div>
</nav>

<script lang='ts'>
	import '../../app.css';
    import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { searchableContent, navigation } from '$lib/helpers/constants';

    let mobileMenuOpen = $state(false);
	let searchQuery = $state('');
	let showSearchResults = $state(false);

    const handleSearch = (event: Event) => {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;
		showSearchResults = searchQuery.length > 2;
	}

	const getFilteredResults = () => {
		if (searchQuery.length < 3) return [];
		return searchableContent.filter(item => 
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.type.toLowerCase().includes(searchQuery.toLowerCase())
		).slice(0, 8);
	}

	const selectSearchResult = (href: string) => {
		searchQuery = '';
		showSearchResults = false;
		goto(href);
	}
</script>

<!-- Navigation -->
<nav class="shadow-sm border-b top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<!-- Logo and primary nav -->
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="text-xl font-bold">PaxaPOS Docs</a>
				</div>
				<!-- Desktop navigation -->
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each navigation as item}
						<a
							href={item.href}
							class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
								$page.url.pathname === item.href
									? 'border-blue-500'
									: 'border-transparent hover:border-gray-300 hover:text-gray-700'
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
						class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
						bind:value={searchQuery}
						oninput={handleSearch}
						onfocus={() => showSearchResults = searchQuery.length > 2}
						onblur={() => setTimeout(() => showSearchResults = false, 200)}
					/>
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<!-- Search Results Dropdown -->
					{#if showSearchResults}
						<div class="absolute top-full left-0 right-0 mt-1 border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
							{#each getFilteredResults() as result}
								<button
									type="button"
									class="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
									onclick={() => selectSearchResult(result.href)}
								>
									<div class="font-medium">{result.title}</div>
									<div class="text-sm">{result.type}</div>
								</button>
							{:else}
								<div class="px-4 py-3">No se encontraron resultados</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
				<!-- Mobile menu button -->
				<div class="sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
		<div class="sm:hidden">
			<div class="pt-2 pb-3 space-y-1">
				{#each navigation as item}
					<a
						href={item.href}
						class={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200 ${
							$page.url.pathname === item.href
								? 'bg-blue-50 border-blue-500 text-blue-700'
								: 'border-transparent hover:bg-gray-50 hover:border-gray-300'
						}`}
						onclick={() => mobileMenuOpen = false}
					>
						{item.name}
					</a>
				{/each}
			</div>
			<!-- Mobile search -->
			<div class="pt-4 pb-3 border-t border-gray-200">
				<div class="px-4">
					<input
						type="text"
						placeholder="Buscar documentación..."
						class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
					/>
				</div>
			</div>
		</div>
	{/if}
</nav>
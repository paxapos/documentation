<script lang="ts">
	import { tick } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { highlightTextInHtml, copyToClipboard } from '$lib/utils/contentUtils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let showCopyMessage = $state(false);
	let moduleCategories = $derived(data.moduleCategories);

	// Highlight del término buscado (?highlight=) — mejora solo-cliente.
	// url.searchParams no está disponible durante el prerender, y en la
	// hidratación {@html} reutiliza el HTML del servidor sin recomparar, así
	// que el resaltado se aplica en un $effect (post-hidratación) como state.
	let processedContent = $state(data.content);

	$effect(() => {
		const highlightParam = page.url.searchParams.get('highlight');
		processedContent = highlightParam
			? highlightTextInHtml(data.content, highlightParam)
			: data.content;
	});

	$effect(() => {
		const handleHashNavigation = () => {
			const hash = window.location.hash;
			if (hash) {
				tick().then(() => {
					try {
						const element = document.querySelector(hash);
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
								inline: 'nearest',
							});
						}
					} catch (error) {
						console.warn('Error en navegación por hash:', error);
					}
				});
			}
		};

		handleHashNavigation();
		window.addEventListener('hashchange', handleHashNavigation);

		return () => {
			window.removeEventListener('hashchange', handleHashNavigation);
		};
	});

	// Función para copiar el enlace de una sección específica
	function copyLinkToSection(sectionId: string) {
		const baseUrl = window.location.origin;
		const currentPath = `${base}/user-guide/${data.slug}`;
		const linkWithHash = sectionId
			? `${baseUrl}${currentPath}#${sectionId}`
			: `${baseUrl}${currentPath}`;

		copyToClipboard(linkWithHash).then((success) => {
			if (success) {
				showCopyMessage = true;
				setTimeout(() => {
					showCopyMessage = false;
				}, 2000);
			}
		});
	}

	let llmUrl = $derived(data.llmTxtFile ? `${base}/llms/${data.llmTxtFile}` : null);

	let currentSlug = $derived(page.params.slug);

	let openCategories = $state<Record<string, boolean>>({});

	function isOpen(
		categoryTitle: string,
		modules: Array<{ slug: string; title: string }>,
	): boolean {
		if (openCategories[categoryTitle] !== undefined) {
			return openCategories[categoryTitle];
		}
		return modules.some((m) => m.slug === currentSlug);
	}

	function toggleCategory(
		categoryTitle: string,
		modules: Array<{ slug: string; title: string }>,
	) {
		openCategories[categoryTitle] = !isOpen(categoryTitle, modules);
	}
</script>

<!-- SEO dinámico por módulo -->
<SEOHead
	title={data.seo.title}
	description={data.seo.description}
	keywords={data.seo.keywords}
	section="Manual de Usuario"
/>

<!-- Mensaje de confirmación de copia -->
{#if showCopyMessage}
	<div
		class="fixed top-4 right-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white shadow-lg transition-all duration-300"
	>
		✅ Enlace copiado al portapapeles
	</div>
{/if}

<div
	class="relative z-10 mx-auto min-h-screen max-w-7xl overflow-x-hidden bg-white px-2 py-2 sm:px-4 md:px-6 lg:px-8 dark:bg-gray-900"
>
	<div class="flex flex-col gap-2 sm:gap-6 md:gap-8 lg:flex-row">
		<!-- Sidebar responsivo -->
		<aside class="relative z-20 flex-shrink-0 lg:w-64">
			<div
				class="rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:p-4 md:p-5 dark:border-gray-700 dark:bg-gray-800"
			>
				<h3
					class="mb-2 text-xs font-bold text-gray-900 sm:mb-4 sm:text-base md:text-lg dark:text-white"
				>
					Manual de Usuario
				</h3>

				<!-- Selector dropdown para móviles -->
				<div class="mb-2 block sm:mb-4 lg:hidden">
					<select
						class="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-2 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
						value={currentSlug}
						onchange={async (e) => {
							const target = e.target as HTMLSelectElement;
							if (target.value) {
								goto(`${base}/user-guide/${target.value}`);
							}
						}}
					>
						<option value="">Seleccionar módulo...</option>
						{#each moduleCategories as category (category.title)}
							<optgroup label={category.title}>
								{#each category.modules as module (module.slug)}
									<option value={module.slug}>{module.title}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>

				<!-- Lista de navegación para escritorio -->
				<div class="hidden space-y-2 sm:space-y-3 lg:block">
					{#each moduleCategories as category (category.title)}
						{@const catOpen = isOpen(category.title, category.modules)}
						<div class="space-y-1 sm:space-y-2">
							<button
								type="button"
								onclick={() => toggleCategory(category.title, category.modules)}
								class="flex w-full items-center justify-between border-b border-gray-200 pb-1 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase transition-colors hover:text-blue-600 sm:text-sm dark:border-gray-600 dark:text-gray-300 dark:hover:text-blue-400"
								aria-expanded={catOpen}
							>
								<span>{category.title}</span>
								<svg
									class="h-4 w-4 transform text-gray-400 transition-transform duration-200 dark:text-gray-400 {catOpen
										? 'rotate-180'
										: ''}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							{#if catOpen}
								<div class="space-y-1">
									{#each category.modules as module (module.slug)}
										<a
											href="{base}/user-guide/{module.slug}"
											class="block w-full rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-200 sm:px-3 sm:py-2 sm:text-sm {currentSlug ===
											module.slug
												? 'border-l-2 border-blue-500 bg-blue-100 font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-100'
												: 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700'}"
										>
											{module.title}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</aside>

		<!-- Contenido principal -->
		<main class="relative z-10 min-w-0 flex-1">
			<article
				class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<!-- Header del módulo -->
				<header
					class="bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white sm:p-6 md:p-8"
				>
					<h1 class="text-lg leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl">
						{data.title}
					</h1>
					<div
						class="mt-2 flex flex-wrap items-center gap-1 text-xs opacity-90 sm:gap-2 sm:text-sm"
					>
						<span class="rounded-full bg-white/20 px-2 py-1">Manual de Usuario</span>
						<span class="rounded-full bg-white/20 px-2 py-1">ID: {data.slug}</span>
						<!-- Botón para compartir -->
						<button
							onclick={() => copyLinkToSection('')}
							class="rounded-full bg-white/20 px-2 py-1 transition-colors hover:bg-white/30"
							title="Compartir esta página"
						>
							🔗 Compartir
						</button>
					</div>
				</header>

				<!-- Contenido del módulo -->
				<div class="p-2 sm:p-3 md:p-6">
					<div
						class="markdown-paxapos max-w-none"
						onclick={(e) => {
							const target = e.target as HTMLElement;
							const btn = target.closest('[data-copy-section]');
							if (btn) {
								const sectionId = btn.getAttribute('data-copy-section') || '';
								copyLinkToSection(sectionId);
							}
						}}
					>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML renderizado con marked desde los .md del repo -->
						{@html processedContent}
					</div>
				</div>

				<!-- Navegación inferior -->
				<div class="border-t border-gray-200 p-3 pt-0 sm:p-4 md:p-6 dark:border-gray-700">
					<div class="flex items-center justify-between">
						<a
							href="{base}/user-guide"
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								class="mr-2 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								></path>
							</svg>
							Volver al índice
						</a>

						{#if llmUrl}
						<a
							href={llmUrl}
							target="_blank"
							rel="noopener"
							class="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-600 transition-colors hover:bg-blue-100 sm:px-3 sm:py-1.5 sm:text-xs dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
						>
							<svg
								class="mr-1 h-2.5 w-2.5 sm:mr-1.5 sm:h-3 sm:w-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
							Ver archivo LLMs
						</a>
						{/if}
					</div>
				</div>
			</article>
		</main>
	</div>
</div>

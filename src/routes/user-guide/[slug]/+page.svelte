<script lang="ts">
	import { tick } from 'svelte';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import ArticleTableOfContents from '$lib/components/ArticleTableOfContents.svelte';
	import ManualSidebar from '$lib/components/ManualSidebar.svelte';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { highlightTextInHtml, copyToClipboard } from '$lib/utils/contentUtils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let showCopyMessage = $state(false);
	let sidebarOpen = $state(false);
	let menuButton = $state<HTMLButtonElement>();
	let moduleCategories = $derived(data.moduleCategories);

	// Highlight del término buscado (?highlight=) — mejora solo-cliente.
	// url.searchParams no está disponible durante el prerender, y en la
	// hidratación {@html} reutiliza el HTML del servidor sin recomparar, así
	// que el resaltado se aplica en un $effect (post-hidratación) como state.
	let processedContent = $state('');

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

	let currentSlug = $derived(data.slug);

	function closeSidebar() {
		sidebarOpen = false;
		tick().then(() => menuButton?.focus());
	}

	function handleSectionLinkClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const button = target.closest('[data-copy-section]');
		if (button) copyLinkToSection(button.getAttribute('data-copy-section') || '');
	}
</script>

<svelte:window onclick={handleSectionLinkClick} />

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
	class="relative z-10 min-h-screen w-full overflow-x-clip bg-white dark:bg-gray-900"
>
	<ManualSidebar
		categories={moduleCategories}
		currentSlug={currentSlug}
		mobile
		open={sidebarOpen}
		onClose={closeSidebar}
	/>

	<div
		class="grid w-full grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)_15rem]"
	>
		<div class="hidden border-r border-gray-200 px-5 pt-8 lg:block dark:border-gray-800">
			<ManualSidebar categories={moduleCategories} currentSlug={currentSlug} />
		</div>

		<main class="min-w-0 px-4 py-5 sm:px-6 lg:px-10 lg:py-8 xl:px-12">
			<div class="mb-4 lg:hidden">
				<button
					bind:this={menuButton}
					type="button"
					onclick={() => (sidebarOpen = true)}
					class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-white"
					aria-expanded={sidebarOpen}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					Temario
				</button>
			</div>

			<div class="w-full">
				<ArticleTableOfContents headings={data.tableOfContents} mobile />

				<article>
					<header class="border-b border-gray-200 pt-6 pb-6 dark:border-gray-800">
						<p class="mb-3 text-sm font-medium text-blue-700 dark:text-blue-300">Manual de Usuario</p>
						<h1 class="text-3xl leading-tight font-bold text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">
							{data.title}
						</h1>
						<div class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
							<span>ID: {data.slug}</span>
							<button
								type="button"
								onclick={() => copyLinkToSection('')}
								class="inline-flex min-h-11 items-center gap-2 font-medium text-gray-700 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-blue-300"
								title="Compartir esta página"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 6H18a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4.5M16.5 3h-9a3 3 0 0 0-3 3v9M12 8l4-4m0 0-4-4m4 4H8" />
								</svg>
								Compartir
							</button>
						</div>
					</header>

					<div class="markdown-paxapos">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML renderizado con marked desde los .md del repo -->
						{@html processedContent || data.content}
					</div>

					<footer class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 py-6 dark:border-gray-800">
						<a href="{base}/user-guide" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18-6-6 6-6" /></svg>
							Volver al índice
						</a>
						{#if llmUrl}
							<a href={llmUrl} target="_blank" rel="noopener" class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200">
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.5L19 9.5V19a2 2 0 0 1-2 2Z" /></svg>
								Ver archivo LLMs
							</a>
						{/if}
					</footer>
				</article>
			</div>
		</main>

		<div class="hidden border-l border-gray-200 px-5 pt-8 xl:block dark:border-gray-800">
			<ArticleTableOfContents headings={data.tableOfContents} />
		</div>
	</div>
</div>

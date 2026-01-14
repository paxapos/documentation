<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { processGroupedContent } from '$lib/helpers/textReplacer';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { getModuleCategories } from '$lib/utils/markdownDetector.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let processedContent = $state('');
	let showCopyMessage = $state(false);
	let moduleCategories: Array<{
		title: string;
		modules: Array<{ slug: string; title: string }>;
	}> = $state([]);

	// Cargar categorías dinámicamente
	onMount(async () => {
		try {
			moduleCategories = await getModuleCategories();
		} catch (error) {
			console.error('Error cargando categorías:', error);
			moduleCategories = [];
		}
	});

	// Procesar contenido de manera reactiva cuando cambien los datos
	$effect(() => {
		if (data) {
			console.log('Datos cambiaron - procesando:', data.slug, data.title);
			const mockGroupedContent = [
				{
					folder: 'temp',
					items: [
						{
							id: data.slug,
							title: data.title,
							html: data.content,
							rawMarkdown: data.rawMarkdown,
						},
					],
				},
			];

			const processed = processGroupedContent(mockGroupedContent);
			let htmlContent = processed[0].items[0].html;

			// Corregir rutas de imágenes
			htmlContent = fixImagePaths(htmlContent);

			// Envolver tablas para responsive
			htmlContent = wrapTablesForResponsive(htmlContent);

			// Manejar highlighting si existe el parámetro
			const urlParams = new URLSearchParams($page.url.search);
			const highlightParam = urlParams.get('highlight');

			if (highlightParam) {
				htmlContent = highlightTextInHtml(htmlContent, highlightParam);
			}

			// Agregar íconos de enlace a los títulos
			processedContent = addLinkIconsToHeaders(htmlContent);

			console.log('Contenido actualizado para:', data.slug);

			// Manejar hash y visibilidad después de actualizar el contenido
			setTimeout(() => {
				handleHashNavigation();
				handleMainDivVisibility();
			}, 150);
		}
	});

	onMount(() => {
		console.log('Componente montado para:', data.slug, data.title);
		// Hacer funciones accesibles globalmente para onClick en HTML
		(window as any).copyLinkToSection = copyLinkToSection;

		// Manejar hash inicial y cambios de hash
		handleHashNavigation();
		window.addEventListener('hashchange', handleHashNavigation);

		// Manejar visibilidad del div principal al cargar y cambiar hash
		handleMainDivVisibility();
		window.addEventListener('hashchange', handleMainDivVisibility);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('hashchange', handleHashNavigation);
			window.removeEventListener('hashchange', handleMainDivVisibility);
		}
	});

	// Función para manejar navegación por hash
	function handleHashNavigation() {
		try {
			const hash = window.location.hash;
			if (hash) {
				// Esperar un momento para que el contenido se renderice
				setTimeout(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({
							behavior: 'smooth',
							block: 'start',
							inline: 'nearest',
						});
					}
				}, 100);
			}
		} catch (error) {
			console.warn('Error en navegación por hash:', error);
		}
	}

	// Función para agregar íconos de enlace a los títulos
	function addLinkIconsToHeaders(html: string): string {
		const headerWithIdRegex =
			/<(h[1-6])>([^<>]*(?:<[^>]+>[^<>]*<\/[^>]+>)*[^<>]*)<\/(h[1-6])>\s*<div id="([^"]+)"><\/div>/g;

		return html.replace(
			headerWithIdRegex,
			(match, headerTag, titleContent, closingTag, idValue) => {
				return `<${headerTag} class="relative">
                ${titleContent}
                <button 
                    class="ml-1.5 text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:text-blue-500 focus:bg-gray-100 focus:outline-none transition-all duration-200 text-sm align-middle px-1 py-0.5 rounded"
                    onclick="copyLinkToSection('${idValue}')"
                    title="Copiar enlace a esta sección"
                    aria-label="Copiar enlace a esta sección"
                >
                    🔗
                </button>
            </${headerTag}>
            <div id="${idValue}"></div>`;
			},
		);
	}

	// Función para corregir rutas de imágenes
	function fixImagePaths(html: string): string {
		// Buscar imágenes con rutas relativas que empiecen con "images/"
		const imgRegex = /<img([^>]*)\ssrc\s*=\s*["'](?!https?:\/\/)(?!\/)([^"']+)["']([^>]*)>/gi;

		return html.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
			// Si la imagen empieza con "images/", agregar el prefijo base
			if (src.startsWith('images/')) {
				const newSrc = `${base}/${src}`;
				return `<img${beforeSrc} src="${newSrc}"${afterSrc}>`;
			}
			return match;
		});
	}

	// Función para envolver tablas en un contenedor responsive
	function wrapTablesForResponsive(html: string): string {
		// Buscar todas las tablas que no estén ya envueltas
		const tableRegex = /<table(?![^>]*class[^>]*table-wrapper)[^>]*>[\s\S]*?<\/table>/gi;

		return html.replace(tableRegex, (match) => {
			return `<div class="table-wrapper">${match}</div>`;
		});
	}

	// Función para ocultar el div principal cuando hay hash en la URL
	function hideMainDivWhenHash(html: string): string {
		// Esta función ya no es necesaria, la lógica se maneja dinámicamente
		return html;
	}

	// Función para manejar la visibilidad del div principal dinámicamente
	function handleMainDivVisibility() {
		try {
			// Buscar automáticamente el primer div vacío con ID en el contenido
			// Estos suelen ser los divs principales de cada página
			const mainContent = document.querySelector('.prose');
			if (mainContent) {
				const firstEmptyDiv = mainContent.querySelector('div[id]:empty');

				if (firstEmptyDiv) {
					const hasHash = window.location.hash && window.location.hash.length > 1;
					const divElement = firstEmptyDiv as HTMLElement;

					if (hasHash) {
						// Ocultar el div cuando hay hash
						divElement.style.display = 'none';
					} else {
						// Mostrar el div cuando no hay hash
						divElement.style.display = '';
					}
				}
			}
		} catch (error) {
			console.warn('Error manejando visibilidad del div principal:', error);
		}
	}

	// Función para copiar el enlace de una sección específica
	function copyLinkToSection(sectionId: string) {
		// Construir URL completa incluyendo el prefijo base
		const baseUrl = window.location.origin;
		const currentPath = `${base}/user-guide/${data.slug}`;
		const linkWithHash = sectionId
			? `${baseUrl}${currentPath}#${sectionId}`
			: `${baseUrl}${currentPath}`;

		navigator.clipboard
			.writeText(linkWithHash)
			.then(() => {
				showCopyConfirmation();
			})
			.catch((err) => {
				console.error('Error al copiar enlace:', err);
				fallbackCopyToClipboard(linkWithHash);
			});
	}

	// Función fallback para copiar al portapapeles
	function fallbackCopyToClipboard(text: string) {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		textArea.style.position = 'fixed';
		textArea.style.left = '-999999px';
		textArea.style.top = '-999999px';
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
			showCopyConfirmation();
		} catch (err) {
			console.error('Error al copiar:', err);
		} finally {
			document.body.removeChild(textArea);
		}
	}

	// Función para mostrar confirmación de copia
	function showCopyConfirmation() {
		showCopyMessage = true;
		setTimeout(() => {
			showCopyMessage = false;
		}, 2000);
	}

	// Función para resaltar texto en HTML de manera más elegante
	function highlightTextInHtml(html: string, searchTerm: string): string {
		if (!searchTerm || !html) return html;

		// Escapar caracteres especiales del término de búsqueda
		const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

		// Crear regex con flag global para encontrar todas las coincidencias
		const regex = new RegExp(`(${escapedTerm})`, 'gi');

		// Limitar a máximo 4 resaltados para evitar sobrecarga visual
		let matchCount = 0;
		const maxMatches = 4;

		return html.replace(regex, (match) => {
			if (matchCount >= maxMatches) {
				return match; // Devolver sin resaltar si ya llegamos al límite
			}
			matchCount++;
			return `<span class="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-1 py-0.5 rounded-sm font-medium border-b border-gray-400 dark:border-gray-400">${match}</span>`;
		});
	}

	// Función para abrir el archivo LLM en una nueva pestaña
	async function openLLMPage() {
		try {
			// Importar la utilidad de mapeo dinámico
			const { getTxtFileForSlug } = await import('$lib/utils/slugMapping.js');

			// Obtener el archivo TXT correspondiente al slug actual
			const fileName = await getTxtFileForSlug(data.slug);

			if (fileName) {
				const llmUrl = `${base}/llms/${fileName}`;
				window.open(llmUrl, '_blank');
			} else {
				console.warn(`No se encontró archivo TXT para el slug: ${data.slug}`);
				// Fallback: intentar construcción manual
				const fallbackFileName = `${data.slug.replace(/[^a-z0-9-]/g, '')}.txt`;
				const fallbackUrl = `${base}/llms/${fallbackFileName}`;
				window.open(fallbackUrl, '_blank');
			}
		} catch (error) {
			console.error('Error abriendo archivo LLM:', error);
		}
	}

	// Función para manejar la descarga de archivos LLM
	function handleLLMIntegration(moduleSlug: string, moduleName: string, type: 'single' | 'all') {
		if (type === 'single' && moduleSlug) {
			// Descargar archivo individual del módulo actual
			const link = document.createElement('a');
			link.href = `/llms/${moduleSlug}.txt`;
			link.download = `${moduleSlug}.txt`;
			link.click();
		} else if (type === 'all') {
			// Abrir índice completo de archivos LLM
			window.open('/llms/', '_blank');
		}
	}

	// Función para generar índice de IA
	function generateAIIndex() {
		window.open('/ai-metadata.json', '_blank');
	}

	// Calcular el módulo actual para navegación móvil
	let currentSlug = $derived($page.params.slug);
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
						{#each moduleCategories as category}
							<optgroup label={category.title}>
								{#each category.modules as module}
									<option value={module.slug}>{module.title}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>

				<!-- Lista de navegación para escritorio -->
				<div class="hidden space-y-2 sm:space-y-3 lg:block">
					{#each moduleCategories as category}
						<div class="space-y-1 sm:space-y-2">
							<h4
								class="border-b border-gray-200 pb-1 text-xs font-semibold tracking-wider text-gray-600 uppercase sm:text-sm dark:border-gray-600 dark:text-gray-300"
							>
								{category.title}
							</h4>
							<div class="space-y-1">
								{#each category.modules as module}
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
				<div class="p-2 sm:p-3 md:p-1">
					<div
						class="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 markdown-paxapos max-w-none"
					>
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

						<button
							onclick={openLLMPage}
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
						</button>
					</div>
				</div>
			</article>
		</main>
	</div>
</div>

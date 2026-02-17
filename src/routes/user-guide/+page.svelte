<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { marked } from 'marked';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { processGroupedContent } from '$lib/helpers/textReplacer';
	import { page } from '$app/stores';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import {
		addLinkIconsToHeaders,
		highlightTextInHtml,
		copyToClipboard,
		fileNameToSlug,
	} from '$lib/utils/contentUtils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	interface ModuleInfo {
		slug: string;
		title: string;
		description: string;
		category: string;
		icon: string;
		id: string;
	}

	// Usar datos dinámicos cargados desde +page.js
	const modulesList: ModuleInfo[] = data.modulesList || [];

	// Agrupar módulos por categoría
	const groupedModules = modulesList.reduce(
		(acc, module) => {
			if (!acc[module.category]) {
				acc[module.category] = [];
			}
			acc[module.category].push(module);
			return acc;
		},
		{} as Record<string, ModuleInfo[]>,
	);

	function navigateToModule(slug: string) {
		// Navegar directamente a la página del módulo
		goto(`${base}/user-guide/${slug}`);
	}

	interface ContentItem {
		id: string;
		title: string;
		html: string;
		rawMarkdown: string;
	}

	interface GroupedContent {
		folder: string;
		items: ContentItem[];
	}

	let grouped_content: GroupedContent[] = $state([]);
	let selectedModuleId: string | null = $state(null);
	let selectedModuleName: string = $state('');
	let selectedModuleHtml: string = $state('');
	let selectedModuleRawMarkdown: string = $state('');
	let contentLoaded = $state(false);

	// Función para generar SEO específico del módulo actual
	function getCurrentModuleSEO() {
		if (!selectedModuleId) {
			return {
				title: 'Manual de Usuario',
				description:
					'Manual completo para usuarios finales. Aprende paso a paso cómo usar todas las funciones del sistema.',
				keywords: 'manual usuario, guía completa, tutorial sistema restaurante',
			};
		}

		// Mapeo de módulos específicos para mejor SEO
		const moduleDescriptions: Record<
			string,
			{ title: string; description: string; keywords: string }
		> = {
			'11-Introduccion': {
				title: 'Introducción - Primeros Pasos',
				description:
					'Aprende los conceptos básicos del software y cómo dar tus primeros pasos en el sistema de gestión para restaurantes más completo de Argentina.',
				keywords: 'introducción, primeros pasos, tutorial básico, sistema restaurante',
			},
			'12-Iniciar-sesión': {
				title: 'Cómo Iniciar Sesión',
				description:
					'Guía paso a paso para acceder a tu cuenta, recuperar contraseñas y configurar el acceso seguro a tu sistema.',
				keywords: 'login, iniciar sesión, acceso sistema, contraseña',
			},
			'21-Crear-Usuarios': {
				title: 'Crear y Gestionar Usuarios ',
				description:
					'Aprende a crear usuarios, asignar roles y permisos, gestionar personal y configurar accesos seguros en tu restaurante.',
				keywords:
					'crear usuarios, gestión personal, roles permisos, administración usuarios',
			},
			'22-Tipos-De-Pago': {
				title: 'Configurar Métodos de Pago ',
				description:
					'Configura todos los métodos de pago: efectivo, tarjetas, transferencias, QR. Aprende a gestionar comisiones y tiempos de acreditación.',
				keywords:
					'métodos pago, tarjetas crédito débito, efectivo, transferencias, mercadopago',
			},
			'25-Menú': {
				title: 'Configuración del Menú',
				description:
					'Carga productos, crea categorías, gestiona precios y organiza tu menú digital. Guía completa para configurar tu carta.',
				keywords: 'configurar menú, cargar productos, categorías, precios, carta digital',
			},
			'32-Salón': {
				title: 'Módulo de Salón - Gestión de Mesas',
				description:
					'Aprende a gestionar mesas, tomar pedidos, asignar mozos y optimizar el servicio en tu salón.',
				keywords: 'salón, gestión mesas, tomar pedidos, mozos, servicio restaurante',
			},
			'33-Kitchen-Display-System-(KDS)': {
				title: 'KDS - Sistema de Pantalla de Cocina ',
				description:
					'Configura y usa el Kitchen Display System para mejorar la comunicación entre salón y cocina, reducir tiempos y optimizar pedidos.',
				keywords:
					'KDS, pantalla cocina, kitchen display system, gestión pedidos, comunicación cocina',
			},
			'34-Contabilidad': {
				title: 'Contabilidad y Reportes',
				description:
					'Gestiona la contabilidad de tu restaurante: arqueos, reportes de ventas, control de caja y análisis financiero completo.',
				keywords:
					'contabilidad, arqueos, reportes ventas, control caja, análisis financiero',
			},
			'37-ARCA-y-Facturación': {
				title: 'Facturación ARCA',
				description:
					'Configura la facturación electrónica con ARCA (ex AFIP), emite comprobantes fiscales y cumple todas las normativas argentinas.',
				keywords:
					'facturación ARCA, facturación AFIP, facturación electrónica argentina, comprobantes fiscales, normativas ARCA',
			},
		};

		if (selectedModuleId && moduleDescriptions[selectedModuleId]) {
			return moduleDescriptions[selectedModuleId];
		}

		// SEO por defecto para módulos no mapeados
		return {
			title: `${selectedModuleName} - Manual`,
			description: `Aprende a usar ${selectedModuleName}. Guía detallada paso a paso con ejemplos prácticos.`,
			keywords: `${selectedModuleName}, tutorial, guía, manual usuario`,
		};
	}

	// Variable reactiva para el SEO actual
	const currentSEO = $derived(getCurrentModuleSEO());

	// Función para seleccionar módulo específico
	function selectModuleById(moduleId: string) {
		for (const group of grouped_content) {
			const foundItem = group.items.find((item) => item.id === moduleId);
			if (foundItem) {
				selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
				return true;
			}
		}
		return false;
	}

	// Reactividad a cambios en la URL (parámetros de consulta y pathname)
	$effect(() => {
		if (contentLoaded && ($page.url.search || $page.url.pathname)) {
			const urlParams = new URLSearchParams($page.url.search);
			const moduleParam = urlParams.get('module');
			const highlightParam = urlParams.get('highlight');

			// También verificar si la URL tiene un slug de módulo en el pathname
			const pathParts = $page.url.pathname.split('/');
			const possibleSlug = pathParts[pathParts.length - 1];

			if (moduleParam && moduleParam !== selectedModuleId) {
				if (!selectModuleById(moduleParam)) {
					// Si no encuentra el módulo, mostrar índice sin seleccionar nada
					selectedModuleId = null;
					selectedModuleName = '';
					selectedModuleHtml = '';
					selectedModuleRawMarkdown = '';
				}
			} else if (possibleSlug && possibleSlug !== 'user-guide' && !moduleParam) {
				// Intentar cargar módulo por slug desde la URL si no hay moduleParam
				const moduleInfo = modulesList.find((m: ModuleInfo) => m.slug === possibleSlug);
				if (moduleInfo && moduleInfo.id !== selectedModuleId) {
					if (!selectModuleById(moduleInfo.id)) {
						// Si no encuentra el módulo, mostrar índice
						selectedModuleId = null;
						selectedModuleName = '';
						selectedModuleHtml = '';
						selectedModuleRawMarkdown = '';
					}
				} else if (!moduleInfo && selectedModuleId) {
					// Si el slug no coincide con ningún módulo, mostrar índice
					selectedModuleId = null;
					selectedModuleName = '';
					selectedModuleHtml = '';
					selectedModuleRawMarkdown = '';
				}
			} else if (possibleSlug === 'user-guide' && selectedModuleId) {
				// Si estamos en la URL base, mostrar índice
				selectedModuleId = null;
				selectedModuleName = '';
				selectedModuleHtml = '';
				selectedModuleRawMarkdown = '';
			}
		}
	});

	onMount(async () => {
		try {
			// Hacer funciones accesibles globalmente para onClick en HTML
			(window as any).copyLinkToSection = copyLinkToSection;

			const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
				query: '?raw',
				import: 'default',
			});
			const files = Object.entries(modules);

			const contentMap: Record<string, ContentItem[]> = {};

			for (const [path, loader] of files) {
				const markdownText = (await loader()) as string;
				const fileName = path.split('/').pop();
				const folderName = path.split('/').slice(-2, -1)[0];

				if (!fileName) continue; // Skip if fileName is undefined

				const cleanTitle = fileName
					.replace(/^\d+-/, '')
					.replace('.md', '')
					.replace(/-/g, ' ');
				const id = fileName.replace('.md', '').trim(); // Añadir trim() para limpiar espacios/saltos de línea

				if (!contentMap[folderName]) {
					contentMap[folderName] = [];
				}

				const markdownHtml = await marked(markdownText);

				contentMap[folderName].push({
					id,
					title: cleanTitle,
					html: markdownHtml,
					rawMarkdown: markdownText,
				});
			}

			Object.values(contentMap).forEach((items) => {
				items.sort((a: ContentItem, b: ContentItem) => {
					const numA = parseInt(a.id.split('-')[0]);
					const numB = parseInt(b.id.split('-')[0]);
					return numA - numB;
				});
			});

			grouped_content = Object.entries(contentMap)
				.map(([folder, items]) => ({
					folder: folder.replace(/^\d+-/, '').replace(/-/g, ' '),
					items,
				}))
				.sort((a, b) => {
					const numA = parseInt(a.folder.split('-')[0]);
					const numB = parseInt(b.folder.split('-')[0]);
					return numA - numB;
				});

			// Aplicar reemplazo de texto automáticamente
			grouped_content = processGroupedContent(grouped_content);
			contentLoaded = true;

			// Verificar si hay un hash en la URL para buscar la sección específica o módulo
			const hash = window.location.hash;
			if (hash) {
				handleHashNavigation(hash);
				return; // Salir temprano si encontramos módulo o sección por hash
			}

			// Verificar si hay un módulo específico en la URL después de cargar
			const urlParams = new URLSearchParams($page.url.search);
			const moduleParam = urlParams.get('module');

			// También verificar si la URL tiene un slug de módulo en el pathname
			const pathParts = $page.url.pathname.split('/');
			const possibleSlug = pathParts[pathParts.length - 1];

			if (moduleParam) {
				if (!selectModuleById(moduleParam)) {
					console.warn(`Módulo no encontrado: ${moduleParam}`);
				}
			} else if (possibleSlug && possibleSlug !== 'user-guide') {
				// Intentar cargar módulo por slug desde la URL
				const moduleInfo = modulesList.find((m: ModuleInfo) => m.slug === possibleSlug);
				if (moduleInfo) {
					if (!selectModuleById(moduleInfo.id)) {
						console.warn(`Módulo no encontrado: ${moduleInfo.id}`);
					}
				}
			}
			// Si no hay parámetros específicos, mostrar el índice por defecto
		} catch (error) {
			console.error('Error al cargar los módulos:', error);
		}
	});

	onMount(() => {
		// Listener para cambios de hash después de la carga inicial
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash) {
				// Procesar inmediatamente sin esperar reactividad
				handleHashNavigation(hash);
			}
		};

		// Agregar listener para cambios de hash
		window.addEventListener('hashchange', handleHashChange);

		// Cleanup usando onDestroy en lugar de return
		onDestroy(() => {
			window.removeEventListener('hashchange', handleHashChange);
		});
	});

	function selectModule(id: string, title: string, htmlContent: string, rawMarkdown?: string) {
		selectedModuleId = id;
		selectedModuleName = title;

		// Verificar si hay término de resaltado en la URL
		const urlParams = new URLSearchParams($page.url.search);
		const highlightParam = urlParams.get('highlight');

		let processedHtml = htmlContent;

		if (highlightParam) {
			// Aplicar resaltado al contenido HTML
			processedHtml = highlightTextInHtml(htmlContent, highlightParam);
		}

		// Agregar íconos de enlace a los títulos H1
		processedHtml = addLinkIconsToHeaders(processedHtml);

		selectedModuleHtml = processedHtml;
		selectedModuleRawMarkdown = rawMarkdown || '';

		// Esperar un tick para que el DOM se actualice, luego verificar hash
		setTimeout(() => {
			const hash = window.location.hash;
			if (hash) {
				const targetId = hash.substring(1); // Quitar el '#'
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
				}
			}
		}, 100);
	}

	// Función para copiar el enlace de una sección específica
	function copyLinkToSection(sectionId: string) {
		const currentUrl = window.location.href.split('#')[0];
		const linkWithHash = `${currentUrl}#${sectionId}`;

		copyToClipboard(linkWithHash).then((success) => {
			if (success) {
				showCopyMessage = true;
				setTimeout(() => {
					showCopyMessage = false;
				}, 2000);
			}
		});
	}

	// Variable para el mensaje de confirmación
	let showCopyMessage = $state(false);

	// Función para buscar en qué módulo está una sección específica
	function findModuleWithSection(sectionId: string): ContentItem | null {
		for (const group of grouped_content) {
			for (const item of group.items) {
				// Buscar el ID en el HTML del módulo
				if (item.html && item.html.includes(`id="${sectionId}"`)) {
					return item;
				}
			}
		}
		return null;
	}

	// Función para manejar navegación con hash
	function handleHashNavigation(hash: string) {
		if (!hash) return;

		const rawTargetId = hash.startsWith('#') ? hash.substring(1) : hash;
		const targetId = decodeURIComponent(rawTargetId).trim(); // Decodificar y limpiar espacios/saltos de línea

		// Primero intentar buscar como módulo completo
		const moduleFound = selectModuleById(targetId);

		if (moduleFound) {
			return; // Encontramos el módulo completo
		}

		// Si no es un módulo completo, buscar como sección dentro de un módulo
		const moduleWithSection = findModuleWithSection(targetId);

		if (moduleWithSection) {
			selectModule(
				moduleWithSection.id,
				moduleWithSection.title,
				moduleWithSection.html,
				moduleWithSection.rawMarkdown,
			);

			// Después de seleccionar el módulo, scroll a la sección específica
			setTimeout(() => {
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
				}
			}, 100);
		}
	}

	function handleLLMIntegration(moduleId: string, moduleName: string) {
		const txtFileName =
			moduleId
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.replace(/\s+/g, '-')
				.replace(/[()]/g, '') + '.txt';
		const staticUrl = `${base}/llms/${txtFileName}`;
		window.open(staticUrl, '_blank');
	}

	// Función para convertir IDs a slugs para URLs
	function getSlugFromId(id: string): string {
		return fileNameToSlug(id);
	}

	// Función para manejar el selector dropdown (móvil)
	function handleModuleSelect(event: Event) {
		const target = event.target as HTMLSelectElement;
		const selectedValue = target.value;

		if (!selectedValue) return;

		// Encontrar el módulo seleccionado
		for (const group of grouped_content) {
			const foundItem = group.items.find((item) => item.id === selectedValue);
			if (foundItem) {
				selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
				break;
			}
		}
	}
</script>

<!-- SEO dinámico por módulo -->
<SEOHead
	title={currentSEO.title}
	description={currentSEO.description}
	keywords={currentSEO.keywords}
	url="/user-guide"
	type="article"
	section="Manual de Usuario"
/>

<div
	class="mx-auto min-h-screen max-w-7xl overflow-x-hidden bg-white px-3 py-4 sm:px-4 md:px-6 lg:px-8 dark:bg-gray-900"
>
	<div class="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row">
		<main class="w-full min-w-0 flex-1">
			<div
				class="overflow-x-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5 md:p-6 lg:p-8 dark:border-gray-700 dark:bg-gray-800"
			>
				{#if selectedModuleHtml}
					<section
						class="markdown-paxapos prose prose-sm sm:prose md:prose-lg max-w-none overflow-x-hidden break-words"
						transition:fade={{ duration: 150 }}
					>
						{@html selectedModuleHtml}
					</section>

					<!-- Botón LLM Integration original -->
					<div
						class="mt-6 border-t border-gray-200 pt-4 sm:mt-8 sm:pt-6 dark:border-gray-700"
					>
						<div class="flex justify-center sm:justify-end">
							<button
								onclick={() =>
									handleLLMIntegration(
										selectedModuleId || '',
										selectedModuleName,
									)}
								class="inline-flex min-h-[44px] cursor-pointer touch-manipulation items-center rounded-md bg-gray-600 px-3 py-2 text-xs font-medium text-white shadow-sm transition-colors duration-200 hover:bg-gray-700 sm:px-4 sm:py-2.5 sm:text-sm dark:bg-gray-700 dark:hover:bg-gray-600"
							>
								<svg
									class="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									></path>
								</svg>
								<span class="whitespace-nowrap">Ver archivo LLM</span>
							</button>
						</div>
					</div>
				{:else}
					<!-- Índice de módulos cuando no hay módulo seleccionado -->
					<div class="max-w-none">
						<!-- Header -->
						<div class="mb-8 text-center">
							<h1
								class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
							>
								Manual de Usuario
							</h1>
							<p
								class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
							>
								Aprende paso a paso cómo usar todas las funciones. Desde la
								configuración inicial hasta la gestión avanzada de tu restaurante.
							</p>
						</div>

						<!-- Módulos organizados por categorías -->
						<div class="space-y-8">
							{#each Object.entries(groupedModules) as [categoryName, categoryModules]}
								<section>
									<h2
										class="mb-6 border-b border-gray-200 pb-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:border-gray-700 dark:text-white"
									>
										{categoryName}
									</h2>

									<div
										class="grid grid-cols-1 gap-3 overflow-x-hidden sm:grid-cols-2 sm:gap-4 xl:grid-cols-3"
									>
										{#each categoryModules as module}
											<button
												onclick={() => navigateToModule(module.slug)}
												class="group flex min-h-[120px] w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-blue-300 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
											>
												<div class="mb-3 flex items-start">
													<div
														class="mr-3 flex-shrink-0 text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl"
													>
														{module.icon}
													</div>
													<div class="min-w-0 flex-1 overflow-hidden">
														<h3
															class="mb-2 truncate text-sm leading-tight font-semibold text-gray-900 group-hover:text-blue-600 sm:text-base dark:text-white dark:group-hover:text-blue-400"
														>
															{module.title}
														</h3>
													</div>
												</div>

												<p
													class="mb-3 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400"
												>
													{module.description}
												</p>

												<div class="mt-auto">
													<div
														class="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
													>
														Ver módulo
														<svg
															class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M9 5l7 7-7 7"
															></path>
														</svg>
													</div>
												</div>
											</button>
										{/each}
									</div>
								</section>
							{/each}
						</div>

						<!-- Footer informativo -->
						<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
							<div class="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
								<div class="flex flex-col items-start sm:flex-row">
									<div class="mb-3 flex-shrink-0 text-2xl sm:mr-4 sm:mb-0">
										💡
									</div>
									<div class="flex-1">
										<h3
											class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
										>
											¿Necesitas ayuda adicional?
										</h3>
										<p
											class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400"
										>
											Si tienes dudas sobre algún módulo o necesitas soporte
											técnico, nuestro equipo está aquí para ayudarte.
										</p>
										<div
											class="grid grid-cols-1 gap-2 overflow-x-hidden text-xs sm:gap-3 sm:text-sm"
										>
											<div
												class="flex items-center overflow-hidden text-gray-600 dark:text-gray-400"
											>
												<svg
													class="mr-2 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.951-1.488A11.956 11.956 0 002 18c.404-.441.802-.872 1.17-1.293C3.708 16.04 4 15.543 4 15c0-2.667 1.333-4 4-4s4 1.333 4 4"
													></path>
												</svg>
												<span class="truncate">Chat: Disponible 24/7</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</main>

		<!-- Mensaje de confirmación para copiar enlace -->
		{#if showCopyMessage}
			<div
				class="fixed top-4 right-4 z-50 flex items-center rounded-md bg-green-500 px-4 py-2 text-white shadow-lg"
				transition:fade={{ duration: 200 }}
			>
				<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					></path>
				</svg>
				¡Enlace copiado al portapapeles!
			</div>
		{/if}
	</div>
</div>

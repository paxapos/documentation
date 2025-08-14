<script lang="ts">
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { processGroupedContent } from '$lib/helpers/textReplacer';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    
    function handleLLMIntegration(moduleId: string, moduleName: string, mode: 'single' | 'all' = 'single') {
        if (mode === 'all') {
            // Para "all", usar archivo estático del índice completo
            const staticUrl = '/documentation/llms/index.txt';
            window.open(staticUrl, '_blank');
            console.log('📚 Opening complete manual (static) for AI at:', staticUrl);
            return;
        }
        
        // Modo single: usar archivo TXT estático del módulo específico
        const txtFileName = moduleId.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '') + '.txt';
        const staticUrl = `/documentation/llms/${txtFileName}`;
        
        // Abrir en nueva pestaña la URL estática
        window.open(staticUrl, '_blank');
        
        console.log('📄 Opening static LLM file for:', moduleName, 'at:', staticUrl);
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

    let grouped_content: GroupedContent[] = [];
    let selectedModuleId: string | null = null;
    let selectedModuleName: string = '';
    let selectedModuleHtml: string = '';
    let selectedModuleRawMarkdown: string = '';
    let contentLoaded = false;

    // Variable para controlar si estamos procesando una búsqueda desde URL
    let isProcessingUrlSearch = false;
    let lastProcessedUrl = '';

    // Función para seleccionar módulo específico
    function selectModuleById(moduleId: string, fromUrlNavigation: boolean = false) {
        for (const group of grouped_content) {
            const foundItem = group.items.find(item => item.id === moduleId);
            if (foundItem) {
                selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown, fromUrlNavigation);
                return true;
            }
        }
        return false;
    }

    // Función reactiva para procesar parámetros de URL
    $: if (browser && $page.url.searchParams.get('search') && !isProcessingUrlSearch && contentLoaded) {
        const currentUrl = $page.url.toString();
        if (currentUrl !== lastProcessedUrl) {
            isProcessingUrlSearch = true;
            lastProcessedUrl = currentUrl;
            
            const searchParam = $page.url.searchParams.get('search');
            if (searchParam) {
                const found = selectModuleById(searchParam, true);
                if (!found) {
                    console.warn('Módulo no encontrado:', searchParam);
                }
            }
            
            // Reset flag después de un timeout para permitir futuras navegaciones
            setTimeout(() => {
                isProcessingUrlSearch = false;
            }, 100);
        }
    }

    onMount(async () => {
        try {
            const response = await fetch('/documentation/seo?type=ai-config');
            const result = await response.json();
            
            if (result.success && result.data) {
                // Procesar el contenido usando la función helper
                grouped_content = processGroupedContent(result.data, 'Docs');
                contentLoaded = true;
                console.log('📚 Contenido cargado:', grouped_content.length, 'grupos');
                
                // Procesar parámetro de búsqueda de la URL si existe
                if (browser) {
                    const searchParam = $page.url.searchParams.get('search');
                    if (searchParam && !isProcessingUrlSearch) {
                        selectModuleById(searchParam, true);
                    }
                }
            } else {
                console.error('❌ Error al cargar contenido:', result.error);
            }
        } catch (error) {
            console.error('❌ Error en fetch:', error);
        }
    });

    function selectModule(id: string, title: string, htmlContent: string, rawMarkdown?: string, fromUrlNavigation: boolean = false) {
        selectedModuleId = id;
        selectedModuleName = title;
        selectedModuleHtml = htmlContent;
        selectedModuleRawMarkdown = rawMarkdown || '';
        
        console.log('📄 Módulo seleccionado:', {
            id,
            title,
            htmlLength: htmlContent?.length || 0,
            rawLength: rawMarkdown?.length || 0,
            fromNavigation: fromUrlNavigation
        });

        // Actualizar la URL solo si no viene de navegación URL para evitar loops
        if (browser && !fromUrlNavigation) {
            const url = new URL(window.location.href);
            url.searchParams.set('search', id);
            window.history.pushState({}, '', url.toString());
        }

        // Scroll al tope en móvil cuando se selecciona un módulo
        if (window.innerWidth < 1024) {
            document.documentElement.scrollTop = 0;
        }
    }

    function highlightTextInHtml(html: string, searchTerm: string): string {
        if (!searchTerm || !html) return html;
        
        // Escapar caracteres especiales para regex
        const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedTerm, 'gi');
        
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

    // Función para generar índice automático para IA
    function generateAIIndex() {
        // Usar archivo estático del índice de módulos
        const staticUrl = '/documentation/llms/index.txt';
        window.open(staticUrl, '_blank');
        
        console.log('📑 Opening static AI index at:', staticUrl);
    }

    // Función para manejar el selector dropdown (móvil)
    function handleModuleSelect(event: Event) {
        const target = event.target as HTMLSelectElement;
        const selectedValue = target.value;
        
        if (!selectedValue) return;
        
        // Encontrar el módulo seleccionado
        for (const group of grouped_content) {
            const foundItem = group.items.find(item => item.id === selectedValue);
            if (foundItem) {
                selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown, false);
                break;
            }
        }
    }

</script>

<div class="mx-auto max-w-7xl px-3 py-4 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row">
        <!-- Sidebar responsivo -->
        <aside class="lg:w-64 flex-shrink-0">
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-5 shadow-sm">
                <h3 class="mb-3 sm:mb-4 font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">Documentación para Desarrolladores</h3>
                
                <!-- Selector dropdown para móviles -->
                <div class="mb-3 sm:mb-4 block lg:hidden">
                    <select 
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onchange={handleModuleSelect}
                        value={selectedModuleId || ''}
                    >
                        <option value="">Seleccionar módulo...</option>
                        {#each grouped_content as group}
                            <optgroup label={group.folder}>
                                {#each group.items as item}
                                    <option value={item.id}>{item.title}</option>
                                {/each}
                            </optgroup>
                        {/each}
                    </select>
                </div>

                <!-- Lista de navegación para escritorio -->
                <div class="space-y-2 sm:space-y-3 hidden lg:block">
                    {#each grouped_content as group}
                        <div class="space-y-1 sm:space-y-2">
                            <h4 class="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600 pb-1">{group.folder}</h4>
                            <div class="space-y-1">
                                {#each group.items as item}
                                    <button
                                        type="button"
                                        class="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-colors duration-200 {selectedModuleId === item.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-medium border-l-2 border-blue-500' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}"
                                        onclick={() => selectModule(item.id, item.title, item.html, item.rawMarkdown)}
                                    >
                                        {item.title}
                                    </button>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Botones de integración con LLMs -->
                <div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                    <h4 class="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Integración con IA</h4>
                    
                    <!-- Botón para archivo individual -->
                    <button
                        type="button"
                        class="w-full px-3 py-2 text-xs sm:text-sm bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-md hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200 border border-purple-200 dark:border-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedModuleId}
                        onclick={() => handleLLMIntegration(selectedModuleId || '', selectedModuleName, 'single')}
                    >
                        📄 LLM: Módulo Actual
                    </button>

                    <!-- Botón para archivo completo -->
                    <button
                        type="button"
                        class="w-full px-3 py-2 text-xs sm:text-sm bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-md hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200 border border-green-200 dark:border-green-700"
                        onclick={() => handleLLMIntegration('', 'Manual-Completo', 'all')}
                    >
                        📚 LLM: Manual Completo
                    </button>

                    <!-- Botón para índice de módulos -->
                    <button
                        type="button"
                        class="w-full px-3 py-2 text-xs sm:text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 rounded-md hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors duration-200 border border-yellow-200 dark:border-yellow-700"
                        onclick={() => generateAIIndex()}
                    >
                        📑 Índice para IA
                    </button>
                </div>
            </div>
        </aside>

        <!-- Contenido principal -->
        <main class="flex-1 min-w-0">
            {#if selectedModuleId && selectedModuleName}
                <article transition:fade={{ duration: 200 }} class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <!-- Header del módulo -->
                    <header class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-6 md:p-8">
                        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{selectedModuleName}</h1>
                        <div class="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm opacity-90">
                            <span class="bg-white/20 px-2 py-1 rounded-full">Dev Docs</span>
                            <span class="bg-white/20 px-2 py-1 rounded-full">ID: {selectedModuleId}</span>
                        </div>
                    </header>

                    <!-- Contenido del módulo -->
                    <div class="p-4 sm:p-6 md:p-8">
                        <div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800">
                            {@html selectedModuleHtml}
                        </div>
                    </div>
                </article>
            {:else}
                <!-- Estado inicial -->
                <div class="flex items-center justify-center min-h-[60vh] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div class="text-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Documentación para Desarrolladores</h2>
                        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">Selecciona un módulo del menú para comenzar</p>
                        
                        <!-- Contadores de contenido -->
                        {#if contentLoaded}
                            <div class="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                <div class="text-center">
                                    <div class="font-semibold text-blue-600 dark:text-blue-400">{grouped_content.length}</div>
                                    <div>Categorías</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-semibold text-purple-600 dark:text-purple-400">{grouped_content.reduce((acc, group) => acc + group.items.length, 0)}</div>
                                    <div>Módulos</div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            {/if}
        </main>
    </div>
</div>

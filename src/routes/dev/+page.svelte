<script lang="ts">
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { processGroupedContent, prepareForExport } from '$lib/helpers/textReplacer';
    import { page } from '$app/stores';

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

    // Función para seleccionar módulo específico
    function selectModuleById(moduleId: string) {
        console.log('Buscando módulo con ID:', moduleId);
        console.log('Contenido disponible:', grouped_content.map(g => g.items.map(i => i.id)).flat());
        
        for (const group of grouped_content) {
            const foundItem = group.items.find(item => item.id === moduleId);
            if (foundItem) {
                console.log('Módulo encontrado:', foundItem);
                selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
                return true;
            }
        }
        console.warn('Módulo no encontrado:', moduleId);
        return false;
    }

    // Reactividad a cambios en la URL
    $: if (contentLoaded && $page.url.search) {
        const urlParams = new URLSearchParams($page.url.search);
        const moduleParam = urlParams.get('module');
        
        console.log('URL cambió:', $page.url.search, 'Módulo:', moduleParam);
        
        if (moduleParam && moduleParam !== selectedModuleId) {
            console.log('Intentando seleccionar módulo:', moduleParam);
            if (!selectModuleById(moduleParam)) {
                console.warn(`Módulo no encontrado: ${moduleParam}`);
                // Si no encuentra el módulo, ir al primero por defecto
                if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                    selectModule(
                        grouped_content[0].items[0].id,
                        grouped_content[0].items[0].title,
                        grouped_content[0].items[0].html,
                        grouped_content[0].items[0].rawMarkdown
                    );
                }
            }
        }
    }

    onMount(async () => {
        try {
            const modules = import.meta.glob('/src/routes/dev/Docs/**/*.md', {
                query: '?raw',
                import: 'default'
            });
            const files = Object.entries(modules);

            const contentMap: Record<string, ContentItem[]> = {};

            for (const [path, loader] of files) {
                const markdownText = await loader() as string;
                const fileName = path.split('/').pop();
                const folderName = path.split('/').slice(-2, -1)[0]; 
                
                if (!fileName) continue; // Skip if fileName is undefined
                
                const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
                const id = fileName.replace('.md', '');

                if (!contentMap[folderName]) {
                    contentMap[folderName] = [];
                }

                contentMap[folderName].push({
                    id,
                    title: cleanTitle,
                    html: await marked(markdownText),
                    rawMarkdown: markdownText 
                });
            }

            Object.values(contentMap).forEach(items => {
                items.sort((a: ContentItem, b: ContentItem) => {
                    const numA = parseInt(a.id.split('-')[0]);
                    const numB = parseInt(b.id.split('-')[0]);
                    return numA - numB;
                });
            });

            grouped_content = Object.entries(contentMap).map(([folder, items]) => ({
                folder: folder.replace(/^\d+-/, '').replace(/-/g, ' '),
                items
            })).sort((a, b) => {
                const numA = parseInt(a.folder.split('-')[0]);
                const numB = parseInt(b.folder.split('-')[0]);
                return numA - numB;
            });

            // Aplicar reemplazo de texto automáticamente
            grouped_content = processGroupedContent(grouped_content);
            contentLoaded = true;

            // Verificar si hay un módulo específico en la URL después de cargar
            const urlParams = new URLSearchParams($page.url.search);
            const moduleParam = urlParams.get('module');
            
            if (moduleParam) {
                if (!selectModuleById(moduleParam)) {
                    console.warn(`Módulo no encontrado: ${moduleParam}`);
                    // Fallback al primer módulo
                    if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                        selectModule(
                            grouped_content[0].items[0].id,
                            grouped_content[0].items[0].title,
                            grouped_content[0].items[0].html,
                            grouped_content[0].items[0].rawMarkdown
                        );
                    }
                }
            } else {
                // Si no hay módulo específico, selecciona el primer módulo por defecto
                if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                    selectModule(
                        grouped_content[0].items[0].id,
                        grouped_content[0].items[0].title,
                        grouped_content[0].items[0].html,
                        grouped_content[0].items[0].rawMarkdown
                    );
                }
            }

        } catch (error) {
            console.error('Error al cargar los módulos:', error);
        }
    });


    function selectModule(id: string, title: string, htmlContent: string, rawMarkdown?: string) {
        selectedModuleId = id;
        selectedModuleName = title;
        selectedModuleHtml = htmlContent;
        selectedModuleRawMarkdown = rawMarkdown || ''; 
    }

    // Función para manejar cambios en el select móvil
    function handleMobileSelect(event: Event) {
        const target = event.target as HTMLSelectElement;
        const selectedId = target.value;
        
        if (selectedId) {
            selectModuleById(selectedId);
        }
    }

    // Función para crear opciones planas del select
    function getFlatOptions() {
        const options: Array<{id: string, title: string}> = [];
        
        grouped_content.forEach(group => {
            group.items.forEach(item => {
                options.push({
                    id: item.id,
                    title: item.title
                });
            });
        });
        
        return options;
    }

    function isSelected(id: string) {
        return selectedModuleId === id;
    }

    function handleLLMIntegration(moduleId: string, moduleName: string) {
        // Encontrar el contenido markdown del módulo actual
        let markdownContent = '';
        for (const group of grouped_content) {
            const foundItem = group.items.find(item => item.id === moduleId);
            if (foundItem) {
                markdownContent = foundItem.rawMarkdown;
                break;
            }
        }
        
        if (!markdownContent) {
            alert('No se pudo encontrar el contenido del módulo');
            return;
        }
        
        // Aplicar reemplazo antes de exportar
        const txtContent = prepareForExport(markdownContent);
        
        // Crear un blob con el contenido markdown como texto
        const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // Abrir en nueva pestaña
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
            newWindow.document.title = `${moduleName}.txt`;
        }
        
        // Limpiar la URL después de un tiempo para liberar memoria
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        
        console.log('Opening markdown content as txt for:', moduleName);
    }

</script>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col gap-8 lg:flex-row">
        <!-- Mobile dropdown selector - only visible on mobile -->
        <div class="lg:hidden mb-6">
            <div class="mobile-select-container relative">
                <label for="mobile-docs-select" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Documentación para Desarrolladores
                </label>
                <div class="relative">
                    <select 
                        id="mobile-docs-select"
                        on:change={handleMobileSelect}
                        value={selectedModuleId || ''}
                        class="mobile-select w-full px-4 py-3 pr-10 border-2 border-gray-200 dark:border-gray-600 rounded-lg shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                               appearance-none cursor-pointer text-sm font-medium"
                    >
                        <option value="" class="text-gray-500">Selecciona un documento...</option>
                        {#each getFlatOptions() as option}
                            <option value={option.id} class="py-2 font-normal">
                                {option.title}
                            </option>
                        {/each}
                    </select>
                    <!-- Custom dropdown arrow -->
                    <div class="select-arrow absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <!-- Subtle gradient background -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg -z-10 opacity-30"></div>
            </div>
        </div>

        <!-- Desktop sidebar - only visible on desktop -->
        <aside class="hidden lg:block lg:w-64 flex-shrink-0">
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-sm">
                <h3 class="mb-4 font-bold text-gray-900 dark:text-white text-m">Documentación para Desarrolladores</h3>
                <nav>
                    {#each grouped_content as group}
                        <div class="mb-2">
                            <h4 class="mb-4' font-semibold text-gray-800 dark:text-gray-200 text-sm">{group.folder}</h4>
                            <nav class="space-y-1 pl-3">
                                {#each group.items as item}
                                    <button
                                        on:click={() => selectModule(item.id, item.title, item.html, item.rawMarkdown)}
                                        class="block w-full text-left text-sm p-1.5 rounded-md transition-colors duration-200 cursor-pointer leading-tight
                                        {isSelected(item.id) 
                                            ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-medium' 
                                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'}"
                                    >
                                        {item.title}
                                    </button>
                                {/each}
                            </nav>
                        </div>
                    {/each}
                </nav>
            </div>
        </aside>

        <main class="min-w-0 flex-1">
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                {#if selectedModuleHtml}
                    <section class="markdown-paxapos" transition:fade={{ duration: 150 }}>
                        {@html selectedModuleHtml}
                    </section>
                    
                    <!-- Botón LLM Integration en el pie de la sección -->
                    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex justify-end">
                            <button
                                on:click={() => handleLLMIntegration(selectedModuleId || '', selectedModuleName)}
                                class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-200 shadow-sm"
                            >
                                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                Ver archivo LLM
                            </button>
                        </div>
                    </div>
                {:else}
                    <p class="text-gray-600 dark:text-gray-300">Selecciona un módulo del menú lateral.</p>
                {/if}
            </div>
        </main>
    </div>
</div>
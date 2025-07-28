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

    // Reactividad a cambios en la URL
    $: if (contentLoaded && $page.url.search !== lastProcessedUrl) {
        const urlParams = new URLSearchParams($page.url.search);
        const moduleParam = urlParams.get('module');
        const highlightParam = urlParams.get('highlight');
        
        // Si hay parámetros de módulo en la URL
        if (moduleParam && moduleParam !== selectedModuleId) {
            lastProcessedUrl = $page.url.search;
            isProcessingUrlSearch = true;
            
            if (!selectModuleById(moduleParam, true)) {
                // Si no encuentra el módulo, ir al primero por defecto
                if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                    selectModule(
                        grouped_content[0].items[0].id,
                        grouped_content[0].items[0].title,
                        grouped_content[0].items[0].html,
                        grouped_content[0].items[0].rawMarkdown,
                        true
                    );
                }
            }
            
            // Resetear el flag después de un breve delay
            setTimeout(() => {
                isProcessingUrlSearch = false;
            }, 100);
        } else if (!$page.url.search) {
            // Si no hay parámetros, resetear lastProcessedUrl
            lastProcessedUrl = '';
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
                if (!selectModuleById(moduleParam, true)) {
                    // Fallback al primer módulo
                    if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                        selectModule(
                            grouped_content[0].items[0].id,
                            grouped_content[0].items[0].title,
                            grouped_content[0].items[0].html,
                            grouped_content[0].items[0].rawMarkdown,
                            true
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
                        grouped_content[0].items[0].rawMarkdown,
                        false
                    );
                }
            }

        } catch (error) {
            console.error('Error al cargar los módulos:', error);
        }
    });


    function selectModule(id: string, title: string, htmlContent: string, rawMarkdown?: string, fromUrlNavigation: boolean = false) {
        selectedModuleId = id;
        selectedModuleName = title;
        
        // Verificar si hay término de resaltado en la URL
        const urlParams = new URLSearchParams($page.url.search);
        const highlightParam = urlParams.get('highlight');
        
        if (highlightParam && fromUrlNavigation) {
            // Si viene de navegación por URL (búsqueda), aplicar resaltado
            selectedModuleHtml = highlightTextInHtml(htmlContent, highlightParam);
        } else {
            // Si es selección manual del usuario, limpiar la URL y mostrar sin resaltado
            if ($page.url.search && !fromUrlNavigation) {
                const newUrl = new URL(window.location.href);
                newUrl.searchParams.delete('module');
                newUrl.searchParams.delete('highlight');
                window.history.replaceState({}, '', newUrl.pathname);
                lastProcessedUrl = '';
            }
            selectedModuleHtml = htmlContent;
        }
        
        selectedModuleRawMarkdown = rawMarkdown || '';
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

    function handleLLMIntegration(moduleId: string, moduleName: string, mode: 'single' | 'all' = 'single') {
        if (mode === 'all') {
            // Exportar todo el manual como un solo archivo
            let allContent = '';
            grouped_content.forEach(group => {
                allContent += `\n\n# ${group.folder}\n\n`;
                group.items.forEach(item => {
                    allContent += `## ${item.title}\n\n`;
                    allContent += prepareForExport(item.rawMarkdown);
                    allContent += '\n\n---\n\n';
                });
            });
            
            // Crear blob con todo el contenido
            const blob = new Blob([allContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            // Abrir en nueva pestaña
            const newWindow = window.open(url, '_blank');
            if (newWindow) {
                newWindow.document.title = 'Manual-Completo-Desarrolladores.txt';
            }
            
            // Copiar automáticamente al portapapeles para IA
            navigator.clipboard.writeText(allContent).then(() => {
                console.log('📋 Manual completo copiado al portapapeles para IA');
            }).catch(err => {
                console.error('Error al copiar al portapapeles:', err);
            });
            
            setTimeout(() => URL.revokeObjectURL(url), 2000);
            console.log('📚 Manual completo exportado para IA');
            return;
        }
        
        // Modo single: exportar solo el módulo actual
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
        
        // Copiar automáticamente al portapapeles para IA
        navigator.clipboard.writeText(txtContent).then(() => {
            console.log(`📋 Módulo "${moduleName}" copiado al portapapeles para IA`);
        }).catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
        
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        console.log('Opening markdown content as txt for:', moduleName);
    }
    
    // Función para generar índice automático para IA
    function generateAIIndex() {
        let index = '# ÍNDICE AUTOMÁTICO PARA IA - DOCUMENTACIÓN DESARROLLADORES\n\n';
        index += '## Estructura del Manual:\n\n';
        
        grouped_content.forEach((group, groupIndex) => {
            index += `### ${groupIndex + 1}. ${group.folder}\n`;
            group.items.forEach((item, itemIndex) => {
                index += `   ${groupIndex + 1}.${itemIndex + 1} ${item.title} (ID: ${item.id})\n`;
            });
            index += '\n';
        });
        
        index += '\n## Instrucciones para IA:\n';
        index += '- Cada sección está identificada con un ID único\n';
        index += '- El contenido está en formato markdown limpio\n';
        index += '- Use este índice para navegar y referenciar secciones específicas\n';
        index += '- Para obtener contenido específico, solicite por ID de módulo\n\n';
        
        // Copiar al portapapeles
        navigator.clipboard.writeText(index).then(() => {
            console.log('📑 Índice para IA generado y copiado al portapapeles');
        });
        
        // También mostrar en nueva pestaña
        const blob = new Blob([index], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
            newWindow.document.title = 'Indice-IA-Desarrolladores.txt';
        }
        setTimeout(() => URL.revokeObjectURL(url), 2000);
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
                
                <!-- Dropdown para móvil (visible solo en pantallas pequeñas) -->
                <div class="block lg:hidden mb-3 sm:mb-4">
                    <select 
                        class="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-200 min-h-[44px] touch-manipulation"
                        value={selectedModuleId || (grouped_content.length > 0 && grouped_content[0].items.length > 0 ? grouped_content[0].items[0].id : '')}
                        onchange={handleModuleSelect}
                    >
                        {#each grouped_content as group}
                            <optgroup label={group.folder}>
                                {#each group.items as item}
                                    <option value={item.id}>{item.title}</option>
                                {/each}
                            </optgroup>
                        {/each}
                    </select>
                </div>

                <!-- Sidebar tradicional para desktop (visible solo en pantallas grandes) -->
                <nav class="hidden lg:block">
                    {#each grouped_content as group}
                        <div class="mb-3 sm:mb-4">
                            <h4 class="mb-2 sm:mb-3 font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">{group.folder}</h4>
                            <nav class="space-y-1 sm:space-y-1.5 pl-2 sm:pl-3">
                                {#each group.items as item}
                                    <button
                                        onclick={() => selectModule(item.id, item.title, item.html, item.rawMarkdown, false)}
                                        class="block w-full text-left text-xs sm:text-sm md:text-base p-1.5 sm:p-2 md:p-2.5 rounded-md transition-colors duration-200 cursor-pointer leading-relaxed min-h-[44px] touch-manipulation
                                        {selectedModuleId === item.id
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
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm">
                {#if selectedModuleHtml}
                    <section class="markdown-paxapos prose prose-sm sm:prose md:prose-lg xl:prose-xl max-w-none" transition:fade={{ duration: 150 }}>
                        {@html selectedModuleHtml}
                    </section>
                    
                    <!-- Botones LLM Integration mejorados -->
                    <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-end">
                            <!-- Botón módulo individual -->
                            <button
                                onclick={() => handleLLMIntegration(selectedModuleId || '', selectedModuleName, 'single')}
                                class="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 cursor-pointer text-white text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 shadow-sm min-h-[44px] touch-manipulation"
                            >
                                <svg class="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span class="whitespace-nowrap">Módulo para IA</span>
                            </button>
                            
                            <!-- Botón manual completo -->
                            <button
                                onclick={() => handleLLMIntegration('', 'Manual-Completo', 'all')}
                                class="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 cursor-pointer text-white text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 shadow-sm min-h-[44px] touch-manipulation"
                            >
                                <svg class="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span class="whitespace-nowrap">Todo para IA</span>
                            </button>
                            
                            <!-- Botón índice para IA -->
                            <button
                                onclick={() => generateAIIndex()}
                                class="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 cursor-pointer text-white text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 shadow-sm min-h-[44px] touch-manipulation"
                            >
                                <svg class="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span class="whitespace-nowrap">Índice IA</span>
                            </button>
                        </div>
                    </div>
                {:else}
                    <div class="flex items-center justify-center py-12 sm:py-16 md:py-20">
                        <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center">Selecciona un módulo del menú lateral.</p>
                    </div>
                {/if}
            </div>
        </main>
    </div>
</div>
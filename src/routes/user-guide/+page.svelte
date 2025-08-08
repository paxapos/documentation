<script lang="ts">
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { processGroupedContent, prepareForExport } from '$lib/helpers/textReplacer';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

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
        for (const group of grouped_content) {
            const foundItem = group.items.find(item => item.id === moduleId);
            if (foundItem) {
                selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
                return true;
            }
        }
        return false;
    }

    // Reactividad a cambios en la URL
    $: if (contentLoaded && $page.url.search) {
        const urlParams = new URLSearchParams($page.url.search);
        const moduleParam = urlParams.get('module');
        const highlightParam = urlParams.get('highlight');
        
        console.log('URL cambió:', $page.url.search, 'Módulo:', moduleParam, 'Resaltar:', highlightParam);
        
        if (moduleParam && moduleParam !== selectedModuleId) {
            console.log('Intentando seleccionar módulo:', moduleParam);
            if (!selectModuleById(moduleParam)) {
                console.warn(`Módulo no encontrado: ${moduleParam}`);
                // Si no encuentra el módulo, mostrar el primero y seleccionarlo
                if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                    const firstItem = grouped_content[0].items[0];
                    selectModule(
                        firstItem.id,
                        firstItem.title,
                        firstItem.html,
                        firstItem.rawMarkdown
                    );
                }
            }
        }
    }

    onMount(async () => {
        try {
            const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
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

                const markdownHtml = await marked(markdownText);

                contentMap[folderName].push({
                    id,
                    title: cleanTitle,
                    html: markdownHtml,
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
                    // Fallback al primer módulo y seleccionarlo
                    if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                        const firstItem = grouped_content[0].items[0];
                        selectModule(
                            firstItem.id,
                            firstItem.title,
                            firstItem.html,
                            firstItem.rawMarkdown
                        );
                    }
                }
            } else {
                // Si no hay módulo específico, mostrar el primer módulo por defecto y seleccionarlo
                if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                    const firstItem = grouped_content[0].items[0];
                    selectModule(
                        firstItem.id,
                        firstItem.title,
                        firstItem.html,
                        firstItem.rawMarkdown
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
        
        // Verificar si hay término de resaltado en la URL
        const urlParams = new URLSearchParams($page.url.search);
        const highlightParam = urlParams.get('highlight');
        
        if (highlightParam) {
            // Aplicar resaltado al contenido HTML
            selectedModuleHtml = highlightTextInHtml(htmlContent, highlightParam);
        } else {
            selectedModuleHtml = htmlContent;
        }
        
        selectedModuleRawMarkdown = rawMarkdown || '';
        console.log('Módulo seleccionado:', id, title);
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

    // Función para abrir archivo TXT estático para LLMs
    function handleLLMIntegration(moduleId: string, moduleName: string) {
        // Generar nombre de archivo limpio (igual lógica que el script)
        const cleanFileName = moduleId
            .toLowerCase()
            .replace(/[\s\-_]+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')
            .replace(/\-+/g, '-')
            .replace(/^\-|\-$/g, '');
        
        // En producción: usar archivo estático
        const txtUrl = `${base}/llms/${cleanFileName}.txt`;
        
        // En desarrollo: fallback a blob como antes (para testing)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
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
            
            // Aplicar la misma limpieza que el script
            const txtContent = cleanMarkdownToPlainText(markdownContent, moduleName);
            
            // Crear blob para desarrollo
            const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
            const blobUrl = URL.createObjectURL(blob);
            
            // Abrir en nueva pestaña
            const newWindow = window.open(blobUrl, '_blank');
            if (newWindow) {
                newWindow.document.title = `${moduleName}.txt`;
            }
            
            // Limpiar después de un tiempo
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
            
            console.log('Development mode: Using blob for LLM file');
        } else {
            // Producción: abrir archivo estático
            window.open(txtUrl, '_blank');
            console.log('Production mode: Opening static TXT file for LLMs:', txtUrl);
        }
    }
    
    // Función para limpiar markdown (misma lógica que el script)
    function cleanMarkdownToPlainText(content: string, moduleName: string): string {
        const header = `# PaxaPOS - Manual de Usuario
# Módulo: ${moduleName}
# Generado para LLMs/IA (Modo desarrollo)

`;
        
        const cleanContent = content
            // Remover front matter YAML
            .replace(/^---[\s\S]*?---\n/m, '')
            // Remover headers (mantener el texto)
            .replace(/^#{1,6}\s+(.+)$/gm, '$1')
            // Remover bold/italic (mantener texto)
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\*(.*?)\*/g, '$1')
            .replace(/__(.*?)__/g, '$1')
            .replace(/_(.*?)_/g, '$1')
            // Remover links (mantener texto)
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remover imágenes
            .replace(/!\[([^\]]*)\]\([^)]+\)/g, 'Imagen: $1')
            // Remover code blocks
            .replace(/```[\s\S]*?```/g, '[Código]')
            // Remover inline code (mantener contenido)
            .replace(/`([^`]+)`/g, '$1')
            // Remover tablas (simplificar)
            .replace(/\|.*?\|/g, '')
            .replace(/\+[-=]+\+/g, '')
            // Remover listas (mantener contenido)
            .replace(/^[\s]*[-*+]\s+/gm, '• ')
            .replace(/^[\s]*\d+\.\s+/gm, '')
            // Limpiar espacios extra
            .replace(/\n{3,}/g, '\n\n')
            .replace(/^\s+/gm, '')
            .replace(/\s+$/gm, '')
            .trim();
            
        return header + cleanContent;
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
                selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
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
                <h3 class="mb-3 sm:mb-4 font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">Manual de usuario</h3>
                
                <!-- Dropdown para móvil (visible solo en pantallas pequeñas) -->
                <div class="block lg:hidden mb-3 sm:mb-4">
                    <select 
                        class="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-200 min-h-[44px] touch-manipulation"
                        value={selectedModuleId || ''}
                        onchange={handleModuleSelect}
                    >
                        <option value="">Selecciona un módulo...</option>
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
                        <div class="mb-3 sm:mb-2.5">
                            <h4 class="mb-2 sm:mb-1 font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">{group.folder}</h4>
                            <nav class="space-y-1 sm:space-y-1.5 pl-2 sm:pl-3">
                                {#each group.items as item}
                                    <button
                                        onclick={() => selectModule(item.id, item.title, item.html, item.rawMarkdown)}
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
                    
                    <!-- Botón LLM Integration original -->
                    <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex justify-center sm:justify-end">
                            <button
                                onclick={() => handleLLMIntegration(selectedModuleId || '', selectedModuleName)}
                                class="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer text-white text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 shadow-sm min-h-[44px] touch-manipulation"
                            >
                                <svg class="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                <span class="whitespace-nowrap">Ver archivo LLM</span>
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
<script lang="ts">
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { processGroupedContent, prepareForExport } from '$lib/helpers/textReplacer';

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

    onMount(async () => {
        try {
            const modules = import.meta.glob('/src/routes/dev/docs/**/*.md', {
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

            // Una vez que se carga todo el contenido, selecciona el primer módulo por defecto
            if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                selectModule(
                    grouped_content[0].items[0].id,
                    grouped_content[0].items[0].title,
                    grouped_content[0].items[0].html,
                    grouped_content[0].items[0].rawMarkdown
                );
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

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white">
    <div class="flex flex-col gap-8 lg:flex-row">
        <aside class="lg:w-64  flex-shrink-0">
            <div class="rounded-lg border p-4">
                <h3 class="mb-3 font-bold">Manual de usuario</h3>
                <nav>
                    {#each grouped_content as group}
                        <div>
                            <h4 class="mb-2 font-semibold">{group.folder}</h4>
                            <nav class="space-y-0.4 pl-4">
                                {#each group.items as item}
                                    <button
                                        on:click={() => selectModule(item.id, item.title, item.html, item.rawMarkdown)}
                                        class="block w-full text-left text-sm p-1 rounded-md hover:text-blue-800 cursor-pointer
                                        {isSelected(item.id) ? '' : ''}"
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
            <div class="rounded-lg border p-4"> {#if selectedModuleName}
                    <h1 class="text-4xl font-bold mb-6">{selectedModuleName}</h1>
                {/if}

                {#if selectedModuleHtml}
                    <section class="markdown-body markdown-paxapos" transition:fade={{ duration: 150 }}>
                        {@html selectedModuleHtml}
                    </section>
                    
                    <!-- Botón LLM Integration en el pie de la sección -->
                    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex justify-end">
                            <button
                                on:click={() => handleLLMIntegration(selectedModuleId || '', selectedModuleName)}
                                class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-200"
                            >
                                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                Ver archivo LLM
                            </button>
                        </div>
                    </div>
                {:else}
                    <p>Selecciona un módulo del menú lateral.</p>
                {/if}
            </div>
        </main>
    </div>
</div>
<script>
    import { onMount } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition'; // Asegúrate de que Svelte está bien instalado para esto

    let grouped_content = [];
    let selectedModuleId = null;
    let selectedModuleName = '';
    let selectedModuleHtml = '';
    let selectedModuleRawMarkdown = ''; // <-- AÑADIDO: Nuevo estado para el Markdown sin procesar

    onMount(async () => {
        try {
            const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
                query: '?raw',
                import: 'default'
            });
            const files = Object.entries(modules);

            const contentMap = {};

            for (const [path, loader] of files) {
                const markdownText = await loader();
                const fileName = path.split('/').pop();
                const folderName = path.split('/').slice(-2, -1)[0]; 
                const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
                const id = fileName.replace('.md', '');

                if (!contentMap[folderName]) {
                    contentMap[folderName] = [];
                }

                contentMap[folderName].push({
                    id,
                    title: cleanTitle,
                    html: marked(markdownText),
                    rawMarkdown: markdownText // <-- AÑADIDO: Guardar el rawMarkdown aquí
                });
            }

            Object.values(contentMap).forEach(items => {
                items.sort((a, b) => {
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

            // Una vez que se carga todo el contenido, selecciona el primer módulo por defecto
            if (grouped_content.length > 0 && grouped_content[0].items.length > 0) {
                // <-- MODIFICADO: Pasa también el rawMarkdown al seleccionar el módulo inicial
                selectModule(
                    grouped_content[0].items[0].id,
                    grouped_content[0].items[0].title,
                    grouped_content[0].items[0].html,
                    grouped_content[0].items[0].rawMarkdown
                );
            }

        } catch (error) {
            console.error('Failed to load markdown files:', error);
        }
    });

    // <-- MODIFICADO: Función para cambiar el módulo seleccionado (ahora acepta rawMarkdown) -->
    function selectModule(id, title, htmlContent, rawMarkdown) {
        selectedModuleId = id;
        selectedModuleName = title;
        selectedModuleHtml = htmlContent;
        selectedModuleRawMarkdown = rawMarkdown; // <-- AÑADIDO: Asigna el rawMarkdown
    }

    function isSelected(id) {
        return selectedModuleId === id;
    }

    // <-- AÑADIDO: Nueva función para descargar el TXT -->
    function downloadTxt() {
        if (!selectedModuleRawMarkdown || !selectedModuleName) {
            console.warn("No hay contenido o nombre para descargar.");
            return;
        }

        const blob = new Blob([selectedModuleRawMarkdown], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${selectedModuleName.replace(/ /g, '-')}.txt`;
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
</script>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white">
    <div class="flex flex-col gap-8 lg:flex-row">
        <aside class="lg:w-64 flex-shrink-0">
            <div class="rounded-lg border p-4">
                <h3 class="mb-3 font-bold">Manual de usuario</h3>
                <nav>
                    {#each grouped_content as group}
                        <div>
                            <h4 class="mb-2 font-semibold">{group.folder}</h4>
                            <nav class="space-y-0.4 pl-4">
                                {#each group.items as item}
                                    <button
                                        on:click={() => selectModule(item.id, item.title, item.html)}
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
                {:else}
                    <p>Selecciona un módulo del menú lateral.</p>
                {/if}
            </div>
        </main>
    </div>
</div>
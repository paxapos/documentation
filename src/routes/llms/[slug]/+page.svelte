<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>LLM - {data.title} | PaxaPOS Documentation</title>
    <meta name="description" content="Archivo LLM para {data.title} - Documentación de PaxaPOS" />
    <meta name="robots" content="index, follow" />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Archivo LLM: {data.title}
                            </h1>
                            <p class="text-gray-600 dark:text-gray-400 mt-1">
                                Archivo: {data.fileName}
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <a 
                                href="/documentation/user-guide/{data.slug}"
                                class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded transition-colors"
                            >
                                Ver Guía
                            </a>
                            <button 
                                onclick={() => {
                                    const link = document.createElement('a');
                                    link.href = `/llms/${data.fileName}`;
                                    link.download = data.fileName;
                                    link.click();
                                }}
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                            >
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="p-6">
                    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Contenido del archivo
                    </h2>
                    <div class="bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 p-4">
                        <pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono overflow-x-auto">{data.content}</pre>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-6 text-center">
                <a 
                    href="/documentation/user-guide"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Volver al índice principal
                </a>
            </div>
        </div>
    </div>
</div>

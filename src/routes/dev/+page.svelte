<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { processGroupedContent } from '$lib/helpers/textReplacer';
    import { page } from '$app/stores';
    import SEOHead from '$lib/components/SEOHead.svelte';

    interface ModuleInfo {
        slug: string;
        title: string;
        description: string;
        category: string;
        icon: string;
        id: string;
    }

    const modules: ModuleInfo[] = [
        // Documentación
        {
            slug: 'documentation-one',
            title: 'Documentación Principal',
            description: 'Documentación técnica principal de PaxaPOS para desarrolladores',
            category: 'Documentación',
            icon: '📚',
            id: 'documentation-one'
        },
        {
            slug: 'webhooks',
            title: 'Webhooks',
            description: 'Integración con webhooks para notificaciones en tiempo real',
            category: 'Integración',
            icon: '🔗',
            id: 'webhooks'
        },
        {
            slug: 'sample-two',
            title: 'Ejemplo de Implementación',
            description: 'Ejemplo práctico de implementación con PaxaPOS API',
            category: 'Ejemplos',
            icon: '⚡',
            id: 'sample-two'
        },
        {
            slug: 'svelte-mdtest',
            title: 'Svelte Markdown Test',
            description: 'Ejemplo de prueba con Svelte y markdown',
            category: 'Ejemplos',
            icon: '🧪',
            id: 'svelte-mdtest'
        }
    ];

    // Agrupar módulos por categoría
    const groupedModules = modules.reduce((acc, module) => {
        if (!acc[module.category]) {
            acc[module.category] = [];
        }
        acc[module.category].push(module);
        return acc;
    }, {} as Record<string, ModuleInfo[]>);

    function navigateToModule(slug: string) {
        goto(`${base}/dev/${slug}`);
    }
</script>

<!-- SEO para la página índice -->
<SEOHead
    title="Documentación para Desarrolladores PaxaPOS"
    description="Documentación técnica completa de PaxaPOS para desarrolladores. APIs, integración, configuración y guías avanzadas."
    keywords="paxapos api, documentación desarrolladores, integración técnica, desarrollo restaurante"
    section="Documentación para Desarrolladores"
/>

<div class="max-w-none px-6 py-8 bg-white dark:bg-gray-900">
    <!-- Header -->
    <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentación para Desarrolladores
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Documentación técnica completa de PaxaPOS para desarrolladores. APIs, integración y guías avanzadas.
        </p>
    </div>

    <!-- Módulos organizados por categorías -->
    {#each Object.entries(groupedModules) as [categoryName, categoryModules]}
        <section class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                {categoryName}
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each categoryModules as module}
                    <button
                        onclick={() => navigateToModule(module.slug)}
                        class="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 text-left"
                    >
                        <div class="flex items-start">
                            <div class="text-3xl mr-4 group-hover:scale-110 transition-transform duration-200">
                                {module.icon}
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {module.title}
                                </h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {module.description}
                                </p>
                                <div class="mt-3 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                    Ver documentación
                                    <svg class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                {/each}
            </div>
        </section>
    {/each}

    <!-- Footer informativo -->
    <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <div class="flex items-start">
                <div class="text-2xl mr-4">⚡</div>
                <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                        ¿Necesitas soporte técnico?
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Si necesitas ayuda con la integración técnica o tienes dudas sobre las APIs, contáctanos.
                    </p>
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center text-gray-600 dark:text-gray-400">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Email: dev@paxapos.com
                        </div>
                        <div class="flex items-center text-gray-600 dark:text-gray-400">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Slack: #dev-paxapos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

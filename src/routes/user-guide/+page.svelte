<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { marked } from 'marked';
    import { fade } from 'svelte/transition';
    import { processGroupedContent, prepareForExport } from '$lib/helpers/textReplacer';
    import { page } from '$app/stores';
    import SEOHead from '$lib/components/SEOHead.svelte';

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

    // Función para generar SEO específico del módulo actual
    function getCurrentModuleSEO() {
        if (!selectedModuleId) {
            return {
                title: 'Manual de Usuario PaxaPOS',
                description: 'Manual completo de PaxaPOS para usuarios finales. Aprende paso a paso cómo usar todas las funciones del sistema.',
                keywords: 'manual usuario paxapos, guía completa, tutorial sistema restaurante'
            };
        }
        
        // Mapeo de módulos específicos para mejor SEO
        const moduleDescriptions: Record<string, {title: string, description: string, keywords: string}> = {
            '11-Introduccion': {
                title: 'Introducción a PaxaPOS - Primeros Pasos',
                description: 'Aprende los conceptos básicos de PaxaPOS y cómo dar tus primeros pasos en el sistema de gestión para restaurantes más completo de Argentina.',
                keywords: 'introducción paxapos, primeros pasos, tutorial básico, sistema restaurante'
            },
            '12-Iniciar-sesión': {
                title: 'Cómo Iniciar Sesión en PaxaPOS',
                description: 'Guía paso a paso para acceder a tu cuenta de PaxaPOS, recuperar contraseñas y configurar el acceso seguro a tu sistema.',
                keywords: 'login paxapos, iniciar sesión, acceso sistema, contraseña'
            },
            '21-Crear-Usuarios': {
                title: 'Crear y Gestionar Usuarios en PaxaPOS',
                description: 'Aprende a crear usuarios, asignar roles y permisos, gestionar personal y configurar accesos seguros en tu restaurante.',
                keywords: 'crear usuarios paxapos, gestión personal, roles permisos, administración usuarios'
            },
            '22-Tipos-De-Pago': {
                title: 'Configurar Métodos de Pago en PaxaPOS',
                description: 'Configura todos los métodos de pago: efectivo, tarjetas, transferencias, QR. Aprende a gestionar comisiones y tiempos de acreditación.',
                keywords: 'métodos pago paxapos, tarjetas crédito débito, efectivo, transferencias, mercadopago'
            },
            '25-Menú': {
                title: 'Configuración del Menú en PaxaPOS',
                description: 'Carga productos, crea categorías, gestiona precios y organiza tu menú digital. Guía completa para configurar tu carta.',
                keywords: 'configurar menú paxapos, cargar productos, categorías, precios, carta digital'
            },
            '32-Salón': {
                title: 'Módulo de Salón PaxaPOS - Gestión de Mesas',
                description: 'Aprende a gestionar mesas, tomar pedidos, asignar mozos y optimizar el servicio en tu salón con PaxaPOS.',
                keywords: 'salón paxapos, gestión mesas, tomar pedidos, mozos, servicio restaurante'
            },
            '33-Kitchen-Display-System-(KDS)': {
                title: 'KDS - Sistema de Pantalla de Cocina PaxaPOS',
                description: 'Configura y usa el Kitchen Display System para mejorar la comunicación entre salón y cocina, reducir tiempos y optimizar pedidos.',
                keywords: 'KDS paxapos, pantalla cocina, kitchen display system, gestión pedidos, comunicación cocina'
            },
            '34-Contabilidad': {
                title: 'Contabilidad y Reportes en PaxaPOS',
                description: 'Gestiona la contabilidad de tu restaurante: arqueos, reportes de ventas, control de caja y análisis financiero completo.',
                keywords: 'contabilidad paxapos, arqueos, reportes ventas, control caja, análisis financiero'
            },
            '37-ARCA-y-Facturación': {
                title: 'Facturación AFIP en PaxaPOS',
                description: 'Configura la facturación electrónica con AFIP, emite comprobantes fiscales y cumple todas las normativas argentinas.',
                keywords: 'facturación AFIP paxapos, facturación electrónica argentina, comprobantes fiscales, normativas AFIP'
            }
        };
        
        if (selectedModuleId && moduleDescriptions[selectedModuleId]) {
            return moduleDescriptions[selectedModuleId];
        }
        
        // SEO por defecto para módulos no mapeados
        return {
            title: `${selectedModuleName} - Manual PaxaPOS`,
            description: `Aprende a usar ${selectedModuleName} en PaxaPOS. Guía detallada paso a paso con ejemplos prácticos.`,
            keywords: `${selectedModuleName} paxapos, tutorial, guía, manual usuario`
        };
    }

    // Variable reactiva para el SEO actual
    $: currentSEO = getCurrentModuleSEO();

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

    // Reactividad a cambios en la URL (parámetros de consulta)
    $: if (contentLoaded && $page.url.search) {
        const urlParams = new URLSearchParams($page.url.search);
        const moduleParam = urlParams.get('module');
        const highlightParam = urlParams.get('highlight');
        
        if (moduleParam && moduleParam !== selectedModuleId) {
            if (!selectModuleById(moduleParam)) {
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
            // Hacer funciones accesibles globalmente para onClick en HTML
            (window as any).copyLinkToSection = copyLinkToSection;
            
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
                const id = fileName.replace('.md', '').trim(); // Añadir trim() para limpiar espacios/saltos de línea

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

            // Verificar si hay un hash en la URL para buscar la sección específica o módulo
            const hash = window.location.hash;
            if (hash) {
                handleHashNavigation(hash);
                return; // Salir temprano si encontramos módulo o sección por hash
            }

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
                        block: 'start'
                    });
                }
            }
        }, 100);
    }

    // Función para agregar íconos de enlace a los títulos H1, H2, H3, etc.
    function addLinkIconsToHeaders(html: string): string {
        // Buscar títulos H1, H2, H3, H4, H5, H6 seguidos de un div con id
        // El contenido del título puede incluir HTML como <strong>, <em>, etc.
        const headerWithIdRegex = /<(h[1-6])>([^<>]*(?:<[^>]+>[^<>]*<\/[^>]+>)*[^<>]*)<\/(h[1-6])>\s*<div id="([^"]+)"><\/div>/g;
        
        return html.replace(headerWithIdRegex, (match, headerTag, titleContent, closingTag, idValue) => {
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
        });
    }

    // Función para copiar el enlace de una sección específica
    function copyLinkToSection(sectionId: string) {
        const currentUrl = window.location.href.split('#')[0]; // URL sin hash
        const linkWithHash = `${currentUrl}#${sectionId}`;
        
        navigator.clipboard.writeText(linkWithHash).then(() => {
            // Mostrar mensaje de confirmación temporal
            showCopyConfirmation();
        }).catch(err => {
            console.error('Error al copiar enlace:', err);
            // Fallback para navegadores que no soportan clipboard API
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

    // Variable para el mensaje de confirmación
    let showCopyMessage = false;

    // Función para mostrar confirmación de copia
    function showCopyConfirmation() {
        showCopyMessage = true;
        setTimeout(() => {
            showCopyMessage = false;
        }, 2000);
    }

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
                moduleWithSection.rawMarkdown
            );
            
            // Después de seleccionar el módulo, scroll a la sección específica
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
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

<!-- SEO dinámico por módulo -->
<SEOHead
    title={currentSEO.title}
    description={currentSEO.description}
    keywords={currentSEO.keywords}
    url="/user-guide"
    type="article"
    section="Manual de Usuario"
/>

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

        <!-- Mensaje de confirmación para copiar enlace -->
        {#if showCopyMessage}
            <div 
                class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 flex items-center"
                transition:fade={{ duration: 200 }}
            >
                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                ¡Enlace copiado al portapapeles!
            </div>
        {/if}
    </div>
</div>
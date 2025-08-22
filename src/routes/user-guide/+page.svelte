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

    const modulesList: ModuleInfo[] = [
        {
            slug: 'introduccion',
            title: 'Introducción',
            description: 'Conceptos básicos de PaxaPOS y primeros pasos en el sistema',
            category: 'Primeros Pasos',
            icon: '🚀',
            id: '11-introduccion'
        },
        {
            slug: 'iniciar-sesion',
            title: 'Iniciar Sesión',
            description: 'Cómo acceder a tu cuenta de PaxaPOS de forma segura',
            category: 'Primeros Pasos',
            icon: '🔐',
            id: '12-iniciar-sesion'
        },
        {
            slug: 'crear-usuarios',
            title: 'Crear Usuarios',
            description: 'Gestión de usuarios, roles y permisos en el sistema',
            category: 'Administración',
            icon: '👥',
            id: '21-crear-usuarios'
        },
        {
            slug: 'tipos-de-pago',
            title: 'Tipos de Pago',
            description: 'Configuración de métodos de pago y procesamiento',
            category: 'Administración',
            icon: '💳',
            id: '22-tipos-de-pago'
        },
        {
            slug: 'agregar-personal',
            title: 'Agregar Personal',
            description: 'Gestión de empleados y asignación de roles',
            category: 'Administración',
            icon: '👨‍💼',
            id: '23-agregar-personal'
        },
        {
            slug: 'configuracion-impresoras',
            title: 'Configuración de Impresoras',
            description: 'Setup y configuración de impresoras térmicas',
            category: 'Configuración',
            icon: '🖨️',
            id: '24-configuracion-impresoras'
        },
        {
            slug: 'menu',
            title: 'Configuración del Menú',
            description: 'Carga de productos, categorías y organización de la carta',
            category: 'Configuración',
            icon: '📋',
            id: '25-menu'
        },
        {
            slug: 'salon',
            title: 'Módulo de Salón',
            description: 'Gestión de mesas, pedidos y servicio en el salón',
            category: 'Operaciones',
            icon: '🍽️',
            id: '32-salon'
        },
        {
            slug: 'kds',
            title: 'Kitchen Display System (KDS)',
            description: 'Sistema de pantalla de cocina para optimizar pedidos',
            category: 'Operaciones',
            icon: '👨‍🍳',
            id: '33-kitchen-display-system-kds'
        },
        {
            slug: 'contabilidad',
            title: 'Contabilidad',
            description: 'Gestión contable, arqueos y reportes financieros',
            category: 'Gestión',
            icon: '💰',
            id: '34-contabilidad'
        },
        {
            slug: 'arqueos',
            title: 'Arqueos',
            description: 'Control de caja y cuadre de efectivo diario',
            category: 'Gestión',
            icon: '🔍',
            id: '35-arqueos'
        },
        {
            slug: 'compras-stock',
            title: 'Compras y Stock',
            description: 'Gestión de inventario, compras y control de stock',
            category: 'Gestión',
            icon: '📦',
            id: '36-compras-stock'
        },
        {
            slug: 'arca-facturacion',
            title: 'ARCA y Facturación',
            description: 'Facturación electrónica y cumplimiento AFIP',
            category: 'Gestión',
            icon: '📄',
            id: '37-arca-facturacion'
        },
        {
            slug: 'estadisticas',
            title: 'Estadísticas',
            description: 'Reportes y análisis de ventas del restaurante',
            category: 'Gestión',
            icon: '📈',
            id: '38-estadisticas'
        },
        {
            slug: 'buchon-bot',
            title: 'Buchón Bot',
            description: 'Asistente virtual inteligente para gestión del restaurante',
            category: 'Herramientas',
            icon: '🤖',
            id: '42-buchon-bot'
        }
    ];

    // Agrupar módulos por categoría
    const groupedModules = modulesList.reduce((acc, module) => {
        if (!acc[module.category]) {
            acc[module.category] = [];
        }
        acc[module.category].push(module);
        return acc;
    }, {} as Record<string, ModuleInfo[]>);

    function navigateToModule(slug: string) {
        // En lugar de navegar, buscar el módulo por slug y seleccionarlo
        const moduleInfo = modulesList.find((m: ModuleInfo) => m.slug === slug);
        if (moduleInfo) {
            // Buscar el módulo en grouped_content por ID
            for (const group of grouped_content) {
                const foundItem = group.items.find(item => item.id === moduleInfo.id);
                if (foundItem) {
                    selectModule(foundItem.id, foundItem.title, foundItem.html, foundItem.rawMarkdown);
                    // Actualizar la URL sin recargar la página
                    window.history.pushState({}, '', `${base}/user-guide/${slug}`);
                    return;
                }
            }
        }
        // Fallback: navegar normalmente si no se encuentra
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

    // Reactividad a cambios en la URL (parámetros de consulta y pathname)
    $: if (contentLoaded && ($page.url.search || $page.url.pathname)) {
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
        // Usar archivo TXT estático del módulo específico
        // Normalizar: pasar a minúsculas, remover diacríticos y convertir espacios a guiones
        const txtFileName = moduleId.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '') + '.txt';
        const staticUrl = `${base}/llms/${txtFileName}`;
        
        // Abrir en nueva pestaña la URL estática
        window.open(staticUrl, '_blank');
        
        console.log('Opening static LLM file for:', moduleName, 'at:', staticUrl);
    }

    // Función para convertir IDs a slugs para URLs
    function getSlugFromId(id: string): string {
        return id.toLowerCase()
            .replace(/^\d+-/, '') // Remover números del inicio
            .replace(/[()]/g, '') // Remover paréntesis
            .replace(/\s+/g, '-') // Espacios a guiones
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remover acentos
            .replace(/[^a-z0-9-]/g, ''); // Solo letras, números y guiones
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
                    <!-- Índice de módulos cuando no hay módulo seleccionado -->
                    <div class="max-w-none">
                        <!-- Header -->
                        <div class="mb-8 text-center">
                            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Manual de Usuario PaxaPOS
                            </h1>
                            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Aprende paso a paso cómo usar todas las funciones de PaxaPOS. Desde la configuración inicial hasta la gestión avanzada de tu restaurante.
                            </p>
                        </div>

                        <!-- Módulos organizados por categorías -->
                        <div class="space-y-8">
                            {#each Object.entries(groupedModules) as [categoryName, categoryModules]}
                                <section>
                                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                                        {categoryName}
                                    </h2>
                                    
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {#each categoryModules as module}
                                            <button
                                                onclick={() => navigateToModule(module.slug)}
                                                class="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 text-left w-full min-h-[120px] flex flex-col"
                                            >
                                                <div class="flex items-start mb-3">
                                                    <div class="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                                        {module.icon}
                                                    </div>
                                                    <div class="flex-1 min-w-0">
                                                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-base leading-tight">
                                                            {module.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                
                                                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 flex-1">
                                                    {module.description}
                                                </p>
                                                
                                                <div class="mt-auto">
                                                    <div class="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium">
                                                        Ver módulo
                                                        <svg class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
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
                        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                                <div class="flex flex-col sm:flex-row items-start">
                                    <div class="text-2xl mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">💡</div>
                                    <div class="flex-1">
                                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                                            ¿Necesitas ayuda adicional?
                                        </h3>
                                        <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            Si tienes dudas sobre algún módulo o necesitas soporte técnico, nuestro equipo está aquí para ayudarte.
                                        </p>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                            <div class="flex items-center text-gray-600 dark:text-gray-400">
                                                <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                                Email: soporte@paxapos.com
                                            </div>
                                            <div class="flex items-center text-gray-600 dark:text-gray-400">
                                                <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.951-1.488A11.956 11.956 0 002 18c.404-.441.802-.872 1.17-1.293C3.708 16.04 4 15.543 4 15c0-2.667 1.333-4 4-4s4 1.333 4 4"></path>
                                                </svg>
                                                Chat: Disponible 24/7
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
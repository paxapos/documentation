<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let { children }: { children: any } = $props();

    let sidebarOpen = $state(false);
    let isMobile = $state(false);

    onMount(() => {
        // Detectar si es mobile
        const checkMobile = () => {
            const wasMobile = isMobile;
            isMobile = window.innerWidth < 768;
            
            // Si cambiamos de desktop a mobile, cerrar sidebar
            if (!wasMobile && isMobile) {
                sidebarOpen = false;
            }
            // Si cambiamos de mobile a desktop, abrir sidebar
            else if (wasMobile && !isMobile) {
                sidebarOpen = true;
            }
            // Inicialización: desktop abierto, mobile cerrado
            else if (wasMobile === isMobile) {
                sidebarOpen = !isMobile;
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    });

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }

    function navigateToModule(moduleSlug: string) {
        goto(`/documentation/user-guide/${moduleSlug}`);
        if (isMobile) sidebarOpen = false;
    }

    // Organizar módulos por categorías - manteniendo estructura original
    const moduleCategories = [
        {
            name: 'Comenzamos',
            modules: [
                { slug: 'introduccion', title: 'Introducción', id: '11-Introduccion' },
                { slug: 'iniciar-sesion', title: 'Iniciar Sesión', id: '12-Iniciar-sesión' }
            ]
        },
        {
            name: 'Primeros Pasos',
            modules: [
                { slug: 'crear-usuarios', title: 'Crear Usuarios', id: '21-Crear-Usuarios' },
                { slug: 'tipos-de-pago', title: 'Tipos de Pago', id: '22-Tipos-De-Pago' },
                { slug: 'agregar-personal', title: 'Agregar Personal', id: '23-Agregar-Personal' },
                { slug: 'configuracion-impresoras', title: 'Configuración de Impresoras', id: '24-Configuración-de-Impresoras' },
                { slug: 'menu', title: 'Menú', id: '25-Menú' }
            ]
        },
        {
            name: 'Módulos Principales',
            modules: [
                { slug: 'salon', title: 'Salón', id: '32-Salón' },
                { slug: 'kds', title: 'Kitchen Display System (KDS)', id: '33-Kitchen-Display-System-(KDS)' },
                { slug: 'contabilidad', title: 'Contabilidad', id: '34-Contabilidad' },
                { slug: 'arqueos', title: 'Arqueos', id: '35-Arqueos' },
                { slug: 'compras-stock', title: 'Compras y Stock', id: '36-Compras-y-Stock' },
                { slug: 'arca-facturacion', title: 'ARCA y Facturación', id: '37-ARCA-y-Facturación' },
                { slug: 'estadisticas', title: 'Estadísticas', id: '38-Estadísticas' }
            ]
        },
        {
            name: 'Extra',
            modules: [
                { slug: 'buchon-bot', title: 'Buchón Bot', id: '42-Buchón-Bot' }
            ]
        }
    ];

    // Obtener módulo actual usando la ruta slug
    let currentModule = $derived($page.params.slug || '');
</script>

<div class="flex min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Overlay para mobile - manteniendo estilos originales -->
    {#if isMobile && sidebarOpen}
        <div 
            class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onclick={toggleSidebar}
            role="button"
            tabindex="0"
            onkeydown={(e) => e.key === 'Escape' && toggleSidebar()}
            aria-label="Cerrar menú"
        ></div>
    {/if}


    <!-- Contenido principal - manteniendo estructura original -->
    <div class="flex-1 lg:ml-0">
        <!-- Contenido -->
        <main class="flex-1 bg-white dark:bg-gray-900 overflow-auto">
            <div class="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {@render children()}
            </div>
        </main>
    </div>
</div>
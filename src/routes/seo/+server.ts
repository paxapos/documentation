import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

// Prerender todas las rutas SEO
export const prerender = true;

// URLs estáticas conocidas (más eficiente que escanear filesystem)
const STATIC_URLS = [
    '/',
    '/dev',
    '/user-guide',
    // URLs del manual de usuario
    '/user-guide/11-Introduccion',
    '/user-guide/12-Iniciar-sesión',
    '/user-guide/21-Crear-Usuarios',
    '/user-guide/22-Tipos-De-Pago',
    '/user-guide/23-Agregar-Personal',
    '/user-guide/24-Configuración-de-Impresoras',
    '/user-guide/25-Menú',
    '/user-guide/32-Salón',
    '/user-guide/33-Kitchen-Display-System-(KDS)',
    '/user-guide/34-Contabilidad',
    '/user-guide/35-Arqueos',
    '/user-guide/36-Compras-y-Stock',
    '/user-guide/37-ARCA-y-Facturación',
    '/user-guide/38-Estadísticas',
    '/user-guide/42-Buchón-Bot',
    // URLs de desarrollo
    '/dev/Documentation-one',
    '/dev/Sample-two',
    '/dev/svelte-mdtest',
    '/dev/Webhooks'
];

// Función para generar sitemap
function generateSitemap() {
    const baseUrl = 'https://paxapos.github.io/documentation';
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_URLS.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    return sitemap;
}

// Función para generar robots.txt
function generateRobots() {
    return `User-agent: *
Allow: /

# AI Bots específicos
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 1

User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: Applebot
Allow: /
Crawl-delay: 1

Sitemap: https://paxapos.github.io/documentation/seo?type=sitemap`;
}

// Función para generar knowledge base
function generateKnowledgeBase() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PaxaPOS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser, Windows, macOS, Linux",
        "description": "Sistema POS completo para restaurantes y comercios con gestión integral",
        "features": [
            "Sistema de Punto de Venta (POS)",
            "Kitchen Display System (KDS)",
            "Gestión de Stock y Compras",
            "Contabilidad Integrada",
            "Facturación AFIP",
            "Estadísticas y Reportes",
            "Gestión de Personal",
            "Control de Arqueos"
        ],
        "modules": {
            "salon": "Gestión de mesas, pedidos y facturación",
            "kds": "Sistema de pantalla de cocina para optimizar preparación",
            "contabilidad": "Control financiero completo",
            "stock": "Gestión de inventario y compras",
            "afip": "Integración con facturación electrónica Argentina",
            "estadisticas": "Reportes y análisis de negocio",
            "personal": "Gestión de empleados y permisos"
        },
        "commonQueries": [
            {
                "question": "¿Cómo configurar impresoras en PaxaPOS?",
                "answer": "Ir a Configuración > Impresoras, seleccionar tipo de impresora y configurar conexión"
            },
            {
                "question": "¿Cómo crear usuarios en PaxaPOS?",
                "answer": "Acceder a Gestión > Usuarios, definir roles y permisos según el puesto de trabajo"
            },
            {
                "question": "¿Qué es el KDS?",
                "answer": "Kitchen Display System - pantalla digital para cocina que muestra pedidos en tiempo real"
            }
        ],
        "documentation": {
            "url": "https://paxapos.github.io/documentation",
            "userGuide": "https://paxapos.github.io/documentation/user-guide",
            "devDocs": "https://paxapos.github.io/documentation/dev"
        },
        "lastUpdated": new Date().toISOString(),
        "version": "2025.1",
        "aiIndexing": {
            "optimized": true,
            "searchable": true,
            "structured": true
        }
    };
}

// Función para generar structured data
function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://paxapos.com/#organization",
                "name": "PaxaPOS",
                "url": "https://paxapos.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://paxapos.github.io/documentation/static/favicon.png"
                },
                "sameAs": [
                    "https://github.com/paxapos"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://paxapos.github.io/documentation/#website",
                "url": "https://paxapos.github.io/documentation",
                "name": "PaxaPOS Documentation",
                "description": "Documentación oficial del sistema POS PaxaPOS",
                "publisher": {
                    "@id": "https://paxapos.com/#organization"
                },
                "inLanguage": "es-ES"
            },
            {
                "@type": "SoftwareApplication",
                "name": "PaxaPOS",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Cross-platform",
                "description": "Sistema POS completo para restaurantes y comercios"
            }
        ]
    };
}

// Función para generar manifest PWA
function generateManifest() {
    return {
        "name": "PaxaPOS Documentation",
        "short_name": "PaxaPOS Docs",
        "description": "Documentación oficial del sistema POS PaxaPOS",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#2563eb",
        "icons": [
            {
                "src": "/static/favicon.png",
                "sizes": "192x192",
                "type": "image/png"
            }
        ],
        "categories": ["business", "productivity", "documentation"]
    };
}

// Función para generar manual completo en texto plano para IA
function generateManualText() {
    return `MANUAL COMPLETO PAXAPOS - SISTEMA DE GESTIÓN DE RESTAURANTES
=================================================================
ÍNDICE
=================================================================

1. COMENZAMOS
   - Introducción
   - Iniciar sesión

2. PRIMEROS PASOS
   - Crear Usuarios
   - Tipos de Pago
   - Agregar Personal
   - Configuración de Impresoras
   - Menú

3. MÓDULOS PRINCIPALES
   - Salón
   - Kitchen Display System (KDS)
   - Contabilidad
   - Arqueos
   - Compras y Stock
   - ARCA y Facturación
   - Estadísticas

4. EXTRAS
   - Buchón Bot

=================================================================
1. COMENZAMOS
=================================================================

## INTRODUCCIÓN

PaxaPOS es un sistema completo de gestión para restaurantes y comercios que incluye:

### Características Principales:
- Sistema de Punto de Venta (POS)
- Kitchen Display System (KDS) para cocina
- Gestión completa de inventario y stock
- Contabilidad integrada
- Facturación electrónica AFIP
- Control de personal y roles
- Estadísticas y reportes avanzados
- Integración con métodos de pago digitales

### Módulos del Sistema:
1. **Salón**: Gestión de mesas, pedidos y facturación
2. **Cocina (KDS)**: Pantalla de pedidos para cocina
3. **Contabilidad**: Control financiero completo
4. **Stock**: Gestión de inventario y compras
5. **AFIP**: Facturación electrónica Argentina
6. **Personal**: Gestión de empleados y permisos
7. **Estadísticas**: Reportes y análisis de negocio

## INICIAR SESIÓN

Para acceder al sistema PaxaPOS:

1. **Abrir la aplicación** desde el navegador web
2. **Ingresar usuario y contraseña** proporcionados por el administrador
3. **Seleccionar rol** si tienes múltiples permisos
4. **Hacer clic en "Iniciar Sesión"**

### Tipos de Usuario:
- **Administrador**: Acceso completo al sistema
- **Encargado**: Gestión operativa y reportes
- **Mozo**: Tomar pedidos y cobrar
- **Cocina**: Ver y gestionar pedidos

=================================================================
2. PRIMEROS PASOS
=================================================================

## CREAR USUARIOS

Para crear nuevos usuarios en el sistema:

### Pasos para Crear Usuario:
1. **Acceder al módulo de gestión**
2. **Ir a "Agregar Personal"**
3. **Completar datos personales**:
   - Nombre completo
   - Documento de identidad
   - Teléfono de contacto
   - Email (opcional)
4. **Asignar rol y permisos**:
   - Administrador: Control total
   - Encargado: Gestión operativa
   - Mozo: Ventas y cobros
   - Cocina: Solo pedidos
5. **Crear contraseña segura**
6. **Guardar usuario**

### Permisos por Rol:
- **Admin**: Todas las funciones
- **Encargado**: Reportes, stock, personal
- **Mozo**: POS, cobros, clientes
- **Cocina**: KDS, pedidos, preparación

## TIPOS DE PAGO

PaxaPOS soporta múltiples métodos de pago:

### Métodos Disponibles:
1. **Efectivo**: Pago en cash
2. **Tarjeta de Crédito**: Visa, Mastercard, Amex
3. **Tarjeta de Débito**: Débito bancario
4. **Transferencia Bancaria**: CBU/Alias
5. **QR de Pagos**: Mercado Pago, etc.
6. **Cuenta Corriente**: Para clientes frecuentes

### Configuración de Pagos:
1. **Ir a configuración de métodos de pago**
2. **Activar métodos deseados**
3. **Configurar comisiones** (si aplica)
4. **Establecer límites** por método
5. **Guardar configuración**

## AGREGAR PERSONAL

Gestión completa de empleados:

### Proceso de Alta:
1. **Datos Personales**:
   - Nombre y apellido
   - DNI/Documento
   - Fecha de nacimiento
   - Dirección
   - Teléfono y email

2. **Datos Laborales**:
   - Fecha de ingreso
   - Puesto/Rol
   - Horarios de trabajo
   - Salario (opcional)

3. **Permisos de Sistema**:
   - Módulos accesibles
   - Nivel de permisos
   - Restricciones especiales

### Roles Predefinidos:
- **Mozo**: Tomar pedidos, cobrar
- **Cocina**: Ver pedidos, marcar listos
- **Encargado**: Supervisión general
- **Administrador**: Control total

## CONFIGURACIÓN DE IMPRESORAS

Setup de impresoras para tickets y cocina:

### Tipos de Impresora:
1. **Ticket/Fiscal**: Para facturas y tickets
2. **Cocina**: Para pedidos a cocina
3. **Bar**: Para bebidas y tragos

### Configuración:
1. **Conectar impresora** vía USB o Red
2. **Ir a Configuración > Impresoras**
3. **Agregar nueva impresora**:
   - Seleccionar tipo
   - Elegir puerto/IP
   - Probar conexión
4. **Configurar formato** de impresión
5. **Asignar a estaciones** correspondientes

### Troubleshooting:
- Verificar drivers instalados
- Comprobar conexión física
- Revisar configuración de red
- Reiniciar servicio de impresión

## MENÚ

Carga y gestión del menú de productos:

### Estructura del Menú:
- **Categorías**: Agrupación de productos
- **Productos**: Items individuales
- **Variantes**: Tamaños, opciones
- **Modificadores**: Extras, sin ingredientes

### Proceso de Carga:
1. **Crear categorías**:
   - Entradas, Principales, Postres, Bebidas
2. **Agregar productos**:
   - Nombre del producto
   - Descripción
   - Precio base
   - Tiempo de preparación
3. **Configurar opciones**:
   - Tamaños (chico, mediano, grande)
   - Modificadores (sin cebolla, extra queso)
4. **Asociar a impresoras**:
   - Cocina para comidas
   - Bar para bebidas
5. **Activar productos** para venta

=================================================================
3. MÓDULOS PRINCIPALES
=================================================================

## SALÓN

El módulo principal para atención al cliente:

### Funciones Principales:
1. **Gestión de Mesas**:
   - Abrir mesa
   - Tomar pedido
   - Agregar productos
   - Cerrar cuenta

2. **Proceso de Venta**:
   - Seleccionar mesa
   - Elegir productos del menú
   - Aplicar descuentos
   - Procesar pago
   - Imprimir ticket

3. **Estados de Mesa**:
   - Libre: Disponible
   - Ocupada: Con clientes
   - Reservada: Con reserva
   - Cerrada: Fuera de servicio

### Flujo de Trabajo:
1. **Cliente llega** → Asignar mesa
2. **Tomar pedido** → Seleccionar productos
3. **Enviar a cocina** → Automático al confirmar
4. **Servir comida** → Marcar servido
5. **Cobrar cuenta** → Procesar pago
6. **Liberar mesa** → Disponible para nuevo cliente

## KITCHEN DISPLAY SYSTEM (KDS)

Sistema de pantalla para cocina:

### Características:
- **Visualización de pedidos** en tiempo real
- **Organización por tiempo** de pedido
- **Estado de preparación** por producto
- **Tiempo estimado** de entrega

### Funcionalidades:
1. **Recepción automática** de pedidos del salón
2. **Organización por prioridad**:
   - Pedidos más antiguos primero
   - Código de colores por tiempo
3. **Control de preparación**:
   - Marcar productos en preparación
   - Indicar productos listos
   - Notificar al salón automáticamente

### Estados de Pedido:
- **Pendiente**: Recién llegado (blanco)
- **Preparando**: En proceso (amarillo)
- **Listo**: Para servir (verde)
- **Servido**: Entregado al cliente (gris)

## CONTABILIDAD

Control financiero integral:

### Funciones Principales:
1. **Registro de Ventas**:
   - Todas las transacciones automáticas
   - Clasificación por método de pago
   - Totales por período

2. **Control de Gastos**:
   - Registro manual de gastos
   - Categorización (compras, servicios, etc.)
   - Comprobantes digitales

3. **Reportes Financieros**:
   - Estado de resultados
   - Flujo de efectivo
   - Balance diario/mensual

### Informes Disponibles:
- **Ventas por día/mes/año**
- **Productos más vendidos**
- **Métodos de pago utilizados**
- **Gastos por categoría**
- **Rentabilidad por producto**

## ARQUEOS

Control de caja diario:

### Proceso de Arqueo:
1. **Inicio de turno**:
   - Registrar dinero inicial en caja
   - Anotar billetes y monedas

2. **Durante el turno**:
   - Registro automático de ventas
   - Control de gastos menores

3. **Cierre de turno**:
   - Contar dinero físico
   - Comparar con sistema
   - Registrar diferencias
   - Generar reporte

### Tipos de Arqueo:
- **Parcial**: Durante el turno
- **Total**: Al cerrar turno
- **Supervisor**: Validación gerencial

## COMPRAS Y STOCK

Gestión completa de inventario:

### Funciones de Stock:
1. **Control de Inventario**:
   - Stock actual por producto
   - Mínimos y máximos
   - Alertas de faltante

2. **Gestión de Compras**:
   - Órdenes de compra
   - Recepción de mercadería
   - Control de proveedores

3. **Costeo**:
   - Costo por producto
   - Rentabilidad
   - Valorización de stock

### Proceso de Compra:
1. **Detectar necesidad** (stock mínimo)
2. **Crear orden de compra**
3. **Enviar a proveedor**
4. **Recepcionar mercadería**
5. **Actualizar stock y costos**

## ARCA Y FACTURACIÓN

Facturación electrónica argentina:

### Configuración AFIP:
1. **Obtener certificado digital**
2. **Configurar CUIT y punto de venta**
3. **Autorizar aplicación** con AFIP
4. **Configurar tipos de comprobante**

### Tipos de Comprobante:
- **Factura A**: Para responsables inscriptos
- **Factura B**: Para consumidores finales
- **Factura C**: Para exentos
- **Nota de Crédito**: Devoluciones/descuentos
- **Nota de Débito**: Cargos adicionales

### Proceso de Facturación:
1. **Venta en el POS** → Datos del cliente
2. **Seleccionar tipo** de comprobante
3. **Validar con AFIP** → Automático
4. **Obtener CAE** → Código autorización
5. **Imprimir comprobante** → Con código QR

## ESTADÍSTICAS

Reportes y análisis de negocio:

### Reportes Disponibles:
1. **Ventas**:
   - Por día, semana, mes
   - Por producto/categoría
   - Por mozo/empleado
   - Por método de pago

2. **Productos**:
   - Más vendidos
   - Menos vendidos
   - Rentabilidad
   - Rotación de stock

3. **Clientes**:
   - Frecuencia de visita
   - Ticket promedio
   - Productos preferidos

4. **Operaciones**:
   - Tiempo promedio de atención
   - Eficiencia por turno
   - Ocupación de mesas

### Gráficos y Análisis:
- **Tendencias de venta** por período
- **Comparativas** mes/año anterior
- **Picos de demanda** por horario
- **Proyecciones** de venta

=================================================================
4. EXTRAS
=================================================================

## BUCHÓN BOT

Sistema de notificaciones automáticas:

### Funcionalidades:
1. **Alertas de Stock**:
   - Productos con stock mínimo
   - Vencimientos próximos
   - Faltantes críticos

2. **Notificaciones Operativas**:
   - Pedidos pendientes por mucho tiempo
   - Mesas sin atender
   - Problemas de sistema

3. **Reportes Automáticos**:
   - Resumen diario de ventas
   - Alertas de gastos elevados
   - Recordatorios de tareas

### Configuración:
- **Canales de notificación** (email, WhatsApp)
- **Frecuencia de alertas**
- **Umbrales de notificación**
- **Destinatarios por tipo de alerta**

=================================================================
SOPORTE Y CONTACTO
=================================================================

Para soporte técnico o consultas:
- Email: soporte@paxapos.com
- WhatsApp: +54 9 11 XXXX-XXXX
- Documentación: https://docs.paxapos.com

=================================================================
FIN DEL MANUAL PAXAPOS
=================================================================`;
}

export const GET: RequestHandler = async ({ url }) => {
    const endpoint = url.searchParams.get('type');
    
    switch (endpoint) {
        case 'sitemap':
            const sitemap = generateSitemap();
            return new Response(sitemap, {
                headers: {
                    'Content-Type': 'application/xml',
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'robots':
            const robots = generateRobots();
            return new Response(robots, {
                headers: {
                    'Content-Type': 'text/plain',
                    'Cache-Control': 'public, max-age=86400'
                }
            });
            
        case 'knowledge-base':
            return json(generateKnowledgeBase(), {
                headers: {
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'structured-data':
            return json(generateStructuredData(), {
                headers: {
                    'Cache-Control': 'public, max-age=3600'
                }
            });
            
        case 'manifest':
            return json(generateManifest(), {
                headers: {
                    'Cache-Control': 'public, max-age=86400'
                }
            });
            
        case 'manual-txt':
            const manualText = generateManualText();
            return new Response(manualText, {
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Cache-Control': 'public, max-age=3600',
                    'Content-Disposition': 'inline; filename="manual-paxapos.txt"'
                }
            });
            
        default:
            // Endpoint de información de todos los endpoints SEO disponibles
            return json({
                seoEndpoints: {
                    sitemap: '/seo?type=sitemap',
                    robots: '/seo?type=robots',
                    knowledgeBase: '/seo?type=knowledge-base',
                    structuredData: '/seo?type=structured-data',
                    manifest: '/seo?type=manifest',
                    manualTxt: '/seo?type=manual-txt'
                },
                description: 'Endpoints SEO centralizados para PaxaPOS Documentation',
                usage: 'Añade ?type=<endpoint> para acceder a cada tipo de contenido SEO',
                aiEndpoints: {
                    manualCompleto: '/seo?type=manual-txt - Manual completo en texto plano para IA'
                }
            });
    }
};

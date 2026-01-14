# Plataforma de Gestión Empresarial - Documentation

Sitio web de documentación oficial de nuestra solución integral de gestión, construido con SvelteKit y Tailwind CSS.

## Descripción

Este proyecto contiene la documentación completa del sistema de gestión, incluyendo:

- **API Reference**: Documentación de todas las APIs y endpoints
- **Manual de Usuario**: Guías paso a paso para usuarios finales
- **Guía de Administrador**: Configuración y administración del sistema
- **Guías de Integración**: Conexiones con servicios externos
- **SDKs**: Librerías y herramientas para desarrolladores
- **Troubleshooting**: Solución de problemas comunes

## Características

- ✅ Navegación responsive con menú móvil
- ✅ Búsqueda en tiempo real
- ✅ Diseño moderno con Tailwind CSS
- ✅ Estructura modular y escalable
- ✅ Optimizado para SEO

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
# Instalar dependencias (requiere Node.js 20+)
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Con host expuesto para acceso desde red
pnpm dev --host
```

El servidor estará disponible en `http://localhost:5173` (o el puerto disponible).

## Estructura del Proyecto

```txt
src/
├── routes/
│   ├── +layout.svelte          # Layout principal con navegación
│   ├── +page.svelte            # Página de inicio
│   ├── api/+page.svelte        # Documentación de API
│   ├── user-guide/+page.svelte # Manual de usuario
│   ├── admin-guide/+page.svelte # Guía de administrador
│   ├── integration/+page.svelte # Guías de integración
│   ├── sdk/+page.svelte        # SDKs y librerías
│   └── troubleshooting/+page.svelte # Solución de problemas
├── app.css                     # Estilos globales
└── app.html                    # Template HTML base
```

## Funcionalidades

### Búsqueda

- Búsqueda en tiempo real mientras escribes
- Filtrado por tipo de contenido (API, Usuario, Admin, etc.)
- Navegación directa a secciones específicas

### Navegación

- Menú principal responsive
- Navegación lateral en páginas de documentación
- Breadcrumbs en páginas secundarias
- Enlaces de ancla para secciones

### Responsive Design

- Optimizado para móviles, tablets y escritorio
- Menú hamburguesa en dispositivos móviles
- Búsqueda adaptativa

## Compilación

Para crear una versión de producción:

```bash
pnpm build
```

Esto generará los archivos estáticos en el directorio `build/`.

Para previsualizar la compilación de producción:

```bash
pnpm preview
```

## Tasks de VS Code

Se incluyen las siguientes tasks configuradas:

- **DEV Documentation Site**: Ejecuta el servidor de desarrollo
- Usa `Ctrl+Shift+P` → `Tasks: Run Task` para ejecutarlas

## Contribuir

1. Las páginas están en `src/routes/`
2. Cada página es un componente Svelte independiente
3. Se usa Tailwind CSS para estilos
4. La navegación se configura en `+layout.svelte`
5. Los contenidos de búsqueda en `searchableContent` del layout

## Tecnologías

- **SvelteKit**: Framework principal
- **Tailwind CSS**: Estilos y diseño
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **pnpm**: Package manager

## Despliegue

El sitio puede desplegarse en cualquier plataforma que soporte sitios estáticos:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simplemente ejecuta `pnpm build` y despliega el contenido del directorio `build/`.

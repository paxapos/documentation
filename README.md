# PaxaPOS Documentation

Documentación oficial para PaxaPOS - Sistema de Punto de Venta completo.

## Descripción

Este proyecto contiene la documentación completa para PaxaPOS, incluyendo:

- **Documentación de API**: Guías para desarrolladores que integran con nuestra API
- **Manual de Usuario**: Guía completa para usar el sistema POS
- **Guía de Administrador**: Configuración y gestión del sistema
- **SDK**: Documentación de librerías para diferentes lenguajes
- **Guía de Integración**: Ejemplos y casos de uso comunes
- **Resolución de Problemas**: Soluciones a problemas frecuentes

## Tecnologías

- **SvelteKit**: Framework principal para la documentación
- **Tailwind CSS**: Para estilos y diseño responsive
- **TypeScript**: Para tipado estático
- **Vite**: Build tool y servidor de desarrollo

## Instalación

### Prerrequisitos

- Node.js 20.12.2 o superior
- pnpm (recomendado) o npm

### Configuración

1. Instalar dependencias:
```bash
pnpm install
```

2. Ejecutar en modo desarrollo:
```bash
pnpm dev
```

3. Abrir en el navegador: `http://localhost:5173`

## Desarrollo

### Comandos Disponibles

- `pnpm dev`: Servidor de desarrollo
- `pnpm build`: Build para producción
- `pnpm preview`: Preview del build de producción
- `pnpm check`: Verificar tipado TypeScript
- `pnpm check:watch`: Verificar tipado en modo watch

### Estructura del Proyecto

```
src/
├── routes/
│   ├── +layout.svelte          # Layout principal con navegación
│   ├── +page.svelte            # Página de inicio
│   ├── api/                    # Documentación de API
│   ├── user-guide/             # Manual de usuario
│   ├── admin-guide/            # Guía de administrador
│   ├── sdk/                    # Documentación de SDK
│   ├── integration/            # Guía de integración
│   └── troubleshooting/        # Resolución de problemas
├── lib/                        # Componentes reutilizables
└── app.html                    # Template HTML base
```

### Agregar Nueva Documentación

1. Crear nueva ruta en `src/routes/`
2. Agregar el enlace en el layout principal (`+layout.svelte`)
3. Seguir la estructura y estilos existentes

## Despliegue

### Build de Producción

```bash
pnpm build
```

Los archivos generados estarán en la carpeta `build/`.

### Configuración del Servidor

El proyecto está configurado como una Single Page Application (SPA) usando el adaptador `@sveltejs/adapter-static`.

Para desplegar:

1. Subir los archivos de `build/` a tu servidor web
2. Configurar el servidor para servir `index.html` para todas las rutas no encontradas
3. Opcional: Configurar HTTPS y compresión gzip

### Variables de Entorno

El proyecto no requiere variables de entorno específicas para funcionar.

## Contribuir

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-documentacion`)
3. Commit de tus cambios (`git commit -am 'Agregar nueva documentación'`)
4. Push a la rama (`git push origin feature/nueva-documentacion`)
5. Crear un Pull Request

## Características

- ✅ Diseño responsive para móviles y desktop
- ✅ Navegación intuitiva con búsqueda
- ✅ Código de ejemplo para múltiples lenguajes
- ✅ Guías paso a paso con screenshots
- ✅ Documentación de API completa
- ✅ Ejemplos de integración listos para usar
- ✅ Resolución de problemas comunes

## Enlaces Útiles

- [PaxaPOS API](https://api.paxapos.com)
- [Panel de Administración](https://admin.paxapos.com)
- [Soporte Técnico](mailto:soporte@paxapos.com)

## Licencia

© 2024 PaxaPOS. Todos los derechos reservados.
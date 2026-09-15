# PaxaPOS Documentation — guía para agentes

Sitio SvelteKit 2 + Svelte 5 + Tailwind v4, **100 % prerendereado** con `@sveltejs/adapter-static` y servido por nginx desde `build/`. El contenido son archivos Markdown descubiertos en build time; agregar un `.md` crea automáticamente ruta, entrada de navegación, SEO, índice de búsqueda y archivo TXT para LLMs. No hay servidor Node en runtime.

## Pipeline de contenido

1. **Fuente:** `src/routes/user-guide/Manual-Usuario/<NN>-<Categoría>/<NN>-<Módulo>.md`. La carpeta define la categoría y su orden; el archivo define el orden dentro de la categoría. El primer `# H1` es el título.
2. **Descubrimiento (SvelteKit, solo server):** `src/lib/server/markdown.ts` hace `import.meta.glob(?raw)` de los `.md`, genera slug (`fileNameToSlug`), título, categoría y SEO. Se cachea una vez por build.
3. **Render:** `user-guide/[slug]/+page.server.ts` → `marked` → `fixImagePaths` → `wrapTablesForResponsive` → `addLinkIconsToHeaders`. El HTML va prerendereado; el cliente solo aplica `?highlight=` (búsqueda) y copia de enlaces.
4. **Navegación:** `user-guide/+layout.server.ts` entrega las categorías al sidebar; `user-guide/+page.server.ts` arma las tarjetas del índice con **íconos SVG inline** resueltos en build desde `@iconify-json/lucide` (`src/lib/server/icons.ts`). Nada se pide a servidores externos en runtime.
5. **Scripts de build (`pnpm generate`, orden obligatorio):**
    - `generate:ai` → `static/llms/*.txt`, `index.txt`, `files-register.json` (manifiesto slug → txt)
    - `generate:seo` → `sitemap.xml`, `robots.txt`, `llms.txt`, `urls.txt`, `content-index.json`, `ai-metadata.json` (lee el manifiesto anterior)
    - `generate:search` → `static/search-index.json` (búsqueda client-side, fetch lazy)
    Todo lo generado está en `.gitignore`. Lógica compartida en `scripts/shared-utils.mjs`; su equivalente TS es `src/lib/utils/contentUtils.ts` (mismo algoritmo de slug — si cambia uno, cambia el otro).

## Reglas

- **Nunca importar `$lib/server/*` desde componentes o loaders universales** (`+page.ts`): todo el Markdown debe resolverse en `+page.server.ts` / `+layout.server.ts`, si no el bundle cliente arrastra los `.md` y `marked`.
- **Íconos:** agregar el slug al mapa `moduleIcons` en `src/lib/server/icons.ts` con nombre `lucide:*`. Si el nombre no existe el build avisa `[icons] "..." no existe` y usa `lucide:file-text`.
- **Svelte 5 runes** (`$props`, `$state`, `$derived`, `$effect`). **Tailwind v4** configurado en `src/app.css` (sin `tailwind.config.js`). Estilos del Markdown en `.markdown-paxapos` (app.css).
- **Contacto/WhatsApp:** los `.md` usan `{{WHATSAPP_URL}}`, `{{WHATSAPP_NUMBER}}`, `{{WHATSAPP_DISPLAY}}`; el valor vive solo en `src/lib/config/contact.js`.
- **Anclas:** `<div id="..."></div>` después de un header genera el botón de copiar enlace.
- Rutas dinámicas se prerenderizan vía `entries()`; no listar rutas a mano en `svelte.config.js`.

## Comandos

```bash
pnpm dev          # generate + vite dev
pnpm dev:clean    # vite dev sin regenerar
pnpm build        # generate + vite build → build/
pnpm check        # svelte-check
pnpm test         # vitest (src/lib/utils/__tests__)
pnpm lint
```

Instalar dependencias **siempre desde la raíz del monorepo** con `pnpm install` (nunca `--filter`).

## Deploy

`Dockerfile` multi-stage (node:22 + pnpm → nginx). `nginx-runtime.conf`: `/` → 301 `/user-guide`, fallback `$uri.html`, cache 1 año para assets con hash y 1 h para índices generados, headers de seguridad y CSP `connect-src 'self'`. `docker-compose.yml` publica 3000 → 8080 detrás de Traefik. No requiere variables de entorno.

## Archivos clave

| Archivo | Rol |
| --- | --- |
| `src/lib/server/markdown.ts` | Descubrimiento de `.md`, slugs, categorías, SEO, mapeo a TXT LLM |
| `src/lib/server/icons.ts` | Mapa slug/categoría → ícono y resolución a SVG inline |
| `src/lib/utils/contentUtils.ts` | Utilidades puras (slug, título, highlight, copiar) — testeadas |
| `src/lib/types.ts` | Tipos compartidos server ↔ componentes |
| `src/routes/user-guide/+layout.server.ts` | Categorías para el sidebar |
| `src/routes/user-guide/+page.server.ts` | Índice del manual (tarjetas + íconos) |
| `src/routes/user-guide/[slug]/+page.server.ts` | Render de cada módulo + `entries()` |
| `src/lib/components/Navigation.svelte` | Barra superior con búsqueda (`search-index.json`) |
| `src/lib/components/SEOHead.svelte` | Meta tags, Open Graph, JSON-LD |
| `scripts/*.mjs` | Generadores de TXT/SEO/búsqueda |

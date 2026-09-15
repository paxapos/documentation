# PaxaPOS — Manual de Usuario

Sitio de documentación de PaxaPOS (`doc.paxapos.com`). SvelteKit 2 + Svelte 5 + Tailwind v4, prerendereado a HTML estático y servido por nginx.

El contenido son archivos Markdown: agregar un `.md` en `src/routes/user-guide/Manual-Usuario/` crea automáticamente la página, la entrada en el índice y el sidebar, el SEO, el índice de búsqueda y el archivo TXT para LLMs.

## Desarrollo

```bash
pnpm install        # desde la raíz del monorepo
pnpm dev            # regenera índices y levanta vite en http://localhost:5173
pnpm dev:clean      # solo vite dev (sin regenerar)
pnpm check          # svelte-check
pnpm test           # vitest
pnpm lint
```

## Agregar o editar contenido

1. Crear el archivo en la carpeta de su categoría: `Manual-Usuario/<NN>-<Categoria>/<NN>-<Nombre-Del-Modulo>.md`.
   El número ordena; el nombre (sin número) define la URL: `21-Salon-de-Ventas.md` → `/user-guide/salon-de-ventas`.
2. Empezar con un `# Título` (es el título de la página).
3. Para anclas compartibles, poner `<div id="mi-ancla"></div>` debajo del header.
4. Imágenes en `static/images/...` y referenciarlas como `images/...`.
5. Contacto: usar `{{WHATSAPP_URL}}`, `{{WHATSAPP_NUMBER}}`, `{{WHATSAPP_DISPLAY}}` (valor en `src/lib/config/contact.js`).
6. Ícono de la tarjeta (opcional): agregar el slug en `moduleIcons` de `src/lib/server/icons.ts` con un nombre de [Lucide](https://lucide.dev/icons/).

## Estructura

```
src/
├── lib/
│   ├── server/          # markdown.ts (descubrimiento de .md), icons.ts (SVG inline)
│   ├── utils/           # contentUtils.ts (slug, título, highlight) + tests
│   ├── components/      # Navigation (búsqueda), SEOHead
│   ├── config/          # contact.js (WhatsApp)
│   └── types.ts
├── routes/
│   ├── +layout.svelte / +page.server.ts        # redirect / → /user-guide
│   └── user-guide/
│       ├── +layout.server.ts                   # categorías (sidebar)
│       ├── +page.server.ts / +page.svelte      # índice con tarjetas
│       ├── [slug]/+page.server.ts / +page.svelte
│       └── Manual-Usuario/**/*.md              # CONTENIDO
scripts/
├── generate-ai-files.mjs     # static/llms/*.txt + files-register.json
├── generate-seo-files.mjs    # sitemap.xml, robots.txt, llms.txt, content-index.json…
├── generate-search-index.mjs # static/search-index.json
├── standardize-headers.mjs   # pnpm content:normalize (limpia BOM/espacios en .md)
└── shared-utils.mjs
static/                       # favicon, images/, drivers/ + generados (gitignored)
```

## Build y deploy

```bash
pnpm build          # generate + vite build → build/
pnpm preview
```

Docker (imagen nginx, puerto 8080):

```bash
docker build -t paxapos-docs .
docker run -p 8080:8080 paxapos-docs
```

`docker-compose.yml` publica el servicio detrás de Traefik. La imagen se construye en CI con `.github/workflows/docker-build.yml`. No requiere variables de entorno.

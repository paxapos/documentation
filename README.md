# PaxaPOS — Manual de Usuario

Sitio de documentación de PaxaPOS (`doc.paxapos.com`). SvelteKit 2 + Svelte 5 + Tailwind v4, prerendereado a HTML en build y servido por un server Node (`adapter-node` + `server.js`).

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
   Se quitan todos los prefijos numéricos: `151-06-FAQ-Cajero.md` → `/user-guide/faq-cajero`. Dos archivos con el mismo slug cortan el build.
   **Renombrar un archivo cambia su URL**: agregar el 301 desde la URL vieja en `MANUAL_REDIRECTS` de `server/http-rules.mjs` (y el caso en `tests/fixtures/http-expectations.ts`).
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
server.js                     # server de producción (node server.js)
server/http-rules.mjs         # reglas HTTP: redirects, headers, cache, /health, dotfiles
tests/                        # tests de las reglas y de integración de server.js
```

## Build y deploy

```bash
pnpm build          # generate + vite build → build/ (client/, prerendered/, handler.js)
pnpm start          # node server.js en http://localhost:3000 (PORT, HOST, ORIGIN)
pnpm test           # incluye tests/server.integration.test.ts, que levanta server.js contra build/
```

`server.js` aplica las reglas HTTP de `server/http-rules.mjs` (301 de URLs viejas, `/` → `/user-guide`,
`/x/` y `/x.html` → `/x`, headers de seguridad y CSP, `X-Robots-Tag`, cache, `/health`, 404 para
dotfiles) y delega el resto en el handler de SvelteKit: estáticos, páginas prerendereadas y la
página de error con 404 real.

Docker (imagen `node:22-alpine`, usuario no root, puerto 8080):

```bash
docker build -t paxapos-docs .
docker run -p 8080:8080 paxapos-docs
```

`docker-compose.yml` publica el servicio detrás de Traefik (`doc.paxapos.com`). La imagen se construye en CI con `.github/workflows/docker-build.yml`.

Variables de entorno (todas opcionales):

| Variable                | Default en la imagen      | Uso                                                                |
| ----------------------- | ------------------------- | ------------------------------------------------------------------ |
| `PORT` / `HOST`         | `8080` / `0.0.0.0`        | Dónde escucha `server.js`                                          |
| `ORIGIN`                | `https://doc.paxapos.com` | Origen público para SvelteKit (adapter-node)                       |
| `OPENAI_APPS_CHALLENGE` | —                         | Si existe, `/.well-known/openai-apps-challenge` responde ese valor |

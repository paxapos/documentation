# PaxaPOS Documentation - AI Coding Guidelines

## 🎯 Project Overview

This is a **SvelteKit 2.0 static documentation site** for PaxaPOS (a restaurant management system). The site is fully prerendered as static HTML and deployed via nginx. Content lives in markdown files, is auto-discovered at build time, and generates both human-readable docs and AI-optimized text files for LLM consumption.

**Key Architectural Decision:** This project uses a **folder-based content discovery system** rather than manual route definitions. Adding a new markdown file automatically creates routes, navigation entries, SEO metadata, and LLM-friendly text files.

## 🏗️ Architecture & Data Flow

### Content Processing Pipeline

1. **Source:** Markdown files in `src/routes/user-guide/Manual-Usuario/` organized by numbered folders (e.g., `10-Comenzamos/`, `20-Primeros Pasos/`)
2. **Discovery:** `src/lib/utils/markdownDetector.js` scans folders via Vite's `import.meta.glob()` and auto-generates:
   - Slugs (filename → URL-friendly format, removing number prefixes)
   - Titles (extracted from first `# heading` or filename)
   - Categories (based on parent folder structure)
   - SEO metadata (auto-generated from content)
3. **Build Scripts:** Two critical pre-build scripts in `scripts/`:
   - `generate-seo-files.mjs` → Creates `static/urls.txt`, `content-index.json`, `ai-metadata.json`
   - `generate-ai-files.mjs` → Generates cleaned `.txt` files in `static/llms/` for LLM consumption (strips markdown, HTML, fixes encoding issues)
4. **Rendering:** `[slug]` dynamic route loads markdown, converts to HTML via `marked`, applies brand replacement via `textReplacer.ts`

**Critical File:** `src/lib/utils/markdownDetector.js` - Handles all content discovery. Modify the `categorizeByFolder()` function when adding new folder categories.

### Prerendering & Static Generation

- **All routes are prerendered** (`export const prerender = true` in `src/routes/+layout.js`)
- `svelte.config.js` explicitly lists prerender entries (required for dynamic routes)
- Build output in `build/` is served by nginx (see `Dockerfile` multi-stage build)
- **No server-side rendering at runtime** - everything is static HTML

## 🎨 UI Patterns & Conventions

### Brand Replacement System

The site has a **global brand name replacement feature** allowing white-labeling:

- `src/lib/helpers/textReplacer.ts` exports `replacePaxaPOS()` and reactive stores
- Regex pattern `/\b(?:pax[aá][\s\-_]*pos|paxa[\s\-_]*pos|pax[aá]pos|paxapos|PaxaPos)\b/gi` matches all variations
- Use `use:autoReplaceBrand` Svelte action on DOM nodes for automatic replacement (see `+layout.svelte`)
- When rendering markdown: always run through `processGroupedContent()` before displaying

### Theme System

- **Dark mode:** Class-based (`class="dark"`) via `src/lib/stores/theme.ts`
- Auto-detects system preference with `prefers-color-scheme: dark` media query
- Initialized in `+layout.svelte` with `initThemeStore()` - watches for system theme changes
- CSS uses Tailwind's `dark:` variant (e.g., `bg-white dark:bg-gray-900`)

### Markdown Content Structure

Markdown files follow a consistent pattern:

```markdown
# 💳 Title with Emoji
<div id="anchor-id"></div>

> 🎯 **Purpose callout**

## 📋 Section Heading

### Step 1: Action
- Details
- More details

---

## 💡 Tips
```

**Important:** First `<div id="...">` becomes the anchor for deep linking. Headers auto-generate link icons via `addLinkIconsToHeaders()` in `[slug]/+page.svelte`.

## 🔧 Development Workflows

### Local Development

```bash
npm run dev           # Runs generate scripts + starts vite dev server
npm run dev:clean     # Skip generation, just vite dev (faster iteration)
npm run build         # Full production build with all generation
npm run preview       # Preview build output locally
```

**Build sequence matters:** SEO generation must run before AI generation (AI scripts depend on generated metadata).

### Adding New Documentation

1. Create markdown file in appropriate `Manual-Usuario/` subfolder (e.g., `30-Módulos Principales/38-new-feature.md`)
2. Use numbered prefix for ordering within folder (38 comes after 37)
3. Add first-level heading with emoji: `# 🚀 New Feature`
4. No code changes needed - next build auto-discovers and generates routes
5. **Verify** `svelte.config.js` doesn't need manual prerender entry (usually only for LLM API routes)

### Working with Styles

- **Global styles:** `src/app.css` (imported in `+layout.svelte`)
- **Component styles:** Scoped `<style>` blocks in `.svelte` files
- **Tailwind:** Uses Tailwind v4 via `@tailwindcss/vite` plugin - NO `postcss.config.js` needed
- Special class `.markdown-content` for styled markdown output (defined in `+layout.svelte`)

## 🤖 LLM/AI Integration Specifics

### AI-Optimized Text Generation

The `scripts/generate-ai-files.mjs` script performs aggressive cleaning:

- Removes ALL HTML tags and markdown syntax (links, bold, code blocks)
- Fixes UTF-8 encoding issues (`Ã¡` → `á`, etc.) - see `fixProblemCharacters()`
- Normalizes whitespace (max 2 consecutive newlines)
- Strips emojis from titles
- Outputs plain text optimized for token efficiency

**Output:** `static/llms/{slug}.txt` + `static/llms/index.txt` (full concatenated content)

### ChatBot Integration

- `src/lib/components/ChatBotSimple.svelte` loads markdown content dynamically
- FAQ-based fallback when search fails
- Uses `prepareForExport()` for brand replacement before displaying
- Converts module IDs to slugs via `getSlugFromId()` for proper URL generation

## 📦 Dependencies & Tools

### Core Stack

- **SvelteKit 2.16** with `@sveltejs/adapter-static` (static site generation)
- **Svelte 5** (uses new `$state()`, `$effect()` runes - NOT Svelte 3/4 syntax)
- **Vite 6.2** as build tool
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **marked 15.0** for markdown → HTML conversion (NOT mdsvex for routes)

### Build Tooling

- **Node 20+ required** (uses ES modules, `import.meta.glob`)
- **pnpm** preferred (though npm works)
- Multi-stage Docker build: Node builder → nginx production image
- Nginx serves from `build/` directory on port 8080

## ⚠️ Common Pitfalls

1. **Don't manually add routes** - The system auto-discovers markdown files. Adding routes in `src/routes/` bypasses content generation.

2. **Slug generation rules:** 
   - Removes number prefix (`22-Tipos-De-Pago.md` → `tipos-de-pago`)
   - Lowercases and strips accents
   - Spaces/underscores → hyphens
   - Study `fileNameToSlug()` in `markdownDetector.js` before renaming files

3. **Prerender entries:** Dynamic routes like `[slug]` auto-generate via `entries()` function - DON'T manually list them in `svelte.config.js` unless they're API endpoints.

4. **Markdown rendering order:**
   - Load markdown → Convert via `marked()` → Apply brand replacement → Fix image paths → Highlight search terms → Add header icons
   - See `$effect()` in `[slug]/+page.svelte` for full pipeline

5. **Build script execution:** Always run `npm run dev` or `npm run build` (includes generation scripts). Running `vite dev` directly skips content generation.

6. **Svelte 5 syntax:** This uses runes (`$state`, `$effect`, `$props`) not stores for local state. Only use stores for global state (theme, brand name).

## 🔍 Key Files Reference

| File | Purpose |
|------|---------|
| `src/lib/utils/markdownDetector.js` | Content discovery, slug generation, SEO metadata |
| `scripts/generate-ai-files.mjs` | Creates LLM-optimized `.txt` files |
| `scripts/generate-seo-files.mjs` | Generates sitemap, content index, metadata |
| `src/routes/user-guide/[slug]/+page.js` | Loads markdown content dynamically |
| `src/routes/user-guide/[slug]/+page.server.js` | Generates static routes via `entries()` |
| `src/lib/helpers/textReplacer.ts` | Brand name replacement system |
| `svelte.config.js` | Adapter config, prerender settings |

## 🚀 Deployment Notes

- Production builds to `build/` as fully static site
- Nginx configuration in `nginx.conf` (health check on `/health`, SPA fallback)
- Docker Compose setup in `docker-compose.yml` exposes port 3000 → 8080
- No environment variables needed (all content baked into build)
- Custom domain via `CNAME` file (docs.paxapos.com)

---

**When in doubt:** Check `markdownDetector.js` for content logic, `[slug]/+page.svelte` for rendering pipeline, and build scripts for generation behavior.

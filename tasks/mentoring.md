# Mentoring: Refactoring Documentation Package

## Decisiones técnicas y por qué

### 1. Slug canónico (NFD Normalize)

**Problema:** Existían 5+ implementaciones distintas de slug ("Familia A" con replace manual de acentos y "Familia B" con NFD normalize). Esto causaba que URLs como `/api/llm/salon` y `/user-guide/salon` usaran algoritmos diferentes.

**Solución:** Se adoptó Familia B universalmente:
```ts
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
```

**Por qué NFD:** Unicode Normalization Form Decomposition separa "é" en "e" + combining accent, y luego el regex remueve los diacríticos. Es estándar, predecible y cubre todos los idiomas, no solo español.

**Single source:** `contentUtils.ts` (cliente/SvelteKit) y `shared-utils.mjs` (Node scripts).

---

### 2. sub_filter vs sed en Docker

**Problema:** `docker-entrypoint.sh` tenía comandos `sed` para reemplazar `__BRAND_NAME__` pero `config.js` usaba `{{BRAND_NAME}}`. Los sed nunca matcheaban.

**Solución:** Se eliminó el sed muerto. El reemplazo real lo hace Nginx `sub_filter` en `nginx-runtime.conf`:
```nginx
sub_filter '{{BRAND_NAME}}' $brand_name;
```

**Ventaja:** sub_filter reemplaza en cada request, no solo al arrancar el container. Permite la misma imagen Docker para múltiples tenants.

---

### 3. entries() para prerender dinámico

**Problema:** `svelte.config.js` tenía 22+ entradas manuales de prerender para `/api/llm/*`. Cada archivo nuevo requería editar la config.

**Solución:** Cada `+server.ts` exporta `entries()` que lee `files-register.json`:
```ts
export function entries() {
  return Object.keys(slugMap).map(slug => ({ slug }));
}
```

Y `svelte.config.js` solo tiene `entries: ['*']`.

**Benificio:** Cero mantenimiento. SvelteKit descubre las rutas automáticamente.

---

### 4. ChatBot: fetch('/search-index.json') vs import.meta.glob

**Problema:** `import.meta.glob` con `?raw` importaba todos los MD en build time, duplicando contenido en el bundle y haciendo el chatbot dependiente de la estructura de archivos.

**Solución:** Lazy fetch de `search-index.json` (ya generado por `generate-search-index.mjs`) cuando el chatbot se abre por primera vez:
```ts
async function ensureLoaded() {
  if (initialized) return;
  const response = await fetch('/search-index.json');
  // ...
}
```

**Ventaja:** Bundle más liviano, datos siempre consistentes con lo que genera el build pipeline.

---

### 5. fixProblemCharacters() era dead code

**Verificación:** Se corrió `file --mime-encoding` sobre los 23 archivos .md. Todos son UTF-8 limpios. La función que reemplazaba "Ã¡" → "á" nunca tenía nada que reemplazar.

**Lección:** Antes de mantener código defensivo, verificar si el problema realmente existe. En este caso el encoding era correcto desde el origen.

---

### 6. Nginx: merge de configs

**Problema:** Existían `nginx.conf` y `nginx-runtime.conf` con configuraciones parcialmente duplicadas. Solo `nginx-runtime.conf` se usaba en Docker.

**Solución:** Se mergió la configuración de seguridad (CSP, HSTS, Permissions-Policy, gzip, etc.) en `nginx-runtime.conf`. Se renombró `nginx.conf` → `nginx.conf.example`.

---

### 7. Svelte 5 migration patterns

| Svelte 4 | Svelte 5 |
|-----------|----------|
| `let x = 0` (reactivo) | `let x = $state(0)` |
| `on:click={fn}` | `onclick={fn}` |
| `on:input={fn}` | `oninput={fn}` |
| `onMount(() => {})` | `$effect(() => {})` o init explícito |
| `export let prop` | `let { prop } = $props()` |
| `<slot />` | `{@render children?.()}` |

---

## Archivos modificados (resumen)

| Archivo | Cambio principal |
|---------|-----------------|
| `tsconfig.json` | Agregado `"module": "ESNext"` |
| `docker-entrypoint.sh` | Eliminado sed muerto |
| `scripts/shared-utils.mjs` | **NUEVO** - Hub de utilidades compartidas |
| `scripts/generate-ai-files.mjs` | Reescrito como pipeline |
| `scripts/generate-search-index.mjs` | Refactored con shared-utils |
| `scripts/generate-seo-files.mjs` | Refactored con shared-utils |
| `src/routes/api/llm/[slug]/+server.ts` | Reescrito con entries() dinámico |
| `svelte.config.js` | Eliminadas 22+ entradas manuales |
| `src/lib/utils/slugMapping.js` | **ELIMINADO** |
| `src/lib/utils/txtDetector.js` | **ELIMINADO** |
| `src/lib/utils/markdownDetector.ts` | Migrado de .js a .ts con tipos |
| `nginx-runtime.conf` | Merge de seguridad |
| `nginx.conf` → `nginx.conf.example` | Renombrado |
| `Dockerfile` | Eliminado curl, healthcheck con wget |
| `src/routes/seo/+server.ts` | Sitemap lastmod real |
| `ChatBotSimple.svelte` | $state(), fetch search-index, onclick |
| `Navigation.svelte` | $state(), oninput/onclick |
| `user-guide/+layout.svelte` | Snippet typing |
| `vite.config.ts` | Agregada config de vitest |
| `contentUtils.test.ts` | **NUEVO** - 20 tests |

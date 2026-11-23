# Multi-stage build
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

# El paquete se buildea aislado del monorepo: no hay lockfile propio.
COPY package.json ./
RUN pnpm install --no-frozen-lockfile

# La imagen no copia .git: las fechas de los .md llegan en .content-dates.json (paso de CI).
COPY . .
RUN pnpm run build

# Solo dependencias de producción, con las mismas versiones que resolvió el build.
FROM node:22-alpine AS deps

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile --ignore-scripts

# Etapa final: un solo proceso Node (server.js + handler de SvelteKit)
FROM node:22-alpine

LABEL maintainer="PaxaPOS Team"
LABEL version="4.0.0"
LABEL description="Manual de usuario PaxaPOS (SvelteKit prerendereado servido por Node)"

# TZ sin el paquete tzdata: Node trae las zonas horarias en su ICU.
ENV TZ=America/Argentina/Buenos_Aires \
    NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=8080 \
    ORIGIN=https://doc.paxapos.com

WORKDIR /app

COPY package.json server.js ./
# server/: reglas HTTP, MCP y el índice del MCP (mcp-index.json) que generó `pnpm build`.
COPY --from=builder /app/server ./server
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

USER node

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s CMD wget --quiet --tries=1 --spider "http://127.0.0.1:${PORT}/health" || exit 1

CMD ["node", "server.js"]

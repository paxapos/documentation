# Multi-stage build
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

# El paquete se buildea aislado del monorepo: no hay lockfile propio.
COPY package.json ./
RUN pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

# Etapa final con nginx
FROM nginx:1.27-alpine3.20

LABEL maintainer="PaxaPOS Team"
LABEL version="3.0.0"
LABEL description="Manual de usuario PaxaPOS (sitio estático prerendereado)"

ENV TZ=America/Argentina/Buenos_Aires

RUN apk update && apk upgrade && apk add --no-cache tzdata
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx-runtime.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s CMD wget --quiet --tries=1 --spider http://localhost:8080/health || exit 1

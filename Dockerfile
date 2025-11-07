# Multi-stage build
FROM node:20-alpine AS builder

WORKDIR /app

# Actualizar npm y verificar instalación
RUN npm install -g npm@latest patch-package && npm --version

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar codigo fuente
COPY . .

# Generar config.js con placeholders para Docker
RUN DOCKER_BUILD=true node scripts/generate-config.mjs

# Build generico (sin variables de entorno)
RUN npm run build

# Etapa final con nginx
FROM nginx:1.27-alpine3.20

LABEL maintainer="PaxaPOS Team"
LABEL version="2.3.0"
LABEL description="Imagen generica de documentacion - Requiere variables de entorno"

# NO definir valores por defecto - DEBEN venir del docker-compose
# Esto asegura que cada deploy tenga su configuracion explicita
ENV BRAND_NAME=""
ENV SYSTEM_URL=""
ENV COMPANY_NAME=""
ENV TZ=America/Argentina/Buenos_Aires

RUN apk update && apk upgrade && apk add --no-cache curl tzdata
RUN rm -rf /usr/share/nginx/html/*

# Copiar build
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar configuracion de nginx con templates
COPY nginx-runtime.conf /etc/nginx/templates/default.conf.template

# Copiar script de entrada
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:8080/health || exit 1

ENTRYPOINT ["/docker-entrypoint.sh"]
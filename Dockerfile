# ==========================================
# 🐳 DOCKERFILE PARA DOCUMENTACIÓN PAXAPOS
# ==========================================
# Multi-stage build optimizado para SvelteKit + Nginx

# ==========================================
# STAGE 1: BUILD
# ==========================================
FROM node:20-alpine AS builder

# Información del contenedor
LABEL maintainer="PaxaPOS Team <info@paxapos.com>"
LABEL description="Documentación oficial de PaxaPOS - Sistema de gestión para restaurantes"
LABEL version="1.0.0"

# Instalar dependencias del sistema
RUN apk add --no-cache \
    git \
    python3 \
    make \
    g++

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración primero (para aprovechar cache de Docker)
COPY package*.json ./
COPY svelte.config.js ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY eslint.config.js ./

# Instalar dependencias
RUN npm ci --ignore-scripts

# Copiar el resto del código fuente
COPY . .

# Ejecutar scripts de preparación y build
RUN npm run prepare && \
    npm run generate:seo && \
    npm run generate:ai && \
    npm run build

# ==========================================
# STAGE 2: PRODUCTION
# ==========================================
FROM nginx:1.25-alpine AS production

# Instalar herramientas adicionales
RUN apk add --no-cache \
    curl \
    tzdata \
    tini

# Configurar zona horaria para Argentina
ENV TZ=America/Argentina/Buenos_Aires
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Limpiar archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/* && \
    rm /etc/nginx/conf.d/default.conf

# Copiar archivos construidos desde el stage de build
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear usuario no-privilegiado para seguridad
RUN addgroup -g 1001 -S paxapos && \
    adduser -S paxapos -u 1001 -G paxapos

# Configurar permisos
RUN chown -R paxapos:paxapos /usr/share/nginx/html && \
    chown -R paxapos:paxapos /var/cache/nginx && \
    chown -R paxapos:paxapos /var/log/nginx && \
    chown -R paxapos:paxapos /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown paxapos:paxapos /var/run/nginx.pid

# Configurar nginx para ejecutar como usuario no-root
RUN sed -i 's/user nginx/user paxapos/' /etc/nginx/nginx.conf

# Exponer puerto
EXPOSE 8080

# Healthcheck para monitoreo
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Cambiar a usuario no-privilegiado
USER paxapos

# Usar tini como init system para manejo correcto de señales
ENTRYPOINT ["/sbin/tini", "--"]

# Comando principal
CMD ["nginx", "-g", "daemon off;"]

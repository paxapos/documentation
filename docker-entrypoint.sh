#!/bin/sh
set -e

# Script de entrada para configurar variables de entorno en tiempo de ejecución
# Este script reemplaza los placeholders en config.js con las variables de entorno reales

CONFIG_FILE="/usr/share/nginx/html/config.js"

echo "🚀 Iniciando configuración de runtime..."

# Verificar que las variables requeridas estén definidas
if [ -z "$BRAND_NAME" ] || [ -z "$SYSTEM_URL" ] || [ -z "$COMPANY_NAME" ]; then
    echo "❌ ERROR: Variables de entorno requeridas no están definidas"
    echo "   BRAND_NAME: ${BRAND_NAME:-'NO DEFINIDO'}"
    echo "   SYSTEM_URL: ${SYSTEM_URL:-'NO DEFINIDO'}"
    echo "   COMPANY_NAME: ${COMPANY_NAME:-'NO DEFINIDO'}"
    echo ""
    echo "Por favor, define estas variables en tu docker-compose.yml"
    exit 1
fi

# Reemplazar placeholders en config.js
if [ -f "$CONFIG_FILE" ]; then
    echo "📝 Configurando $CONFIG_FILE con variables de entorno..."
    
    # Usar sed para reemplazar los placeholders
    sed -i "s|__BRAND_NAME__|${BRAND_NAME}|g" "$CONFIG_FILE"
    sed -i "s|__SYSTEM_URL__|${SYSTEM_URL}|g" "$CONFIG_FILE"
    sed -i "s|__COMPANY_NAME__|${COMPANY_NAME}|g" "$CONFIG_FILE"
    
    echo "✅ Configuración completada:"
    echo "   BRAND_NAME: $BRAND_NAME"
    echo "   SYSTEM_URL: $SYSTEM_URL"
    echo "   COMPANY_NAME: $COMPANY_NAME"
else
    echo "⚠️  Advertencia: $CONFIG_FILE no encontrado"
fi

# Iniciar nginx
echo "🌐 Iniciando nginx..."
exec nginx -g 'daemon off;'

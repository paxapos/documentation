#!/bin/sh
set -e

# Verificar que las variables requeridas esten definidas
if [ -z "$BRAND_NAME" ] || [ -z "$SYSTEM_URL" ] || [ -z "$COMPANY_NAME" ]; then
    echo "ERROR: Variables de entorno requeridas no definidas"
    echo "Se requieren: BRAND_NAME, SYSTEM_URL, COMPANY_NAME"
    exit 1
fi

echo "=== Configuracion de la aplicacion ==="
echo "BRAND_NAME: $BRAND_NAME"
echo "SYSTEM_URL: $SYSTEM_URL"
echo "COMPANY_NAME: $COMPANY_NAME"
echo "TZ: $TZ"
echo "===================================="

# Reemplazar variables en archivos JavaScript
find /usr/share/nginx/html -type f -name "*.js" -exec sed -i \
    -e "s|__BRAND_NAME__|$BRAND_NAME|g" \
    -e "s|__SYSTEM_URL__|$SYSTEM_URL|g" \
    -e "s|__COMPANY_NAME__|$COMPANY_NAME|g" \
    {} +

# Reemplazar variables en archivos HTML
find /usr/share/nginx/html -type f -name "*.html" -exec sed -i \
    -e "s|__BRAND_NAME__|$BRAND_NAME|g" \
    -e "s|__SYSTEM_URL__|$SYSTEM_URL|g" \
    -e "s|__COMPANY_NAME__|$COMPANY_NAME|g" \
    {} +

# Reemplazar variables en config.js (runtime configuration)
if [ -f /usr/share/nginx/html/config.js ]; then
    sed -i \
        -e "s|{{BRAND_NAME}}|$BRAND_NAME|g" \
        -e "s|{{SYSTEM_URL}}|$SYSTEM_URL|g" \
        -e "s|{{COMPANY_NAME}}|$COMPANY_NAME|g" \
        /usr/share/nginx/html/config.js
    echo "✅ config.js actualizado con variables de entorno"
fi

echo "Variables de entorno aplicadas correctamente"

# Iniciar nginx
exec nginx -g 'daemon off;'

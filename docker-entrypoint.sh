#!/bin/sh
set -e

# Validar que las variables requeridas estén definidas (COMPANY_NAME es opcional)
if [ -z "$BRAND_NAME" ] || [ -z "$SYSTEM_URL" ]; then
    echo "ERROR: Variables de entorno requeridas no definidas"
    echo "   BRAND_NAME: ${BRAND_NAME:-'NO DEFINIDO'}"
    echo "   SYSTEM_URL: ${SYSTEM_URL:-'NO DEFINIDO'}"
    echo ""
    echo "Defina estas variables en docker-compose.yml"
    exit 1
fi

# COMPANY_NAME es opcional: si no se define, se usa BRAND_NAME como fallback
COMPANY_NAME="${COMPANY_NAME:-$BRAND_NAME}"

echo "Configuracion: BRAND_NAME=$BRAND_NAME SYSTEM_URL=$SYSTEM_URL COMPANY_NAME=$COMPANY_NAME"

# Procesar templates de nginx: reemplaza ${BRAND_NAME}, ${SYSTEM_URL}, ${COMPANY_NAME}
# en los archivos *.template de /etc/nginx/templates/ y los escribe en /etc/nginx/conf.d/
# Esto es necesario porque este entrypoint reemplaza al oficial de nginx, que es quien
# normalmente ejecuta el envsubst sobre los templates.
for template in /etc/nginx/templates/*.template; do
    [ -f "$template" ] || continue
    output="/etc/nginx/conf.d/$(basename "$template" .template)"
    # Especificar variables explícitamente para no corromper variables internas de nginx ($uri, $host, etc.)
    envsubst '${BRAND_NAME} ${SYSTEM_URL} ${COMPANY_NAME}' < "$template" > "$output"
    echo "Template procesado: $(basename "$template") -> $(basename "$output")"
done

exec nginx -g 'daemon off;'

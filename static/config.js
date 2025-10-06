// Script para inyectar variables de entorno en runtime
// Nginx reemplazara estos placeholders con sub_filter
window.__APP_CONFIG__ = {
    BRAND_NAME: '{{BRAND_NAME}}',
    SYSTEM_URL: '{{SYSTEM_URL}}',
    COMPANY_NAME: '{{COMPANY_NAME}}'
};
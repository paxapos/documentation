#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Determinar si estamos en GitHub Pages o Docker
// GITHUB_ACTIONS tiene prioridad sobre DOCKER_BUILD
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isDockerBuild = !isGitHubPages && process.env.DOCKER_BUILD === 'true';

// Obtener variables de entorno (SIN valores por defecto)
const BRAND_NAME = process.env.PUBLIC_BRAND_NAME || process.env.BRAND_NAME || '';
const SYSTEM_URL = process.env.PUBLIC_SYSTEM_URL || process.env.SYSTEM_URL || '';
const COMPANY_NAME = process.env.PUBLIC_COMPANY_NAME || process.env.COMPANY_NAME || '';

// Validar que las variables estén definidas (solo para GitHub Pages)
if (isGitHubPages) {
    const missingVars = [];
    if (!BRAND_NAME) missingVars.push('PUBLIC_BRAND_NAME');
    if (!SYSTEM_URL) missingVars.push('PUBLIC_SYSTEM_URL');
    if (!COMPANY_NAME) missingVars.push('PUBLIC_COMPANY_NAME');
    
    if (missingVars.length > 0) {
        console.error('❌ ERROR: Variables de entorno requeridas no definidas:');
        missingVars.forEach(v => console.error(`   - ${v}`));
        console.error('\n📋 Para configurarlas en GitHub:');
        console.error('   Settings → Secrets and variables → Actions → Variables');
        process.exit(1);
    }
}

console.log('🔧 Generando config.js...');
console.log(`📦 Entorno: ${isGitHubPages ? 'GitHub Pages' : isDockerBuild ? 'Docker Build' : 'Local (sin variables)'}`);

if (isGitHubPages) {
    console.log(`🏷️  BRAND_NAME: ${BRAND_NAME}`);
    console.log(`🌐 SYSTEM_URL: ${SYSTEM_URL}`);
    console.log(`🏢 COMPANY_NAME: ${COMPANY_NAME}`);
} else {
    console.log('📝 Generando con placeholders para runtime');
}

let configContent;

if (isGitHubPages) {
    // Para GitHub Pages: valores reales en tiempo de build
    configContent = `// Configuración para GitHub Pages - Generado en build time
window.__APP_CONFIG__ = {
    BRAND_NAME: '${BRAND_NAME}',
    SYSTEM_URL: '${SYSTEM_URL}',
    COMPANY_NAME: '${COMPANY_NAME}'
};
`;
} else {
    // Para Docker: mantener placeholders para runtime replacement
    configContent = `// Script para inyectar variables de entorno en runtime
// Nginx reemplazara estos placeholders con sub_filter
window.__APP_CONFIG__ = {
    BRAND_NAME: '{{BRAND_NAME}}',
    SYSTEM_URL: '{{SYSTEM_URL}}',
    COMPANY_NAME: '{{COMPANY_NAME}}'
};
`;
}

// Escribir en static/config.js (se copiará a build/)
const outputPath = join(__dirname, '..', 'static', 'config.js');
writeFileSync(outputPath, configContent, 'utf-8');

console.log(`✅ config.js generado en: ${outputPath}`);
console.log(`📝 Tipo: ${isGitHubPages ? 'Valores reales (GitHub Pages)' : 'Placeholders (Docker)'}`);

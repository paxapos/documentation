#!/usr/bin/env node

/**
 * Script para generar archivos AI
 * Este script se ejecuta antes del build para preparar archivos necesarios
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🤖 Generando archivos AI...');

// Crear directorio de salida si no existe
const outputDir = join(__dirname, '..', 'src', 'lib', 'generated');
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

// Generar archivo de configuración AI básico
const aiConfig = {
    version: "1.0.0",
    generated: new Date().toISOString(),
    features: {
        documentation: true,
        search: true,
        navigation: true
    }
};

writeFileSync(
    join(outputDir, 'ai-config.json'),
    JSON.stringify(aiConfig, null, 2)
);

console.log('✅ Archivos AI generados correctamente');
console.log(`📁 Archivos creados en: ${outputDir}`);

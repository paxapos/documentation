#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🤖 Generando archivos TXT para LLMs/IA...');

// Función recursiva para buscar archivos .md
function findMarkdownFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            findMarkdownFiles(fullPath, files);
        } else if (item.endsWith('.md')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Función para limpiar markdown y convertir a texto plano
function cleanMarkdownToPlainText(content) {
    return content
        // Remover front matter YAML
        .replace(/^---[\s\S]*?---\n/m, '')
        // Remover headers (mantener el texto)
        .replace(/^#{1,6}\s+(.+)$/gm, '$1')
        // Remover bold/italic (mantener texto)
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/__(.*?)__/g, '$1')
        .replace(/_(.*?)_/g, '$1')
        // Remover links (mantener texto)
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Remover imágenes
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, 'Imagen: $1')
        // Remover code blocks
        .replace(/```[\s\S]*?```/g, '[Código]')
        // Remover inline code (mantener contenido)
        .replace(/`([^`]+)`/g, '$1')
        // Remover tablas (simplificar)
        .replace(/\|.*?\|/g, '')
        .replace(/\+[-=]+\+/g, '')
        // Remover listas (mantener contenido)
        .replace(/^[\s]*[-*+]\s+/gm, '• ')
        .replace(/^[\s]*\d+\.\s+/gm, '')
        // Limpiar espacios extra
        .replace(/\n{3,}/g, '\n\n')
        .replace(/^\s+/gm, '')
        .replace(/\s+$/gm, '')
        .trim();
}

// Función para generar nombre de archivo limpio
function generateCleanFileName(filePath) {
    const fileName = path.basename(filePath, '.md');
    return fileName
        .toLowerCase()
        .replace(/[\s\-_]+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^\-|\-$/g, '');
}

async function generateTxtFiles() {
    try {
        // Buscar todos los archivos .md en el manual usando función nativa
        const manualDir = path.resolve(__dirname, '../src/routes/user-guide/Manual-Usuario');
        
        if (!fs.existsSync(manualDir)) {
            console.log('❌ Directorio de manual no encontrado:', manualDir);
            return;
        }
        
        const markdownFiles = findMarkdownFiles(manualDir);

        if (markdownFiles.length === 0) {
            console.log('❌ No se encontraron archivos markdown');
            return;
        }

        // Crear directorio de salida
        const outputDir = path.resolve(__dirname, '../static/llms');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
            console.log('📁 Directorio creado:', outputDir);
        }

        // Limpiar archivos anteriores
        const existingFiles = fs.readdirSync(outputDir).filter(file => file.endsWith('.txt'));
        existingFiles.forEach(file => {
            fs.unlinkSync(path.join(outputDir, file));
        });
        console.log('🧹 Archivos anteriores eliminados');

        let processedCount = 0;
        const processedFiles = [];

        // Procesar cada archivo markdown
        for (const fullPath of markdownFiles) {
            if (!fs.existsSync(fullPath)) {
                console.log(`⚠️ Archivo no encontrado: ${fullPath}`);
                continue;
            }

            const content = fs.readFileSync(fullPath, 'utf8');
            const cleanContent = cleanMarkdownToPlainText(content);
            
            // Generar nombre de archivo limpio
            const relativePath = path.relative(manualDir, fullPath);
            const cleanFileName = generateCleanFileName(relativePath);
            const txtFileName = `${cleanFileName}.txt`;
            const txtPath = path.join(outputDir, txtFileName);

            // Agregar metadatos al archivo
            const header = `# PaxaPOS - Manual de Usuario
# Módulo: ${path.basename(fullPath, '.md')}
# Generado automáticamente para LLMs/IA
# URL: https://paxapos.github.io/documentation/llms/${txtFileName}

`;

            const finalContent = header + cleanContent;

            // Escribir archivo
            fs.writeFileSync(txtPath, finalContent, 'utf8');
            
            processedFiles.push({
                original: relativePath,
                output: txtFileName,
                size: finalContent.length
            });
            
            processedCount++;
        }

        // Generar archivo index con lista de todos los módulos
        const indexContent = `# PaxaPOS - Índice de Módulos para LLMs/IA

Este directorio contiene todos los módulos de documentación de PaxaPOS convertidos a texto plano para facilitar el procesamiento por parte de LLMs e IA.

## Módulos disponibles:

${processedFiles.map(file => 
    `- ${file.output} (${Math.round(file.size/1024)}KB) - Basado en: ${file.original}`
).join('\n')}

## Información:
- Total de módulos: ${processedCount}
- Generado: ${new Date().toLocaleString('es-AR')}
- Base URL: https://paxapos.github.io/documentation/llms/

## Uso para LLMs:
Estos archivos están optimizados para ser procesados por sistemas de IA y permiten entrenar o consultar información específica sobre el sistema PaxaPOS.
`;

        fs.writeFileSync(path.join(outputDir, 'index.txt'), indexContent, 'utf8');

        console.log('✅ Generación completada:');
        console.log(`📊 ${processedCount} archivos procesados`);
        console.log(`📁 Ubicación: /static/llms/`);
        console.log('🌐 URLs disponibles en: https://paxapos.github.io/documentation/llms/');
        
    } catch (error) {
        console.error('❌ Error durante la generación:', error);
        process.exit(1);
    }
}

// Ejecutar
generateTxtFiles();

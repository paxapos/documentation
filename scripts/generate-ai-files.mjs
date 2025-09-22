#!/usr/bin/env node

/**
 * Script para generar archivos AI y TXT completo
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de codificación para archivos
const FILE_ENCODING = 'utf8';
const BOM = '\uFEFF'; // Byte Order Mark para UTF-8

// Función adicional para verificar y corregir caracteres problemáticos
function fixProblemCharacters(text) {
    // Corregir secuencias de bytes UTF-8 mal codificadas
    let fixed = text
        // Acentos minúsculas
        .replace(/Ã¡/g, 'á')
        .replace(/Ã©/g, 'é') 
        .replace(/Ã­/g, 'í')
        .replace(/Ã³/g, 'ó')
        .replace(/Ãº/g, 'ú')
        .replace(/Ã±/g, 'ñ')
        // Acentos mayúsculas
        .replace(/Ã\u0081/g, 'Á')
        .replace(/Ã\u0089/g, 'É')
        .replace(/Ã\u008d/g, 'Í')
        .replace(/Ã\u0093/g, 'Ó')
        .replace(/Ã\u009a/g, 'Ú')
        .replace(/Ã\u0091/g, 'Ñ')
        // Caracteres de puntuación problemáticos
        .replace(/â€œ/g, '"')
        .replace(/â€\u009d/g, '"')
        .replace(/â€™/g, "'")
        .replace(/â€˜/g, "'")
        .replace(/â€"/g, '–')
        .replace(/â€"/g, '—')
        .replace(/â€¦/g, '...')
        // Símbolos
        .replace(/â€¢/g, '•')
        .replace(/Â/g, '')
        .replace(/â„¢/g, '™')
        .replace(/Â®/g, '®')
        .replace(/Â©/g, '©');
    
    return fixed;
}

console.log('🤖 Generando archivos AI completos...');

// Crear directorio para archivos TXT estáticos
const staticLlmDir = join(__dirname, '..', 'static', 'llms');
if (!existsSync(staticLlmDir)) {
    mkdirSync(staticLlmDir, { recursive: true });
    console.log('📁 Creado directorio:', staticLlmDir);
}

// Función para normalizar caracteres especiales y limpiar contenido
function normalizeAndCleanContent(content) {
    // Primero corregir caracteres problemáticos comunes
    let normalized = fixProblemCharacters(content);
    
    // Luego normalizar caracteres Unicode
    normalized = normalized.normalize('NFC');
    
    // Reemplazar entidades HTML comunes
    normalized = normalized
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
        .replace(/&#x([0-9a-f]+);/gi, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
    
    // Limpiar etiquetas HTML pero preservar saltos de línea
    normalized = normalized.replace(/<div[^>]*>/g, '\n').replace(/<\/div>/g, '\n');
    normalized = normalized.replace(/<br\s*\/?>/gi, '\n');
    normalized = normalized.replace(/<p[^>]*>/g, '\n').replace(/<\/p>/g, '\n');
    normalized = normalized.replace(/<[^>]*>/g, '');
    
    // Limpiar sintaxis Markdown pero preservar estructura
    normalized = normalized
        .replace(/^#{1,6}\s+(.+)$/gm, '$1') // Headers - preservar el texto
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Bold
        .replace(/\*([^*]+)\*/g, '$1') // Italic
        .replace(/`([^`]+)`/g, '$1') // Inline code
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links
        .replace(/^>\s*/gm, '') // Blockquotes
        .replace(/^\s*[-*+]\s+/gm, '• ') // Listas con viñetas
        .replace(/^\s*(\d+)\.\s+/gm, '$1. '); // Listas numeradas
    
    // Normalizar espacios y saltos de línea de forma más cuidadosa
    normalized = normalized
        .replace(/\n{3,}/g, '\n\n') // Múltiples saltos a máximo dos
        .replace(/[ \t]{2,}/g, ' ') // Múltiples espacios/tabs a uno
        .replace(/^\s+/gm, '') // Espacios al inicio de líneas
        .replace(/\s+$/gm, '') // Espacios al final de líneas
        .replace(/\n\s*\n/g, '\n\n') // Limpiar líneas vacías con espacios
        .trim();
    
    return normalized;
}

// Función segura para escribir archivos con codificación UTF-8
function safeWriteFile(filePath, content, addBOM = true) {
    try {
        // Normalizar el contenido antes de escribir
        let normalizedContent = content.normalize('NFC');
        
        // Corregir cualquier carácter problemático adicional
        normalizedContent = fixProblemCharacters(normalizedContent);
        
        // Agregar BOM para mejor compatibilidad con sistemas Windows
        if (addBOM) {
            normalizedContent = BOM + normalizedContent;
        }
        
        writeFileSync(filePath, normalizedContent, { 
            encoding: FILE_ENCODING,
            flag: 'w'
        });
        
        return true;
    } catch (error) {
        console.error(`❌ Error escribiendo archivo ${filePath}:`, error.message);
        return false;
    }
}
function findAllMarkdownFiles(dir) {
    const files = [];
    
    function searchDir(currentDir) {
        try {
            const items = readdirSync(currentDir);
            
            for (const item of items) {
                const fullPath = join(currentDir, item);
                const stat = statSync(fullPath);
                
                if (stat.isDirectory()) {
                    searchDir(fullPath);
                } else if (extname(item) === '.md') {
                    files.push(fullPath);
                }
            }
        } catch (error) {
            console.warn(`❌ Error leyendo directorio ${currentDir}:`, error.message);
        }
    }
    
    searchDir(dir);
    return files;
}

// Buscar todos los archivos MD en las carpetas de documentación
const userGuidePath = join(__dirname, '..', 'src', 'routes', 'user-guide', 'Manual-Usuario');
const devDocsPath = join(__dirname, '..', 'src', 'routes', 'dev', 'Docs');

const allMdFiles = [];
if (existsSync(userGuidePath)) {
    allMdFiles.push(...findAllMarkdownFiles(userGuidePath));
}
if (existsSync(devDocsPath)) {
    allMdFiles.push(...findAllMarkdownFiles(devDocsPath));
}

console.log(`📄 Encontrados ${allMdFiles.length} archivos MD para procesar`);

// Función para limpiar archivos TXT huérfanos (sin .md correspondiente)
function cleanOrphanTxtFiles() {
    const llmsDir = join(__dirname, '..', 'static', 'llms');
    
    if (!existsSync(llmsDir)) {
        return;
    }
    
    // Obtener todos los archivos TXT existentes (excluyendo archivos del sistema)
    const existingTxtFiles = readdirSync(llmsDir)
        .filter(file => file.endsWith('.txt') && !['index.txt'].includes(file));
    
    // Crear set de nombres de archivos MD esperados
    const expectedTxtFiles = new Set();
    
    allMdFiles.forEach(filePath => {
        const fileName = basename(filePath, '.md');
        const txtName = fileName.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '')
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
            + '.txt';
        expectedTxtFiles.add(txtName);
    });
    
    // Eliminar archivos TXT huérfanos
    let cleanedCount = 0;
    existingTxtFiles.forEach(txtFile => {
        if (!expectedTxtFiles.has(txtFile)) {
            const txtPath = join(llmsDir, txtFile);
            try {
                unlinkSync(txtPath);
                console.log(`🗑️  Eliminado archivo huérfano: ${txtFile}`);
                cleanedCount++;
            } catch (error) {
                console.warn(`⚠️  No se pudo eliminar ${txtFile}:`, error.message);
            }
        }
    });
    
    if (cleanedCount > 0) {
        console.log(`🧹 Limpieza completada: ${cleanedCount} archivo(s) huérfano(s) eliminado(s)`);
    }
}

// Ejecutar limpieza antes de generar nuevos archivos
cleanOrphanTxtFiles();

// Array para almacenar información de archivos generados
const generatedFiles = [];

let completeContent = '# Manual Completo PaxaPOS\n\n';
let processedCount = 0;

for (const filePath of allMdFiles) {
    try {
        // Leer archivo con codificación UTF-8 explícita
        const rawContent = readFileSync(filePath, { encoding: FILE_ENCODING });
        const fileName = basename(filePath, '.md');
        
        // Procesar y limpiar el contenido
        const cleanContent = normalizeAndCleanContent(rawContent);
        
        if (cleanContent.trim()) {
            // Crear nombre de archivo TXT normalizado pero conservando legibilidad
            const txtName = fileName.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[()]/g, '')
                // Mantener caracteres especiales en el nombre del archivo pero normalizados
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
                + '.txt';
            
            const txtPath = join(staticLlmDir, txtName);
            const moduleTitle = fileName.replace(/^\d+-/, '').replace(/-/g, ' ');
            
            // Crear contenido final limpio y bien formateado
            const finalContent = `# ${moduleTitle}

${cleanContent}`;
            
            // Escribir archivo con codificación segura y BOM
            if (safeWriteFile(txtPath, finalContent, true)) {
                // Agregar al contenido completo (también limpio)
                completeContent += `\n\n=== ${moduleTitle} ===\n\n${cleanContent}`;
                
                // Guardar información del archivo generado
                generatedFiles.push({
                    fileName: txtName,
                    originalMd: fileName,
                    title: moduleTitle,
                    path: filePath
                });
                
                processedCount++;
            }
        }
    } catch (error) {
        console.error(`❌ Error procesando ${filePath}:`, error.message);
    }
}

// Crear índice completo con codificación segura
const indexPath = join(staticLlmDir, 'index.txt');
if (safeWriteFile(indexPath, completeContent, true)) {
    console.log(`\n🎉 Completado: ${processedCount} archivos procesados`);
    console.log(`📚 Índice creado en: ${indexPath}`);
} else {
    console.error('❌ Error al crear el archivo índice');
}

// Generar archivo de registro de archivos TXT para el detector
try {
    const txtFilesRegister = {
        generated_at: new Date().toISOString(),
        total_files: generatedFiles.length,
        files: generatedFiles.map(file => file.fileName).sort(),
        detailed_files: generatedFiles.map(file => ({
            txt_file: file.fileName,
            original_md: file.originalMd,
            title: file.title,
            generated_from: file.path
        }))
    };
    
    const registerPath = join(staticLlmDir, 'files-register.json');
    writeFileSync(registerPath, JSON.stringify(txtFilesRegister, null, 2), 'utf8');
    console.log(`📋 Registro de archivos TXT creado: ${registerPath}`);
} catch (err) {
    console.error('❌ Error generando registro de archivos:', err.message);
}

// Generar archivo URLs (para que crawlers/LLMs indexen fácilmente)
try {
    const basePublic = 'https://paxapos.github.io/documentation/llms/';
    const filesInDir = readdirSync(staticLlmDir).filter(f => f.toLowerCase().endsWith('.txt'));
    // Ordenar para estabilidad
    filesInDir.sort();
    const urlsContent = filesInDir.map(f => basePublic + encodeURIComponent(f)).join('\n') + '\n';
    const urlsPath = join(staticLlmDir, '..', 'urls.txt'); // static/urls.txt
    safeWriteFile(urlsPath, urlsContent, false);
    console.log(`🌐 URLs generado en: ${urlsPath}`);
} catch (err) {
    console.error('❌ Error generando urls.txt:', err.message);
}

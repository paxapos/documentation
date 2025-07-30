import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generateStaticAPIFiles() {
    console.log('🤖 Generando archivos estáticos para IA...');
    
    const projectDir = join(__dirname, '..');
    const aiDir = join(projectDir, 'static', 'ai');
    await fs.mkdir(aiDir, { recursive: true });
    
    // Función simplificada para procesar archivos markdown
    async function processMarkdownFiles(basePath, type) {
        const content = [];
        
        async function readDirRecursive(dir) {
            try {
                const items = await fs.readdir(dir);
                
                for (const item of items) {
                    const fullPath = join(dir, item);
                    const stat = await fs.stat(fullPath);
                    
                    if (stat.isDirectory()) {
                        await readDirRecursive(fullPath);
                    } else if (item.endsWith('.md')) {
                        const markdownContent = await fs.readFile(fullPath, 'utf-8');
                        const pathParts = fullPath.replace(basePath, '').split(/[/\\]/).filter(p => p);
                        const fileName = pathParts[pathParts.length - 1];
                        const folderName = pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'General';
                        
                        content.push({
                            id: fileName.replace('.md', ''),
                            title: fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' '),
                            content: markdownContent,
                            section: folderName.replace(/^\d+-/, '').replace(/-/g, ' '),
                            type
                        });
                    }
                }
            } catch (error) {
                console.warn(`⚠️ No se pudo procesar ${basePath}:`, error.message);
            }
        }
        
        await readDirRecursive(basePath);
        return content;
    }
    
    // Procesar archivos
    const userContent = await processMarkdownFiles(join(projectDir, 'src', 'routes', 'user-guide', 'Manual-Usuario'), 'user');
    const devContent = await processMarkdownFiles(join(projectDir, 'src', 'routes', 'dev', 'Docs'), 'dev');
    const allContent = [...userContent, ...devContent];
    
    // Generar archivos con función helper
    const writeFiles = async (suffix, data) => {
        await fs.writeFile(join(aiDir, `${suffix}.json`), JSON.stringify({
            success: true,
            data,
            totalSections: data.length,
            generated: new Date().toISOString()
        }, null, 2));
        
        await fs.writeFile(join(aiDir, `${suffix}.txt`), 
            data.map(item => `# ${item.section} - ${item.title}\n\n${item.content}\n\n---\n\n`).join('')
        );
    };
    
    // Escribir archivos
    await writeFiles('all', allContent);
    await writeFiles('user', userContent);
    await writeFiles('dev', devContent);
    
    console.log('✅ Archivos de IA generados exitosamente:');
    console.log(`📄 Manual de usuario: ${userContent.length} secciones`);
    console.log(`📄 Documentación dev: ${devContent.length} secciones`);
    console.log(`📁 Archivos creados en: static/ai/`);
}

generateStaticAPIFiles().catch(error => {
    console.error('❌ Error generando archivos de IA:', error);
    process.exit(1);
});

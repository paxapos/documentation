
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const TARGET_DIR = 'src/routes/user-guide/Manual-Usuario';

async function getFiles(dir) {
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map((dirent) => {
			const res = join(dir, dirent.name);
			return dirent.isDirectory() ? getFiles(res) : res;
		})
	);
	return files.flat().filter((f) => f.endsWith('.md'));
}

async function standardizeHeaders() {
	console.log('🔍 Iniciando estandarización de encabezados...');
	
	try {
		const files = await getFiles(TARGET_DIR);
		console.log(`📄 Encontrados ${files.length} archivos Markdown.`);

		let modifiedCount = 0;

		for (const file of files) {
			let content = await readFile(file, 'utf8');
			let originalContent = content;

			// 1. Eliminar BOM si existe (\uFEFF)
			if (content.charCodeAt(0) === 0xFEFF) {
				content = content.slice(1);
			}

			// 2. Eliminar líneas en blanco al inicio
			content = content.replace(/^\s+/, '');

			// 3. Verificar si empieza con H1
			if (!content.startsWith('# ')) {
				console.warn(`⚠️  Advertencia: ${file} no empieza con "# Título"`);
                // Podríamos intentar arreglarlo o dejarlo para revisión manual
			}

			if (content !== originalContent) {
				await writeFile(file, content, 'utf8');
				console.log(`✅ Corregido espacios/BOM: ${file}`);
				modifiedCount++;
			}
		}

		console.log(`\n✨ Completado. ${modifiedCount} archivos fueron limpiados.`);
	} catch (error) {
		console.error('❌ Error:', error);
		process.exit(1);
	}
}

standardizeHeaders();

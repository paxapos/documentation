import { GEMINI_API_KEY, GEMINI_MODEL, GEMINI_API_URL, GEMINI_MAX_TOKENS_WEB, GEMINI_MAX_TOKENS_WHATSAPP, GEMINI_TEMPERATURE } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { prepareForExport } from '$lib/helpers/textReplacer';

export const POST = async ({ request }) => {
	try {
		console.log('🔍 API Key disponible:', !!GEMINI_API_KEY);
		console.log('🔍 Modelo Gemini:', GEMINI_MODEL || 'gemini-1.5-flash');
		console.log('🔍 Configuración cargada desde .env');
		
		const { message, platform = 'web' } = await request.json();

		if (!GEMINI_API_KEY) {
			return json({ success: false, error: 'API Key no configurada' }, { status: 500 });
		}

		// Cargar todo el manual automáticamente (reciclando lógica existente)
		const manualContext = await loadFullManual();

		// Prompt optimizado para cada plataforma
		const systemPrompt = platform === 'whatsapp' 
			? getWhatsAppPrompt(manualContext)
			: getWebPrompt(manualContext);

		// Llamada a Gemini con configuración desde variables de entorno
		const model = GEMINI_MODEL || 'gemini-1.5-flash';
		const apiUrl = GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta';
		const maxTokens = platform === 'whatsapp' 
			? parseInt(GEMINI_MAX_TOKENS_WHATSAPP || '400')
			: parseInt(GEMINI_MAX_TOKENS_WEB || '600');
		const temperature = parseFloat(GEMINI_TEMPERATURE || '0.3');

		const response = await fetch(`${apiUrl}/models/${model}:generateContent?key=${GEMINI_API_KEY}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				contents: [{ parts: [{ text: `${systemPrompt}\n\nPregunta: ${message}` }] }],
				generationConfig: {
					temperature,
					maxOutputTokens: maxTokens,
					topP: 0.8,
					topK: 20
				}
			})
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('Error de Gemini:', response.status, errorText);
			throw new Error(`Error ${response.status}: ${errorText}`);
		}

		// Log de la respuesta cruda antes de hacer JSON parse
		const responseText = await response.text();
		console.log('🔍 Respuesta cruda de Gemini:', responseText.substring(0, 200) + '...');
		
		let data;
		try {
			data = JSON.parse(responseText);
		} catch (parseError) {
			console.error('❌ Error parsing JSON:', parseError);
			console.error('📄 Respuesta completa:', responseText);
			throw new Error('Respuesta inválida de Gemini');
		}
		
		const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

		if (!aiResponse) {
			console.error('Respuesta de Gemini vacía:', data);
			throw new Error('Sin respuesta de Gemini');
		}

		console.log('✅ Gemini respondió exitosamente');
		return json({ 
			success: true, 
			response: platform === 'whatsapp' ? formatForWhatsApp(aiResponse) : aiResponse 
		});

	} catch (error) {
		console.error('❌ Error en /api/chat:', error);
		
		// Log más detallado para debug
		if (error instanceof Error) {
			console.error('Mensaje de error:', error.message);
		}
		
		return json({ 
			success: false, 
			error: error instanceof Error ? error.message : 'Error interno',
			fallback: true 
		}, { status: 500 });
	}
};

// Reutilizar la lógica de carga del manual (copiada del ChatBot existente)
async function loadFullManual() {
	try {
		const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
			query: '?raw',
			import: 'default'
		});
		
		let fullContent = '';
		for (const [path, loader] of Object.entries(modules)) {
			const markdownText = await loader() as string;
			const fileName = path.split('/').pop()?.replace('.md', '') || '';
			const cleanText = prepareForExport(markdownText); // Reutilizar función existente
			fullContent += `\n\n## ${fileName.replace(/^\d+-/, '').replace(/-/g, ' ')}\n${cleanText}`;
		}
		
		return fullContent;
	} catch (error) {
		console.error('Error cargando manual:', error);
		return 'Manual no disponible';
	}
}

function getWebPrompt(manualContext: string) {
	return `Eres el asistente de PaxaPOS. Responde SOLO usando esta documentación:

${manualContext}

INSTRUCCIONES IMPORTANTES:
- Responde de forma CONCISA y DIRECTA
- Máximo 2-3 oraciones por respuesta
- Ve directo al punto, no expliques todo el contexto
- Si es un procedimiento, da solo los pasos esenciales
- Usa formato Markdown con **negritas** para destacar puntos clave
- Incluye emojis relevantes pero moderadamente
- Si no sabes algo, di "No encontré esa información en el manual"
- MÁXIMO 150 palabras por respuesta

Ejemplo de respuesta ideal:
"Para crear un usuario, ve a **Configuración → Usuarios** y completa el formulario básico 👤. Solo necesitas nombre, email y rol."`;
}

function getWhatsAppPrompt(manualContext: string) {
	return `Eres el asistente de PaxaPOS para WhatsApp. Responde SOLO usando esta documentación:

${manualContext}

INSTRUCCIONES:
- Responde únicamente sobre PaxaPOS usando la documentación
- Usa *negritas* (formato WhatsApp)
- Incluye emojis moderadamente
- Respuestas cortas y claras
- Si no sabes algo, di "No encontré esa información en el manual"
- Máximo 300 palabras`;
}

function formatForWhatsApp(text: string) {
	return text
		.replace(/\*\*(.*?)\*\*/g, '*$1*') // Markdown a WhatsApp
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Quitar enlaces
}

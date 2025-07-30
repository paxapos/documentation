import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { message, context } = await request.json();
        
        // Aquí puedes integrar con diferentes proveedores de IA
        const response = await callAIProvider(message, context);
        
        return json({
            success: true,
            response: response
        });
        
    } catch (error) {
        console.error('Error en chatbot:', error);
        return json({
            success: false,
            error: 'Error interno del servidor'
        }, { status: 500 });
    }
}

async function callAIProvider(message: string, context: string) {
    // Para producción, configura las variables de entorno
    // Por ahora usamos respuesta local
    return generateLocalResponse(message, context);
}

function generateLocalResponse(message: string, context: string): string {
    const messageLower = message.toLowerCase();
    
    // Buscar keywords en el contexto
    const searchKeywords = messageLower.split(' ').filter(word => word.length > 3);
    let bestMatch = '';
    let bestScore = 0;
    
    const sections = context.split('---');
    
    for (const section of sections) {
        const sectionLower = section.toLowerCase();
        let score = 0;
        
        for (const keyword of searchKeywords) {
            if (sectionLower.includes(keyword)) {
                score++;
            }
        }
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = section;
        }
    }
    
    if (bestMatch && bestScore > 0) {
        const lines = bestMatch.split('\n').filter(line => line.trim());
        const relevantContent = lines.slice(0, 10).join('\n');
        return `Encontré información relevante en el manual:\n\n${relevantContent}\n\n¿Te ayuda esta información?`;
    }
    
    // Respuestas predefinidas como fallback
    if (messageLower.includes('mozo') || messageLower.includes('personal')) {
        return 'Para gestionar personal y mozos, ve al módulo "Agregar Personal" donde puedes crear nuevos empleados y asignar roles.';
    }
    
    if (messageLower.includes('impresora')) {
        return 'Para configurar impresoras, busca "Configuración de Impresoras" en el menú principal.';
    }
    
    if (messageLower.includes('arqueo')) {
        return 'Los arqueos se gestionan desde el módulo "Arqueos" donde puedes realizar el cierre de caja.';
    }
    
    return 'No encontré información específica sobre eso en el manual. ¿Podrías ser más específico sobre qué necesitas ayuda con PaxaPOS?';
}

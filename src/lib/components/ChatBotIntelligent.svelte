<script lang="ts">
	import { onMount } from 'svelte';
	import { isDarkMode } from '$lib/stores/theme';
	
	let isOpen = false;
	let messages: Array<{text: string, isUser: boolean, timestamp: Date}> = [];
	let currentMessage = '';
	let isLoading = false;
	let chatContainer: HTMLElement;

	// Cargar manual para contexto
	let manualContext = '';
	let manualSections: Array<{id: string, title: string, content: string, section: string}> = [];

	onMount(async () => {
		// Cargar el manual desde los archivos estáticos JSON
		try {
			const response = await fetch('/ai/user.json');
			if (response.ok) {
				const data = await response.json();
				manualSections = data.data || [];
				manualContext = manualSections.map(section => 
					`# ${section.section} - ${section.title}\n\n${section.content}`
				).join('\n\n---\n\n');
			}
		} catch (error) {
			console.error('Error cargando manual:', error);
		}

		// Mensaje de bienvenida
		addMessage('¡Hola! 👋 Soy el asistente inteligente de PaxaPOS.\n\n**Puedes preguntarme sobre:**\n• Configuración de impresoras\n• Gestión del salón y mesas\n• Crear usuarios y personal\n• Sistema de cocina (KDS)\n• Facturación y AFIP\n• ¡Y mucho más!\n\n**Ejemplos:** "hola", "como configurar impresoras", "que es un mozo", "crear usuario"', false);
	});

	function addMessage(text: string, isUser: boolean) {
		messages = [...messages, { text, isUser, timestamp: new Date() }];
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 100);
	}

	async function sendMessage() {
		if (!currentMessage.trim() || isLoading) return;

		const userMessage = currentMessage.trim();
		currentMessage = '';
		addMessage(userMessage, true);
		
		isLoading = true;
		
		try {
			const response = await generateResponse(userMessage);
			addMessage(response, false);
		} catch (error) {
			addMessage('Lo siento, ocurrió un error procesando tu consulta. Por favor intenta de nuevo.', false);
		} finally {
			isLoading = false;
		}
	}

	async function generateResponse(question: string): Promise<string> {
		// Sistema inteligente de análisis del manual
		const analysis = analyzeQuestion(question);
		
		// Manejar saludos
		if (analysis.intent === 'greeting') {
			return generateGreetingResponse();
		}
		
		// Manejar agradecimientos
		if (analysis.intent === 'thanks') {
			return "¡De nada! 😊 Me alegra poder ayudarte.\n\n¿Hay algo más sobre PaxaPOS en lo que pueda asistirte?";
		}
		
		// Manejar pedidos de ayuda general
		if (analysis.intent === 'help') {
			return generateHelpResponse();
		}
		
		// Manejar problemas/errores
		if (analysis.intent === 'problem') {
			return generateTroubleshootingResponse(question);
		}
		
		// Manejar palabras clave específicas
		if (analysis.actionType === 'specific') {
			return generateKeywordResponse(analysis.intent, question);
		}
		
		// Buscar en el manual
		const relevantSections = findBestMatches(question, analysis);
		
		if (relevantSections.length > 0) {
			return generateIntelligentResponse(question, relevantSections, analysis);
		}
		
		// Si no encuentra nada específico, búsqueda general
		return generateFallbackResponse(question);
	}

	function generateGreetingResponse(): string {
		const responses = [
			"¡Hola! 👋 Soy tu asistente de PaxaPOS. ¿En qué puedo ayudarte hoy?",
			"¡Hola! ¿Cómo estás? Estoy aquí para ayudarte con cualquier duda sobre PaxaPOS.",
			"¡Buenos días! Soy el asistente inteligente de PaxaPOS. ¿Qué necesitas saber?",
			"¡Hola! Me da mucho gusto saludarte. ¿En qué función de PaxaPOS te puedo ayudar?"
		];
		
		const randomResponse = responses[Math.floor(Math.random() * responses.length)];
		
		return `${randomResponse}

**Puedes preguntarme sobre:**
• Como configurar impresoras
• Manejo del salón y mesas
• Crear usuarios y personal
• Sistema de cocina (KDS)
• Facturación y AFIP
• Estadísticas y reportes
• ¡Y mucho más!

${createRedirectButton('Ver Manual Completo', 'documentation/user-guide')}`;
	}

	function generateKeywordResponse(keyword: string, originalQuestion: string): string {
		const responses: { [key: string]: string } = {
			'mozo': `**Gestión de Personal - Mozos** 👨‍💼

Los mozos son parte fundamental del sistema PaxaPOS. Aquí te explico lo básico:

**Funciones principales:**
• Tomar pedidos en el salón
• Gestionar mesas y clientes
• Procesar pagos
• Coordinar con cocina

**¿Necesitas saber algo específico sobre:**
• ¿Cómo crear usuarios para mozos?
• ¿Configurar permisos de personal?
• ¿Gestionar turnos y horarios?

${createRedirectButton('Manual de Personal', 'documentation/user-guide')}`,

			'impresora': `**Configuración de Impresoras** 🖨️

Las impresoras son esenciales para tickets y comandas en PaxaPOS:

**Tipos de impresoras:**
• Impresoras de tickets (clientes)
• Impresoras de cocina (comandas)
• Impresoras fiscales (facturación)

**Configuración básica:**
• Conexión USB o red
• Selección de tamaño de papel
• Configuración de corte automático

${createRedirectButton('Guía de Impresoras', 'documentation/user-guide')}`,

			'salon': `**Gestión del Salón** 🏪

El módulo de salón es el corazón operativo de PaxaPOS:

**Funcionalidades principales:**
• Administración de mesas
• Estados de ocupación
• Asignación de mozos
• Control de pedidos activos

**Acciones disponibles:**
• Abrir/cerrar mesas
• Dividir cuentas
• Transferir entre mesas
• Generar tickets

${createRedirectButton('Manual del Salón', 'documentation/user-guide')}`,

			'cocina': `**Kitchen Display System (KDS)** 👨‍🍳

El sistema de cocina digital de PaxaPOS optimiza la preparación:

**Características:**
• Pantalla táctil para cocina
• Organización por tiempos
• Estados de preparación
• Comunicación con salón

**Beneficios:**
• Elimina papeles en cocina
• Reduce errores de pedidos
• Mejora tiempos de entrega
• Control visual completo

${createRedirectButton('Manual de Cocina', 'documentation/user-guide')}`,

			'menu': `**Gestión de Menú** 📋

Administra tu carta y productos de forma eficiente:

**Configuración:**
• Categorías de productos
• Precios y modificadores
• Ingredientes y stock
• Combos y promociones

**Funcionalidades:**
• Activar/desactivar platos
• Modificadores de precio
• Control de disponibilidad
• Gestión de horarios

${createRedirectButton('Configurar Menú', 'documentation/user-guide')}`,

			'pago': `**Sistema de Pagos** 💳

PaxaPOS soporta múltiples formas de pago:

**Métodos disponibles:**
• Efectivo
• Tarjeta de débito/crédito
• Transferencias
• Billeteras digitales

**Características:**
• Dividir pagos
• Propinas incluidas
• Integración con AFIP
• Reportes detallados

${createRedirectButton('Configurar Pagos', 'documentation/user-guide')}`,

			'facturacion': `**Facturación y AFIP** 📄

Cumple con todas las normativas fiscales:

**Comprobantes:**
• Tickets fiscales
• Facturas A, B, C
• Notas de crédito
• Reportes Z

**Integración AFIP:**
• Conexión directa
• Validación automática
• Backup de seguridad
• Cumplimiento legal

${createRedirectButton('Manual AFIP', 'documentation/user-guide')}`,

			'estadisticas': `**Estadísticas y Reportes** 📊

Analiza el rendimiento de tu negocio:

**Reportes disponibles:**
• Ventas por período
• Productos más vendidos
• Performance de mozos
• Análisis de horarios

**Visualización:**
• Gráficos interactivos
• Exportación a Excel
• Comparativas históricas
• Dashboards en tiempo real

${createRedirectButton('Ver Estadísticas', 'documentation/user-guide')}`,

			'stock': `**Control de Stock** 📦

Gestiona tu inventario de manera inteligente:

**Funcionalidades:**
• Control de ingredientes
• Alertas de stock bajo
• Órdenes de compra
• Historial de movimientos

**Integración:**
• Descuento automático por venta
• Recipes y fórmulas
• Proveedores y precios
• Reportes de rotación

${createRedirectButton('Manual de Stock', 'documentation/user-guide')}`,

			'usuario': `**Gestión de Usuarios** 👥

Administra el acceso y permisos del sistema:

**Tipos de usuario:**
• Administrador
• Encargado
• Mozo
• Cocina

**Configuración:**
• Crear nuevos usuarios
• Asignar permisos
• Gestionar horarios
• Control de acceso

${createRedirectButton('Crear Usuarios', '/user-guide')}`
		};

		return responses[keyword] || `Encontré información sobre "${keyword}" pero necesito más detalles. ¿Podrías ser más específico sobre qué aspecto te interesa?

${createRedirectButton('Ver Manual Completo', 'documentation/user-guide')}`;
	}

	function generateHelpResponse(): string {
		return `**¿Necesitas ayuda con PaxaPOS?** 🆘

Estoy aquí para asistirte. Puedes preguntarme sobre cualquier funcionalidad del sistema:

**Áreas principales:**
• **Operación diaria** - Salón, mesas, pedidos
• **Configuración** - Usuarios, impresoras, menú
• **Administración** - Facturación, AFIP, reportes
• **Soporte técnico** - Instalación, problemas

**Ejemplos de preguntas:**
• "¿Cómo configurar una impresora?"
• "¿Qué es el KDS de cocina?"
• "¿Cómo crear un usuario mozo?"
• "Problema con la facturación"

${createRedirectButton('Ver Manual Completo', 'documentation/user-guide')}`;
	}

	function generateTroubleshootingResponse(question: string): string {
		const questionLower = question.toLowerCase();
		
		let specificHelp = "";
		
		if (questionLower.includes('impresora')) {
			specificHelp = `\n**Problemas comunes con impresoras:**
• Verificar conexión USB/red
• Revisar drivers instalados
• Comprobar papel y configuración
• Reiniciar servicio de impresión`;
		} else if (questionLower.includes('pago') || questionLower.includes('cobrar')) {
			specificHelp = `\n**Problemas con pagos:**
• Verificar conexión del lector de tarjetas
• Revisar configuración de medios de pago
• Comprobar conexión a internet
• Validar configuración AFIP`;
		} else if (questionLower.includes('cocina') || questionLower.includes('kds')) {
			specificHelp = `\n**Problemas con KDS:**
• Verificar conexión de red entre dispositivos
• Revisar sincronización de pedidos
• Comprobar configuración de pantallas
• Validar permisos de usuario`;
		}
		
		return `**Soporte Técnico** 🔧

Entiendo que tienes un problema. Te ayudo a resolverlo:
${specificHelp}

**Pasos generales:**
1. **Verificar conexiones** - Red, USB, dispositivos
2. **Revisar configuración** - Usuarios, permisos, ajustes
3. **Comprobar logs** - Buscar errores específicos
4. **Reiniciar servicios** - Si es necesario

**¿El problema persiste?**
Describe exactamente qué sucede y en qué momento para darte ayuda más específica.

${createRedirectButton('Manual de Troubleshooting', 'documentation/user-guide')}`;
	}

	function analyzeQuestion(question: string): {intent: string, keywords: string[], actionType: string} {
		const questionLower = question.toLowerCase();
		
		// Detectar saludos
		const greetings = ['hola', 'buenas', 'buenos días', 'buenas tardes', 'buenas noches', 'hey', 'hi'];
		const isGreeting = greetings.some(greeting => questionLower.includes(greeting));
		
		if (isGreeting) {
			return {
				intent: 'greeting',
				keywords: ['saludo'],
				actionType: 'greeting'
			};
		}

		// Detectar palabras clave específicas del sistema PaxaPOS
		const keywordMapping = {
			'mozo': ['mozo', 'mozos', 'camarero', 'mesero', 'personal'],
			'impresora': ['impresora', 'impresoras', 'imprimir', 'impresión'],
			'salon': ['salón', 'salon', 'mesa', 'mesas', 'comedor'],
			'cocina': ['cocina', 'kitchen', 'kds', 'kitchen display'],
			'usuario': ['usuario', 'usuarios', 'crear usuario', 'personal'],
			'menu': ['menú', 'menu', 'platos', 'comida', 'productos'],
			'pago': ['pago', 'pagos', 'cobrar', 'cobro', 'tarjeta', 'efectivo'],
			'facturacion': ['factura', 'facturación', 'afip', 'ticket', 'comprobante'],
			'estadisticas': ['estadística', 'estadísticas', 'reportes', 'informes'],
			'configuracion': ['configuración', 'configurar', 'ajustes', 'settings'],
			'arqueo': ['arqueo', 'arqueos', 'caja', 'cierre'],
			'stock': ['stock', 'inventario', 'compras', 'productos'],
			'propina': ['propina', 'propinas', 'tip'],
			'buchon': ['buchón', 'buchon', 'bot', 'telegram']
		};

		// Buscar palabras clave específicas
		let matchedKeywords = [];
		let primaryKeyword = null;
		
		for (const [category, keywords] of Object.entries(keywordMapping)) {
			for (const keyword of keywords) {
				if (questionLower.includes(keyword)) {
					matchedKeywords.push(keyword);
					if (!primaryKeyword) primaryKeyword = category;
				}
			}
		}

		// Si encontró palabras clave específicas, usar esa categoría
		if (primaryKeyword) {
			return {
				intent: primaryKeyword,
				keywords: matchedKeywords,
				actionType: 'specific'
			};
		}
		
		// Detectar intención general
		let intent = 'general';
		let actionType = 'info';
		
		// Detectar tipo de acción
		if (questionLower.includes('cómo') || questionLower.includes('como')) {
			intent = 'howto';
			actionType = 'procedure';
		} else if (questionLower.includes('qué') || questionLower.includes('que es')) {
			intent = 'definition';
			actionType = 'explanation';
		} else if (questionLower.includes('dónde') || questionLower.includes('donde')) {
			intent = 'location';
			actionType = 'navigation';
		} else if (questionLower.includes('crear') || questionLower.includes('agregar') || questionLower.includes('cargar')) {
			intent = 'create';
			actionType = 'procedure';
		} else if (questionLower.includes('configurar') || questionLower.includes('instalar')) {
			intent = 'configure';
			actionType = 'procedure';
		}
		
		// Detectar patrones adicionales
		if (questionLower.includes('gracias') || questionLower.includes('thank')) {
			intent = 'thanks';
			actionType = 'thanks';
		} else if (questionLower.includes('ayuda') || questionLower.includes('help')) {
			intent = 'help';
			actionType = 'help';
		} else if (questionLower.includes('problema') || questionLower.includes('error') || questionLower.includes('no funciona')) {
			intent = 'problem';
			actionType = 'troubleshooting';
		}
		
		// Extraer keywords importantes
		const keywords = questionLower
			.split(/\s+/)
			.filter(word => word.length > 2)
			.filter(word => !['cómo', 'como', 'qué', 'que', 'dónde', 'donde', 'para', 'por', 'con', 'sin', 'una', 'uno', 'del', 'las', 'los', 'el', 'la', 'gracias', 'ayuda', 'problema'].includes(word));
		
		return { intent, keywords, actionType };
	}

	function findBestMatches(question: string, analysis: any): any[] {
		if (!manualSections || manualSections.length === 0) {
			// Fallback a búsqueda en texto plano
			return findRelevantSections(analysis.keywords);
		}
		
		const scored = manualSections.map(section => {
			let score = 0;
			const sectionText = `${section.title} ${section.content} ${section.section}`.toLowerCase();
			
			// Puntuación por keywords
			for (const keyword of analysis.keywords) {
				const count = (sectionText.match(new RegExp(keyword, 'g')) || []).length;
				score += count * 2;
				
				// Bonus si aparece en el título
				if (section.title.toLowerCase().includes(keyword)) {
					score += 5;
				}
				
				// Bonus si aparece en la sección
				if (section.section.toLowerCase().includes(keyword)) {
					score += 3;
				}
			}
			
			// Bonus por proximidad de keywords
			const questionWords = analysis.keywords;
			if (questionWords.length > 1) {
				for (let i = 0; i < questionWords.length - 1; i++) {
					const word1 = questionWords[i];
					const word2 = questionWords[i + 1];
					if (sectionText.includes(word1) && sectionText.includes(word2)) {
						const pos1 = sectionText.indexOf(word1);
						const pos2 = sectionText.indexOf(word2);
						if (Math.abs(pos1 - pos2) < 100) {
							score += 3;
						}
					}
				}
			}
			
			return { ...section, score };
		});
		
		return scored
			.filter(item => item.score > 0)
			.sort((a, b) => b.score - a.score)
			.slice(0, 3);
	}

	// Fallback para búsqueda en texto plano si no hay JSON
	function findRelevantSections(keywords: string[]): string[] {
		if (!manualContext) return [];
		
		const sections = manualContext.split('---').filter(section => section.trim());
		const relevant = [];
		
		for (const section of sections) {
			const sectionLower = section.toLowerCase();
			const matches = keywords.filter(term => sectionLower.includes(term));
			
			if (matches.length > 0) {
				relevant.push(section.substring(0, 500));
			}
		}
		
		return relevant.slice(0, 3);
	}

	function generateIntelligentResponse(question: string, sections: any[], analysis: any): string {
		const bestSection = sections[0];
		
		// Extraer la parte más relevante del contenido
		const relevantContent = extractRelevantContent(bestSection.content, analysis.keywords);
		
		// Generar respuesta contextual
		let response = '';
		
		if (analysis.intent === 'howto' || analysis.actionType === 'procedure') {
			response = `**${extractActionFromQuestion(question)}**\n\nSegún el manual de PaxaPOS:\n\n`;
			response += formatProcedureFromContent(relevantContent);
		} else if (analysis.intent === 'definition') {
			response = `**${bestSection.title}**\n\n`;
			response += formatDefinitionFromContent(relevantContent);
		} else {
			response = `Información sobre **${bestSection.title}**:\n\n`;
			response += formatGeneralContent(relevantContent);
		}
		
		// Agregar link a la sección
		response += `\n\n${createRedirectButton(`Ver guía completa: ${bestSection.title}`, `documentation/user-guide?module=${bestSection.id}`)}`;
		
		// Si hay múltiples secciones relevantes, mencionarlas
		if (sections.length > 1) {
			response += `\n\n**También podrías revisar:**`;
			sections.slice(1).forEach(section => {
				response += `\n• [${section.title}](documentation/user-guide?module=${section.id})`;
			});
		}
		
		return response;
	}

	function extractActionFromQuestion(question: string): string {
		const questionLower = question.toLowerCase();
		
		// Extraer la acción principal de la pregunta
		if (questionLower.includes('crear') || questionLower.includes('cargar')) {
			const match = questionLower.match(/(crear|cargar)\s+([^?]*)/);
			return match ? `Cómo ${match[1]} ${match[2].trim()}` : 'Cómo realizar esta acción';
		}
		if (questionLower.includes('configurar')) {
			const match = questionLower.match(/configurar\s+([^?]*)/);
			return match ? `Cómo configurar ${match[1].trim()}` : 'Cómo configurar';
		}
		if (questionLower.includes('hacer') || questionLower.includes('realizar')) {
			const match = questionLower.match(/(hacer|realizar)\s+([^?]*)/);
			return match ? `Cómo ${match[1]} ${match[2].trim()}` : 'Cómo realizar esta tarea';
		}
		
		return question.charAt(0).toUpperCase() + question.slice(1);
	}

	function extractRelevantContent(content: string, keywords: string[]): string {
		const sentences = content.split(/[.!?]\s+/);
		const scored = sentences.map(sentence => {
			let score = 0;
			const sentenceLower = sentence.toLowerCase();
			
			for (const keyword of keywords) {
				if (sentenceLower.includes(keyword)) {
					score++;
				}
			}
			
			return { sentence, score };
		});
		
		const relevant = scored
			.filter(item => item.score > 0)
			.sort((a, b) => b.score - a.score)
			.slice(0, 5)
			.map(item => item.sentence);
		
		if (relevant.length > 0) {
			return relevant.join('. ') + '.';
		}
		
		// Si no hay coincidencias específicas, tomar el inicio
		return content.substring(0, 300) + (content.length > 300 ? '...' : '');
	}

	function formatProcedureFromContent(content: string): string {
		// Intentar extraer pasos numerados o con bullet points
		const lines = content.split('\n').filter(line => line.trim());
		const steps = [];
		
		for (const line of lines) {
			const trimmed = line.trim();
			// Detectar listas
			if (trimmed.match(/^\d+\./) || trimmed.match(/^[-*•]\s/)) {
				steps.push(trimmed);
			} else if (trimmed.includes('paso') || trimmed.includes('primero') || trimmed.includes('segundo') || trimmed.includes('luego')) {
				steps.push(trimmed);
			}
		}
		
		if (steps.length > 0) {
			return steps.map((step, index) => `**${index + 1}.** ${step.replace(/^\d+\.|-|\*|•/, '').trim()}`).join('\n\n');
		}
		
		// Si no hay pasos claros, usar formateo general
		return formatContent(content, 400);
	}

	function formatDefinitionFromContent(content: string): string {
		// Tomar las primeras oraciones que definen el concepto
		const sentences = content.split(/[.!?]\s+/).slice(0, 3);
		return sentences.join('. ') + '.';
	}

	function formatGeneralContent(content: string): string {
		return formatContent(content, 300);
	}

	// Función utilitaria para formatear contenido con límite de caracteres
	function formatContent(content: string, maxLength: number): string {
		return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
	}

	function generateFallbackResponse(question: string): string {
		// Sugerir palabras clave similares
		const questionLower = question.toLowerCase();
		const suggestions = [];
		
		if (questionLower.includes('personal') || questionLower.includes('empleado')) {
			suggestions.push('mozo', 'usuario');
		}
		if (questionLower.includes('ticket') || questionLower.includes('papel')) {
			suggestions.push('impresora', 'facturación');
		}
		if (questionLower.includes('mesa') || questionLower.includes('cliente')) {
			suggestions.push('salón', 'mozo');
		}
		if (questionLower.includes('comida') || questionLower.includes('pedido')) {
			suggestions.push('cocina', 'menú');
		}
		if (questionLower.includes('dinero') || questionLower.includes('cobrar')) {
			suggestions.push('pago', 'facturación');
		}
		
		let suggestionText = '';
		if (suggestions.length > 0) {
			suggestionText = `\n**Tal vez te refieres a:** ${suggestions.map(s => `"${s}"`).join(', ')}\n`;
		}
		
		return `No encontré información específica sobre "${question}" en el manual de PaxaPOS.
${suggestionText}
**Puedes preguntarme sobre:**
• **Mozo** - Personal y gestión de empleados
• **Impresora** - Configuración de tickets y comandas  
• **Salón** - Administración de mesas y clientes
• **Cocina** - Sistema KDS y pedidos
• **Menú** - Productos y configuración de carta
• **Pago** - Métodos de pago y cobros
• **Facturación** - AFIP y comprobantes
• **Usuario** - Crear y gestionar accesos
• **Stock** - Control de inventario
• **Estadísticas** - Reportes y análisis

${createRedirectButton('Explorar Manual Completo', 'documentation/user-guide')}`;
	}

	function createRedirectButton(text: string, url: string): string {
		return `🔗 **[${text}](${url})**`;
	}

	function formatBotMessage(text: string): string {
		// Convertir markdown a HTML
		let formatted = text
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **texto** -> <strong>texto</strong>
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium" target="_blank">$1</a>'); // [texto](url) -> <a>texto</a>
		
		return formatted;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}

	function toggleChat() {
		isOpen = !isOpen;
	}
</script>

<!-- Botón flotante profesional -->
{#if !isOpen}
	<button
		on:click={toggleChat}
		class="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
		aria-label="Abrir ChatBot de soporte"
	>
		<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
			<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
		</svg>
		<div class="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
	</button>
{/if}

<!-- Ventana del chat profesional -->
{#if isOpen}
	<div class="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-600 z-50 flex flex-col overflow-hidden">
		<!-- Header mejorado -->
		<div class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
			<div class="flex items-center space-x-3">
				<div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
					</svg>
				</div>
				<div>
					<span class="font-semibold text-sm">Asistente PaxaPOS</span>
					<div class="flex items-center space-x-1 text-xs opacity-90">
						<div class="w-2 h-2 bg-green-400 rounded-full"></div>
						<span>En línea</span>
					</div>
				</div>
			</div>
			<button 
				on:click={toggleChat}
				class="hover:bg-white/20 p-2 rounded-lg transition-colors"
				aria-label="Cerrar ChatBot"
			>
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				</svg>
			</button>
		</div>

		<!-- Mensajes con diseño profesional -->
		<div 
			bind:this={chatContainer}
			class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-700/50"
		>
			{#each messages as message}
				<div class="flex {message.isUser ? 'justify-end' : 'justify-start'}">
					{#if !message.isUser}
						<div class="flex items-start space-x-2 max-w-[85%]">
							<div class="w-7 h-7 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
								</svg>
							</div>
							<div class="bg-white dark:bg-gray-700 rounded-xl rounded-tl-md p-4 shadow-sm border border-gray-100 dark:border-gray-600">
								<div class="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
									{@html formatBotMessage(message.text)}
								</div>
								<p class="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center">
									<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
									</svg>
									{message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
								</p>
							</div>
						</div>
					{:else}
						<div class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-xl rounded-tr-md p-4 max-w-[85%] shadow-sm">
							<p class="text-sm leading-relaxed">{message.text}</p>
							<p class="text-xs opacity-90 mt-2 text-right">
								{message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
							</p>
						</div>
					{/if}
				</div>
			{/each}
			
			{#if isLoading}
				<div class="flex justify-start">
					<div class="flex items-start space-x-2">
						<div class="w-7 h-7 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
							</svg>
						</div>
						<div class="bg-white dark:bg-gray-700 rounded-xl rounded-tl-md p-4 shadow-sm border border-gray-100 dark:border-gray-600">
							<div class="flex items-center space-x-1">
								<span class="text-sm text-gray-600 dark:text-gray-300">Analizando manual</span>
								<div class="flex space-x-1">
									<div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
									<div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
									<div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Input mejorado -->
		<div class="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-600">
			<div class="flex space-x-3">
				<div class="flex-1 relative">
					<textarea
						bind:value={currentMessage}
						on:keydown={handleKeyDown}
						placeholder="Pregúntame sobre PaxaPOS..."
						class="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
						rows="1"
						disabled={isLoading}
					></textarea>
					{#if currentMessage.trim()}
						<div class="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-gray-500">
							Enter para enviar
						</div>
					{/if}
				</div>
				<button
					on:click={sendMessage}
					disabled={!currentMessage.trim() || isLoading}
					class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
				>
					{#if isLoading}
						<svg class="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.364-6.364l-2.828 2.828M9.464 14.536l-2.828 2.828m9.9-2.828l-2.828-2.828M9.464 9.464L6.636 6.636"/>
						</svg>
					{:else}
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Estilos para scroll personalizado */
	:global(*::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(*::-webkit-scrollbar-track) {
		background: #f1f1f1;
		border-radius: 4px;
	}
	
	:global(.dark *::-webkit-scrollbar-track) {
		background: #374151;
	}
	
	:global(*::-webkit-scrollbar-thumb) {
		background: #c1c1c1;
		border-radius: 4px;
	}
	
	:global(.dark *::-webkit-scrollbar-thumb) {
		background: #6b7280;
	}
	
	:global(*::-webkit-scrollbar-thumb:hover) {
		background: #a8a8a8;
	}
	
	:global(.dark *::-webkit-scrollbar-thumb:hover) {
		background: #9ca3af;
	}
</style>

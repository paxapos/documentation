<script lang="ts">
	import { onMount } from 'svelte';
	import { isDarkMode } from '$lib/stores/theme';
	import { prepareForExport } from '$lib/helpers/textReplacer';
	import { base } from '$app/paths';
	
	let isOpen = false;
	let messages: Array<{text: string, isUser: boolean, timestamp: Date}> = [];
	let currentMessage = '';
	let chatContainer: HTMLElement;
	let manualContent: any[] = [];
	let isLoading = false;

	// FAQ optimizado como fallback
	const faqResponses = {
		'mozo': `**Gestión de Personal - Mozos** 👨‍💼

Para crear y gestionar mozos en PaxaPOS:

**Pasos básicos:**
• Ir al módulo "Agregar Personal"
• Completar datos del empleado
• Asignar rol "Mozo"
• Configurar permisos y horarios

🔗 **[Ver Guía Completa: Agregar Personal](${base}/user-guide?module=23-Agregar-Personal)**`,

		'impresora': `**Configuración de Impresoras** 🖨️

Configura impresoras para tickets y comandas:

**Tipos soportados:**
• Impresoras de tickets (clientes)
• Impresoras de cocina (comandas)
• Impresoras fiscales

**Pasos:**
• Conectar impresora (USB/Red)
• Configurar en PaxaPOS
• Probar impresión

🔗 **[Ver Guía Completa: Configuración de Impresoras](${base}/user-guide?module=24-Configuración-de-Impresoras)**`,

		'salon': `**Gestión del Salón** 🏪

Administra mesas y clientes eficientemente:

**Funciones principales:**
• Administración de mesas
• Asignación de mozos
• Control de pedidos
• Estados de ocupación

🔗 **[Ver Guía Completa: Salón](${base}/user-guide?module=32-Salón)**`,

		'cocina': `**Kitchen Display System (KDS)** 👨‍🍳

Sistema digital para optimizar la cocina:

**Beneficios:**
• Elimina papeles en cocina
• Organización por tiempos
• Control visual completo
• Comunicación directa con salón

🔗 **[Ver Guía Completa: KDS](${base}/user-guide?module=33-Kitchen-Display-System-(KDS))**`,

		'pago': `**Sistema de Pagos** 💳

Gestiona múltiples formas de pago:

**Métodos disponibles:**
• Efectivo
• Tarjetas de débito/crédito
• Transferencias
• Billeteras digitales

🔗 **[Ver Guía Completa: Tipos de Pago](${base}/user-guide?module=22-Tipos-De-Pago)**`,

		'menu': `**Gestión de Menú** 📋

Administra tu carta y productos:

**Funciones:**
• Crear categorías y productos
• Configurar precios
• Gestionar disponibilidad
• Combos y promociones

🔗 **[Ver Guía Completa: Menú](${base}/user-guide?module=25-Menú)**`,

		'arqueo': `**Arqueos de Caja** 💰

Controla el dinero diariamente:

**Proceso:**
• Contar efectivo físico
• Comparar con sistema
• Registrar diferencias
• Cerrar turno

🔗 **[Ver Guía Completa: Arqueos](${base}/user-guide?module=35-Arqueos)**`,

		'facturacion': `**Facturación y AFIP** 📄

Cumple normativas fiscales:

**Comprobantes:**
• Tickets fiscales
• Facturas A, B, C
• Integración con AFIP
• Reportes automáticos

🔗 **[Ver Guía Completa: AFIP y Facturación](${base}/user-guide?module=37-AFIP-y-Facturación)**`,

		'usuario': `**Gestión de Usuarios** 👥

Administra accesos al sistema:

**Tipos de usuario:**
• Administrador • Encargado
• Mozo • Cocina

**Configuración:**
• Crear usuarios
• Asignar permisos
• Gestionar accesos

🔗 **[Ver Guía Completa: Crear Usuarios](${base}/user-guide?module=21-Crear-Usuarios)**`
	};

	onMount(async () => {
		// Cargar todo el manual usando la misma lógica que user-guide
		await loadManualContent();
		
		addMessage('¡Hola! 👋 Soy el asistente de PaxaPOS.\n\n**Puedo ayudarte con:**\n• Buscar información específica en el manual\n• Configuración de impresoras\n• Gestión de personal y mozos\n• Administración del salón\n• Sistema de cocina (KDS)\n• Facturación y AFIP\n• ¡Y mucho más!\n\n**Pregúntame algo específico:** "¿cómo configurar impresoras?" o "crear mozo"', false);
	});

	async function loadManualContent() {
		try {
			const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
				query: '?raw',
				import: 'default'
			});
			
			const files = Object.entries(modules);
			const content = [];

			for (const [path, loader] of files) {
				const markdownText = await loader() as string;
				const fileName = path.split('/').pop();
				const folderName = path.split('/').slice(-2, -1)[0]; 
				
				if (!fileName) continue;
				
				const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
				const id = fileName.replace('.md', '');

				// Aplicar prepareForExport para obtener texto limpio
				const cleanText = prepareForExport(markdownText);

				content.push({
					id,
					title: cleanTitle,
					folder: folderName.replace(/^\d+-/, '').replace(/-/g, ' '),
					rawText: cleanText,
					path: path
				});
			}

			manualContent = content;
			console.log(`📚 Manual cargado: ${content.length} módulos`);
		} catch (error) {
			console.error('Error cargando manual:', error);
		}
	}

	function addMessage(text: string, isUser: boolean) {
		messages = [...messages, { text, isUser, timestamp: new Date() }];
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 100);
	}

	function detectKeyword(question: string): string | null {
		const q = question.toLowerCase();
		
		// Detección simple pero efectiva
		if (q.includes('mozo') || q.includes('personal') || q.includes('empleado')) return 'mozo';
		if (q.includes('impresora') || q.includes('imprimir')) return 'impresora';
		if (q.includes('salón') || q.includes('salon') || q.includes('mesa')) return 'salon';
		if (q.includes('cocina') || q.includes('kds') || q.includes('kitchen')) return 'cocina';
		if (q.includes('pago') || q.includes('cobrar') || q.includes('tarjeta')) return 'pago';
		if (q.includes('menú') || q.includes('menu') || q.includes('producto')) return 'menu';
		if (q.includes('arqueo') || q.includes('caja') || q.includes('cierre')) return 'arqueo';
		if (q.includes('factura') || q.includes('afip') || q.includes('fiscal')) return 'facturacion';
		if (q.includes('usuario') && (q.includes('crear') || q.includes('agregar'))) return 'usuario';
		
		return null;
	}

	function searchInManual(question: string) {
		if (!manualContent || manualContent.length === 0) {
			return null;
		}

		const searchTerms = question.toLowerCase().split(' ').filter(term => term.length > 2);
		const results = [];

		for (const module of manualContent) {
			let score = 0;
			const textLower = module.rawText.toLowerCase();
			const titleLower = module.title.toLowerCase();

			// Puntuación por términos encontrados
			for (const term of searchTerms) {
				// Bonus si está en el título
				if (titleLower.includes(term)) {
					score += 10;
				}
				// Puntos por apariciones en el contenido
				const matches = (textLower.match(new RegExp(term, 'g')) || []).length;
				score += matches * 2;
			}

			if (score > 0) {
				results.push({
					...module,
					score,
					relevantText: extractRelevantText(module.rawText, searchTerms)
				});
			}
		}

		// Ordenar por relevancia
		results.sort((a, b) => b.score - a.score);
		return results.slice(0, 2); // Top 2 resultados
	}

	function extractRelevantText(text: string, searchTerms: string[]): string {
		const sentences = text.split(/[.!?]\n/);
		const relevantSentences = [];

		for (const sentence of sentences) {
			const sentenceLower = sentence.toLowerCase();
			let termCount = 0;
			
			for (const term of searchTerms) {
				if (sentenceLower.includes(term)) {
					termCount++;
				}
			}
			
			if (termCount > 0) {
				relevantSentences.push({ sentence: sentence.trim(), score: termCount });
			}
		}

		// Ordenar por relevancia y tomar las mejores
		relevantSentences.sort((a, b) => b.score - a.score);
		const topSentences = relevantSentences.slice(0, 3).map(s => s.sentence);
		
		return topSentences.join('. ').substring(0, 300) + (topSentences.join('. ').length > 300 ? '...' : '');
	}

	async function generateResponse(question: string): Promise<string> {
		// 1. Primero intentar búsqueda en tiempo real en el manual
		const manualResults = searchInManual(question);
		
		if (manualResults && manualResults.length > 0) {
			const bestResult = manualResults[0];
			
			let response = `**${bestResult.title}** (${bestResult.folder})\n\n`;
			response += bestResult.relevantText;
			response += `\n\n🔗 **[Ver guía completa: ${bestResult.title}](${base}/user-guide?module=${bestResult.id})**`;
			
			// Si hay más resultados, mencionarlos
			if (manualResults.length > 1) {
				response += `\n\n**También podrías revisar:**`;
				manualResults.slice(1).forEach(result => {
					response += `\n• [${result.title}](${base}/user-guide?module=${result.id})`;
				});
			}
			
			return response;
		}

		// 2. Si no encuentra en el manual, usar FAQ como fallback
		const keyword = detectKeyword(question);
		if (keyword && keyword in faqResponses) {
			return faqResponses[keyword as keyof typeof faqResponses];
		}

		// 3. Respuesta por defecto con sugerencias
		return `No encontré información específica sobre "${question}".

**Puedo ayudarte con:**
• **"mozo"** - Crear y gestionar personal
• **"impresora"** - Configurar impresión
• **"salón"** - Administrar mesas
• **"cocina"** - Sistema KDS
• **"pago"** - Métodos de pago
• **"menú"** - Gestionar productos
• **"arqueo"** - Control de caja
• **"facturación"** - AFIP y comprobantes

**Intenta ser más específico:** "¿cómo configurar impresoras?" o "crear usuario mozo"

🔗 **[Ver Manual Completo](${base}/user-guide)**`;
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

	function formatBotMessage(text: string): string {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Enlaces con emoji y formato bold: 🔗 **[texto](url)** - SIN target="_blank"
            .replace(/🔗 \*\*\[([^\]]+)\]\(([^)]+)\)\*\*/g, '<a href="$2" class="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">$1</a>')
            // Enlaces simples: [texto](url) - SIN target="_blank"
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline font-medium">$1</a>')
            // Bullet points con •
            .replace(/• /g, '<span class="text-blue-600">•</span> ');
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

<!-- Botón flotante -->
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

<!-- Ventana del chat -->
{#if isOpen}
	<div class="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-600 z-50 flex flex-col overflow-hidden">
		<!-- Header -->
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

		<!-- Mensajes -->
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
								<p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
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
								<span class="text-sm text-gray-600 dark:text-gray-300">Buscando en manual</span>
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

		<!-- Input -->
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
	:global(*::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(*::-webkit-scrollbar-track) {
		background: #f1f1f1;
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
</style>

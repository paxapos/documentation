<script lang="ts">
	import { onMount } from 'svelte';
	
	let isOpen = false;
	let messages: Array<{text: string, isUser: boolean, timestamp: Date}> = [];
	let currentMessage = '';
	let isLoading = false;
	let chatContainer: HTMLElement;

	// Cargar manual para contexto
	let manualContext = '';
	let manualSections: Array<{id: string, title: string, content: string, section: string}> = [];

	onMount(async () => {
		// Cargar el manual desde los archivos estáticos JSON (más estructurado)
		try {
			const response = await fetch('/ai/user.json');
			if (response.ok) {
				const data = await response.json();
				manualSections = data.data || [];
				// También mantener texto plano como fallback
				manualContext = manualSections.map(section => 
					`# ${section.section} - ${section.title}\n\n${section.content}`
				).join('\n\n---\n\n');
			}
		} catch (error) {
			console.error('Error cargando manual:', error);
			// Fallback al archivo de texto
			try {
				const textResponse = await fetch('/ai/user.txt');
				if (textResponse.ok) {
					manualContext = await textResponse.text();
				}
			} catch (fallbackError) {
				console.error('Error cargando fallback:', fallbackError);
			}
		}

		// Mensaje de bienvenida
		addMessage('¡Hola! 👋 Soy el asistente inteligente de PaxaPOS.\n\nPuedo ayudarte encontrando información específica en nuestro manual. Solo pregúntame lo que necesites saber sobre el sistema.', false);
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
			// Simular respuesta basada en el manual
			const response = await generateResponse(userMessage);
			addMessage(response, false);
		} catch (error) {
			addMessage('Lo siento, ocurrió un error. Por favor intenta de nuevo.', false);
		} finally {
			isLoading = false;
		}
	}

	async function generateResponse(question: string): Promise<string> {
		// Buscar respuesta específica con redirección
		const response = findSpecificResponse(question);
		if (response) {
			return response;
		}

		// Buscar en el contexto del manual como fallback
		const searchTerms = question.toLowerCase().split(' ');
		const relevantSections = findRelevantSections(searchTerms);
		
		if (relevantSections.length > 0) {
			return generateContextualResponse(question, relevantSections);
		}
		
		// Respuestas predefinidas si no encuentra contexto específico
		return getDefaultResponse(question);
	}

	function findSpecificResponse(question: string): string | null {
		const questionLower = question.toLowerCase();
		
		// Gestión de Personal
		if (questionLower.includes('mozo') || questionLower.includes('empleado') || questionLower.includes('personal')) {
			if (questionLower.includes('crear') || questionLower.includes('cargar') || questionLower.includes('agregar') || questionLower.includes('nuevo')) {
				return `Para cargar un mozo tenés que:

1. 🔴 Ir a la **página roja** (panel principal)
2. 🔘 Hacer clic en el botón **"Mozo"** 
3. ➕ Seleccionar **"Agregar Personal"**
4. 📝 Completar los datos del empleado
5. 👤 Asignar el rol **"Mozo"**

${createRedirectButton('Ir a Agregar Personal', '/user-guide?module=23-Agregar-Personal')}`;
			}
		}

		// Configuración de Impresoras
		if (questionLower.includes('impresora') || questionLower.includes('imprimir')) {
			if (questionLower.includes('configurar') || questionLower.includes('agregar') || questionLower.includes('instalar')) {
				return `Para configurar una impresora:

1. 🖨️ Ve al menú **"Configuración"**
2. 🔧 Selecciona **"Configuración de Impresoras"**
3. ➕ Haz clic en **"Agregar Nueva Impresora"**
4. 📋 Completa los datos de conexión
5. 🧪 Realiza una **prueba de impresión**

${createRedirectButton('Ir a Configuración de Impresoras', '/user-guide?module=24-Configuración-de-Impresoras')}`;
			}
		}

		// Menú y Productos
		if (questionLower.includes('menú') || questionLower.includes('menu') || questionLower.includes('producto')) {
			if (questionLower.includes('crear') || questionLower.includes('agregar') || questionLower.includes('cargar')) {
				return `Para gestionar el menú y productos:

1. 🍽️ Ve al módulo **"Menú"**
2. 📝 Selecciona **"Agregar Producto"**
3. 🏷️ Completa nombre, precio y categoría
4. 🖼️ Opcionalmente agrega una imagen
5. ✅ Guarda los cambios

${createRedirectButton('Ir a Gestión de Menú', '/user-guide?module=25-Menú')}`;
			}
		}

		// Tipos de Pago
		if (questionLower.includes('pago') || questionLower.includes('efectivo') || questionLower.includes('tarjeta')) {
			return `Para configurar tipos de pago:

1. 💳 Ve a **"Configuración"**
2. 💰 Selecciona **"Tipos de Pago"**
3. ➕ Agrega nuevos métodos de pago
4. 🔧 Configura comisiones si corresponde
5. ✅ Activa los métodos deseados

${createRedirectButton('Ir a Tipos de Pago', '/user-guide?module=22-Tipos-De-Pago')}`;
		}

		// Salón
		if (questionLower.includes('mesa') || questionLower.includes('salón') || questionLower.includes('salon')) {
			return `Para gestionar el salón y mesas:

1. 🏠 Ve al módulo **"Salón"**
2. 🪑 Configura las mesas y zonas
3. 📱 Asigna mozos a las mesas
4. 📋 Gestiona pedidos en tiempo real
5. 💼 Controla el estado de cada mesa

${createRedirectButton('Ir a Gestión de Salón', '/user-guide?module=32-Salón')}`;
		}

		// Arqueos
		if (questionLower.includes('arqueo') || questionLower.includes('cierre') || questionLower.includes('caja')) {
			return `Para realizar un arqueo de caja:

1. 💰 Ve al módulo **"Arqueos"**
2. 📊 Selecciona **"Nuevo Arqueo"**
3. 💵 Cuenta el efectivo en caja
4. 📋 Verifica los totales del sistema
5. ✅ Confirma y cierra el arqueo

${createRedirectButton('Ir a Arqueos', '/user-guide?module=35-Arqueos')}`;
		}

		// Contabilidad
		if (questionLower.includes('contabilidad') || questionLower.includes('reporte') || questionLower.includes('ventas')) {
			return `Para acceder a la contabilidad:

1. 📊 Ve al módulo **"Contabilidad"**
2. 📈 Revisa reportes de ventas
3. 💰 Consulta movimientos de caja
4. 📋 Genera reportes personalizados
5. 🧾 Exporta datos para auditoría

${createRedirectButton('Ir a Contabilidad', '/user-guide?module=34-Contabilidad')}`;
		}

		// Kitchen Display System
		if (questionLower.includes('cocina') || questionLower.includes('kds') || questionLower.includes('kitchen')) {
			return `Para usar el Kitchen Display System (KDS):

1. 🍳 Ve al módulo **"KDS"**
2. 📺 Configura las pantallas de cocina
3. 📋 Organiza pedidos por estado
4. ⏰ Gestiona tiempos de preparación
5. ✅ Marca platos como listos

${createRedirectButton('Ir a KDS', '/user-guide?module=33-Kitchen-Display-System-(KDS)')}`;
		}

		// Compras y Stock
		if (questionLower.includes('stock') || questionLower.includes('inventario') || questionLower.includes('compras')) {
			return `Para gestionar compras y stock:

1. 📦 Ve al módulo **"Compras y Stock"**
2. 📋 Registra nuevas compras
3. 📊 Controla niveles de inventario
4. ⚠️ Configura alertas de stock mínimo
5. 📈 Genera reportes de movimientos

${createRedirectButton('Ir a Compras y Stock', '/user-guide?module=36-Compras-y-Stock')}`;
		}

		// AFIP y Facturación
		if (questionLower.includes('afip') || questionLower.includes('factura') || questionLower.includes('fiscal')) {
			return `Para configurar AFIP y facturación:

1. 🧾 Ve al módulo **"AFIP y Facturación"**
2. 🔐 Configura certificados digitales
3. � Establece puntos de venta
4. 💼 Configura tipos de comprobantes
5. 📊 Genera reportes fiscales

${createRedirectButton('Ir a AFIP y Facturación', '/user-guide?module=37-AFIP-y-Facturación')}`;
		}

		// Estadísticas
		if (questionLower.includes('estadística') || questionLower.includes('estadisticas') || questionLower.includes('reporte') || questionLower.includes('análisis')) {
			return `Para ver estadísticas y reportes:

1. 📊 Ve al módulo **"Estadísticas"**
2. 📈 Revisa ventas por período
3. � Analiza performance por mozo
4. 🍽️ Consulta productos más vendidos
5. 💰 Genera reportes personalizados

${createRedirectButton('Ir a Estadísticas', '/user-guide?module=38-Estadísticas')}`;
		}

		// Propinas
		if (questionLower.includes('propina') || questionLower.includes('tip')) {
			return `Para configurar el sistema de propinas:

1. 💰 Ve a **"Configuración Extra"**
2. � Selecciona **"Propina"**
3. 💯 Configura porcentajes sugeridos
4. 👥 Establece distribución entre mozos
5. 📊 Revisa reportes de propinas

${createRedirectButton('Ir a Configuración de Propinas', '/user-guide?module=43-Propina')}`;
		}

		// Usuarios
		if (questionLower.includes('usuario') && (questionLower.includes('crear') || questionLower.includes('agregar'))) {
			return `Para crear nuevos usuarios:

1. 👤 Ve al módulo **"Crear Usuarios"**
2. ➕ Haz clic en **"Nuevo Usuario"**
3. 📝 Completa nombre y datos de acceso
4. 🔐 Asigna contraseña segura
5. ⚡ Define roles y permisos

${createRedirectButton('Ir a Crear Usuarios', '/user-guide?module=21-Crear-Usuarios')}`;
		}

		// Iniciar Sesión
		if (questionLower.includes('login') || questionLower.includes('iniciar') || questionLower.includes('sesión') || questionLower.includes('ingresar')) {
			return `Para iniciar sesión en PaxaPOS:

1. 🔐 Abre la aplicación PaxaPOS
2. 👤 Ingresa tu **usuario**
3. 🔑 Ingresa tu **contraseña**
4. 🏢 Selecciona la **sucursal** (si corresponde)
5. ✅ Haz clic en **"Ingresar"**

${createRedirectButton('Ir a Guía de Inicio de Sesión', '/user-guide?module=12-Iniciar-sesión')}`;
		}

		return null;
	}

	function createRedirectButton(text: string, url: string): string {
		// En lugar de un botón HTML, creamos un link que el usuario puede hacer clic
		return `\n\n🔗 **[${text}](${url})**\n\n¿Te ayudó esta información? ¿Necesitas ayuda con algo más?`;
	}

	function formatBotMessage(text: string): string {
		// Convertir markdown links a HTML
		let formatted = text
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **texto** -> <strong>texto</strong>
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline font-medium" target="_blank">$1</a>'); // [texto](url) -> <a>texto</a>
		
		return formatted;
	}

	function findRelevantSections(searchTerms: string[]): string[] {
		if (!manualContext) return [];
		
		const sections = manualContext.split('---').filter(section => section.trim());
		const relevant = [];
		
		for (const section of sections) {
			const sectionLower = section.toLowerCase();
			const matches = searchTerms.filter(term => sectionLower.includes(term));
			
			if (matches.length > 0) {
				relevant.push(section.substring(0, 500)); // Limitar tamaño
			}
		}
		
		return relevant.slice(0, 3); // Máximo 3 secciones
	}

	function generateContextualResponse(question: string, sections: string[]): string {
		const questionLower = question.toLowerCase();
		
		// Detectar tipo de pregunta
		if (questionLower.includes('cómo') || questionLower.includes('como')) {
			return `Según el manual de PaxaPOS:\n\n${sections[0].split('\n').slice(0, 10).join('\n')}\n\n¿Te ayuda esta información?`;
		}
		
		if (questionLower.includes('qué') || questionLower.includes('que es')) {
			return `Te explico sobre esto:\n\n${sections[0].split('\n').slice(0, 8).join('\n')}\n\n¿Necesitas más detalles?`;
		}
		
		return `Encontré esta información relevante:\n\n${sections[0].split('\n').slice(0, 10).join('\n')}\n\n¿Es lo que buscabas?`;
	}

	function getDefaultResponse(question: string): string {
		const questionLower = question.toLowerCase();
		
		if (questionLower.includes('hola') || questionLower.includes('saludos')) {
			return `¡Hola! 👋 Estoy aquí para ayudarte con PaxaPOS. 

Puedo ayudarte con:
• 👤 **Gestión de personal** (crear mozos, empleados)
• 🖨️ **Configuración de impresoras**
• 🍽️ **Gestión del menú** y productos
• 💳 **Tipos de pago**
• 🏠 **Gestión del salón** y mesas
• 💰 **Arqueos de caja**
• 📊 **Contabilidad** y reportes

¿Qué necesitas hacer hoy?`;
		}
		
		if (questionLower.includes('ayuda') || questionLower.includes('help')) {
			return `Te puedo ayudar con estas tareas comunes:

**👤 Personal:**
• "¿Cómo cargo un mozo?"
• "¿Cómo crear un empleado?"

**🖨️ Impresoras:**
• "¿Cómo configuro una impresora?"
• "¿Cómo instalar una impresora?"

**🍽️ Menú:**
• "¿Cómo agregar un producto?"
• "¿Cómo gestionar el menú?"

**💰 Caja:**
• "¿Cómo hacer un arqueo?"
• "¿Cómo cerrar la caja?"

${createRedirectButton('Ver Manual Completo', '/user-guide')}`;
		}

		// Buscar palabras clave para sugerir secciones
		if (questionLower.includes('comenzar') || questionLower.includes('empezar') || questionLower.includes('inicio')) {
			return `Para comenzar con PaxaPOS, te recomiendo seguir estos pasos:

1. 🔐 **Iniciar sesión** en el sistema
2. 👥 **Crear usuarios** y asignar roles
3. 🖨️ **Configurar impresoras**
4. 🍽️ **Cargar el menú** y productos
5. 🏠 **Configurar el salón** y mesas

${createRedirectButton('Ir a Guía de Inicio', '/user-guide?module=11-Introduccion')}`;
		}

		return `No encontré información específica sobre eso. 🤔

Puedo ayudarte con temas como:
• Crear mozos y personal
• Configurar impresoras  
• Gestionar el menú
• Configurar tipos de pago
• Hacer arqueos de caja

¿Podrías ser más específico sobre lo que necesitas hacer en PaxaPOS?

${createRedirectButton('Explorar Manual Completo', '/user-guide')}`;
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
	>
		<svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
			<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
		</svg>
		<div class="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
	</button>
{/if}

<!-- Ventana del chat -->
{#if isOpen}
	<div class="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden">
		<!-- Header mejorado -->
		<div class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
			>
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				</svg>
			</button>
		</div>

		<!-- Mensajes -->
		<div 
			bind:this={chatContainer}
			class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50"
		>
			{#each messages as message}
				<div class="flex {message.isUser ? 'justify-end' : 'justify-start'}">
					{#if !message.isUser}
						<div class="flex items-start space-x-2 max-w-[85%]">
							<div class="w-7 h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
								</svg>
							</div>
							<div class="bg-white rounded-xl rounded-tl-md p-4 shadow-sm border border-gray-100">
								<div class="text-sm text-gray-800 leading-relaxed">
									{@html formatBotMessage(message.text)}
								</div>
								<p class="text-xs text-gray-500 mt-2 flex items-center">
									<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
									</svg>
									{message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
								</p>
							</div>
						</div>
					{:else}
						<div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl rounded-tr-md p-4 max-w-[85%] shadow-sm">
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
						<div class="w-7 h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
							</svg>
						</div>
						<div class="bg-white rounded-xl rounded-tl-md p-4 shadow-sm border border-gray-100">
							<div class="flex items-center space-x-1">
								<span class="text-sm text-gray-600">Escribiendo</span>
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
		<div class="p-4 bg-white border-t border-gray-100">
			<div class="flex space-x-3">
				<div class="flex-1 relative">
					<textarea
						bind:value={currentMessage}
						on:keydown={handleKeyDown}
						placeholder="Pregúntame sobre PaxaPOS..."
						class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
						rows="1"
						disabled={isLoading}
					></textarea>
					{#if currentMessage.trim()}
						<div class="absolute bottom-2 right-2 text-xs text-gray-400">
							Enter para enviar
						</div>
					{/if}
				</div>
				<button
					on:click={sendMessage}
					disabled={!currentMessage.trim() || isLoading}
					class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
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
	/* Estilos para el scroll personalizado */
	:global(.chat-container::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(.chat-container::-webkit-scrollbar-track) {
		background: #f1f1f1;
		border-radius: 4px;
	}
	
	:global(.chat-container::-webkit-scrollbar-thumb) {
		background: #c1c1c1;
		border-radius: 4px;
	}
	
	:global(.chat-container::-webkit-scrollbar-thumb:hover) {
		background: #a8a8a8;
	}
</style>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Solución de Problemas</h1>
		<p class="text-xl text-gray-600">
			Encuentra soluciones rápidas a los problemas más comunes de PaxaPOS.
		</p>
	</div>

	<!-- Search Box -->
	<div class="mb-8">
		<div class="relative">
			<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				<svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</div>
			<input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar problemas y soluciones...">
		</div>
	</div>

	<!-- Navigation -->
	<div class="grid lg:grid-cols-4 gap-8">
		<!-- Sidebar -->
		<aside class="lg:col-span-1">
			<nav class="sticky top-8 space-y-2">
				<a href="#installation" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Instalación</a>
				<a href="#authentication" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Autenticación</a>
				<a href="#api-errors" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Errores de API</a>
				<a href="#payment-issues" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Problemas de Pago</a>
				<a href="#printer-issues" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Impresoras</a>
				<a href="#performance" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Rendimiento</a>
				<a href="#data-sync" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Sincronización</a>
				<a href="#mobile-app" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">App Móvil</a>
			</nav>
		</aside>

		<!-- Main Content -->
		<main class="lg:col-span-3 space-y-12">
			<!-- Installation Issues -->
			<section id="installation" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de Instalación</h2>
				
				<div class="space-y-6">
					<!-- Issue 1 -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Error al instalar dependencias</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> Errores de npm/yarn durante la instalación de @paxapos/sdk
						</p>
						<div class="bg-gray-50 rounded-lg p-4 mb-3">
							<pre class="text-sm text-red-600"><code>npm ERR! peer dep missing: react@^17.0.0 || ^18.0.0</code></pre>
						</div>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code># Instalar dependencias peer requeridas
npm install react@^18.0.0 react-dom@^18.0.0

# O usar --legacy-peer-deps
npm install @paxapos/sdk --legacy-peer-deps</code></pre>
						</div>
					</div>

					<!-- Issue 2 -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Problemas de CORS en desarrollo</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> Errores CORS al hacer requests a la API desde localhost
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Configurar proxy en vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.paxapos.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, '')
      }
    }
  }
}`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Authentication Issues -->
			<section id="authentication" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de Autenticación</h2>
				
				<div class="space-y-6">
					<!-- Issue 1 -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Error 401: Invalid API Key</h3>
						<p class="text-gray-600 mb-3">
							<strong>Posibles causas:</strong>
						</p>
						<ul class="list-disc list-inside text-gray-600 mb-3 space-y-1">
							<li>API Key incorrecta o expirada</li>
							<li>API Key no asociada al tenant correcto</li>
							<li>Headers de autenticación mal configurados</li>
						</ul>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Verificar configuración
const client = new PaxaPOS({
  apiKey: process.env.PAXAPOS_API_KEY, // Verificar que existe
  tenant: process.env.PAXAPOS_TENANT,   // Verificar que coincide
  baseUrl: 'https://api.paxapos.com/v1' // URL correcta
});

// Verificar headers
console.log('API Key:', client.config.apiKey.substring(0, 8) + '...');
console.log('Tenant:', client.config.tenant);`}</code></pre>
						</div>
					</div>

					<!-- Issue 2 -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Token expirado en sesiones largas</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> La aplicación funciona inicialmente pero falla después de unas horas
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Configurar refresh automático
const client = new PaxaPOS({
  apiKey: 'tu-api-key',
  tenant: 'tu-tenant',
  autoRefresh: true, // Activar refresh automático
  onTokenRefresh: (newToken) => {
    // Guardar nuevo token si es necesario
    localStorage.setItem('paxapos_token', newToken);
  }
});`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- API Errors -->
			<section id="api-errors" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Errores Comunes de API</h2>
				
				<div class="space-y-6">
					<!-- Error 400 -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Error 400: Bad Request</h3>
						<p class="text-gray-600 mb-3">
							<strong>Causa:</strong> Datos de entrada inválidos o campos requeridos faltantes
						</p>
						<div class="bg-gray-50 rounded-lg p-4 mb-3">
							<pre class="text-sm text-red-600"><code>{`{
  "error": "VALIDATION_ERROR",
  "message": "Validation failed",
  "details": [
    {
      "field": "price",
      "message": "Price must be a positive number"
    }
  ]
}`}</code></pre>
						</div>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Validar datos antes de enviar
const productData = {
  name: 'Producto', // Requerido
  price: 10.50,     // Debe ser positivo
  category: 'General' // Requerido
};

// Usar try-catch para manejar errores
try {
  const product = await client.products.create(productData);
} catch (error) {
  if (error.status === 400) {
    console.log('Errores de validación:', error.details);
  }
}`}</code></pre>
						</div>
					</div>

					<!-- Error 429 -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Error 429: Rate Limit Exceeded</h3>
						<p class="text-gray-600 mb-3">
							<strong>Causa:</strong> Demasiadas requests en poco tiempo
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Implementar retry con backoff
async function makeRequestWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.status === 429 && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
}`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Payment Issues -->
			<section id="payment-issues" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de Pago</h2>
				
				<div class="space-y-6">
					<!-- Payment Failed -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Pagos rechazados o fallidos</h3>
						<p class="text-gray-600 mb-3">
							<strong>Posibles causas:</strong>
						</p>
						<ul class="list-disc list-inside text-gray-600 mb-3 space-y-1">
							<li>Tarjeta expirada o fondos insuficientes</li>
							<li>Problemas de conectividad con gateway de pago</li>
							<li>Configuración incorrecta del procesador</li>
						</ul>
						<p class="text-gray-600 mb-3"><strong>Diagnóstico:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Verificar estado del pago
const payment = await client.payments.get(paymentId);
console.log('Estado:', payment.status);
console.log('Código de error:', payment.error_code);
console.log('Mensaje:', payment.error_message);

// Verificar configuración del gateway
const config = await client.settings.getPaymentConfig();
console.log('Gateways activos:', config.enabled_gateways);`}</code></pre>
						</div>
					</div>

					<!-- Card Reader Issues -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Problemas con lector de tarjetas</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> El lector no responde o no lee tarjetas
						</p>
						<p class="text-gray-600 mb-3"><strong>Soluciones:</strong></p>
						<ul class="list-disc list-inside text-gray-600 space-y-1">
							<li>Verificar conexión USB/Bluetooth</li>
							<li>Reiniciar el lector</li>
							<li>Actualizar drivers del dispositivo</li>
							<li>Limpiar el lector de tarjetas</li>
							<li>Verificar configuración en PaxaPOS</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- Printer Issues -->
			<section id="printer-issues" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas con Impresoras</h2>
				
				<div class="space-y-6">
					<!-- Not Printing -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">La impresora no imprime tickets</h3>
						<p class="text-gray-600 mb-3"><strong>Lista de verificación:</strong></p>
						<ul class="list-disc list-inside text-gray-600 mb-3 space-y-1">
							<li>✓ Impresora encendida y conectada</li>
							<li>✓ Papel cargado correctamente</li>
							<li>✓ Drivers instalados</li>
							<li>✓ Configuración en PaxaPOS correcta</li>
						</ul>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Probar impresión desde código
try {
  const result = await client.printer.test({
    printerId: 'main-printer',
    content: 'Test de impresión'
  });
  console.log('Resultado:', result);
} catch (error) {
  console.log('Error de impresión:', error.message);
}`}</code></pre>
						</div>
					</div>

					<!-- Format Issues -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Formato de ticket incorrecto</h3>
						<p class="text-gray-600 mb-3">
							<strong>Causa:</strong> Configuración de ancho de papel o template incorrectos
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Configurar impresora correctamente
await client.printer.configure({
  printerId: 'main-printer',
  paperWidth: 80, // 80mm para la mayoría de impresoras térmicas
  template: 'receipt_standard',
  encoding: 'utf8'
});`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Performance Issues -->
			<section id="performance" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de Rendimiento</h2>
				
				<div class="space-y-6">
					<!-- Slow Loading -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Carga lenta de la aplicación</h3>
						<p class="text-gray-600 mb-3"><strong>Optimizaciones:</strong></p>
						<ul class="list-disc list-inside text-gray-600 mb-3 space-y-1">
							<li>Implementar lazy loading de componentes</li>
							<li>Usar paginación en listas largas</li>
							<li>Cachear datos frecuentemente accedidos</li>
							<li>Optimizar imágenes de productos</li>
						</ul>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Ejemplo de paginación
const products = await client.products.list({
  page: 1,
  limit: 50,
  cache: true // Activar cache
});

// Lazy loading de componentes
const ProductModal = lazy(() => import('./ProductModal'));`}</code></pre>
						</div>
					</div>

					<!-- Memory Issues -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Alto uso de memoria</h3>
						<p class="text-gray-600 mb-3">
							<strong>Causa:</strong> Acumulación de datos en memoria sin limpiar
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Limpiar datos periódicamente
setInterval(() => {
  client.cache.clear('products');
  client.cache.clear('customers');
}, 30 * 60 * 1000); // Cada 30 minutos

// Cleanup en componentes React
useEffect(() => {
  return () => {
    // Cleanup al desmontar componente
    client.cancelRequests();
  };
}, []);`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Data Sync Issues -->
			<section id="data-sync" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de Sincronización</h2>
				
				<div class="space-y-6">
					<!-- Sync Conflicts -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Conflictos de sincronización</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> Datos diferentes entre dispositivos o versiones desactualizadas
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Forzar sincronización completa
await client.sync.force({
  entities: ['products', 'customers', 'orders'],
  strategy: 'server_wins' // Servidor tiene prioridad
});

// Verificar estado de sincronización
const status = await client.sync.getStatus();
console.log('Última sync:', status.lastSync);
console.log('Pendientes:', status.pendingChanges);`}</code></pre>
						</div>
					</div>

					<!-- Offline Issues -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Problemas en modo offline</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> Datos perdidos cuando se recupera la conexión
						</p>
						<p class="text-gray-600 mb-3"><strong>Solución:</strong></p>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`// Configurar almacenamiento offline robusto
const client = new PaxaPOS({
  apiKey: 'tu-api-key',
  tenant: 'tu-tenant',
  offline: {
    enabled: true,
    storage: 'indexeddb', // Más confiable que localStorage
    queueSize: 1000 // Máximo de operaciones en cola
  }
});

// Manejar recuperación de conexión
client.on('online', async () => {
  console.log('Conexión recuperada, sincronizando...');
  await client.sync.uploadPending();
});`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Mobile App Issues -->
			<section id="mobile-app" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Problemas de la App Móvil</h2>
				
				<div class="space-y-6">
					<!-- Crash Issues -->
					<div class="border-l-4 border-red-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">La app se cierra inesperadamente</h3>
						<p class="text-gray-600 mb-3"><strong>Diagnóstico:</strong></p>
						<ul class="list-disc list-inside text-gray-600 mb-3 space-y-1">
							<li>Verificar logs de crash en la consola del dispositivo</li>
							<li>Comprobar uso de memoria de la app</li>
							<li>Verificar versión del SO compatible</li>
							<li>Reinstalar la aplicación</li>
						</ul>
					</div>

					<!-- Bluetooth Issues -->
					<div class="border-l-4 border-yellow-400 pl-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Problemas de conexión Bluetooth</h3>
						<p class="text-gray-600 mb-3">
							<strong>Síntoma:</strong> No se conecta a impresoras o lectores Bluetooth
						</p>
						<p class="text-gray-600 mb-3"><strong>Soluciones:</strong></p>
						<ul class="list-disc list-inside text-gray-600 space-y-1">
							<li>Verificar permisos de Bluetooth en la app</li>
							<li>Reiniciar Bluetooth en el dispositivo</li>
							<li>Olvidar y volver a emparejar el dispositivo</li>
							<li>Verificar compatibilidad del dispositivo</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- Contact Support -->
			<section class="bg-blue-50 border border-blue-200 rounded-lg p-6">
				<h2 class="text-xl font-bold text-blue-900 mb-4">¿No encuentras la solución?</h2>
				<div class="space-y-4 text-blue-800">
					<p>
						Si no pudiste resolver tu problema con esta guía, nuestro equipo de soporte está aquí para ayudarte.
					</p>
					<div class="grid md:grid-cols-2 gap-4">
						<div class="bg-white rounded-lg p-4">
							<h3 class="font-semibold mb-2">Soporte Técnico</h3>
							<p class="text-sm mb-2">Para problemas de integración, APIs y desarrollo</p>
							<a href="mailto:tech-support@paxapos.com" class="text-blue-600 hover:text-blue-800 font-medium">tech-support@paxapos.com</a>
						</div>
						<div class="bg-white rounded-lg p-4">
							<h3 class="font-semibold mb-2">Soporte General</h3>
							<p class="text-sm mb-2">Para problemas de uso, configuración y preguntas generales</p>
							<a href="mailto:support@paxapos.com" class="text-blue-600 hover:text-blue-800 font-medium">support@paxapos.com</a>
						</div>
					</div>
					<p class="text-sm">
						<strong>Tiempo de respuesta:</strong> Soporte técnico en 24h, soporte general en 48h.
					</p>
				</div>
			</section>
		</main>
	</div>
</div>

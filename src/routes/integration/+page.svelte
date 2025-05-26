<!-- Integration Guide Page -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<!-- Breadcrumb -->
	<nav class="flex mb-8" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-3">
			<li class="inline-flex items-center">
				<a href="/" class="text-gray-700 hover:text-blue-600">Inicio</a>
			</li>
			<li>
				<div class="flex items-center">
					<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="ml-1 text-gray-500 md:ml-2">Guías de Integración</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar Navigation -->
		<aside class="lg:w-64 flex-shrink-0">
			<div class="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
				<h3 class="font-semibold text-gray-900 mb-4">Integraciones</h3>
				<nav class="space-y-2">
					<a href="#overview" class="block text-sm text-blue-600 hover:text-blue-800">Introducción</a>
					<a href="#payment-gateways" class="block text-sm text-gray-600 hover:text-blue-600">Pasarelas de Pago</a>
					<div class="ml-4 space-y-1">
						<a href="#stripe" class="block text-sm text-gray-500 hover:text-blue-600">Stripe</a>
						<a href="#paypal" class="block text-sm text-gray-500 hover:text-blue-600">PayPal</a>
						<a href="#mercadopago" class="block text-sm text-gray-500 hover:text-blue-600">MercadoPago</a>
					</div>
					<a href="#accounting" class="block text-sm text-gray-600 hover:text-blue-600">Sistemas Contables</a>
					<a href="#ecommerce" class="block text-sm text-gray-600 hover:text-blue-600">E-commerce</a>
					<a href="#inventory" class="block text-sm text-gray-600 hover:text-blue-600">Gestión de Inventario</a>
					<a href="#loyalty" class="block text-sm text-gray-600 hover:text-blue-600">Programas de Lealtad</a>
					<a href="#webhooks" class="block text-sm text-gray-600 hover:text-blue-600">Webhooks</a>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 min-w-0">
			<div class="bg-white rounded-lg shadow-sm border">
				<!-- Header -->
				<div class="px-6 py-8 border-b border-gray-200">
					<h1 class="text-3xl font-bold text-gray-900 mb-4">Guías de Integración</h1>
					<p class="text-lg text-gray-600">
						Conecta PaxaPOS con sistemas externos para potenciar las capacidades de tu negocio.
					</p>
				</div>

				<div class="px-6 py-8 space-y-12">
					<!-- Overview -->
					<section id="overview">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Introducción a las Integraciones</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								PaxaPOS está diseñado para integrarse fácilmente con una amplia variedad de servicios y sistemas externos. 
								Estas integraciones te permiten sincronizar datos, automatizar procesos y expandir las funcionalidades de tu punto de venta.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Tipos de Integración Disponibles</h3>
							<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
								<div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
									<div class="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">Pasarelas de Pago</h4>
									<p class="text-sm text-gray-600">Acepta pagos con tarjeta, digitales y transferencias bancarias.</p>
								</div>

								<div class="bg-green-50 border border-green-200 rounded-lg p-4">
									<div class="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">Sistemas Contables</h4>
									<p class="text-sm text-gray-600">Sincroniza automáticamente con tu software de contabilidad.</p>
								</div>

								<div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
									<div class="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">E-commerce</h4>
									<p class="text-sm text-gray-600">Conecta con tiendas online para sincronizar inventario y ventas.</p>
								</div>

								<div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
									<div class="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">Gestión de Inventario</h4>
									<p class="text-sm text-gray-600">Integra con sistemas de gestión de almacenes y proveedores.</p>
								</div>

								<div class="bg-red-50 border border-red-200 rounded-lg p-4">
									<div class="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">Programas de Lealtad</h4>
									<p class="text-sm text-gray-600">Implementa sistemas de puntos y recompensas para clientes.</p>
								</div>

								<div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
									<div class="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										<svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<h4 class="font-semibold text-gray-900 mb-2">Notificaciones</h4>
									<p class="text-sm text-gray-600">Integra con servicios de SMS, email y notificaciones push.</p>
								</div>
							</div>
						</div>
					</section>

					<!-- Payment Gateways -->
					<section id="payment-gateways">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Pasarelas de Pago</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Acepta pagos con tarjeta de crédito, débito y métodos digitales integrando con las principales pasarelas de pago.
							</p>

							<!-- Stripe Integration -->
							<div id="stripe" class="mb-8">
								<h3 class="text-xl font-semibold text-gray-900 mb-4">Integración con Stripe</h3>
								<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
									<div class="flex items-start">
										<div class="flex-shrink-0">
											<div class="bg-blue-100 rounded-lg p-2">
												<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
												</svg>
											</div>
										</div>
										<div class="ml-4">
											<h4 class="text-lg font-semibold text-blue-900">Configuración de Stripe</h4>
											<p class="text-blue-700 mb-4">
												Stripe es una de las pasarelas de pago más populares y confiables del mundo.
											</p>
											<div class="space-y-3">
												<div>
													<h5 class="font-medium text-blue-900">Paso 1: Crear cuenta en Stripe</h5>
													<p class="text-sm text-blue-700">Ve a <a href="https://stripe.com" class="underline">stripe.com</a> y crea una cuenta empresarial</p>
												</div>
												<div>
													<h5 class="font-medium text-blue-900">Paso 2: Obtener las API Keys</h5>
													<p class="text-sm text-blue-700">En el dashboard de Stripe, ve a Developers → API Keys</p>
												</div>
												<div>
													<h5 class="font-medium text-blue-900">Paso 3: Configurar en PaxaPOS</h5>
													<p class="text-sm text-blue-700">Configuración → Métodos de Pago → Stripe</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<h4 class="font-semibold text-gray-900 mb-3">Configuración Técnica</h4>
								<div class="bg-gray-100 rounded-lg p-4 mb-4">
									<pre class="text-sm"><code>{`{
  "stripe": {
    "publishable_key": "pk_live_xxxxxxxxxxxx",
    "secret_key": "sk_live_xxxxxxxxxxxx",
    "webhook_secret": "whsec_xxxxxxxxxxxx",
    "currency": "usd",
    "capture_method": "automatic"
  }
}`}</code></pre>
								</div>

								<h4 class="font-semibold text-gray-900 mb-3">Funcionalidades Disponibles</h4>
								<ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
									<li>Pagos con tarjeta de crédito y débito</li>
									<li>Pagos con Apple Pay y Google Pay</li>
									<li>Reembolsos parciales y completos</li>
									<li>Suscripciones recurrentes</li>
									<li>Protección contra fraude</li>
								</ul>
							</div>

							<!-- PayPal Integration -->
							<div id="paypal" class="mb-8">
								<h3 class="text-xl font-semibold text-gray-900 mb-4">Integración con PayPal</h3>
								<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
									<div class="flex items-start">
										<div class="flex-shrink-0">
											<div class="bg-yellow-100 rounded-lg p-2">
												<svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
												</svg>
											</div>
										</div>
										<div class="ml-4">
											<h4 class="text-lg font-semibold text-yellow-900">Configuración de PayPal</h4>
											<p class="text-yellow-700 mb-4">
												PayPal permite a tus clientes pagar con su cuenta PayPal o tarjetas de crédito.
											</p>
											<div class="space-y-2">
												<div class="bg-yellow-100 rounded p-3">
													<h5 class="font-medium text-yellow-900">Credenciales Requeridas</h5>
													<ul class="text-sm text-yellow-800 mt-1">
														<li>• Client ID de PayPal</li>
														<li>• Client Secret</li>
														<li>• Webhook ID (opcional)</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- MercadoPago Integration -->
							<div id="mercadopago" class="mb-8">
								<h3 class="text-xl font-semibold text-gray-900 mb-4">Integración con MercadoPago</h3>
								<div class="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="flex-shrink-0">
											<div class="bg-cyan-100 rounded-lg p-2">
												<svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
												</svg>
											</div>
										</div>
										<div class="ml-4">
											<h4 class="text-lg font-semibold text-cyan-900">MercadoPago para Latinoamérica</h4>
											<p class="text-cyan-700 mb-4">
												Ideal para negocios en Argentina, Brasil, Chile, Colombia, México, Perú y Uruguay.
											</p>
											<div class="bg-cyan-100 rounded p-3">
												<h5 class="font-medium text-cyan-900">Métodos de Pago Disponibles</h5>
												<ul class="text-sm text-cyan-800 mt-1">
													<li>• Tarjetas de crédito y débito</li>
													<li>• Transferencias bancarias</li>
													<li>• Efectivo en puntos de pago</li>
													<li>• Dinero en cuenta de MercadoPago</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- Accounting Systems -->
					<section id="accounting">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Sistemas Contables</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Mantén tu contabilidad actualizada automáticamente sincronizando PaxaPOS con tu software contable.
							</p>

							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-green-100 text-green-600 p-1 rounded mr-2">📊</span>
										QuickBooks
									</h4>
									<p class="text-sm text-gray-600 mb-4">
										Sincronización automática de ventas, productos e inventario con QuickBooks Online.
									</p>
									<div class="space-y-2">
										<div class="text-xs text-gray-500">
											<strong>Sincroniza:</strong> Ventas diarias, productos nuevos, niveles de inventario
										</div>
										<div class="text-xs text-gray-500">
											<strong>Frecuencia:</strong> Tiempo real o programada
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-blue-100 text-blue-600 p-1 rounded mr-2">💼</span>
										Xero
									</h4>
									<p class="text-sm text-gray-600 mb-4">
										Integración completa con Xero para pequeñas y medianas empresas.
									</p>
									<div class="space-y-2">
										<div class="text-xs text-gray-500">
											<strong>Sincroniza:</strong> Facturas, pagos, informes financieros
										</div>
										<div class="text-xs text-gray-500">
											<strong>Frecuencia:</strong> Diaria automática
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-purple-100 text-purple-600 p-1 rounded mr-2">🧾</span>
										SAP Business One
									</h4>
									<p class="text-sm text-gray-600 mb-4">
										Integración empresarial con SAP para grandes volúmenes de transacciones.
									</p>
									<div class="space-y-2">
										<div class="text-xs text-gray-500">
											<strong>Sincroniza:</strong> ERP completo, inventario, finanzas
										</div>
										<div class="text-xs text-gray-500">
											<strong>Frecuencia:</strong> Tiempo real
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-orange-100 text-orange-600 p-1 rounded mr-2">📈</span>
										Sage 50cloud
									</h4>
									<p class="text-sm text-gray-600 mb-4">
										Conecta con Sage para gestión contable y financiera avanzada.
									</p>
									<div class="space-y-2">
										<div class="text-xs text-gray-500">
											<strong>Sincroniza:</strong> Contabilidad, nómina, inventario
										</div>
										<div class="text-xs text-gray-500">
											<strong>Frecuencia:</strong> Programable
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- E-commerce Integration -->
					<section id="ecommerce">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Integración con E-commerce</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Sincroniza tu inventario y ventas entre tu tienda física y tu tienda online.
							</p>

							<div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
								<h3 class="text-lg font-semibold text-gray-900 mb-4">Plataformas E-commerce Compatibles</h3>
								<div class="grid md:grid-cols-3 gap-4">
									<div class="bg-white rounded-lg p-4 shadow-sm">
										<h4 class="font-semibold text-gray-900 mb-2">Shopify</h4>
										<p class="text-sm text-gray-600">Sincronización bidireccional de productos, inventario y órdenes.</p>
									</div>
									<div class="bg-white rounded-lg p-4 shadow-sm">
										<h4 class="font-semibold text-gray-900 mb-2">WooCommerce</h4>
										<p class="text-sm text-gray-600">Plugin dedicado para WordPress/WooCommerce.</p>
									</div>
									<div class="bg-white rounded-lg p-4 shadow-sm">
										<h4 class="font-semibold text-gray-900 mb-2">Magento</h4>
										<p class="text-sm text-gray-600">Extensión para Magento 2.x con funcionalidades avanzadas.</p>
									</div>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Configuración de Shopify</h3>
							<div class="space-y-4">
								<div class="bg-green-50 border border-green-200 rounded-lg p-4">
									<h4 class="font-semibold text-green-900 mb-2">Paso a Paso</h4>
									<ol class="list-decimal list-inside space-y-2 text-green-800 text-sm">
										<li>Instala la app "PaxaPOS Connector" desde Shopify App Store</li>
										<li>Conecta tu cuenta PaxaPOS con tu tienda Shopify</li>
										<li>Configura las reglas de sincronización</li>
										<li>Realiza la sincronización inicial</li>
										<li>Activa la sincronización automática</li>
									</ol>
								</div>

								<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
									<h4 class="font-semibold text-yellow-900 mb-2">⚠️ Consideraciones Importantes</h4>
									<ul class="list-disc list-inside space-y-1 text-yellow-800 text-sm">
										<li>La sincronización inicial puede tomar tiempo dependiendo del número de productos</li>
										<li>Se recomienda hacer una copia de seguridad antes de la primera sincronización</li>
										<li>Configura correctamente las categorías para evitar duplicados</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<!-- Webhooks -->
					<section id="webhooks">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Webhooks</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Los webhooks permiten que PaxaPOS notifique a sistemas externos cuando ocurren eventos específicos.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Eventos Disponibles</h3>
							<div class="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evento</th>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payload</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">sale.created</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Nueva venta realizada</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Datos completos de la venta</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">sale.cancelled</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Venta anulada</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ID de venta y motivo</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">product.updated</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Producto modificado</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Datos del producto</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">inventory.low</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Stock bajo</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Producto y nivel actual</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Configuración de Webhook</h3>
							<div class="bg-gray-100 rounded-lg p-4 mb-4">
								<pre class="text-sm"><code>{`POST /webhooks
{
  "url": "https://tu-servidor.com/webhook/paxapos",
  "events": ["sale.created", "sale.cancelled"],
  "secret": "tu_secreto_webhook",
  "active": true
}`}</code></pre>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Ejemplo de Payload</h3>
							<div class="bg-gray-100 rounded-lg p-4">
								<pre class="text-sm"><code>{`{
  "event": "sale.created",
  "timestamp": "2025-05-26T15:30:00Z",
  "data": {
    "sale_id": "sale_12345",
    "amount": 15.50,
    "currency": "USD",
    "items": [
      {
        "product_id": "prod_789",
        "quantity": 2,
        "unit_price": 7.75
      }
    ],
    "payment_method": "credit_card",
    "customer_id": "cust_456"
  }
}`}</code></pre>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</div>

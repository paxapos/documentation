<!-- API Documentation Page -->
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
					<span class="ml-1 text-gray-500 md:ml-2">API Reference</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar Navigation -->
		<aside class="lg:w-64 flex-shrink-0">
			<div class="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
				<h3 class="font-semibold text-gray-900 mb-4">API Reference</h3>
				<nav class="space-y-2">
					<a href="#overview" class="block text-sm text-blue-600 hover:text-blue-800">Introducción</a>
					<a href="#authentication" class="block text-sm text-gray-600 hover:text-blue-600">Autenticación</a>
					<a href="#endpoints" class="block text-sm text-gray-600 hover:text-blue-600">Endpoints</a>
					<div class="ml-4 space-y-2">
						<a href="#products" class="block text-sm text-gray-500 hover:text-blue-600">Productos</a>
						<a href="#orders" class="block text-sm text-gray-500 hover:text-blue-600">Órdenes</a>
						<a href="#customers" class="block text-sm text-gray-500 hover:text-blue-600">Clientes</a>
						<a href="#inventory" class="block text-sm text-gray-500 hover:text-blue-600">Inventario</a>
						<a href="#reports" class="block text-sm text-gray-500 hover:text-blue-600">Reportes</a>
						<a href="#payments" class="block text-sm text-gray-500 hover:text-blue-600">Pagos</a>
					</div>
					<a href="#errors" class="block text-sm text-gray-600 hover:text-blue-600">Códigos de Error</a>
					<a href="#webhooks" class="block text-sm text-gray-600 hover:text-blue-600">Webhooks</a>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 min-w-0">
			<div class="bg-white rounded-lg shadow-sm border">
				<!-- Header -->
				<div class="px-6 py-8 border-b border-gray-200">
					<h1 class="text-3xl font-bold text-gray-900 mb-4">API Reference</h1>
					<p class="text-lg text-gray-600">
						Documentación completa de la API REST de PaxaPOS para desarrolladores.
					</p>
					<div class="mt-6 flex flex-wrap gap-2">
						<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
							REST API
						</span>
						<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
							JSON
						</span>
						<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
							OAuth 2.0
						</span>
					</div>
				</div>

				<div class="px-6 py-8 space-y-12">
					<!-- Overview Section -->
					<section id="overview">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-4">
								La API de PaxaPOS proporciona acceso programático a todas las funcionalidades del sistema de punto de venta. 
								Está diseñada siguiendo los principios REST y utiliza JSON para el intercambio de datos.
							</p>
							<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
								<h4 class="font-semibold text-blue-900 mb-2">URL Base</h4>
								<code class="text-blue-800 bg-blue-100 px-2 py-1 rounded">https://api.paxapos.com/v2</code>
							</div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Características principales:</h3>
							<ul class="list-disc list-inside space-y-2 text-gray-700">
								<li>API RESTful con endpoints claros y consistentes</li>
								<li>Autenticación mediante OAuth 2.0 y API Keys</li>
								<li>Respuestas en formato JSON</li>
								<li>Paginación automática para grandes conjuntos de datos</li>
								<li>Rate limiting para proteger el sistema</li>
								<li>Webhooks para notificaciones en tiempo real</li>
							</ul>
						</div>
					</section>

					<!-- Authentication Section -->
					<section id="authentication">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Autenticación</h2>
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-4">
								PaxaPOS utiliza OAuth 2.0 para la autenticación de API. Todos los endpoints requieren autenticación 
								excepto los endpoints públicos específicamente marcados.
							</p>
							
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Obtener un Token de Acceso</h3>
							<div class="bg-gray-100 rounded-lg p-4 mb-4">
								<code class="text-sm">
									POST /oauth/token<br/>
									Content-Type: application/json<br/><br/>
									{`{
  "grant_type": "client_credentials",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}`}
								</code>
							</div>

							<h3 class="text-lg font-semibold text-gray-900 mb-3">Usar el Token</h3>
							<div class="bg-gray-100 rounded-lg p-4 mb-4">
								<code class="text-sm">
									Authorization: Bearer your_access_token
								</code>
							</div>
						</div>
					</section>

					<!-- Products Endpoints -->
					<section id="products">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Productos</h2>
						<div class="space-y-6">
							<!-- Get Products -->
							<div class="border border-gray-200 rounded-lg p-6">
								<div class="flex items-center mb-4">
									<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">GET</span>
									<code class="text-lg font-mono">/api/products</code>
								</div>
								<p class="text-gray-700 mb-4">Obtiene la lista de productos con paginación.</p>
								
								<h4 class="font-semibold mb-2">Parámetros de consulta:</h4>
								<div class="bg-gray-50 rounded p-3 mb-4">
									<ul class="text-sm space-y-1">
										<li><code>page</code> - Número de página (default: 1)</li>
										<li><code>limit</code> - Elementos por página (default: 20, max: 100)</li>
										<li><code>search</code> - Término de búsqueda</li>
										<li><code>category</code> - Filtrar por categoría</li>
										<li><code>active</code> - Filtrar por estado (true/false)</li>
									</ul>
								</div>

								<h4 class="font-semibold mb-2">Respuesta de ejemplo:</h4>
								<div class="bg-gray-100 rounded p-3 text-sm">
									<pre>{`{
  "data": [
    {
      "id": "prod_123",
      "name": "Café Americano",
      "description": "Café negro tradicional",
      "price": 2.50,
      "category": "Bebidas",
      "sku": "CAF001",
      "stock": 100,
      "active": true,
      "created_at": "2025-05-26T10:00:00Z"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 95,
    "per_page": 20
  }
}`}</pre>
								</div>
							</div>

							<!-- Create Product -->
							<div class="border border-gray-200 rounded-lg p-6">
								<div class="flex items-center mb-4">
									<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3">POST</span>
									<code class="text-lg font-mono">/api/products</code>
								</div>
								<p class="text-gray-700 mb-4">Crea un nuevo producto.</p>
								
								<h4 class="font-semibold mb-2">Cuerpo de la solicitud:</h4>
								<div class="bg-gray-100 rounded p-3 text-sm">
									<pre>{`{
  "name": "Café Americano",
  "description": "Café negro tradicional",
  "price": 2.50,
  "category": "Bebidas",
  "sku": "CAF001",
  "stock": 100,
  "active": true
}`}</pre>
								</div>
							</div>
						</div>
					</section>

					<!-- Orders Endpoints -->
					<section id="orders">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Órdenes</h2>
						<div class="space-y-6">
							<!-- Get Orders -->
							<div class="border border-gray-200 rounded-lg p-6">
								<div class="flex items-center mb-4">
									<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">GET</span>
									<code class="text-lg font-mono">/api/orders</code>
								</div>
								<p class="text-gray-700 mb-4">Obtiene la lista de órdenes.</p>
								
								<h4 class="font-semibold mb-2">Parámetros de consulta:</h4>
								<div class="bg-gray-50 rounded p-3 mb-4">
									<ul class="text-sm space-y-1">
										<li><code>status</code> - Filtrar por estado (pending, completed, cancelled)</li>
										<li><code>customer_id</code> - Filtrar por cliente</li>
										<li><code>date_from</code> - Fecha desde (YYYY-MM-DD)</li>
										<li><code>date_to</code> - Fecha hasta (YYYY-MM-DD)</li>
									</ul>
								</div>
							</div>

							<!-- Create Order -->
							<div class="border border-gray-200 rounded-lg p-6">
								<div class="flex items-center mb-4">
									<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3">POST</span>
									<code class="text-lg font-mono">/api/orders</code>
								</div>
								<p class="text-gray-700 mb-4">Crea una nueva orden.</p>
								
								<h4 class="font-semibold mb-2">Ejemplo de solicitud:</h4>
								<div class="bg-gray-100 rounded p-3 text-sm">
									<pre>{`{
  "customer_id": "cust_456",
  "items": [
    {
      "product_id": "prod_123",
      "quantity": 2,
      "unit_price": 2.50
    }
  ],
  "payment_method": "cash",
  "notes": "Sin azúcar"
}`}</pre>
								</div>
							</div>
						</div>
					</section>

					<!-- Error Codes -->
					<section id="errors">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Códigos de Error</h2>
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-4">
								La API utiliza códigos de estado HTTP estándar para indicar el éxito o fallo de las solicitudes.
							</p>
							
							<div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">200</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">OK - Solicitud exitosa</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">201</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Created - Recurso creado exitosamente</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">400</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Bad Request - Solicitud malformada</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">401</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Unauthorized - Autenticación requerida</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">403</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Forbidden - Sin permisos suficientes</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">404</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Not Found - Recurso no encontrado</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">429</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Too Many Requests - Límite de velocidad excedido</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">500</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Internal Server Error - Error del servidor</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</div>

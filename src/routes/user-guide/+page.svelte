<!-- User Guide Page -->
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
					<span class="ml-1 text-gray-500 md:ml-2">Manual de Usuario</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar Navigation -->
		<aside class="lg:w-64 flex-shrink-0">
			<div class="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
				<h3 class="font-semibold text-gray-900 mb-4">Manual de Usuario</h3>
				<nav class="space-y-2">
					<a href="#getting-started" class="block text-sm text-blue-600 hover:text-blue-800">Primeros Pasos</a>
					<a href="#pos-interface" class="block text-sm text-gray-600 hover:text-blue-600">Interfaz del POS</a>
					<a href="#sales" class="block text-sm text-gray-600 hover:text-blue-600">Realizar Ventas</a>
					<a href="#products" class="block text-sm text-gray-600 hover:text-blue-600">Gestión de Productos</a>
					<a href="#customers" class="block text-sm text-gray-600 hover:text-blue-600">Gestión de Clientes</a>
					<a href="#inventory" class="block text-sm text-gray-600 hover:text-blue-600">Control de Inventario</a>
					<a href="#reports" class="block text-sm text-gray-600 hover:text-blue-600">Reportes y Análisis</a>
					<a href="#payments" class="block text-sm text-gray-600 hover:text-blue-600">Métodos de Pago</a>
					<a href="#discounts" class="block text-sm text-gray-600 hover:text-blue-600">Descuentos y Promociones</a>
					<a href="#printing" class="block text-sm text-gray-600 hover:text-blue-600">Impresión de Tickets</a>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 min-w-0">
			<div class="bg-white rounded-lg shadow-sm border">
				<!-- Header -->
				<div class="px-6 py-8 border-b border-gray-200">
					<h1 class="text-3xl font-bold text-gray-900 mb-4">Manual de Usuario PaxaPOS</h1>
					<p class="text-lg text-gray-600">
						Guía completa para usar el sistema de punto de venta PaxaPOS de manera eficiente.
					</p>
				</div>

				<div class="px-6 py-8 space-y-12">
					<!-- Getting Started -->
					<section id="getting-started">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Primeros Pasos</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Bienvenido a PaxaPOS. Esta guía te ayudará a familiarizarte con las funciones principales del sistema 
								y te permitirá comenzar a procesar ventas de manera eficiente.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Acceso al Sistema</h3>
							<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
								<ol class="list-decimal list-inside space-y-2">
									<li>Abre tu navegador web y ve a la URL de tu PaxaPOS</li>
									<li>Ingresa tu nombre de usuario y contraseña</li>
									<li>Haz clic en "Iniciar Sesión"</li>
									<li>Serás dirigido al dashboard principal</li>
								</ol>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Dashboard Principal</h3>
							<p class="text-gray-700 mb-4">
								El dashboard te proporciona una vista general de:
							</p>
							<ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
								<li>Ventas del día actual</li>
								<li>Productos más vendidos</li>
								<li>Alertas de inventario bajo</li>
								<li>Resumen de métodos de pago utilizados</li>
								<li>Gráficos de ventas por hora</li>
							</ul>
						</div>
					</section>

					<!-- POS Interface -->
					<section id="pos-interface">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Interfaz del Punto de Venta</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								La interfaz del POS está diseñada para ser intuitiva y eficiente. Consta de varias áreas principales:
							</p>

							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="bg-gray-50 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3">🛍️ Área de Productos</h4>
									<p class="text-sm text-gray-600">
										Muestra todos los productos disponibles organizados por categorías. 
										Puedes buscar productos o navegar por categorías.
									</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3">🛒 Carrito de Compras</h4>
									<p class="text-sm text-gray-600">
										Área donde se acumulan los productos seleccionados. 
										Aquí puedes modificar cantidades y aplicar descuentos.
									</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3">💳 Panel de Pago</h4>
									<p class="text-sm text-gray-600">
										Sección para seleccionar el método de pago y 
										completar la transacción.
									</p>
								</div>
								<div class="bg-gray-50 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3">🔧 Herramientas</h4>
									<p class="text-sm text-gray-600">
										Acceso rápido a funciones como anular venta, 
										aplicar descuentos, y buscar productos.
									</p>
								</div>
							</div>
						</div>
					</section>

					<!-- Sales Process -->
					<section id="sales">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Proceso de Venta</h2>
						
						<div class="prose max-w-none">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Realizando una Venta Paso a Paso</h3>
							
							<div class="space-y-6">
								<div class="border border-gray-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
											<span class="text-blue-600 font-bold text-sm">1</span>
										</div>
										<div>
											<h4 class="font-semibold text-gray-900 mb-2">Seleccionar Productos</h4>
											<p class="text-gray-700 text-sm mb-3">
												Haz clic en los productos que el cliente desea comprar. 
												Los productos aparecerán automáticamente en el carrito.
											</p>
											<div class="bg-yellow-50 border border-yellow-200 rounded p-3">
												<p class="text-xs text-yellow-800">
													<strong>Consejo:</strong> Usa la barra de búsqueda si no encuentras un producto rápidamente.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
											<span class="text-blue-600 font-bold text-sm">2</span>
										</div>
										<div>
											<h4 class="font-semibold text-gray-900 mb-2">Ajustar Cantidades</h4>
											<p class="text-gray-700 text-sm mb-3">
												En el carrito, puedes modificar las cantidades usando los botones + y - 
												o escribiendo directamente la cantidad deseada.
											</p>
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
											<span class="text-blue-600 font-bold text-sm">3</span>
										</div>
										<div>
											<h4 class="font-semibold text-gray-900 mb-2">Aplicar Descuentos (Opcional)</h4>
											<p class="text-gray-700 text-sm mb-3">
												Si aplica, puedes agregar descuentos por producto o al total de la venta 
												usando el botón "Descuento" en el carrito.
											</p>
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
											<span class="text-blue-600 font-bold text-sm">4</span>
										</div>
										<div>
											<h4 class="font-semibold text-gray-900 mb-2">Seleccionar Método de Pago</h4>
											<p class="text-gray-700 text-sm mb-3">
												Elige el método de pago: efectivo, tarjeta de crédito, tarjeta de débito, 
												o pago mixto. El sistema calculará automáticamente el cambio si es necesario.
											</p>
										</div>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-6">
									<div class="flex items-start">
										<div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
											<span class="text-green-600 font-bold text-sm">5</span>
										</div>
										<div>
											<h4 class="font-semibold text-gray-900 mb-2">Completar la Venta</h4>
											<p class="text-gray-700 text-sm mb-3">
												Haz clic en "Finalizar Venta" para completar la transacción. 
												El sistema generará automáticamente el ticket de venta.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- Products Management -->
					<section id="products">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Gestión de Productos</h2>
						
						<div class="prose max-w-none">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Búsqueda de Productos</h3>
							<p class="text-gray-700 mb-4">
								Puedes buscar productos de varias maneras:
							</p>
							<ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
								<li><strong>Por nombre:</strong> Escribe el nombre del producto en la barra de búsqueda</li>
								<li><strong>Por código de barras:</strong> Escanea el código de barras con un lector</li>
								<li><strong>Por categoría:</strong> Navega por las categorías disponibles</li>
								<li><strong>Por código SKU:</strong> Ingresa el código SKU del producto</li>
							</ul>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Agregar Productos Nuevos</h3>
							<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
								<p class="text-blue-800 mb-2">
									<strong>Nota:</strong> Esta función puede requerir permisos especiales de administrador.
								</p>
								<ol class="list-decimal list-inside space-y-1 text-blue-700 text-sm">
									<li>Ve al menú "Productos" → "Agregar Producto"</li>
									<li>Completa la información requerida (nombre, precio, categoría)</li>
									<li>Opcionalmente agrega descripción, código de barras, y imagen</li>
									<li>Guarda el producto</li>
								</ol>
							</div>
						</div>
					</section>

					<!-- Reports -->
					<section id="reports">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Reportes y Análisis</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								PaxaPOS ofrece una variedad de reportes para ayudarte a analizar el rendimiento de tu negocio.
							</p>

							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">📊 Reporte de Ventas Diarias</h4>
									<p class="text-sm text-gray-600 mb-3">
										Resumen de todas las ventas realizadas en un día específico, 
										incluyendo totales por método de pago.
									</p>
									<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
										Menú: Reportes → Ventas Diarias
									</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">📈 Productos Más Vendidos</h4>
									<p class="text-sm text-gray-600 mb-3">
										Lista de productos ordenados por cantidad vendida en un período determinado.
									</p>
									<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
										Menú: Reportes → Productos Top
									</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">💰 Reporte de Ingresos</h4>
									<p class="text-sm text-gray-600 mb-3">
										Análisis detallado de ingresos por período, categoría de producto y método de pago.
									</p>
									<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
										Menú: Reportes → Ingresos
									</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">📦 Estado de Inventario</h4>
									<p class="text-sm text-gray-600 mb-3">
										Reporte de stock actual, productos con bajo inventario y movimientos de stock.
									</p>
									<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
										Menú: Reportes → Inventario
									</span>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Exportar Reportes</h3>
							<p class="text-gray-700 mb-4">
								Todos los reportes pueden exportarse en los siguientes formatos:
							</p>
							<ul class="list-disc list-inside space-y-1 text-gray-700">
								<li><strong>PDF:</strong> Para impresión y archivo</li>
								<li><strong>Excel:</strong> Para análisis adicional</li>
								<li><strong>CSV:</strong> Para integración con otros sistemas</li>
							</ul>
						</div>
					</section>

					<!-- Troubleshooting -->
					<section id="troubleshooting">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Solución de Problemas Comunes</h2>
						
						<div class="space-y-6">
							<div class="border border-gray-200 rounded-lg p-6">
								<h4 class="font-semibold text-gray-900 mb-3">🔍 No puedo encontrar un producto</h4>
								<div class="space-y-2 text-sm text-gray-700">
									<p><strong>Solución:</strong></p>
									<ul class="list-disc list-inside ml-4 space-y-1">
										<li>Verifica que el producto esté marcado como "activo"</li>
										<li>Revisa la ortografía en la búsqueda</li>
										<li>Busca por código SKU o código de barras</li>
										<li>Consulta con el administrador si el producto existe en el sistema</li>
									</ul>
								</div>
							</div>

							<div class="border border-gray-200 rounded-lg p-6">
								<h4 class="font-semibold text-gray-900 mb-3">🖨️ La impresora no funciona</h4>
								<div class="space-y-2 text-sm text-gray-700">
									<p><strong>Solución:</strong></p>
									<ul class="list-disc list-inside ml-4 space-y-1">
										<li>Verifica que la impresora esté encendida y conectada</li>
										<li>Revisa que haya papel en la impresora</li>
										<li>Reinicia la impresora</li>
										<li>Verifica la configuración de impresora en el sistema</li>
									</ul>
								</div>
							</div>

							<div class="border border-gray-200 rounded-lg p-6">
								<h4 class="font-semibold text-gray-900 mb-3">💳 Error en el procesamiento de pagos</h4>
								<div class="space-y-2 text-sm text-gray-700">
									<p><strong>Solución:</strong></p>
									<ul class="list-disc list-inside ml-4 space-y-1">
										<li>Verifica la conexión a internet</li>
										<li>Intenta con otro método de pago</li>
										<li>Revisa que el terminal de pagos esté funcionando</li>
										<li>Contacta al soporte técnico si el problema persiste</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</div>

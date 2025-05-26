<!-- Admin Guide Page -->
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
					<span class="ml-1 text-gray-500 md:ml-2">Guía de Administrador</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar Navigation -->
		<aside class="lg:w-64 flex-shrink-0">
			<div class="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
				<h3 class="font-semibold text-gray-900 mb-4">Guía de Admin</h3>
				<nav class="space-y-2">
					<a href="#initial-setup" class="block text-sm text-blue-600 hover:text-blue-800">Configuración Inicial</a>
					<a href="#user-management" class="block text-sm text-gray-600 hover:text-blue-600">Gestión de Usuarios</a>
					<a href="#store-settings" class="block text-sm text-gray-600 hover:text-blue-600">Configuración de Tienda</a>
					<a href="#product-management" class="block text-sm text-gray-600 hover:text-blue-600">Administración de Productos</a>
					<a href="#tax-configuration" class="block text-sm text-gray-600 hover:text-blue-600">Configuración de Impuestos</a>
					<a href="#payment-methods" class="block text-sm text-gray-600 hover:text-blue-600">Métodos de Pago</a>
					<a href="#printer-setup" class="block text-sm text-gray-600 hover:text-blue-600">Configuración de Impresoras</a>
					<a href="#backup-restore" class="block text-sm text-gray-600 hover:text-blue-600">Respaldo y Restauración</a>
					<a href="#security" class="block text-sm text-gray-600 hover:text-blue-600">Seguridad</a>
					<a href="#integrations" class="block text-sm text-gray-600 hover:text-blue-600">Integraciones</a>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 min-w-0">
			<div class="bg-white rounded-lg shadow-sm border">
				<!-- Header -->
				<div class="px-6 py-8 border-b border-gray-200">
					<h1 class="text-3xl font-bold text-gray-900 mb-4">Guía de Administrador PaxaPOS</h1>
					<p class="text-lg text-gray-600">
						Manual completo para la configuración, administración y mantenimiento del sistema PaxaPOS.
					</p>
					<div class="mt-4 flex items-center gap-2">
						<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
							⚠️ Acceso de Administrador Requerido
						</span>
					</div>
				</div>

				<div class="px-6 py-8 space-y-12">
					<!-- Initial Setup -->
					<section id="initial-setup">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Configuración Inicial del Sistema</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								La configuración inicial es crucial para el funcionamiento correcto de PaxaPOS. 
								Esta sección te guiará a través de los pasos esenciales para poner en marcha tu sistema.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Lista de Verificación Inicial</h3>
							<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
								<h4 class="font-semibold text-blue-900 mb-3">Pasos Esenciales</h4>
								<div class="space-y-3">
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Configurar información básica de la tienda</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Crear usuarios y asignar roles</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Configurar impuestos</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Configurar métodos de pago</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Configurar impresoras</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Cargar productos inicial</span>
									</label>
									<label class="flex items-center">
										<input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
										<span class="ml-2 text-blue-800">Realizar venta de prueba</span>
									</label>
								</div>
							</div>
						</div>
					</section>

					<!-- User Management -->
					<section id="user-management">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Gestión de Usuarios</h2>
						
						<div class="prose max-w-none">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Roles de Usuario</h3>
							<p class="text-gray-700 mb-4">
								PaxaPOS incluye varios roles predefinidos con diferentes niveles de acceso:
							</p>

							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2 flex items-center">
										<span class="bg-red-100 text-red-600 px-2 py-1 rounded text-xs mr-2">ADMIN</span>
										Administrador
									</h4>
									<p class="text-sm text-gray-600 mb-3">Acceso completo a todas las funciones del sistema.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside space-y-1">
										<li>Configuración del sistema</li>
										<li>Gestión de usuarios</li>
										<li>Acceso a todos los reportes</li>
										<li>Configuración de productos e inventario</li>
									</ul>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2 flex items-center">
										<span class="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs mr-2">MANAGER</span>
										Gerente
									</h4>
									<p class="text-sm text-gray-600 mb-3">Acceso a ventas, reportes y gestión de productos.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside space-y-1">
										<li>Realizar y anular ventas</li>
										<li>Ver reportes de ventas</li>
										<li>Gestión básica de productos</li>
										<li>Aplicar descuentos</li>
									</ul>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2 flex items-center">
										<span class="bg-green-100 text-green-600 px-2 py-1 rounded text-xs mr-2">CASHIER</span>
										Cajero
									</h4>
									<p class="text-sm text-gray-600 mb-3">Acceso básico para realizar ventas.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside space-y-1">
										<li>Realizar ventas</li>
										<li>Buscar productos</li>
										<li>Procesar pagos</li>
										<li>Imprimir tickets</li>
									</ul>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2 flex items-center">
										<span class="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs mr-2">VIEWER</span>
										Visualizador
									</h4>
									<p class="text-sm text-gray-600 mb-3">Acceso de solo lectura para reportes.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside space-y-1">
										<li>Ver reportes básicos</li>
										<li>Consultar productos</li>
										<li>Ver historial de ventas</li>
										<li>Sin permisos de modificación</li>
									</ul>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Crear un Nuevo Usuario</h3>
							<div class="bg-gray-50 rounded-lg p-6 mb-6">
								<ol class="list-decimal list-inside space-y-2 text-gray-700">
									<li>Ve a <strong>Configuración → Usuarios → Agregar Usuario</strong></li>
									<li>Completa la información personal (nombre, email, teléfono)</li>
									<li>Crea un nombre de usuario único</li>
									<li>Genera una contraseña segura temporal</li>
									<li>Asigna el rol apropiado</li>
									<li>Configura horarios de trabajo (opcional)</li>
									<li>Guarda el usuario y comparte las credenciales de forma segura</li>
								</ol>
							</div>
						</div>
					</section>

					<!-- Store Settings -->
					<section id="store-settings">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Configuración de Tienda</h2>
						
						<div class="prose max-w-none">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Información Básica</h3>
							<p class="text-gray-700 mb-4">
								Configura la información fundamental de tu negocio:
							</p>

							<div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
								<h4 class="font-semibold text-gray-900 mb-4">Campos Requeridos</h4>
								<div class="grid md:grid-cols-2 gap-4 text-sm">
									<div>
										<label class="block text-gray-700 font-medium mb-1">Nombre de la Tienda</label>
										<input type="text" placeholder="Mi Negocio S.A." class="w-full border border-gray-300 rounded px-3 py-2" readonly>
									</div>
									<div>
										<label class="block text-gray-700 font-medium mb-1">RUC/NIT</label>
										<input type="text" placeholder="20123456789" class="w-full border border-gray-300 rounded px-3 py-2" readonly>
									</div>
									<div>
										<label class="block text-gray-700 font-medium mb-1">Dirección</label>
										<input type="text" placeholder="Av. Principal 123" class="w-full border border-gray-300 rounded px-3 py-2" readonly>
									</div>
									<div>
										<label class="block text-gray-700 font-medium mb-1">Teléfono</label>
										<input type="text" placeholder="+51 999 888 777" class="w-full border border-gray-300 rounded px-3 py-2" readonly>
									</div>
									<div>
										<label class="block text-gray-700 font-medium mb-1">Email</label>
										<input type="email" placeholder="contacto@minegocio.com" class="w-full border border-gray-300 rounded px-3 py-2" readonly>
									</div>
									<div>
										<label class="block text-gray-700 font-medium mb-1">Moneda</label>
										<select class="w-full border border-gray-300 rounded px-3 py-2" disabled>
											<option>PEN - Sol Peruano</option>
											<option>USD - Dólar Americano</option>
											<option>EUR - Euro</option>
										</select>
									</div>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Configuración de Operación</h3>
							<div class="space-y-4">
								<div class="bg-gray-50 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
									<p class="text-sm text-gray-600 mb-3">Define los horarios de operación de tu negocio.</p>
									<div class="grid grid-cols-7 gap-2 text-xs">
										<div class="text-center">
											<div class="font-medium mb-1">Lun</div>
											<div>08:00-18:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Mar</div>
											<div>08:00-18:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Mié</div>
											<div>08:00-18:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Jue</div>
											<div>08:00-18:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Vie</div>
											<div>08:00-18:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Sáb</div>
											<div>09:00-14:00</div>
										</div>
										<div class="text-center">
											<div class="font-medium mb-1">Dom</div>
											<div class="text-red-600">Cerrado</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- Tax Configuration -->
					<section id="tax-configuration">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Configuración de Impuestos</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Configura los impuestos que se aplicarán a las ventas según la legislación local.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Tipos de Impuesto Comunes</h3>
							<div class="space-y-4 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center justify-between mb-2">
										<h4 class="font-semibold text-gray-900">IGV (Perú)</h4>
										<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">18%</span>
									</div>
									<p class="text-sm text-gray-600 mb-2">Impuesto General a las Ventas</p>
									<div class="text-xs text-gray-500">
										<span>✓ Incluido en el precio</span> | 
										<span>✓ Aplicable a productos</span> | 
										<span>✓ Aplicable a servicios</span>
									</div>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center justify-between mb-2">
										<h4 class="font-semibold text-gray-900">IVA (México)</h4>
										<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">16%</span>
									</div>
									<p class="text-sm text-gray-600 mb-2">Impuesto al Valor Agregado</p>
									<div class="text-xs text-gray-500">
										<span>✓ Incluido en el precio</span> | 
										<span>✓ Aplicable a productos</span>
									</div>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Configurar Nuevo Impuesto</h3>
							<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<h3 class="text-sm font-medium text-yellow-800">Consulta Legal Recomendada</h3>
										<p class="mt-1 text-sm text-yellow-700">
											Se recomienda consultar con un contador o asesor legal para configurar correctamente los impuestos según la legislación local.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<!-- Payment Methods -->
					<section id="payment-methods">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Configuración de Métodos de Pago</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Configura los métodos de pago disponibles en tu punto de venta.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Métodos de Pago Disponibles</h3>
							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center mb-3">
										<div class="bg-green-100 p-2 rounded-lg mr-3">
											<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg>
										</div>
										<h4 class="font-semibold text-gray-900">Efectivo</h4>
									</div>
									<p class="text-sm text-gray-600 mb-2">Pago en efectivo con cálculo automático de cambio.</p>
									<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Siempre habilitado</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center mb-3">
										<div class="bg-blue-100 p-2 rounded-lg mr-3">
											<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
											</svg>
										</div>
										<h4 class="font-semibold text-gray-900">Tarjeta de Crédito</h4>
									</div>
									<p class="text-sm text-gray-600 mb-2">Integración con procesadores de pago para tarjetas.</p>
									<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Requiere configuración</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center mb-3">
										<div class="bg-purple-100 p-2 rounded-lg mr-3">
											<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
											</svg>
										</div>
										<h4 class="font-semibold text-gray-900">Pago Digital</h4>
									</div>
									<p class="text-sm text-gray-600 mb-2">QR codes, billeteras digitales y transferencias.</p>
									<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Requiere configuración</span>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<div class="flex items-center mb-3">
										<div class="bg-orange-100 p-2 rounded-lg mr-3">
											<svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
										</div>
										<h4 class="font-semibold text-gray-900">Crédito/Vale</h4>
									</div>
									<p class="text-sm text-gray-600 mb-2">Vales de crédito y sistemas de crédito interno.</p>
									<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Opcional</span>
								</div>
							</div>
						</div>
					</section>

					<!-- Printer Setup -->
					<section id="printer-setup">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Configuración de Impresoras</h2>
						
						<div class="prose max-w-none">
							<p class="text-gray-700 mb-6">
								Configura las impresoras para tickets, facturas y reportes.
							</p>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Tipos de Impresoras Compatibles</h3>
							<div class="space-y-4 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">🖨️ Impresoras Térmicas (Recomendado)</h4>
									<p class="text-sm text-gray-600 mb-2">Ideales para tickets de venta rápidos y eficientes.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside">
										<li>Epson TM-T20, TM-T88</li>
										<li>Star TSP100, TSP650</li>
										<li>Citizen CT-S310, CT-S2000</li>
									</ul>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">🖨️ Impresoras de Matriz de Puntos</h4>
									<p class="text-sm text-gray-600 mb-2">Para formularios carbonados y documentos oficiales.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside">
										<li>Epson FX-890, LX-350</li>
										<li>OKI ML1120, ML5520</li>
									</ul>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Configuración Paso a Paso</h3>
							<div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
								<ol class="list-decimal list-inside space-y-3 text-blue-800">
									<li><strong>Conectar la impresora:</strong> USB, Ethernet o Bluetooth según el modelo</li>
									<li><strong>Instalar drivers:</strong> Descargar e instalar los drivers del fabricante</li>
									<li><strong>Configurar en PaxaPOS:</strong> Ir a Configuración → Impresoras</li>
									<li><strong>Seleccionar tipo:</strong> Tickets, Facturas, o Reportes</li>
									<li><strong>Probar impresión:</strong> Usar la función "Imprimir Prueba"</li>
								</ol>
							</div>
						</div>
					</section>

					<!-- Backup and Restore -->
					<section id="backup-restore">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Respaldo y Restauración</h2>
						
						<div class="prose max-w-none">
							<div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<h3 class="text-sm font-medium text-red-800">Importancia Crítica</h3>
										<p class="mt-1 text-sm text-red-700">
											Los respaldos regulares son esenciales para proteger la información de tu negocio. 
											Se recomienda realizar respaldos diarios automáticos.
										</p>
									</div>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Tipos de Respaldo</h3>
							<div class="grid md:grid-cols-2 gap-6 mb-8">
								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">💾 Respaldo Completo</h4>
									<p class="text-sm text-gray-600 mb-3">Incluye toda la base de datos y configuraciones.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside">
										<li>Productos y categorías</li>
										<li>Historial de ventas</li>
										<li>Usuarios y configuraciones</li>
										<li>Reportes y estadísticas</li>
									</ul>
								</div>

								<div class="border border-gray-200 rounded-lg p-4">
									<h4 class="font-semibold text-gray-900 mb-2">📊 Respaldo de Datos</h4>
									<p class="text-sm text-gray-600 mb-3">Solo información transaccional crítica.</p>
									<ul class="text-xs text-gray-600 list-disc list-inside">
										<li>Ventas del período</li>
										<li>Movimientos de inventario</li>
										<li>Información de clientes</li>
									</ul>
								</div>
							</div>

							<h3 class="text-xl font-semibold text-gray-900 mb-4">Programación de Respaldos Automáticos</h3>
							<div class="bg-gray-50 rounded-lg p-4">
								<h4 class="font-semibold text-gray-900 mb-2">Configuración Recomendada</h4>
								<ul class="text-sm text-gray-700 space-y-1">
									<li><strong>Diario:</strong> Respaldo incremental a las 23:00 hrs</li>
									<li><strong>Semanal:</strong> Respaldo completo los domingos</li>
									<li><strong>Mensual:</strong> Respaldo completo con retención de 12 meses</li>
								</ul>
							</div>
						</div>
					</section>

					<!-- Security -->
					<section id="security">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Seguridad del Sistema</h2>
						
						<div class="prose max-w-none">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Mejores Prácticas de Seguridad</h3>
							
							<div class="space-y-6">
								<div class="bg-white border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-green-100 text-green-600 p-1 rounded mr-2">🔐</span>
										Políticas de Contraseñas
									</h4>
									<ul class="text-sm text-gray-700 space-y-2">
										<li>• Mínimo 8 caracteres con mayúsculas, minúsculas y números</li>
										<li>• Cambio obligatorio cada 90 días</li>
										<li>• No reutilizar las últimas 5 contraseñas</li>
										<li>• Bloqueo temporal tras 3 intentos fallidos</li>
									</ul>
								</div>

								<div class="bg-white border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-blue-100 text-blue-600 p-1 rounded mr-2">📱</span>
										Autenticación de Dos Factores
									</h4>
									<p class="text-sm text-gray-700 mb-3">
										Se recomienda habilitar 2FA para todos los usuarios administradores.
									</p>
									<div class="text-xs text-gray-600">
										Configurar en: <code class="bg-gray-100 px-1 rounded">Configuración → Seguridad → 2FA</code>
									</div>
								</div>

								<div class="bg-white border border-gray-200 rounded-lg p-6">
									<h4 class="font-semibold text-gray-900 mb-3 flex items-center">
										<span class="bg-purple-100 text-purple-600 p-1 rounded mr-2">📋</span>
										Auditoría y Registros
									</h4>
									<p class="text-sm text-gray-700 mb-3">
										El sistema mantiene registros detallados de todas las actividades:
									</p>
									<ul class="text-sm text-gray-700 space-y-1">
										<li>• Inicios de sesión y cierres</li>
										<li>• Cambios en productos y precios</li>
										<li>• Anulaciones y devoluciones</li>
										<li>• Modificaciones de configuración</li>
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

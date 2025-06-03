<!-- Integration Guide Page -->
<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<!-- Breadcrumb -->
	<nav class="mb-8 flex" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-3">
			<li class="inline-flex items-center">
				<a href="/" class="text-gray-700 hover:text-blue-600">Inicio</a>
			</li>
			<li>
				<div class="flex items-center">
					<svg class="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span class="ml-1 text-gray-500 md:ml-2">Manual de usuario</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col gap-8 lg:flex-row">
		<!-- Sidebar Navigation -->
		<aside class="flex-shrink-0 lg:w-64">
			<div class="sticky top-24 rounded-lg border bg-white p-6 shadow-sm">
				<h3 class="mb-4 font-bold text-gray-900">📘 Introducción al Manual</h3>
				<nav class="space-y-2">
					<a
						href="#paxapos"
						class="block text-sm font-semibold text-gray-600 hover:text-blue-800"
					>
						🔹 ¿Qué es PaxaPOS?
					</a>
					<a href="#login" class="block text-sm font-semibold text-gray-600 hover:text-blue-800">
						🔐 Cómo Iniciar Sesión
					</a>
					<!-- Configuración del comercio -->
					<a
						href="#configuracion-comercio"
						class="block text-sm font-semibold text-gray-600 hover:text-blue-600"
					>
						⚙️ Configuración del Comercio
					</a>
					<div class="ml-4 space-y-1">
						<a href="#usuarios" class="block text-sm text-gray-500 hover:text-blue-600"
							>👥 Usuarios y Roles</a
						>
						<a href="#mozos" class="block text-sm text-gray-500 hover:text-blue-600"
							>🧑‍🍳 Mozos y Personal</a
						>
						<a href="#tipos" class="block text-sm text-gray-500 hover:text-blue-600"
							>💳 Tipos de Pago</a
						>
						<a href="#productos" class="block text-sm text-gray-500 hover:text-blue-600"
							>🍔 Menús y Productos</a
						>
					</div>
					<!-- Módulos principales -->
					<a
						href="#modulos-operativos"
						class="block text-sm font-semibold text-gray-600 hover:text-blue-600"
					>
						🧩 Módulos Operativos
					</a>
					<div class="ml-4 space-y-1">
						<a href="#salon" class="block text-sm text-gray-500 hover:text-blue-600"
							>🍽️ Salón y Mesas</a
						>
						<a href="#kds" class="block text-sm text-gray-500 hover:text-blue-600"
							>🖥️ KDS (Cocina)</a
						>
						<a href="#contabilidad" class="block text-sm text-gray-500 hover:text-blue-600"
							>📒 Contabilidad</a
						>
						<a href="#arqueos" class="block text-sm text-gray-500 hover:text-blue-600"
							>🧾 Arqueos y Cierres</a
						>
					</div>
					<!-- Compras y stock -->
					<a href="#compras" class="block text-sm font-semibold text-gray-600 hover:text-blue-600">
						📦 Compras y Stock
					</a>
					<a href="#afip" class="block text-sm font-semibold text-gray-600 hover:text-blue-600">
						🧾 AFIP y Facturación
					</a>
					<!-- Estadísticas -->
					<a
						href="#estadisticas"
						class="block text-sm font-semibold text-gray-600 hover:text-blue-600"
					>
						📊 Estadísticas y Reportes
					</a>
					<!-- Extras -->
					<a href="#extra" class="block text-sm font-semibold text-gray-600 hover:text-blue-600">
						🧠 Funcionalidades Extra
					</a>
					<div class="ml-4 space-y-1">
						<a href="#buchon" class="block text-sm text-gray-500 hover:text-blue-600"
							>🤖 Buchón Bot</a
						>
						<a href="#propina" class="block text-sm text-gray-500 hover:text-blue-600"
							>💸 Gestión de Propinas</a
						>
					</div>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="min-w-0 flex-1">
			<div class="rounded-lg border bg-white shadow-sm">
				<!-- Header -->
				<div class="border-b border-gray-200 px-6 py-8">
					<h1 class="mb-4 text-3xl font-bold text-gray-900">PaxaPOS Documentation</h1>
					<p class="text-lg text-gray-600">
						Documentación oficial para PaxaPOS - Sistema gastronomico completo.
					</p>
				</div>

				<div class="space-y-12 px-6 py-8">
					<!-- Overview -->
					<section id="paxapos">
						<div class="prose max-w-none">
							<p class="mb-6 text-gray-700"></p>
							<div
								class="space-y-4 rounded-lg bg-white p-6 leading-relaxed text-gray-800 shadow-md"
							>
								<h1 class="text-2xl font-bold text-blue-700">📘 Bienvenido a PaxaPOS</h1>

								<p>
									<strong>PaxaPOS</strong> es mucho más que un sistema de gestión:<br />
									es el corazón digital de tu negocio gastronómico.
								</p>

								<p>
									Diseñado para que puedas controlar <strong
										>todo tu restaurante desde un solo lugar</strong
									>, PaxaPOS te permite tomar comandas, gestionar tu stock, analizar tus ventas,
									controlar al personal y mucho más, de forma rápida, simple y eficiente.
								</p>

								<p>
									Olvidate del papel, los errores y el desorden.<br />
									Con PaxaPOS tenés una herramienta moderna, visual e intuitiva que te acompaña en cada
									momento del día: desde el primer café de la mañana hasta el cierre de caja por la noche.
								</p>

								<h2 class="mt-6 text-xl font-semibold text-gray-700">
									¿Qué podés hacer con PaxaPOS?
								</h2>

								<ul class="list-disc pl-6">
									<li>✅ Gestion de salon y mozos</li>
									<li>✅ Tomar pedidos desde salon</li>
									<li>✅ Facturar con AFIP de forma automática</li>
									<li>✅ Estadisticas y reportes</li>
									<li>✅ Control de stock</li>
									<li>✅ Gestionar delivery, propinas, reservas y más</li>
								</ul>

								<p class="mt-4">
									Este manual te va a guiar paso a paso para que puedas aprovechar al máximo cada
									módulo. No necesitás ser técnico ni experto:
									<strong>PaxaPOS está hecho para vos</strong>.
								</p>
							</div>
							<br />
							<section id="login" class="mb-8 rounded-lg bg-white p-6 text-gray-800 shadow-md">
								<h2 class="mb-4 text-2xl font-semibold text-blue-700">🔐 Cómo iniciar sesión</h2>

								<p class="mb-4">Para ingresar a tu cuenta en PaxaPOS, seguí estos pasos:</p>

								<ol class="list-decimal space-y-2 pl-5">
									<li>
										Ingresá a <a
											href="https://app.paxapos.com"
											target="_blank"
											class="text-blue-600 underline">https://app.paxapos.com</a
										>
									</li>
									<li>Escribí tu <strong>usuario</strong> y <strong>contraseña</strong></li>
									<li>Presioná el botón <strong>"Iniciar sesión"</strong></li>
								</ol>

								<p class="mt-6">
									Si tus datos son correctos, ingresarás al panel principal del sistema donde podrás
									operar según tus permisos.
								</p>

								<hr class="my-6 border-gray-300" />

								<h3 class="mb-2 text-xl font-medium text-gray-700">🔁 ¿Olvidaste tu contraseña?</h3>
								<p class="mb-3">Si no recordás tu contraseña, podés recuperarla fácilmente:</p>

								<ol class="list-decimal space-y-2 pl-5">
									<li>
										En la pantalla de inicio de sesión, hacé clic en <strong
											>"¿Olvidaste tu contraseña?"</strong
										>
									</li>
									<li>Ingresá tu dirección de correo electrónico</li>
									<li>
										Revisá tu bandeja de entrada y seguí las instrucciones del correo para
										restablecerla
									</li>
								</ol>

								<p class="mt-4">
									Si no recibís el correo, recordá revisar tu carpeta de <em>spam</em> o contactá a tu
									administrador para asistencia.
								</p>
							</section>
							<!-- Configuracion del comercio-->
							<section
								id="configuracion-comercio"
								class="mb-8 rounded-lg bg-white p-6 text-gray-800 shadow-md"
							>
								<h2 class="mb-4 text-2xl font-semibold text-blue-700">
									⚙️ Configuración del Comercio
								</h2>

								<p class="mb-6">
									En esta sección vas a poder configurar todos los aspectos fundamentales de tu
									comercio para que el sistema funcione de acuerdo a tu operación diaria. A
									continuación se listan los módulos principales que podés personalizar.
								</p>

								<h3 id="usuarios" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									👥 Usuarios y Roles
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Escribí aquí cómo agregar usuarios, asignar roles como mozo, cajero, supervisor, etc. -->
								</p>

								<h3 id="mozos" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									🧑‍🍳 Mozos y Personal
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Describí cómo crear mozos, vincularlos con el mapa del salón o asignarlos a sectores. -->
								</p>

								<h3 id="tipos" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									💳 Tipos de Pago
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Agregá la explicación sobre métodos de pago aceptados (efectivo, QR, tarjeta, transferencia). -->
								</p>

								<h3 id="productos" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									🍔 Productos, Menús y Recetas
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Instrucciones para cargar productos, menús por categoría y configurar recetas con ingredientes. -->
								</p>

								<!--<h3 class="mb-2 mt-6 text-xl font-medium text-gray-700">📂 Categorías e IVA</h3>
								<p class="mb-4 text-gray-600">
									Explicá cómo configurar iva y categorias
								</p>

								<h3 class="mb-2 mt-6 text-xl font-medium text-gray-700">📅 Turnos y Horarios</h3>
								<p class="mb-4 text-gray-600">
									 Explicá cómo configurar turnos de trabajo, franjas horarias, horarios de apertura/cierre. 
								</p>

								<h3 class="mb-2 mt-6 text-xl font-medium text-gray-700">🔄 Reseteo y Backup</h3>
								<p class="mb-4 text-gray-600">
									 Información sobre cómo resetear datos de prueba, realizar respaldos o limpiar configuraciones. 
								</p>
								-->
							</section>
							<!--modulos operativos-->
							<section
								id="modulos-operativos"
								class="mb-8 rounded-lg bg-white p-6 text-gray-800 shadow-md"
							>
								<h2 class="mb-4 text-2xl font-semibold text-blue-700">🧩 Módulos Operativos</h2>

								<p class="mb-6">
									Estos módulos incluyen todas las funciones necesarias para el trabajo diario del
									restaurante, desde atender a los clientes hasta organizar las tareas internas.
									Ayudan a que el equipo trabaje mejor y los clientes tengan una buena experiencia.
								</p>

								<h3 id="salon" class=" salon mb-2 mt-6 text-xl font-medium text-gray-700">
									🍽️ Salón y Mesas
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Escribí aquí cómo agregar usuarios, asignar roles como mozo, cajero, supervisor, etc. -->
								</p>

								<h3 id="kds" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									🖥️ KDS (Cocina)
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Describí cómo crear mozos, vincularlos con el mapa del salón o asignarlos a sectores. -->
								</p>

								<h3 id="contabilidad" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									📒 Contabilidad
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Agregá la explicación sobre métodos de pago aceptados (efectivo, QR, tarjeta, transferencia). -->
								</p>

								<h3 id="arqueos" class="mb-2 mt-6 text-xl font-medium text-gray-700">
									🧾 Arqueos y Cierres
								</h3>
								<p class="mb-4 text-gray-600">
									<!-- Instrucciones para cargar productos, menús por categoría y configurar recetas con ingredientes. -->
								</p>
							</section>

							<!-- Módulo: Compras y Stock -->
							<section class="mb-6 rounded-lg bg-white p-6 shadow">
								<h2 id="compras" class="mb-4 text-2xl font-semibold text-blue-700">
									📦 Compras y Stock
								</h2>
								<p class="text-gray-600">
									<!-- Detalles sobre control de inventario, ingreso de mercadería, stock mínimo y pedidos a proveedores. -->
								</p>
							</section>

							<!-- Módulo: AFIP y Facturación -->
							<section class="mb-6 rounded-lg bg-white p-6 shadow">
								<h2 id="afip" class="mb-4 text-2xl font-semibold text-blue-700">
									🧾 AFIP y Facturación
								</h2>
								<p class="text-gray-600">
									<!-- Cómo configurar CUIT, puntos de venta, conexión con AFIP y tipos de comprobantes habilitados. -->
								</p>
							</section>

							<!-- Módulo: Estadísticas y Reportes -->
							<section class="mb-6 rounded-lg bg-white p-6 shadow">
								<h2 id="estadisticas" class="mb-4 text-2xl font-semibold text-blue-700">
									📊 Estadísticas y Reportes
								</h2>
								<p class="text-gray-600">
									<!-- Visualización de ventas por producto, rendimiento por mozo, horarios pico y reportes contables. -->
								</p>
							</section>

							<!-- Módulo: Funcionalidades Extra -->
							<section class="mb-6 rounded-lg bg-white p-6 shadow">
								<h2 id="extra" class="mb-4 text-2xl font-semibold text-blue-700">
									🧠 Funcionalidades Extra
								</h2>
								<p class="mb-4 text-gray-600">
									<!-- Funciones adicionales que potencian el uso del sistema. -->
								</p>

								<h3 id="buchon" class="mb-2 ml-2 mt-4 text-xl font-medium text-gray-700">
									🤖 Buchón Bot
								</h3>
								<p class="mb-4 ml-2 text-gray-600">
									<!-- Asistente virtual para responder preguntas frecuentes del negocio o enviar alertas. -->
								</p>

								<h3 id="propina" class="mb-2 ml-2 mt-4 text-xl font-medium text-gray-700">
									💸 Gestión de Propinas
								</h3>
								<p class="ml-2 text-gray-600">
									<!-- Reparto automático de propinas por turno, rol o porcentaje según configuración del local. -->
								</p>
							</section>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</div>

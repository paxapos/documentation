<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
	<!-- Header -->
	<header class="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm border-b border-gray-200/20 dark:border-gray-700/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center py-6">
				<div class="flex items-center">
					<h1 class="text-3xl font-bold text-gray-900 dark:text-white">PaxaPOS</h1>
					<span class="ml-2 text-lg text-gray-600 dark:text-gray-300">Documentación</span>
				</div>
				<div class="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
					v2.0
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Hero Section -->
		<section class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
				Centro de Documentación PaxaPOS
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				Encuentra toda la información necesaria para desarrolladores y usuarios del sistema de punto de venta más completo.
			</p>
		</section>

		<!-- Documentation Categories -->
		<div class="grid md:grid-cols-2 gap-8 mb-16">
			<!-- Developer Documentation -->
			<div class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
				<a href="/dev" class="block">
					<div class="p-8">
						<div class="flex items-center mb-4">
							<div class="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
								<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Documentación para Desarrolladores</h3>
						</div>
						<p class="mb-6 text-gray-600 dark:text-gray-300">
						APIs, guías de integración, SDKs y recursos técnicos para desarrolladores.
						</p>
					</div>
				</a>	
			</div>
			<!-- User Documentation -->
			<a href="/user-guide" class="block">
				<div class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
					<div class="p-8">
						<div class="mb-4 flex items-center">
							<div class="rounded-lg bg-green-100 dark:bg-green-900/50 p-3">
								<svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 class="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Manual de Usuario</h3>
						</div>
						<p class="mb-6 text-gray-600 dark:text-gray-300">
							Guías paso a paso para usuarios finales y administradores del sistema.
						</p>
					</div>
				</div>
			</a>
		</div>

		<!-- Quick Start Section -->
		<section class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16 border border-gray-200/50 dark:border-gray-700/50">
			<h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Inicio Rápido</h3>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Explora las APIs</h4>
					<p class="text-sm text-gray-600 dark:text-gray-300">Comienza explorando nuestra documentación de APIs REST y GraphQL</p>
				</div>
				<div class="text-center">
					<div class="bg-green-100 dark:bg-green-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-green-600 dark:text-green-400 font-bold text-lg">2</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Prueba el Sistema</h4>
					<p class="text-sm text-gray-600 dark:text-gray-300">Utiliza nuestro entorno de pruebas para familiarizarte con PaxaPOS</p>
				</div>
				<div class="text-center">
					<div class="bg-purple-100 dark:bg-purple-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-purple-600 dark:text-purple-400 font-bold text-lg">3</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Implementa</h4>
					<p class="text-sm text-gray-600 dark:text-gray-300">Sigue nuestras guías de implementación para poner en marcha tu sistema</p>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="text-center text-gray-600 dark:text-gray-400">
				<p>&copy; 2025 PaxaPOS. Todos los derechos reservados.</p>
			</div>
		</div>
	</footer>
</div>

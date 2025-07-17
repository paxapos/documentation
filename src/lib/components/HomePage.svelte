<script>
	import { base } from '$app/paths';
	import { FEATURE_FLAGS } from '$lib/helpers/constants';
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
	<!-- Main Content -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Hero Section -->
		<section class="text-center {FEATURE_FLAGS.showDevDocumentation ? 'mb-16' : 'mb-20'}">
			<h2 class="{FEATURE_FLAGS.showDevDocumentation ? 'text-4xl' : 'text-5xl'} font-bold text-gray-900 dark:text-white mb-4">
				Centro de Documentación PaxaPOS
			</h2>
			<p class="{FEATURE_FLAGS.showDevDocumentation ? 'text-xl' : 'text-2xl'} text-gray-600 dark:text-gray-300 {FEATURE_FLAGS.showDevDocumentation ? 'max-w-2xl' : 'max-w-3xl'} mx-auto">
				Encuentra toda la información necesaria para desarrolladores y usuarios del sistema de punto de venta más completo.
			</p>
		</section>

		<!-- Documentation Categories -->
		<div class="grid {FEATURE_FLAGS.showDevDocumentation ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-2xl mx-auto'} gap-8 mb-16">
			<!-- Developer Documentation - Solo visible si está habilitado -->
			{#if FEATURE_FLAGS.showDevDocumentation}
			<div class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
				<a href="{base}/dev" class="block">
					<div class="p-8">
						<div class="flex items-center mb-3 sm:mb-4">
							<div class="bg-blue-100 dark:bg-blue-900/50 p-2.5 sm:p-3 rounded-lg">
								<svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<h3 class="text-xl sm:text-2xl font-bold ml-3 sm:ml-4 text-gray-900 dark:text-white">Documentación para Desarrolladores</h3>
						</div>
						<p class="mb-4 sm:mb-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
						APIs, guías de integración, SDKs y recursos técnicos para desarrolladores.
						</p>
					</div>
				</a>	
			</div>
			{/if}
			<!-- User Documentation -->
			<a href="{base}/user-guide" class="block">
				<div class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer border border-gray-200/50 dark:border-gray-700/50">
					<div class="{FEATURE_FLAGS.showDevDocumentation ? 'p-6 sm:p-8' : 'p-8 sm:p-12'}">
						<div class="mb-3 sm:mb-4 flex {FEATURE_FLAGS.showDevDocumentation ? 'items-center' : 'flex-col items-center text-center'}">
							<div class="rounded-lg bg-green-100 dark:bg-green-900/50 {FEATURE_FLAGS.showDevDocumentation ? 'p-2.5 sm:p-3' : 'p-3 sm:p-4'}">
								<svg class="{FEATURE_FLAGS.showDevDocumentation ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-6 w-6 sm:h-8 sm:w-8'} text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 class="{FEATURE_FLAGS.showDevDocumentation ? 'ml-3 sm:ml-4' : 'mt-3 sm:mt-4'} {FEATURE_FLAGS.showDevDocumentation ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} font-bold text-gray-900 dark:text-white">Manual de Usuario</h3>
						</div>
						<p class="mb-4 sm:mb-6 text-gray-600 dark:text-gray-300 {FEATURE_FLAGS.showDevDocumentation ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} {FEATURE_FLAGS.showDevDocumentation ? '' : 'text-center'} leading-relaxed">">
							Guías paso a paso para usuarios finales y administradores del sistema.
						</p>
					</div>
				</div>
			</a>
		</div>

		<!-- Quick Start Section -->
		<section class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg {FEATURE_FLAGS.showDevDocumentation ? 'p-8' : 'p-12'} mb-16 border border-gray-200/50 dark:border-gray-700/50 {FEATURE_FLAGS.showDevDocumentation ? '' : 'max-w-4xl mx-auto'}">
			<h3 class="{FEATURE_FLAGS.showDevDocumentation ? 'text-2xl' : 'text-3xl'} font-bold mb-6 text-gray-900 dark:text-white {FEATURE_FLAGS.showDevDocumentation ? '' : 'text-center'}">Inicio Rápido</h3>
			<div class="grid md:grid-cols-3 {FEATURE_FLAGS.showDevDocumentation ? 'gap-6' : 'gap-8'}">
				<div class="text-center">
					<div class="bg-blue-100 dark:bg-blue-900/50 {FEATURE_FLAGS.showDevDocumentation ? 'w-12 h-12' : 'w-16 h-16'} rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-blue-600 dark:text-blue-400 font-bold {FEATURE_FLAGS.showDevDocumentation ? 'text-lg' : 'text-xl'}">1</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white {FEATURE_FLAGS.showDevDocumentation ? 'mb-2' : 'mb-3 text-lg'}">Explora las APIs</h4>
					<p class="{FEATURE_FLAGS.showDevDocumentation ? 'text-sm' : 'text-base'} text-gray-600 dark:text-gray-300">Comienza explorando nuestra documentación de APIs REST y GraphQL</p>
				</div>
				<div class="text-center">
					<div class="bg-green-100 dark:bg-green-900/50 {FEATURE_FLAGS.showDevDocumentation ? 'w-12 h-12' : 'w-16 h-16'} rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-green-600 dark:text-green-400 font-bold {FEATURE_FLAGS.showDevDocumentation ? 'text-lg' : 'text-xl'}">2</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white {FEATURE_FLAGS.showDevDocumentation ? 'mb-2' : 'mb-3 text-lg'}">Prueba el Sistema</h4>
					<p class="{FEATURE_FLAGS.showDevDocumentation ? 'text-sm' : 'text-base'} text-gray-600 dark:text-gray-300">Utiliza nuestro entorno de pruebas para familiarizarte con PaxaPOS</p>
				</div>
				<div class="text-center">
					<div class="bg-purple-100 dark:bg-purple-900/50 {FEATURE_FLAGS.showDevDocumentation ? 'w-12 h-12' : 'w-16 h-16'} rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-purple-600 dark:text-purple-400 font-bold {FEATURE_FLAGS.showDevDocumentation ? 'text-lg' : 'text-xl'}">3</span>
					</div>
					<h4 class="font-semibold text-gray-900 dark:text-white {FEATURE_FLAGS.showDevDocumentation ? 'mb-2' : 'mb-3 text-lg'}">Implementa</h4>
					<p class="{FEATURE_FLAGS.showDevDocumentation ? 'text-sm' : 'text-base'} text-gray-600 dark:text-gray-300">Sigue nuestras guías de implementación para poner en marcha tu sistema</p>
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

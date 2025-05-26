<script>
	import { onMount } from 'svelte';
  	import { marked } from 'marked';

  	let htmlContent_one = '';
  	let htmlContent_two = '';
  	let htmlContent_svelte = '';
  	onMount(async () => {
  	  	const res_one = await fetch('/src/routes/dev/docs/one.md');
  	  	const res_two = await fetch('/src/routes/dev/docs/two.md');
  	  	const res_svelte = await fetch('/src/routes/dev/docs/svelte-mdtest.md');
  	  	
		const text_one = await res_one.text();
		const text_two = await res_two.text();
		const text_svelte = await res_svelte.text();
  	  	
		// @ts-ignore
  	  	htmlContent_one = marked(text_one);
  	  	// @ts-ignore
  	  	htmlContent_two = marked(text_two);
  	  	// @ts-ignore
		htmlContent_svelte = marked(text_svelte);
  	});
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-800 dark:text-white">
	<!-- Breadcrumb --> 
	<nav class="flex mb-8" aria-label="Breadcrumb">
		<ol class="inline-flex items-center space-x-1 md:space-x-3">
			<li class="inline-flex items-center">
				<a href="/" class="hover:text-blue-600">Inicio</a>
			</li>
			<li>
				<div class="flex items-center">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
					</svg>
					<span class="ml-1 md:ml-2">Guías de Integración</span>
				</div>
			</li>
		</ol>
	</nav>

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar Navigation -->
		<aside class="lg:w-64 flex-shrink-0">
			<div class="rounded-lg border p-6 sticky top-24">
				<h3 class="font-semibold mb-4">Integraciones</h3>
				<nav class="space-y-2">
					<a href="#overview" class="block text-sm text-blue-600 hover:text-blue-800">Introducción</a>
					<a href="#payment-gateways" class="block text-sm hover:text-blue-600">Pasarelas de Pago</a>
				</nav>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 min-w-0">
			<div class="rounded-lg border">
				<!-- Header -->
				<div class="px-6 py-8 border-b border-gray-200">
					<h1 class="text-3xl font-bold mb-4">Guías de Integración</h1>
					<p class="text-lg">
						Conecta PaxaPOS con sistemas externos para potenciar las capacidades de tu negocio.
					</p>
				</div>

				<div class="py-8 space-y-12">
					<!-- Overview -->
					<section id="overview">
						<div class="markdown-body markdown-paxapos">
							{@html htmlContent_one}
						</div>
					</section>

					<section>
						<div class="markdown-body markdown-paxapos">
							{@html htmlContent_svelte}
						</div>
					</section>

					<section class="p-6 border">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section>

					<section class="p-6 border">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section>

					<!-- Payment Gateways -->
					<section id="payment-gateways">
						<div class="markdown-body markdown-paxapos">
							{@html htmlContent_two}
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</div>

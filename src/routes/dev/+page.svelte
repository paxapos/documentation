<script>
	import { onMount } from 'svelte';
  	import { marked } from 'marked';

	/**
	 * @type {any[]}
	 */
	let html_content_list = []
  	onMount(async () => {
		try {
      		const modules = import.meta.glob('/src/routes/dev/docs/*.md', { query: '?raw', import: 'default' });
      		const files = Object.entries(modules);
      		// @ts-ignore
      		const htmlPromises = files.map(async ([path, loader]) => {
        		const markdownText = await loader();
				const fileName = path.split('/').pop();
        		return {
        		  	fileName,
        		  	// @ts-ignore
        		  	html: marked(markdownText)
        		};
      		});

    	  	html_content_list = await Promise.all(htmlPromises);
    	} catch (error) {
    	  console.error('Failed to load markdown files:', error);
    	}
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
				  	{#each html_content_list as item}
				  	  	<a href="#{item.fileName.replace('.md', '')}" class="block text-sm hover:text-blue-800">
				  	  	  	{item.fileName.replace('.md', '').replace(/-/g, ' ')}
				  	  	</a>
				  	{/each}
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
					{#each html_content_list as content}
					  	<section id={content.fileName.replace('.md', '')} class="markdown-body markdown-paxapos">
					    	{@html content.html}
					  	</section>
					{/each}
				</div> 
			</div>
		</main>
	</div>
</div>

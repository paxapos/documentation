<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	let grouped_content = [];

	onMount(async () => {
		try {
			const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
				query: '?raw',
				import: 'default'
			});
			const files = Object.entries(modules);

			const contentMap = {};

			for (const [path, loader] of files) {
				const markdownText = await loader();
				const fileName = path.split('/').pop();
				const folderName = path.split('/').slice(-2, -1)[0]; 
				const cleanTitle = fileName.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
				const id = fileName.replace('.md', '');

				if (!contentMap[folderName]) {
					contentMap[folderName] = [];
				}

				contentMap[folderName].push({
					id,
					title: cleanTitle,
					html: marked(markdownText),
					rawMarkdown: markdownText 
				});
			}

			Object.values(contentMap).forEach(items => {
				items.sort((a, b) => {
					const numA = parseInt(a.id.split('-')[0]);
					const numB = parseInt(b.id.split('-')[0]);
					return numA - numB;
				});
			});

	
			grouped_content = Object.entries(contentMap).map(([folder, items]) => ({
				folder: folder.replace(/^\d+-/, '').replace(/-/g, ' '),
				items
			})).sort((a, b) => {
				const numA = parseInt(a.folder.split(' ')[0]);
				const numB = parseInt(b.folder.split(' ')[0]);
				return numA - numB;
			});

		} catch (error) {
			console.error('Failed to load markdown files:', error);
		}
	});


</script>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white">
	<nav class="space-y-4"></nav>

	<div class="flex flex-col gap-8 lg:flex-row">
		<aside class="max-h-[calc(115vh-10rem)] flex-shrink-0 lg:w-65">
			<div class="sticky top-24 rounded-lg border p-6">
				<h3 class="mb-4 font-semibold">Manual de usuario</h3>
				<nav class="space-y-0.5">
					{#each grouped_content as group}
						<div>
							<h4 class="s mb-2 font-semibold">{group.folder}</h4>
							<nav class="space-y-0.5 pl-4">
								{#each group.items as item}
									<a href="#{item.id}" class="block text-sm hover:text-blue-800">
										{item.title}
									</a>
								{/each}
							</nav>
						</div>
					{/each}
				</nav>
			</div>
		</aside>

		<main class="min-w-0 flex-1">
			<div class="rounded-lg border">

				<div class="space-y-12 py-8">
					{#each grouped_content as group}
						{#each group.items as content}
							<section id={content.id} class="markdown-body markdown-paxapos">
								{@html content.html}
							</section>
						{/each}
					{/each}
				</div>
			</div>
		</main>

	</div>
</div>
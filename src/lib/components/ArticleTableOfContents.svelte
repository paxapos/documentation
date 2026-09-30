<script lang="ts">
	import type { ArticleHeading } from '$lib/types';
	import { stripEmojis } from '$lib/utils/contentUtils';

	let {
		headings,
		mobile = false,
	}: {
		headings: ArticleHeading[];
		mobile?: boolean;
	} = $props();

	let activeId = $state('');
	let menuOpen = $state(false);
	let menuRoot = $state<HTMLDivElement>();
	let activeTitle = $derived(
		stripEmojis(headings.find((heading) => heading.id === activeId)?.title ?? ''),
	);

	$effect(() => {
		if (!mobile || !menuOpen) return;

		const handlePointer = (event: PointerEvent) => {
			if (menuRoot && !menuRoot.contains(event.target as Node)) menuOpen = false;
		};
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') menuOpen = false;
		};

		document.addEventListener('pointerdown', handlePointer);
		window.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('pointerdown', handlePointer);
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	$effect(() => {
		if (headings.length === 0) return;
		if (!activeId) activeId = headings[0].id;

		const elements = headings
			.map((heading) => document.getElementById(heading.id))
			.filter((element): element is HTMLElement => element !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

				if (visibleEntry) activeId = visibleEntry.target.id;
			},
			{ rootMargin: '-96px 0px -70% 0px' },
		);

		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	});
</script>

{#snippet links()}
	<nav aria-label="En esta página">
		<ul class="space-y-1 border-l border-gray-200 dark:border-gray-700">
			{#each headings as heading (heading.id)}
				<li>
					<a
						href="#{heading.id}"
						onclick={() => (menuOpen = false)}
						aria-current={activeId === heading.id ? 'location' : undefined}
						class="block border-l-2 py-1.5 text-sm leading-5 transition-colors {heading.level === 3
							? 'pl-6'
							: 'pl-3'} {activeId === heading.id
							? '-ml-px border-blue-600 font-medium text-blue-700 dark:border-blue-400 dark:text-blue-300'
							: 'border-transparent text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'}"
					>
						{stripEmojis(heading.title)}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/snippet}

{#if headings.length > 0}
	{#if mobile}
		<div bind:this={menuRoot} class="relative min-w-0 flex-1 xl:hidden">
			<button
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				class="flex h-9 w-full min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-left text-sm text-gray-700 hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600"
			>
				<span class="shrink-0 font-semibold text-gray-900 dark:text-white">En esta página</span>
				{#if activeTitle}
					<span class="min-w-0 truncate text-gray-500 dark:text-gray-400">· {activeTitle}</span>
				{/if}
				<svg
					class="ml-auto h-4 w-4 shrink-0 text-gray-500 transition-transform dark:text-gray-400 {menuOpen
						? 'rotate-180'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" />
				</svg>
			</button>
			{#if menuOpen}
				<div
					class="absolute top-full right-0 z-40 mt-2 max-h-[60vh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-800"
				>
					{@render links()}
				</div>
			{/if}
		</div>
	{:else}
		<aside class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8">
			<p class="mb-3 text-sm font-semibold text-gray-950 dark:text-white">En esta página</p>
			{@render links()}
		</aside>
	{/if}
{/if}
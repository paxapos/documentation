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
		<details class="group border-y border-gray-200 py-1 xl:hidden dark:border-gray-700">
			<summary
				class="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden dark:text-white"
			>
				<span>En esta página</span>
				<svg
					class="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180 dark:text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" />
				</svg>
			</summary>
			<div class="pt-2 pb-3">{@render links()}</div>
		</details>
	{:else}
		<aside class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8">
			<p class="mb-3 text-sm font-semibold text-gray-950 dark:text-white">En esta página</p>
			{@render links()}
		</aside>
	{/if}
{/if}
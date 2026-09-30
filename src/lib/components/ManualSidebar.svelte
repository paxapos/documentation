<script lang="ts">
	import { tick } from 'svelte';
	import { base } from '$app/paths';
	import { stripEmojis } from '$lib/utils/contentUtils';

	interface ManualCategory {
		title: string;
		modules: Array<{ slug: string; title: string }>;
	}

	let {
		categories,
		currentSlug,
		mobile = false,
		open = false,
		onClose = () => {},
	}: {
		categories: ManualCategory[];
		currentSlug: string;
		mobile?: boolean;
		open?: boolean;
		onClose?: () => void;
	} = $props();

	let openCategories = $state<Record<string, boolean>>({});
	let closeButton = $state<HTMLButtonElement>();

	function isOpen(category: ManualCategory): boolean {
		if (openCategories[category.title] !== undefined) {
			return openCategories[category.title];
		}
		return category.modules.some((module) => module.slug === currentSlug);
	}

	function toggleCategory(category: ManualCategory) {
		openCategories[category.title] = !isOpen(category);
	}

	$effect(() => {
		if (!mobile || !open) return;

		const previousOverflow = document.body.style.overflow;
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeydown);
		tick().then(() => closeButton?.focus());

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#snippet navigation()}
	<nav aria-label="Temario del manual" class="space-y-5">
		{#each categories as category (category.title)}
			{@const categoryOpen = isOpen(category)}
			<section>
				<button
					type="button"
					onclick={() => toggleCategory(category)}
					class="flex min-h-11 w-full items-center justify-between gap-3 text-left text-xs font-semibold tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					aria-expanded={categoryOpen}
				>
					<span>{stripEmojis(category.title)}</span>
					<svg
						class="h-4 w-4 shrink-0 transition-transform {categoryOpen ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" />
					</svg>
				</button>

				{#if categoryOpen}
					<ul class="mt-1 space-y-0.5 border-l border-gray-200 dark:border-gray-700">
						{#each category.modules as module (module.slug)}
							<li>
								<a
									href="{base}/user-guide/{module.slug}"
									onclick={mobile ? onClose : undefined}
									aria-current={currentSlug === module.slug ? 'page' : undefined}
									class="block border-l-2 px-3 py-2 text-sm leading-5 transition-colors {currentSlug === module.slug
										? '-ml-px border-blue-600 font-medium text-blue-700 dark:border-blue-400 dark:text-blue-300'
										: 'border-transparent text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white'}"
								>
									{stripEmojis(module.title)}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}
	</nav>
{/snippet}

{#if mobile}
	{#if open}
		<button
			type="button"
			class="fixed inset-x-0 top-16 bottom-0 z-50 bg-gray-950/40 lg:hidden"
			onclick={onClose}
			aria-label="Cerrar temario"
		></button>
		<aside
			class="fixed top-16 bottom-0 left-0 z-50 w-[min(88vw,20rem)] overflow-y-auto bg-white px-5 py-4 shadow-xl lg:hidden dark:bg-gray-900"
			aria-label="Temario del manual"
		>
			<div class="mb-4 flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
				<p class="font-semibold text-gray-950 dark:text-white">Manual de Usuario</p>
				<button
					bind:this={closeButton}
					type="button"
					onclick={onClose}
					class="inline-flex h-11 w-11 items-center justify-center text-gray-500 hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-400 dark:hover:text-white"
					aria-label="Cerrar temario"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			{@render navigation()}
		</aside>
	{/if}
{:else}
	<aside class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 pb-8">
		<p class="mb-4 text-sm font-semibold text-gray-950 dark:text-white">Manual de Usuario</p>
		{@render navigation()}
	</aside>
{/if}
import { getModuleCategories } from '$lib/server/markdown';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
	const categories = await getModuleCategories();
	return {
		moduleCategories: categories.map((c) => ({
			title: c.title,
			modules: c.modules.map((m) => ({ slug: m.slug, title: m.title })),
		})),
	};
};

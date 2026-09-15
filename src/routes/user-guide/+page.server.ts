import { getModuleCategories } from '$lib/server/markdown';
import { categoryIcons, iconForModule, resolveIconSvg } from '$lib/server/icons';
import type { ModuleCard } from '$lib/types';
import type { PageServerLoad } from './$types';

export const prerender = true;

const ICON_CLASS = 'h-6 w-6 text-blue-600 sm:h-7 sm:w-7 dark:text-blue-400';

export const load: PageServerLoad = async () => {
	const moduleCategories = await getModuleCategories();

	const modulesList: ModuleCard[] = [];
	const categoryIconSvg: Record<string, string> = {};

	for (const category of moduleCategories) {
		const catIcon = categoryIcons[category.title];
		if (catIcon) categoryIconSvg[category.title] = resolveIconSvg(catIcon, ICON_CLASS);

		for (const module of category.modules) {
			modulesList.push({
				slug: module.slug,
				title: module.title,
				description: `Guía completa sobre ${module.title.toLowerCase()}`,
				category: category.title,
				iconSvg: resolveIconSvg(iconForModule(module.slug, category.title), ICON_CLASS),
			});
		}
	}

	return { modulesList, categoryIconSvg };
};

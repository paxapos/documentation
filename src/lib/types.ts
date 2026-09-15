export interface ModuleEntry {
	slug: string;
	title: string;
	fileName: string;
}

export interface ModuleCategory {
	title: string;
	order: number;
	modules: ModuleEntry[];
}

export interface ModuleSeo {
	title: string;
	description: string;
	keywords: string;
}

/** Tarjeta del índice del manual (ícono ya resuelto a SVG inline). */
export interface ModuleCard {
	slug: string;
	title: string;
	description: string;
	category: string;
	iconSvg: string;
}

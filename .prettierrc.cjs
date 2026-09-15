/** @type {import("prettier").Options} */
module.exports = {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	...require('../../.prettierrc.json'),
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};

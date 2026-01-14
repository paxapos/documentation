/** @type {import("prettier").Options} */
module.exports = {
    ...require('../../.prettierrc'),
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
    overrides: [
        { files: '*.svelte', options: { parser: 'svelte' } },
    ],
};

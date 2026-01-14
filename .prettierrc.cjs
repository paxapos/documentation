/** @type {import("prettier").Options} */
module.exports = {
    ...require('../../.prettierrc.json'),
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
    overrides: [
        { files: '*.svelte', options: { parser: 'svelte' } },
    ],
};

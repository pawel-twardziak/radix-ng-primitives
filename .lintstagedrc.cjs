module.exports = {
    '*.{css,scss,md,mdx,yml,json,js,cjs,mjs,html,ts,astro}': 'prettier --write',
    '*.{css,scss}': 'stylelint --max-warnings=0 --fix'
};

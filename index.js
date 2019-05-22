const ps = require('postcss-prefix-selector');
const postcss = require('postcss');

export default function (string, selector, exclude = []) {
    const out = postcss().use(ps({
        prefix: selector,
        exclude
    })).process(string).css;
    return out;
}

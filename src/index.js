const ps = require('postcss-prefix-selector'),
      postcss = require('postcss');

export default function (original, selector, exclude = []) {
    const out = postcss().use(ps({
        prefix: selector,
        exclude
    })).process(original).css;
    return out;
}

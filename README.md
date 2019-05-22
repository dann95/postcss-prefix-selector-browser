# postcss-prefix-selector-browser

## Build
```bash
npm i -g browserify
npm run build
```

## Usage
```js
const prefixCSSSelector = require('postcss-prefix-selector-browser');


const originalCSS = `
    .bar {
        font-size: 16px;
    }
`;

const prefixed = prefixCSSSelector(originalCSS, '.foo');

console.log(prefixed);

```


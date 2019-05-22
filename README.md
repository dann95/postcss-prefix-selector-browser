# postcss-prefix-selector-browser



## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

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

## Dependencies

- [babel-cli](https://ghub.io/babel-cli): Babel command line.
- [babel-core](https://ghub.io/babel-core): Babel compiler core.
- [babel-eslint](https://ghub.io/babel-eslint): Custom parser for ESLint
- [babel-istanbul](https://ghub.io/babel-istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests and browser tests. Built for scale
- [babel-plugin-add-module-exports](https://ghub.io/babel-plugin-add-module-exports): Fix babel/babel#2212
- [babel-preset-es2015](https://ghub.io/babel-preset-es2015): Babel preset for all es2015 plugins.
- [babelify](https://ghub.io/babelify): Babel browserify transform
- [browserify](https://ghub.io/browserify): browser-side require() the node way
- [postcss](https://ghub.io/postcss): Tool for transforming styles with JS plugins
- [postcss-prefix-selector](https://ghub.io/postcss-prefix-selector): Prefix all CSS rules with a selector

## Dev Dependencies

None

## License

ISC

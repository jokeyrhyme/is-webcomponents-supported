# is-webcomponents-supported.js

does this JavaScript environment support WebComponents?

[![npm module](https://img.shields.io/npm/v/is-webcomponents-supported.svg)](https://www.npmjs.com/package/is-webcomponents-supported)


## What is this?

I made this after reading [Polymer for the Performance obsessed](https://aerotwist.com/blog/polymer-for-the-performance-obsessed/)
by [Paul Lewis](https://twitter.com/aerotwist), who mentions a "good little
check" devised by [Glen Maddern](https://twitter.com/glenmaddern).


## Supported Environments

__coming soon__


## Usage

- CommonJS (e.g. Node.js, Browserify, etc) use [index.js](index.js)

```javascript
var isWebComponentsSupported = require('is-webcomponents-supported');
console.log(isWebComponentsSupported()); // `true` or `false`
```

- [dist/index.js](dist/index.js) is a UMD-wrapped version for browsers and AMD

```html
<script src="dist/index.js"></script>
<script>
console.log(isWebComponentsSupported()); // `true` or `false`
</script>
```

## API

### `isWebComponentsSupported(doc)`

- @param {`Document`} [doc] a DOM Document to run tests against
- @returns {`Boolean`} does this JavaScript environment support WebComponents?

This project uses the global `document` object if you do not provide one. If you
are performing other tests against non-global implementations for some reason,
then this allows you to pass in any such object.

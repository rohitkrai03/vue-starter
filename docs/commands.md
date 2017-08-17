# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).

### `npm run dev`

> Starts a Node.js local development server.

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps

### `npm run build`

> Build assets for production. See [Integrating with Backend Framework](backend.md) for more details.

- JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

### `npm run unit`

> Run unit tests in PhantomJS with [Karma](https://karma-runner.github.io/). See [Unit Testing](unit.md) for more details.

- Supports ES2015+ in test files.
- Supports all webpack loaders.
- Easy [mock injection](http://vuejs.github.io/vue-loader/en/workflow/testing-with-mocks.html).

### `npm run lint`

> Run eslint for all the given js files in your src folder and show the result.

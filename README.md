# vue-starter

> A Vue.js starter kit that lets you focus on more programming and less configruation.

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible.


## Why? 

At [Scroll.in](https://scroll.in), we have chosen Vue.js as our primary JS framework. So, while working on various Vue.js projects we felt like we needed a template for all our projects which can be used for better consistency and coding style across developers.

We could always use the in built templates that come with vue-cli, but somehow I felt [webpack-simple](https://github.com/vuejs-templates/webpack-simple) was too simple and lacked certain necessary features to be opted as a standard boilerplate for our projects. On the other hand, [webpack](https://github.com/vuejs-templates/webpack-simple) seemed too complex to understand what's going on inside it specially for a junior dev it would be nightmare to make some config changes to it.

This is why this project came to life. With certain decisions already made to make life easier for programmers and certain feature built in right out of the box.

This project started as a webpack-simple template with incremental addition of features and configs to suit the needs of a medium to large vue.js project. It is inspired by the webpack template but without all the complexity.


## Documentation

- [For this template](http://arkpod.in/vue-starter): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init rohitkrai03/vue-starter my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- This boilerplate uses [ESLint](http://eslint.org/) as the linter, and uses the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) preset with some small customizations.

- Option to install and setup [vue-router](https://github.com/vuejs/vue-router)

- Utilities like `lodash` and `axios` come installed out of the box. You can opt out while installing template from vue-cli as well. Also, webpack will be configured accordingly to make use of only the modules that are used and not the whole library to reduce bundle size.

- An option to install a UI Library
  - [Element](http://element.eleme.io/#/en-US) A Vue 2.0 based component library for developers, designers and product managers. Also, configured to use only the required modules and components in the final bundle.
  - [Foundation](http://foundation.zurb.com/) A responsive front-end framework. Imported minified css file in index.html. Js file can be imported as per the need as well.

- A converge like config management system which merges different config files based on environment and app mode.

- A well defined folder structure for medium to large Vue.js projects.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

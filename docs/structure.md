# Project Structure

```bash
.
├── build                           # webpack config files
│   ├── webpack.base.js
│   ├── webpack.development.js
│   ├── webpack.production.js
│   └── webpack.testing.js
├── config                          # main project config
│   ├── config.app.js               # contains app specific values. {app} can be any name eg - scroll, st
│   ├── config.base.js              # contains default values
│   ├── config.development.js       # contains values used in dev environment
│   ├── config.production.js        # conatins values used in prod environment
│   └── index.js
├── dist
├── src
│   ├── assets                      # module assets (processed by webpack)
│   │   └── logo.png
│   ├── js
│   │   ├── components              # ui components
│   │   │   └── Hello.vue
│   │   ├── router
│   │   │   └── index.js
│   │   ├── utils
│   │   │   └── .gitkeep
│   │   ├── views
│   │   │   └── .gitkeep
│   │   ├── App.vue                 # main app component
│   │   └── main.js                 # app entry file
│   └── scss
│       └── style.scss
├── static                          # pure static assets (directly copied)
│   └── .gitkeep
├── test
│   └── unit                        # unit tests
│       ├── specs
│       │   └── Hello.spec.js       # test spec files
│       ├── .eslintrc
│       ├── index.js                # test build entry file
│       └── karma.conf.js           # test runner config file
├── .babelrc                        # babel config
├── .editorconfig                   # editor config
├── .eslintignore                   # config for ignored files and dirs for eslint
├── .eslintrc.js                    # eslint config
├── .gitignore
├── README.md
├── index.html                      # index.html template
├── package.json                    # build scripts and dependencies
└── webpack.config.js               # webpack config entry point
```


### `build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.js`.

### `config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup. It merges three different config files to give a unified configuration management based on the environaments and app modes.

- baseConfig (`config.base.js`)
- envConfig (`config.${env}.js` based on the environment (dev, prod) the app is running)
- appConfig (`config.${appMode}.js` based on the appMode. This file can be renamed as per your app name like `config.scroll.js` or added a new file for `config.satyagrah.js`)


### `src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### `static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](static.md) for more details.

### `test/unit`

Contains unit test related files. See [Unit Testing](unit.md) for more details.

### `index.html`

This is the **template** `index.html` for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will be automatically injected into this template to render the final HTML.

### `package.json`

The NPM package meta file that contains all the build dependencies and [build commands](commands.md).

const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const ESlintFormatter = require('eslint-friendly-formatter');

const defaults = {
  __DEV__: JSON.stringify(config.isDev),
  __PROD__: JSON.stringify(config.isProd),
  'process.env.NODE_ENV': `"${config.env}"`,
  __APP_MODE__: `"${config.appMode}"`,
};

const webpackConfig = {
  entry: './src/js/main.js',
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: config.isDev ? './js/[name].js' : './js/[name].[chunkhash].js',
    chunkFilename: config.isDev ? './js/[id].js' : './js/chunk.[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin(defaults),
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: ESlintFormatter,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: config.isProd,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          name: path.posix.join(config.assetsSubDirectory, './img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join(config.assetsSubDirectory, './media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join(config.assetsSubDirectory, './fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};

module.exports = webpackConfig;

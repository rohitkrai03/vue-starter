const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');

module.exports = () => {
  const env = process.env.NODE_ENV;
  const envConfig = require(`./build/webpack.${env}`);

  return webpackMerge(baseConfig, envConfig);
};
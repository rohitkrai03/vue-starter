const merge = require('webpack-merge');

const DEV = 'development';
const PROD = 'production';
const env = process.env.NODE_ENV || DEV;
const isDev = env === DEV;
const isProd = env === PROD;

const appMode = process.env.NODE_APP_MODE || 'app';

const defaults = {
  env,
  isProd,
  isDev,
  appMode,
};

const baseConfig = require('./config.base');
const envConfig = require(`./config.${env}`);
const appConfig = require(`./config.${appMode}`);

const config = merge(defaults, baseConfig, envConfig, appConfig);

module.exports = config;

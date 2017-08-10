const path = require('path');
const commonPaths = require('./common-paths');

const config = {
  entry: './src/main.js',
  output: {
    filename: 'build.js',
    path: commonPaths.outputPath,
    publicPath: '/dist/',
  }
};

module.exports = config;
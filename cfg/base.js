'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
let additionalPaths = [];
let {URL_BASE} = require('./../src/services');

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  devServer: {
    contentBase: './src/',
    inline:true,
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    // proxy: {
    //   [`${URL_BASE}*`]: {
    //     target: 'https://other-server.example.com',
    //     secure: false
    //   }
    // }
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: [path.join(__dirname, './../src/common')],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      images: `${defaultSettings.srcPath}/images/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      services: `${defaultSettings.srcPath}/services/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {},
  postcss: function () {
    return [];
  }
};
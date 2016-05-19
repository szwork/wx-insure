/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss/,
        loader: `style!css?modules&localIdentName=[name]_[local]_[hash:base64:3]!sass`
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url?limit=1000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};

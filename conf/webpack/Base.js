'use strict';  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');

const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  get includedPackages() {
    return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @return {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  get testPathAbsolute() {
    return path.resolve('./test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    const styleModulesQuery = {
      modules: true,
    };
    const cssModulesQuery = Object.assign({
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]',
    }, styleModulesQuery);

    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      devServer: {
        contentBase: './src/',
        publicPath: '/assets/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000,
      },
      entry: './index.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            loader: 'babel-loader',
            query: {
              presets: [ 'es2015', 'stage-2', 'react' ],
            },
          },
          {
            test: /\.css$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader', options: cssModulesQuery },
              { loader: 'postcss-loader' },
            ],
          },
          {
            test: /\.scss$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader', options: styleModulesQuery },
              { loader: 'sass-loader' },
            ],
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'file-loader',
          },
          {
            test: /\.js$/,
            loaders: [
              // NOTE: Moved this to .babelrc
              { loader: 'babel-loader' },
            ]
          },
        ],
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: './assets/',
      },
      plugins: [],
      resolve: {
        alias: {
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          containers: `${this.srcPathAbsolute}/containers/`,
          modules: `${this.srcPathAbsolute}/modules/`,
          services: `${this.srcPathAbsolute}/services/`,
          states: `${this.srcPathAbsolute}/states/`,
          themes: `${this.srcPathAbsolute}/themes/`,
          types: `${this.srcPathAbsolute}/types/`,
        },
        extensions: ['.js', '.css', '.scss'],
        modules: [
          this.srcPathAbsolute,
          'node_modules',
        ],
      },
    };
  }
}

module.exports = WebpackBaseConfig;

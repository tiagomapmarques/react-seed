
const path = require('path');

const srcPath = './src/';
const appPath = `${srcPath}app/`;
const distPath = './dist/';
const pathAbsolute = path.resolve('.');
const srcPathAbsolute = path.resolve(srcPath);
const appPathAbsolute = path.resolve(appPath);
const distPathAbsolute = path.resolve(distPath);

const entry = 'index.tsx';
const output = 'app.js';

const devPort = 8000;

const cssOptions = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]-[local]-[hash:base64:5]',
};

const baseEnvironment = {
  context: appPathAbsolute,
  devServer: {
    contentBase: appPath,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    port: devPort,
  },
  entry: `./${entry}`,
  output: {
    path: distPathAbsolute,
    filename: output,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    alias: {
      containers: `${appPathAbsolute}/containers/`,
      models: `${appPathAbsolute}/models/`,
      modules: `${appPathAbsolute}/modules/`,
      services: `${appPathAbsolute}/services/`,
      states: `${appPathAbsolute}/states/`,
      types: `${appPathAbsolute}/types/`,
      config: `${pathAbsolute}/environments/index.js`,
      themes: `${srcPathAbsolute}/themes/`,
      normalize: `${pathAbsolute}/node_modules/normalize-scss/sass/normalize/_import-now`,
      bulma: `${pathAbsolute}/node_modules/bulma-scss-components/bulma`,
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        loaders: [
          { loader: 'ts-loader' },
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssOptions },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
};

module.exports = baseEnvironment;

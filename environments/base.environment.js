
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

const defaultStyleOptions = {
  modules: true,
};
const cssOptions = Object.assign({
  importLoaders: 1,
  localIdentName: '[name]-[local]-[hash:base64:5]',
}, defaultStyleOptions);

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
      themes: `${srcPathAbsolute}/themes/`,
      config: `${pathAbsolute}/environments/index.js`,
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
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssOptions },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: defaultStyleOptions },
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

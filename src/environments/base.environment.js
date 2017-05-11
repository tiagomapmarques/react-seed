
const path = require('path');

const srcPath = './src/';
const appPath = `${srcPath}app/`;
const distPath = './dist/';
const srcPathAbsolute = path.resolve(srcPath);
const appPathAbsolute = path.resolve(appPath);
const distPathAbsolute = path.resolve(distPath);

const entry = 'index.js';
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
  devtool: 'eval',
  devServer: {
    contentBase: appPath,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    port: devPort,
  },
  entry: `./${entry}`,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: appPathAbsolute,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-2', 'react' ],
        },
      },
      {
        test: /\.js$/,
        loaders: [
          // NOTE: Moved this to .babelrc
          { loader: 'babel-loader' },
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
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    path: distPathAbsolute,
    filename: output,
    publicPath: '/',
  },
  plugins: [],
  resolve: {
    alias: {
      containers: `${appPathAbsolute}/containers/`,
      modules: `${appPathAbsolute}/modules/`,
      services: `${appPathAbsolute}/services/`,
      states: `${appPathAbsolute}/states/`,
      types: `${appPathAbsolute}/types/`,
      config: `${srcPathAbsolute}/environments/index.js`,
      themes: `${srcPathAbsolute}/themes/`,

      // FIXME: remove this hack on RadioButton when these issues are resolved
      // NOTE:  also have a look at 'radio.component.js'
      'react-toolbox/lib/radio$': `${appPathAbsolute}/modules/react-toolbox`,
      'react-toolbox/lib/real-radio$': `${srcPathAbsolute}/../node_modules/react-toolbox/lib/radio`,
    },
    extensions: ['.js', '.css', '.scss'],
    modules: [
      srcPathAbsolute,
      'node_modules',
    ],
  },
};

module.exports = baseEnvironment;

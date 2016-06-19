var path = require('path');
var webpack = require('webpack');
var BASE_DIR = process.cwd();
var COMPONENT_FILE = 'react-nested-json-table';
var COMPONENT_NAME = 'ReactNestedJsonTable';
var plugins = [];

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  COMPONENT_FILE += '.min';
}

var config = {
  devtool: 'sourcemap',
  entry: path.resolve(BASE_DIR, getPackageMain()),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: COMPONENT_FILE + '.js',
    sourceMapFilename: COMPONENT_FILE + '.map',
    library: COMPONENT_NAME,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: 'style-loader!css-loader'} 
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};

module.exports = config;

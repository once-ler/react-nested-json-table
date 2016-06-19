var path = require('path');

var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-nested-json-table.js',
    sourceMapFilename: 'react-nested-json-table.map',
    library: 'ReactNestedJsonTable',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel'},
      { test: /\.css$/, loader: 'style-loader!css-loader'} 
    ],
  },
  plugins: [],
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

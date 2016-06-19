var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './example/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-nested-json-table',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'static', 'images', 'favicon.ico')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [ path.join(__dirname, 'src'), path.join(__dirname, 'example') ] },
      { test: /\.css$/, loader: 'style-loader!css-loader'}   
    ]
  }
};

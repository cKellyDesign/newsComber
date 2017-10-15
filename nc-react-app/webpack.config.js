const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassPlugin = new ExtractTextPlugin('./../css/style.css', { allChunks: true });

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('./../public/js/'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // }
    ]
  },
  plugins: [
    sassPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  entry: path.join(__dirname, '/src/entry.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  devServer: {
    open: true,
    port: 9000,
    hotOnly: true,
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /.svg$/,
        include: [path.join(__dirname, '/src/assets/svg')],
        use: [
          {
            loader: 'svg-sprite-loader'
          },
          {
            loader: 'svgo-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new StylelintPlugin()
  ]
};

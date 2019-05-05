const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.tsx',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

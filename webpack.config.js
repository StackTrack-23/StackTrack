const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.tsx',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    proxy: {
      '/': 'http://localhost:3000',
      '/auth': {
        target: 'http://localhost:3000',
        secure: false,
        changeorigin: true,
      },
    },
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  },
};

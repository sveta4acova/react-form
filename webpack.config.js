if (typeof process.env.NODE_ENV === 'undefined') process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackConfigForIde = require('./webpack-config-for-ide');
const alias = webpackConfigForIde.resolve.alias;

let config = {
  mode: process.env.NODE_ENV,
  context: path.join(__dirname, '/src'),
  entry: ['@babel/polyfill', 'index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [{ loader: 'url-loader', options: { limit: 100000, name: 'assets/[hash].[ext]' } }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';

  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 8030,
    hot: true,
  };
}

module.exports = config;

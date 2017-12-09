const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.svg?$/,
        include: path.join(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'raw-loader' },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'app/styles',
              ],
            },
          },
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'main'],
    modules: [
      'node_modules',
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],

  devtool: 'eval',

  devServer: {
    open: true,
    publicPath: '/',
    overlay: true,
    port: 9000,
    stats: {
      modules: false,
      colors: true,
      env: false,
      publicPath: true,
      timings: true,
      version: true,
      errors: true,
    },
  },

};
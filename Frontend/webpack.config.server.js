const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/server.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'runServer.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['react','es2015','stage-0']
        },
      },
      {
          test: /\.scss$/,
          loaders: [
              'isomorphic-style-loader',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
              'resolve-url-loader',
              'sass-loader?sourceMap'
          ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: debug ? "img/[name].[ext]" : "img/[hash].[ext]",
          limit: 25000
        }
      }
    ]
  },

  plugins: debug ? [] : [
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    }),
    new Webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ],

  target: 'node'
};

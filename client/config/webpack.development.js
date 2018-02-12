const { resolve } = require('path')
const webpack = require('webpack')
const WebpackConfig = require('webpack-config')

const ENTRIES = require('./entries')

module.exports = new WebpackConfig.Config()
  .extend('config/webpack.base.js')
  .merge({
    devtool: 'inline-source-map',
    entry: {
      app: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
      ],
      main: ENTRIES.main
    },
    devServer: {
      contentBase: resolve(__dirname, 'public'),
      clientLogLevel: 'warning',
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      port: 3000,
      stats: {
        version: false,
        hash: false,
        modules: false,
        source: false,
        chunks: false
      },
      proxy: {
        '/api/*': 'http://localhost:5000'
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  })

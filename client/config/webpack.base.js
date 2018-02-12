const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoDLLPlugin = require('autodll-webpack-plugin')

const ENTRIES = require('./entries')

module.exports = {
  context: resolve(__dirname, '../src'),
  output: {
    filename: 'js/[name].[hash:5].js',
    chunkFilename: 'js/[name].[hash:5].chunk.js',
    path: resolve(__dirname, '../build'),
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      Components: resolve(__dirname, '../src/components'),
      Data: resolve(__dirname, '../src/data'),
      Hocs: resolve(__dirname, '../src/hocs'),
      Scenes: resolve(__dirname, '../src/scenes'),
      Services: resolve(__dirname, '../src/services'),
      Styles: resolve(__dirname, '../src/styles')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.babel-cache'
        }
      }],
      exclude: /node_modules/,
      include: resolve(__dirname, '../src')
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:base64:5].[ext]',
          publicPath: '/',
          outputPath: 'img/'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          mozjpeg: {
            progressive: true,
            quality: 70
          }
        }
      }
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      filename: 'js/main-[hash:5].js',
      chunks: ['main', 'app']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new AutoDLLPlugin({
      inject: true,
      context: resolve(__dirname, '..'),
      filename: '[name]-[hash:5].js',
      entry: {
        main: ENTRIES.main
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Super App',
      template: '../public/index.html',
      inject: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: true
      },
      chunkSortMode: 'dependency'
    })
  ]
}

var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var stylelint = require('stylelint')

var outputPath = './www'

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    jsx: './src/index.js',
    html: './src/index.html'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.(html)$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(splashes|icons)/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.png$/,
        include: /(splashes|icons)/,
        loader: 'null'
      },
      {
        test: /\.(json)$/,
        loader: 'json'
      },
      {
        test: /\.(ttf|eot|svg|woff|otf)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [
    stylelint,
    autoprefixer({ browsers: ['Android >= 2.3', 'iOS >= 7', 'Chrome >= 46'] }),
    precss
  ],
  standard: {
    parser: 'babel-eslint'
  },
  devServer: {
    hot: true
  }
}

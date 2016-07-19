var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var stylelint = require('stylelint')
var appPackage = require('./package.json')

var outputPath = './www'
var localhost = 'http://localhost:' + appPackage.devPort + '/'

module.exports = {
  devtool: 'eval-source-map',
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
    publicPath: localhost
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.(html|xml)$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'postcss',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(splashes|icons)/,
        loader: 'url'
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
    new webpack.NoErrorsPlugin()
  ],
  postcss: [
    stylelint,
    autoprefixer({browsers: ['last 2 versions']}),
    precss
  ],
  standard: {
    parser: 'babel-eslint'
  },
  devServer: {
    hot: true
  }
}

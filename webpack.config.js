var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    jsx: './src/index.js',
    html: './src/index.html'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(html)$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [ 'babel' ]
      },
    ]
  },
  devServer: {
    hot: true
  }
}

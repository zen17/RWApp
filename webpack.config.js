const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  }
}
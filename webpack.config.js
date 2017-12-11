module.exports = {
  entry: './src/index.js',
  output: {
      filename: './dist/app.bundle.js'
  },
  module: {
    rules: [
       {test: /\.css$/, loaders: 'style-loader!css-loader'}
    ]
  }
}

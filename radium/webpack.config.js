module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".jsx",".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env','babel-preset-react'],
            plugins: ['transform-object-rest-spread','transform-decorators-legacy']
          }
        }
      }
    ]
  }
};

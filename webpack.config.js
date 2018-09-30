const path = require('path')

module.exports = [
  {
    entry: './src/locadb.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'locadb.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  {
    entry: './test/index.js',
    output: {
      path: path.resolve(__dirname, 'test'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'test'),
      port: 9000,
      compress: true,
      hot: true
    }
  }
]
const path = require('path')

module.exports = {
  entry: './src/locadb.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'locadb.js'
  }
}
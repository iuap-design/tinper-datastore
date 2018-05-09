const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
        banner: `
            description:  统一前端数据中心解决方案
            author: Yonyou FED Team
            date: 2018-05-09
            version: V0.0.1
        `
    })
]
};
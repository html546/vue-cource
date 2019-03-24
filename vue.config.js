const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iveiw-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    // 用@符号代替src符号
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('components',resolve('./src/components'))
    .set("assets",resolve("@/assets"))
    .set("views",resolve("@/views"))
    .set("network",resolve("@/network"))
    .set("common",resolve("@/common"))
    //set第一个参数：设置的别名，第二个参数：设置的路径　
  }
};
'use strict'
module.exports = {
  NODE_ENV: '"production"'
}
/* 生产环境变量；
src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：　　　　
1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；　　　　
2）components：组件目录，我们写的组件就放在这个目录里面；　　　　
3）router：前端路由，我们需要配置的路由路径写在index.js里面；　　　　
4）App.vue：根组件；　　　　
5）main.js：入口js文件；
5、static：静态资源目录，如图片、字体等。不会被webpack构建
*/

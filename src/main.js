// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App'
import router from './router'
//引入阿里小图标
import '../static/iconfont/iconfont.css' 

import axios from 'axios'
// import Router from 'vue-router'
//   const routerPush = Router.prototype.push
//     Router.prototype.push = function push(location) {
//       return routerPush.call(this, location).catch(error=> error)
//   }
Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

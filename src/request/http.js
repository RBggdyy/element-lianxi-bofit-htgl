// /*
// http.js文件用来封装我们的axios
// */
// import axios from 'axios'
// import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，
// import Vue from 'vue'
// import { Message } from 'element-ui' // element-ui
// const BASE_URL = process.env.VUE_APP_API_URL // 第二节配置的url 可以读取 一定要VUE_APP_A为前缀
// // 创建axios实例
// const http = axios.create({
//   baseURL: BASE_URL,
//   timeout: 30000 // 请求超时时间
// })

// function startLoading() {
//   // 开始加载
//   // Loading.service({});
// }

// function endLoading() {
//   // 结束加载
//   // Vue.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
//   //   loadingInstance.close();
//   // });
// }

// // 添加request拦截器 
// http.interceptors.request.use(config => {
//   return config
// }, error => {
//   Promise.reject(error)
// })
// // 添加respone拦截器
// http.interceptors.response.use(
//   response => {
//     if (response.data.code != 200) {
//       Message.error(response.data.message);
//       // Message.error({
//       //   message: response.data.message,
//       //   duration: 10000000000
//       // });
//       return Promise.reject(response)
//     }
//     return Promise.resolve(response.data.data)
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//            // 401: 未登录
//                 // 未登录则跳转登录页面，并携带当前页面的路径
//                 // 在登录成功后返回当前页面，这一步需要在登录页操作。
//         case 401:
//             router.replace({
//                 path: '/login',
//                 query: { redirect: router.currentRoute.fullPath }
//             });
//           break;
//           // 403 token过期
//                 // 登录过期对用户进行提示
//                 // 清除本地token和清空vuex中token对象
//                 // 跳转登录页面
//         case 403:
//             Message.error({
//                 message: '登录过期，请重新登录',
//                 duration: 1000,
//             });
//             // 清除token
//             localStorage.removeItem('token');
//             store.commit('loginSuccess', null);
//             // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//             setTimeout(() => {
//                 router.replace({
//                     path: '/login',
//                     query: {
//                         redirect: router.currentRoute.fullPath
//                     }
//                 });
//             }, 1000);
//           break;
//         //   404请求不存在
//         case 404:
//             Message.error({
//                 message: '网络请求不存在',
//                 duration: 1500,
//             });
//           break;
//            // 其他错误，直接抛出错误提示
//         case 500:
//             Message.error({
//                 message: error.response.data.message,
//                 duration: 1500,
//             });
//           break;
//       }
//     }
//     // Message.error('请求失败!');
//     return Promise.reject(error.response)
//   }
// )
// /**
//  * get方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// function get(url, params = {}) {
//   return http({
//     url,
//     method: 'GET',
//     headers: {},
//     params
//   })
// }

// //封装post请求
// function post(url, data = {}) {
//   return http({
//     url,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     data
//   })
// }
// export default {
//   get, post
// }



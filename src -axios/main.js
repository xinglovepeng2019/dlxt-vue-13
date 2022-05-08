import Vue from 'vue'
// 根组件
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3006';

// 挂载到Vue原型上  任何一个组件都可以调用Vue原型上的$axios属性
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
// 挂在到id=app的div上

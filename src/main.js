import Vue from 'vue'
// 根组件
import App from './App.vue'
// 导入路由对象
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/font/iconfont.css'
import axios from 'axios'

import { Button } from 'vant';

Vue.use(Button);

// axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net/';
axios.defaults.baseURL="https://www.escook.cn/"


// 挂载到Vue原型上  任何一个组件都可以调用Vue原型上的$axios属性
Vue.prototype.$axios = axios


// 全局指令
// 自定义指令--自动获取焦点
Vue.directive('gfocus', {
  inserted (e) {
    e.focus()
  }
})

Vue.config.productionTip = false

new Vue({
  // 把路由对象注入到vue实例中   在任何一个组件中就可以使用路由对象
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
// 挂在到id=app的div上

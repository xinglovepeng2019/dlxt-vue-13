import Vue from 'vue'
// 根组件
import App from './App.vue'
import router from './router'
import store from './store'

// 引入组件
import myhead from './components/myhead.vue'
// 全局注册
// Vue.component('组件名',组件对象)
Vue.component('myhead',myhead)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
// 挂在到id=app的div上

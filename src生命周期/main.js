import Vue from 'vue'
// 根组件
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
// 挂在到id=app的div上

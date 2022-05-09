// 引入vue  vue-router和vue是深度集成
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Part from '../views/Part.vue'
import Find from '../views/Find.vue'

import NotFound from '../views/NotFound'

// 在vue中，使用vue的插件，都需要调用vue.use()
Vue.use(VueRouter)

// 创建路由规则  一一对应关系
const routes = [
  {
    path: '/',   //路由地址
    redirect:'/find',
    component:Home
  },
  {
    path: '/part',   //路由地址
    component:Part
  },
  {
    path: '/find',   //路由地址
    component:Find
  },
  // {
  //   path: '*',  //匹配的是所有的路由
  //   redirect:'/'   //重定向
  // }
  {
    path: '*',   //路由地址
    component:NotFound
  },
]

// 创建路由对象  router
const router = new VueRouter({
  // 路由规则
  // routes:routes
  routes
})

// 暴露路由对象
export default router

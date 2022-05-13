// 引入vue  vue-router和vue是深度集成
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'


// import Find from '../views/Find.vue'
// import My from '../views/My.vue'

// import Ranking from '../views/second/Ranking.vue'
// import Recommend from '../views/second/Recommend.vue'
// import SongList from '../views/second/SongList.vue'


// 在vue中，使用vue的插件，都需要调用vue.use()
Vue.use(VueRouter)

// 创建路由规则  一一对应关系
const routes = [
  {
    path: "/",
    // 路由按需加载
    redirect:'/goodlist',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'goodlist',
        component:() => import('../views/MyGoodList.vue')
      },
      {
        path: 'goodsearch',
        component:() => import('../views/MyGoodSearch.vue')
      },
      {
        path: 'userinfo',
        component:() => import('../views/MyUserinfo.vue')
      }

    ]
  },

]

// 创建路由对象  router
const router = new VueRouter({
  // 路由规则
  // routes:routes
  routes,
  mode:'history'//打包上线后需要后台支持  模式是hash
})



// 暴露路由对象
export default router

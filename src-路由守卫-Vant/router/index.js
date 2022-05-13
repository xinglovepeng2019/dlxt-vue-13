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
    path: "/find",
    // 路由按需加载
    component: ()=>import('../views/Find.vue'),
    children: [
      {
        path: 'ranking',
        component:()=>import('../views/second/Ranking.vue')
      },
      {
        path: 'recommend',
        component:()=>import('../views/second/Recommend.vue')
      },
      {
        path: 'songlist',
        component:()=>import('../views/second/SongList.vue')
      }
    ]
  },
  // {
  //   path: "/my",
  //   component: () => import('../views/My.vue'),
  //   beforeEnter:(to, from, next)=> {
  //     // 判断是否登录
  //     next()
  //   }
  //  }
  {
    path: "/my",
    component: () => import('../views/My.vue')
  },
  {
    path: '/detail/:id',
    component:()=>import('../views/Detail.vue')
  }
]

// 创建路由对象  router
const router = new VueRouter({
  // 路由规则
  // routes:routes
  routes,
  mode:'history'//打包上线后需要后台支持  模式是hash
})


// 路由守卫

// // 路由跳转之前先执行这里  决定是否跳转
// // 例子 判断用户是否登录，是否决定去  /my
// let isLogin = false;  //登录状态
// router.beforeEach((to, from, next) => {
//     /* 
//      参数1：要跳转到的路由
//      参数2： 从哪里跳转的路由
//      参数3： 函数体  --next()才会让路由正常的跳转切换，next(false) 在原地停留 next('路由地址')
//      不调用next 页面留在原地
//     */
  
//   if (to.path === '/my' && isLogin === false) {
//     alert("请登录")
//     next(false)  //阻止路由跳转
//   } else {
//     next()
//   }
// })

// 暴露路由对象
export default router

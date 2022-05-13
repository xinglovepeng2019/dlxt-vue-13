<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <router-link to="/detail/5">更新</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 进入该组件之前执行   组件实例还没有创建

    // console.log(this) //undefined
    // 传一个回调给 next 来访问组件实例
    // 在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
    next((vm) => {
      console.log(vm, '组件实例')
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 渲染的必须是同一个组件
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    console.log('beforeRouteUpdate', this)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 在导航离开渲染该组件的对应路由时调用
    console.log('beforeRouteLeave', this)
    next()
  },
}
</script>

<style scoped></style>

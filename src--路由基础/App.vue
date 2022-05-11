<template>
  <div>
    <div class="wrap">
      <router-link to="/home">首页</router-link>
      <router-link to="/part">part</router-link>
      <router-link to="/find">发现</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* 模糊匹配   /part 中有 / */
.router-link-active {
  color: red;
}

/* 精确匹配 */
.router-link-exact-active {
  background-color: yellow;
}
</style>

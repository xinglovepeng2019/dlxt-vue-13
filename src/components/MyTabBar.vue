<template>
  <div class="my-tab-bar">
    <router-link
      :to="'/' + item.compontPath"
      class="tab-item"
      v-for="(item, i) in arr"
      :key="i"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .router-link-exact-active {
    color: red;
  }
}
</style>

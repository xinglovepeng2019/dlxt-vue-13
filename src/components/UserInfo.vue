<template>
  <div>userinfo</div>
</template>

<script>
export default {
  created() {
    console.log('userinfo组件创建')
  },
  activated() {
    console.log('activated--userinfo')
  },
  deactivated() {
    console.log('deactivated--userinfo')
  },
  beforeDestroy() {
    console.log('userinfo组件销毁')
  },
}
</script>

<style scoped></style>

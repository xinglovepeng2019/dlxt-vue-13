<template>
  <div>USERNAEM</div>
</template>

<script>
export default {
  created() {
    console.log('username组件创建')
  },
  activated() {
    console.log('activated--username')
  },
  deactivated() {
    console.log('deactivated--username')
  },
  beforeDestroy() {
    console.log('username组件销毁')
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <p @click="tzHome">首页</p>
  </div>
</template>

<script>
export default {
  methods: {
    tzHome() {
      // this.$router.push('/home')

      this.$router.push({
        name: 'home',
        // path: '/home',
      })

      // 注意：虽然用name跳转，但是url的hash值还是切换path路径值
    },
  },
}
</script>

<style scoped></style>

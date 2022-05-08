<template>
  <div>
    <p ref="myp">{{ count }}</p>
    <button @click="btn">点击count+1 马上获取p标签内容</button>
  </div>
</template>

<script>
// 点击执行count++ 马上获取p标签的内容 无法拿到新值
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    btn() {
      this.count++
      console.log(this.$refs.myp.innerHTML)
      //  vue更新dom异步
      // 解决this.$nextTick()
      // dom更新完会挨个触发$nextTick里的函数体
      this.$nextTick(() => {
        console.log(this.$refs.myp.innerHTML, 'p')
      })
    },
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <input v-if="isShow" ref="myInp" type="text" placeholder="这是一个输入框" />

    <button v-else @click="btn">点我进行搜索</button>
  </div>
</template>

<script>
/*
 点击按钮按钮消失  输入框出现并聚焦
 1：获取到输入框
 2：输入框调用事件方法focus达到聚焦行为
*/
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    async btn() {
      this.isShow = true
      // this.$refs.myInp.focus()
      // data变化更新dom是异步的
      // 输入框还没有挂载到真实dom上

      // this.$nextTick(() => {
      //   this.$refs.myInp.focus()
      // })
      //  扩展  await取代回调函数
      // $nextTick()返回promise对象

      await this.$nextTick()
      this.$refs.myInp.focus()
    },
  },
}
</script>

<style scoped></style>

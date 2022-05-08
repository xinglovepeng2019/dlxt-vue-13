<template>
  <div>
    MyProduct
    <button @click="subFn">传递数据</button>
  </div>
</template>

<script>
// 导入事件总线  飞机
import eventBus from '../EventBus/index'
export default {
  data() {
    return {
      num: 89,
    }
  },
  methods: {
    subFn() {
      // 事件总线 触发自定义事件  传递方
      eventBus.$emit('send', this.num)
    },
  },
}
</script>

<style scoped></style>

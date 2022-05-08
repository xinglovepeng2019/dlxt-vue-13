<template>
  <div>
    <!-- 自定义事件 abcEvent
    触发abcEvent 就会执行函数abcFn
     -->
    <my-product @abcEvent="abcFn"> </my-product>
    {{ n }}
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
export default {
  components: { MyProduct },
  data() {
    return {
      n: 0,
    }
  },
  methods: {
    abcFn(v) {
      // v就是触发自定义事件传递的参数
      console.log('触发了', v)
      this.n = v
    },
  },
}
</script>

<style scoped></style>

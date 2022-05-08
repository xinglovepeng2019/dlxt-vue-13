<template>
  <div>
    <button @click="eventAbc">触发自定义事件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
    }
  },
  methods: {
    eventAbc() {
      // 触发自定义事件abcEvent
      this.$emit('abcEvent', this.num)
    },
  },
}
</script>

<style scoped></style>

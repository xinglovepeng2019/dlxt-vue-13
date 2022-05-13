<template>
  <div>
    <van-button type="primary" @click="showDialog">主要按钮</van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  methods: {
    showDialog() {
      Dialog({ message: '提示', showCancelButton: true })
    },
  },
}
</script>

<style scoped></style>

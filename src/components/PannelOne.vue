<template>
  <div>
    <div class="title">
      <slot></slot>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <div class="container" v-show="isShow">
      <slot name="content">默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
}
</script>

<style scoped></style>

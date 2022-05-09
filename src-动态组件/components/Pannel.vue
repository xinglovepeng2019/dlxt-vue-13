<template>
  <div>
    <div class="title">
      <h4>芙蓉楼送辛渐</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <div class="container" v-show="isShow">
      <slot>默认内容</slot>
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

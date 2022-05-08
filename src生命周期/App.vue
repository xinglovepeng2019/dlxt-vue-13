<template>
  <div>
    <my-lifecycle v-if="show"></my-lifecycle>
    <button @click="show = false">销毁组件</button>
  </div>
</template>

<script>
import MyLifecycle from './components/MyLifecycle.vue'
export default {
  components: { MyLifecycle },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style scoped></style>

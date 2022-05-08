<template>
  <div>
    <my-axios></my-axios>
    <my-ajax></my-ajax>
  </div>
</template>

<script>
import MyAjax from './components/MyAjax.vue'
import MyAxios from './components/MyAxios.vue'
export default {
  components: { MyAxios, MyAjax },
}
</script>

<style lang="scss" scoped></style>

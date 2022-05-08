<template>
  <div>
    <my-product></my-product>
    <hr />
    <myhead></myhead>
  </div>
</template>

<script>
import Myhead from './components/myhead.vue'
import MyProduct from './components/MyProduct.vue'
export default {
  components: { MyProduct, Myhead },
}
</script>

<style scoped></style>

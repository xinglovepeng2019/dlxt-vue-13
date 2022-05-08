<template>
  <div>
    <product :num="n" :s="123" :flag="flag" :arr="arr" :obj="obj"></product>

    <button @click="n++">n++</button>
  </div>
</template>

<script>
import product from './components/MyProduct.vue'
export default {
  components: {
    product,
  },
  data() {
    return {
      n: 10,
      str: 'hello',
      flag: false,
      arr: ['aa', 'bb', 'cc'],
      obj: { name: 'zs' },
    }
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <p>获取原生dom元素</p>
    <h1 id="h" ref="myh">我是一个h1标记</h1>
    <child ref="myc"></child>
  </div>
</template>

<script>
import Child from './Child.vue'
/* 
1:用来获取dom元素
2：可以获取组件对象
*/
export default {
  components: { Child },
  mounted() {
    // console.log(document.getElementById('h')) //h1
    // console.log(this.$refs.myh) //h1
    console.log(this.$refs.myc)
    let childobj = this.$refs.myc
    childobj.fn()
    console.log(childobj.msg)
  },
}
</script>

<style scoped></style>

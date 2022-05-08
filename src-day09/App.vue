<template>
  <div>
    <!-- <more></more> -->
    <move></move>
    <hr />
    <tick></tick>
    <ComNameHaha></ComNameHaha>
  </div>
</template>

<script>
import Com from './components/Com.vue'
import More from './components/More.vue'
import Move from './components/Move.vue'
import Tick from './components/Tick.vue'
export default {
  // 对象里的key是变量的话 []属性名表达式
  components: { More, Move, Tick, [Com.name]: Com },
}
</script>

<style scoped></style>

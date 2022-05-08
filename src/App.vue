<template>
  <div>
    <!-- <more></more> -->
    <move></move>
    <hr />
    <tick></tick>
  </div>
</template>

<script>
import More from './components/More.vue'
import Move from './components/Move.vue'
import Tick from './components/Tick.vue'
export default {
  components: { More, Move, Tick },
}
</script>

<style scoped></style>

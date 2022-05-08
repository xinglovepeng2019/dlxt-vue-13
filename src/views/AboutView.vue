<template>
  <div>
    <pannel></pannel>
    <pannel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </pannel>

    <!-- 具名插槽 -->
    <hr />

    <pannel-one>
      <template v-slot:default>
        <h4>h4</h4>
      </template>
      <template v-slot:content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </pannel-one>

    <!-- 作用域插槽 -->
  </div>
</template>

<script>
import Pannel from '@/components/Pannel.vue'
import PannelOne from '@/components/PannelOne.vue'
export default {
  components: { Pannel, PannelOne },
}
</script>

<style scoped></style>

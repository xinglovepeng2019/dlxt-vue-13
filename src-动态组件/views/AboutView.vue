<template>
  <div>
    <pannel></pannel>
    <pannel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </pannel>
    <hr />
    <!-- 具名插槽 -->
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

    <pannel-two>
      <template v-slot:title>
        <h4>芙蓉楼送辛渐</h4>
      </template>
      <!-- 2:使用v-slot="自定义变量名" 
       scope上自动绑定slot上所有属性和值
      -->
      <!-- <template v-slot:content="scope"> -->
      <template slot="content" slot-scope="scope">
        {{ scope }}
        <ul>
          <li v-for="item in scope.list" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </template>
    </pannel-two>
  </div>
</template>

<script>
import Pannel from '@/components/Pannel.vue'
import PannelOne from '@/components/PannelOne.vue'
import PannelTwo from '@/components/PannelTwo.vue'
export default {
  components: { Pannel, PannelOne, PannelTwo },
}
</script>

<style scoped></style>

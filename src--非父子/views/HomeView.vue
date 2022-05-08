<template>
  <div>
    <h3>案例：折叠面板</h3>
    <div>
      <div class="title">
        <h4>{{title}}</h4>
        <span class="btn" @click="isShow = !isShow">
          {{ isShow ? '收起' : '展开' }}
        </span>
      </div>
      <div class="container" v-show="isShow">
        <p>寒雨连江夜入吴, </p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 props:['title'],
 data(){
   return {
     isShow:false
   }
 }
}
</script>
<style scoped>

</style>
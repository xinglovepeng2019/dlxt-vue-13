<template>
  <div>
    <router-view></router-view>
    <my-tab-bar :arr="tabList"></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from '@/components/MyTabBar.vue'
export default {
  components: { MyTabBar },
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shuanglieliebiao',
          text: '商品列表',
          compontPath: 'goodlist',
        },
        {
          iconText: 'icon-a-16-23_fuzhi-02',
          text: '商品搜索',
          compontPath: 'goodsearch',
        },
        {
          iconText: 'icon-xinxibar_zhanghu',
          text: '我的信息',
          compontPath: 'userinfo',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>

<template>
  <div>
    <input type="text" v-gfocus name="" id="" />
    <button @click="comname = 'UserName'">账号密码填写</button>
    <button @click="comname = 'UserInfo'">个人信息填写</button>
    <!--  -->
    <div style="border: 1px solid #333">
      <keep-alive>
        <component :is="comname"></component>
      </keep-alive>
    </div>

    <hr />
    <!-- <user-table></user-table> -->
    <hr />
    <use-directive></use-directive>
  </div>
</template>

<script>
import UserName from '@/components/UserName.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserTable from '@/components/UserTable.vue'
import UseDirective from '@/components/UseDirective.vue'
export default {
  components: { UserName, UserInfo, UserTable, UseDirective },
  data() {
    return {
      comname: 'UserName', //存储组件名
    }
  },
}
</script>

<style scoped></style>

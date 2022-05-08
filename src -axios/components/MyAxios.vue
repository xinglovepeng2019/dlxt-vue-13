<template>
  <div>
    <p>获取所有的图书信息</p>
    <button @click="getAllFn">点击 --查看</button>
  </div>
</template>

<script>
// 下载axios
// 引入axios
// 发起axios请求
import axios from 'axios'
export default {
  methods: {
    // getAllFn() {
    //   axios({
    //     url: 'http://www.liulongbin.top:3006/api/getbooks',
    //     method: 'GET',
    //   }).then((res) => {
    //     console.log(res)
    //   })
    // },
    async getAllFn() {
      let res = await axios.get('http://www.liulongbin.top:3006/api/getbooks')
      console.log(res)
    },
  },
}
</script>

<style scoped></style>

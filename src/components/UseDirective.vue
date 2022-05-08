<template>
  <div>
    <input type="text" v-focus />
    <!-- <input type="text" v-gfocus /> -->

    <p v-color="colorStr" @click="colorStr = 'blue'">修改文字颜色</p>
  </div>
</template>

<script>
/*
1:创建自定义指令
2:在标签上使用自定义指令   v-指令名
inserted  指令所在标签被插入到网页上触发(一次)
*/
export default {
  data() {
    return {
      colorStr: 'red',
    }
  },
  directives: {
    // 自动获取焦点
    focus: {
      inserted(e) {
        console.log(e, 9)
        e.focus()
      },
    },
    color: {
      inserted(e, bindling) {
        console.log(bindling, 8)
        e.style.color = bindling.value
      },
      update(e, bindling) {
        // bindling获取指令传入的值
        e.style.color = bindling.value
      },
    },
  },
}
</script>

<style scoped></style>

<template>
  <div>
    子组件
    <hr />
    {{ num }}---{{ s }}--{{ flag }}
    <ul>
      <li v-for="(item, i) in arr" :key="i">
        {{ item }}
      </li>
    </ul>
    {{ obj.name }}

    <hr />
    >

    <button @click="num++">num++</button>

    <button @click="obj = 'ls'">更改对象的属性</button>
    <button @click="updateArr">更改数组</button>
  </div>
</template>

<script>
export default {
  // props: ['num', 's', 'flag', 'arr', 'obj'],
  props: {
    // 必须是数字类型
    num: Number,
    //必须是数字或者是字符串
    s: [String, Number],
    // 布尔类型  默认为true
    flag: {
      type: Boolean,
      default: true,
    },
    // 数组类型  必须传
    arr: {
      type: Array,
      required: true,
    },
    // 如果是对象或者数组，默认必须是一个函数返回
    obj: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  methods: {
    updateArr() {
      // this.arr.push('eee') //没有问题

      this.arr = [11, 22, 3434] //警告
    },
  },
}
</script>

<style scoped></style>

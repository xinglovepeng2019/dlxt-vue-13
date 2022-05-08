<template>
  <div>
    <my-table :arr="list"></my-table>

    <my-table :arr="list">
      <template v-slot="scope">
        <a :href="scope.row.imgurl">{{ scope.row.imgurl }}</a>
      </template>
    </my-table>

    <my-table :arr="list">
      <template v-slot="scope">
        <img width="100" :src="scope.row.imgurl" />
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from './MyTable.vue'
export default {
  components: { MyTable },
  data() {
    return {
      list: [
        {
          id: 100,
          name: '张三',
          age: 23,
          imgurl:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        },
        {
          id: 101,
          name: '李四',
          age: 23,
          imgurl:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        },
        {
          id: 102,
          name: '王五',
          age: 23,
          imgurl:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        },
        {
          id: 103,
          name: '赵六',
          age: 23,
          imgurl:
            'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        },
      ],
    }
  },
}
</script>

<style scoped></style>

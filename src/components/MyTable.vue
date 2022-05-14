<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <!-- <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th> -->
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in arr" :key="item.id">
        <!-- <th scope="row">{{ item.id }}</th>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>{{ item.tags }}</td>
        <td>
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </td> -->

        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    arr: Array,
  },
}
</script>

<style lang="less" scoped></style>

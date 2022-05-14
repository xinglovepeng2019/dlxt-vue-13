<template>
  <div>
    <my-table :arr="list">
      <template #header>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="form-control"
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
            v-model="scope.row.inputValue"
            v-gfocus
          />
          <button
            type="button"
            @click="scope.row.inputVisible = true"
            v-else
            class="btn btn-primary"
          >
            +Tag
          </button>
          <br />
          <!-- {{ scope.row.tags }} -->
          <span v-for="(str, ind) in scope.row.tags" :key="ind" class="badges">
            {{ str }}
          </span>
        </td>
        <td>
          <button
            type="button"
            @click="removeBtn(scope.row.id, scope.index)"
            class="btn btn-danger btn-sm"
          >
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue'
export default {
  components: { MyTable },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getGoodList()
  },
  methods: {
    enterFn(row) {
      //  添加
      if (row.inputValue.trim().length === 0) {
        alert('请输入数据')
        return
      }
      row.tags.push(row.inputValue)
      row.inputValue = ''
    },
    removeBtn(id, index) {
      // 删除\
      // this.list.splice(index, 1)
      let ind = this.list.findIndex((item) => item.id === id)
      this.list.splice(ind, 1)
    },
    async getGoodList() {
      let { data: res } = await this.$axios.get('api/goods')
      console.log(res, 'goodlist')
      this.list = res.data
    },
  },
}
</script>

<style lang="less" scoped>
.badges {
  padding: 0 10px;
  background-color: yellow;
  color: red;
  margin-right: 5px;
}
</style>

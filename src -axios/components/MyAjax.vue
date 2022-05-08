<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.getdata()
  },
  methods: {
    async getdata() {
      let res = await this.$axios.get('/api/getbooks')
      console.log(res)
    },
  },
}
</script>

<style scoped></style>

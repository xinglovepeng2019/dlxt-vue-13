<template>
  <div>
    <router-link to="/detail?user=妞妞">hello--妞妞</router-link>

    <hr />
    <router-link to="/mydetail/贝贝">hello--贝贝</router-link>

    <p @click="toDetail">hello-妞妞</p>
    <p @click="toMydetail">hello-我的贝贝</p>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail() {
      this.$router.push({
        path: '/detail',
        query: {
          user: 'hello',
        },
      })
    },
    toMydetail() {
      // path会自动忽略params
      this.$router.push({
        name: 'mydetail',
        params: {
          users: 'hello贝贝',
        },
      })
    },
  },
}
</script>

<style scoped></style>

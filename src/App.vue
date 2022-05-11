<template>
  <div class="one">
    <ul>
      <li>
        <router-link to="/find">发现音乐</router-link>
      </li>
      <li>
        <router-link to="/my">我的音乐</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.one {
}
.one ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
</style>

<template>
  <div id="navigation">
    <img alt="乐雅轩" src="../assets/img/logo.png" />
    <nav>
      <router-link to="/home">首页</router-link>
      <router-link to="/instrument">传统乐器</router-link>
      <router-link to="/musician">音乐名人</router-link>
      <router-link to="/music">经典名曲</router-link>
      <router-link to="/poem">音乐名诗</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyNavigation'
}
</script>

<style scoped>
#navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7590D9;
  top: 0;
  width: 100vw;
  height: 6.5vh;
  position: fixed;
  z-index: 100;
}
#navigation img {
  margin-left: 6vw;
  width: 12vw;
}

/* 设置导航栏的字体样式 */
nav {
  display: flex;
  flex-direction: row;
  gap: 5vw;
  margin-right: 12%;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.4s ease-in-out;
  margin-right: 10px;
}
nav a:hover {
  color: #ffa91eba;
}
nav .router-link-active {
  color: #543624;
}

</style>
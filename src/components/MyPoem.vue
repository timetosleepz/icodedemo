<template>
  <div id="poem">
    <!-- todo：用v-for制作一个诗歌展示页 -->
    <!-- 三点要求：1.表层按照即时设计里面做
    2.点击诗歌进入诗歌详情页-->
    <p>音乐之诗，如涓涓细流滋润心灵，其美在于能将无形的音符化为有形的情感。诗人用文字捕捉旋律的飘逸，描绘和声的色彩，让人们在字里行间感受音乐的魅力，仿佛听到了心灵的回响，沉醉于那无尽的和谐与美好。</p>
    <p id="poem1"></p>
    <p id="poem2"></p>
    <p id="poem3"></p>
    <p id="poem4"></p>


  </div>

</template>

<script>
export default {
  name: 'MyPoem',
  data() {
    return {
    }
  },

}
</script>

<style>
p {
  left: 181px;
  font-size: 2.5vw;
  color: rgba(51, 34, 23, 1);
  text-align: center;
  margin-top: 1vw;
  z-index: 10;
}
</style>
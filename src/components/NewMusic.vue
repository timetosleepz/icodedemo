<template>
    <div>
      <!-- todo：用v-for制作一个展示音乐页 -->
      <!-- 三点要求：1.表层按照即时设计里面做
      2.点击音乐进入音乐介绍和播放页-->
      <img class="instru" src="@/assets/img/background.png" alt="instrument">
      <h1 class="name">二胡</h1>
    </div>
  </template>

  <script>
  export default {
    name: 'NewMusic',
    data() {
      return {
        
      }
    }

  }
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: rgba(204, 218, 255, 1);
  }
  .instru{
    position: absolute;
    height:20vw;
    width: auto;
    top: 10vw;
    left:15vw;
  }
  .name{
    position:absolute;
    top:10vw;
    left:60vw;
    color: #543624;
  }
  </style>
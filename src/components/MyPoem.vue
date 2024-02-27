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
p{
  position: absolute;
  left: 181px;
  top: 154px;
  width: 993px;
  height: 186px;
  opacity: 1;
  /** 文本1 */
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(84, 54, 36, 1);
  text-align: left;
  vertical-align: top;
}


#poem1{
  position: absolute;
  left: 99px;
  top: 495px;
  width: 541px;
  height: 317px;
  opacity: 1;
  border-radius: 25px;
  background: rgba(215, 213, 188, 1);
}
#poem2{
  position: absolute;
  left: 678px;
  top: 495px;
  width: 541px;
  height: 317px;
  opacity: 1;
  border-radius: 25px;
  background: rgba(215, 213, 188, 1);
}
#poem3{
  position: absolute;
  left: 103px;
  top: 887px;
  width: 541px;
  height: 317px;
  opacity: 1;
  border-radius: 25px;
  background: rgba(215, 213, 188, 1);
}
#poem4{
  position: absolute;
  left: 682px;
  top: 887px;
  width: 541px;
  height: 317px;
  opacity: 1;
  border-radius: 25px;
  background: rgba(215, 213, 188, 1);
}
</style>
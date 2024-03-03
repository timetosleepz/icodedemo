<template>
  <div>
    <!-- todo：用v-for制作一个乐器展示页 -->
    <!-- 三点要求：1.表层按照即时设计里面做
    2.点击乐器进入乐器详情页
    3.鼠标放在乐器标签页上时有动画效果，悬停3s后播放乐器音乐 -->
    <p id="introduction">中华传统乐器是中华文化的瑰宝，它们承载着丰富的历史文化内涵和深厚的民族情感。这些乐器不仅具有独特的音色和表现力，而且在各种场合都发挥着重要作用。</p>
  </div>

    <nav id="instrument">
      <a href="#chuiguan">吹管乐器</a>
      <a href="#botan">拨弹乐器</a>
      <a href="#daji">打击乐器</a>
      <a href="#laxian">拉弦乐器</a>
    </nav>


  <div class="topic-container" id="chuiguan">
    <div class="topic-title" ><h1 class="ititle">吹管乐器</h1></div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 1">
        <div class="image-title">图片1描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 2">
        <div class="image-title">图片2描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 3">
        <div class="image-title">图片3描述</div>
      </div>
    </div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 4">
        <div class="image-title">图片4描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 5">
        <div class="image-title">图片5描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 6">
        <div class="image-title">图片6描述</div>
      </div>
    </div>
  </div>

  <div class="topic-container" id="botan">
    <div class="topic-title" ><h1 class="ititle">拨弹乐器</h1></div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 1">
        <div class="image-title">图片1描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 2">
        <div class="image-title">图片2描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 3">
        <div class="image-title">图片3描述</div>
      </div>
    </div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 4">
        <div class="image-title">图片4描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 5">
        <div class="image-title">图片5描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 6">
        <div class="image-title">图片6描述</div>
      </div>
    </div>
  </div>

  <div class="topic-container" id="daji">
    <div class="topic-title" ><h1 class="ititle">打击乐器</h1></div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 1">
        <div class="image-title">图片1描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 2">
        <div class="image-title">图片2描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 3">
        <div class="image-title">图片3描述</div>
      </div>
    </div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 4">
        <div class="image-title">图片4描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 5">
        <div class="image-title">图片5描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 6">
        <div class="image-title">图片6描述</div>
      </div>
    </div>
  </div>


  <div class="topic-container" id="laxian">
    <div class="topic-title" ><h1 class="ititle">拉弦乐器</h1></div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 1">
        <div class="image-title">图片1描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 2">
        <div class="image-title">图片2描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 3">
        <div class="image-title">图片3描述</div>
      </div>
    </div>
    <div class="image-row">
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 4">
        <div class="image-title">图片4描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 5">
        <div class="image-title">图片5描述</div>
      </div>
      <div class="flex-item">
        <img src="../assets/img/background.png" alt="Image 6">
        <div class="image-title">图片6描述</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewInstrument',
  data() {
    return {
    }
  },

}

</script>

<style>
img
{

}
#introduction{
  position: absolute;
  text-align: center;
  top: 171px;
  width: 993px;
  height: 186px;
  opacity: 1;
  /** 文本1 */
  font-size: 36px;
  font-weight: 400;
  line-height: 52.13px;
  color: rgba(84, 54, 36, 1);

  vertical-align: top;
}

a{
  text-decoration: none;
}
#instrument{
  display: flex;
  justify-content: space-around;
  left: 0px;
  align-items: center;
  background-color:rgba(215, 213, 188, 1);
  top: 402px;
  width: 100vw;
  height: 115px;
  position: absolute;
  z-index: 100;
  font-size: 40px;
  font-weight: 400;
}
nav a:hover {
  color: #ffa91eba;
}
nav a{
  color:black;
  transition: color 0.4s ease-in-out;
}

:target{
  scroll-margin-top:1vw;
  }

.topic-container {
  margin-bottom: 20px;
}
.image-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vw; /* 在图片行之间添加一些间距 */
}
.flex-item {
  width: 30vw; /* 每张图片占容器的1/3 */
  margin-bottom: 2vw; /* 在图片和小标题之间添加一些间距 */
  background-color:  rgba(204, 204, 204, 1); /* 设置圆角容器背景颜色 */
  margin-right: 3vw;
  overflow: hidden;
  height: 200px;
  opacity: 1;
  border-radius: 25px;
}
.flex-item:last-child {
  margin-right: 0;
}

.flex-item img {
  width: 65%;
  height: auto;
}
.image-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  text-align: center;
  vertical-align: top;

}
.ititle{
  text-align: center;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  vertical-align: top;
}
#chuiguan{

  top: 635px;
  position: absolute;
}

#botan{
  top: 1354px;
  position: absolute;
}

#daji{
  top: 2073px;
  position: absolute;
}

#laxian{
  top: 2792px;
  position: absolute;
}
</style>
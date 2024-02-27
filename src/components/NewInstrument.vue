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

  <h1 id="chuiguan">吹管乐器</h1>
  <h1 id="botan">拨弹乐器</h1>
  <h1 id="daji">打击乐器</h1>
  <h1 id="laxian">拉弦乐器</h1>

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
#chuiguan{
  left: 599px;
  top: 635px;
  width: 132px;
  height: 56px;
  opacity: 1;
  /** 文本1 */
  font-size: 32px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  text-align: left;
  vertical-align: top;
  position: absolute;
}

#botan{
  left: 597px;
  top: 1354px;
  width: 132px;
  height: 56px;
  opacity: 1;
  /** 文本1 */
  font-size: 32px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  text-align: left;
  vertical-align: top;
  position: absolute;
}

#daji{
  left: 607px;
  top: 2073px;
  width: 132px;
  height: 56px;
  opacity: 1;
  /** 文本1 */
  font-size: 32px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  text-align: left;
  vertical-align: top;
  position: absolute;
}

#laxian{
  left: 607px;
  top: 2792px;
  width: 132px;
  height: 56px;
  opacity: 1;
  /** 文本1 */
  font-size: 32px;
  font-weight: 700;
  line-height: 46.34px;
  color: rgba(51, 34, 23, 1);
  text-align: left;
  vertical-align: top;
  position: absolute;

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
  width: 1215px;
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
  scroll-margin-top:35px;
  }

.highlight {
  background-color: yellow;
  transition: background-color 1s; /* 平滑过渡效果 */
}

</style>
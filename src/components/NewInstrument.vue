<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom: 10px;">
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
      <div class="topic-title">
        <h1 class="intitle">吹管乐器</h1>
      </div>
      <div class="image-row">
        <div v-for="(item, index) in imageItems1" :key="index" class="flex-item">
          <img :src="item.src" :alt="item.alt" @click="goToNewMusic(item)">
          <div class="image-title" @click="goToNewMusic(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div class="topic-container" id="botan">
      <div class="topic-title">
        <h1 class="intitle">拨弹乐器</h1>
      </div>
      <div class="image-row">
        <div v-for="(item, index) in imageItems2" :key="index" class="flex-item">
          <img :src="item.src" :alt="item.alt" @click="goToNewMusic(item)">
          <div class="image-title" @click="goToNewMusic(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div class="topic-container" id="daji">
      <div class="topic-title">
        <h1 class="intitle">打击乐器</h1>
      </div>
      <div class="image-row">
        <div v-for="(item, index) in imageItems3" :key="index" class="flex-item">
          <img :src="item.src" :alt="item.alt" @click="goToNewMusic(item)">
          <div class="image-title" @click="goToNewMusic(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>


    <div class="topic-container" id="laxian">
      <div class="topic-title">
        <h1 class="intitle">拉弦乐器</h1>
      </div>
      <div class="image-row">
        <div v-for="(item, index) in imageItems4" :key="index" class="flex-item">
          <img :src="item.src" :alt="item.alt" @click="goToNewMusic(item)">
          <div class="image-title" @click="goToNewMusic(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newmessage: '',
      imageItems1: [
        { src: require('@/assets/instrumentpng/di.jpg'), alt: '笛', title: '笛' },
        { src: require('@/assets/instrumentpng/bawu.png'), alt: '巴乌', title: '巴乌' },
        { src: require('@/assets/instrumentpng/hulusi.png'), alt: '葫芦丝', title: '葫芦丝' },
        { src: require('@/assets/instrumentpng/suona.png'), alt: '唢呐', title: '唢呐' },
        { src: require('@/assets/instrumentpng/lusheng.png'), alt: '芦笙', title: '芦笙' },
        { src: require('@/assets/instrumentpng/xun.png'), alt: '埙', title: '埙' }
      ],
      imageItems2: [
        { src: require('@/assets/instrumentpng/guqin.png'), alt: '古琴', title: '古琴' },
        { src: require('@/assets/instrumentpng/guzheng.png'), alt: '古筝', title: '古筝' },
        { src: require('@/assets/instrumentpng/konghou.png'), alt: '箜篌', title: '箜篌' },
        { src: require('@/assets/instrumentpng/liuqin.png'), alt: '柳琴', title: '柳琴' },
        { src: require('@/assets/instrumentpng/yangqin.png'), alt: '扬琴', title: '扬琴' },
        { src: require('@/assets/instrumentpng/yueqin.png'), alt: '月琴', title: '月琴' }
      ],
      imageItems3: [
        { src: require('@/assets/instrumentpng/bangzi.png'), alt: '梆子', title: '梆子' },
        { src: require('@/assets/instrumentpng/bianzhong.png'), alt: '编钟', title: '编钟' },
        { src: require('@/assets/instrumentpng/daxiaoluo.png'), alt: '大小锣', title: '大小锣' },
        { src: require('@/assets/instrumentpng/yunluo.png'), alt: '云锣', title: '云锣' },
        { src: require('@/assets/instrumentpng/fou.png'), alt: '缶', title: '缶' },
        { src: require('@/assets/instrumentpng/cha.png'), alt: '镲', title: '镲' }
      ],
      imageItems4: [
        { src: require('@/assets/instrumentpng/banhu.png'), alt: '板胡', title: '板胡' },
        { src: require('@/assets/instrumentpng/erhu.png'), alt: '二胡', title: '二胡' },
        { src: require('@/assets/instrumentpng/matouqin.png'), alt: '马头琴', title: '马头琴' },
        { src: require('@/assets/instrumentpng/jinghu.png'), alt: '京胡', title: '京胡' },
        { src: require('@/assets/instrumentpng/gaohu.png'), alt: '高胡', title: '高胡' },
        { src: require('@/assets/instrumentpng/dongbula.png'), alt: '东不拉', title: '东不拉' }
      ]
    }
  },
  methods: {
    goToNewMusic(instrument) {
      this.$router.push({
        name: 'InstrumentDetails',
        params: { instrumentId: instrument.id },
        query: { title: instrument.title, photo: instrument.src}
      });
    },

  }
}



</script>

<style>

#introduction {
  margin-top: 50px;
  overflow: visible;
  max-height: 20vw;
  text-align: center;
  top: 5vw;
  width: 70vw;
  font-size: 2.2em;
  font-weight: 400;
  line-height: 52.13px;
  color: rgba(84, 54, 36, 1);
  vertical-align: top;
}

#instrument {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(215, 213, 188, 1);
  width: 100%;
  height: 10vw;
  font-size: 40px;
  font-weight: 400;
}

nav a:hover {
  color: #2d1e0566;
}

nav a {
  color: black;
  transition: color 0.4s ease-in-out;
  text-decoration: none;
}

:target {
  scroll-margin-top: 1vw;
}

.image-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 0 33.33%;
  /* 每张图片占容器的1/3 */
  width: 24vw;
  /* 每张图片占容器的1/3 */
  margin-bottom: 2vw;
  /* 在图片和小标题之间添加一些间距 */
  background-color: rgba(204, 204, 204, 0);
  /* 设置圆角容器背景颜色 */
  overflow: hidden;
  height: auto;
}

.flex-item img {
  width: 90%;
  height: auto;
  border-radius: 20px;
}


.image-title {
  font-size: 2em;
  font-weight: 700;
  color: rgba(51, 34, 23, 1);
  text-align: center;
  vertical-align: top;
  margin-top: 1vw;
  z-index: 10;
}

.intitle {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 10vw;
  color: rgba(51, 34, 23, 1);
  vertical-align: top;
}
</style>
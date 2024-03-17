<template>
  <div>
    <NewSearch v-model:message="newmessage"></NewSearch>
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
      <div class="topic-title">
        <h1 class="ititle">吹管乐器</h1>
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
        <h1 class="ititle">拨弹乐器</h1>
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
        <h1 class="ititle">打击乐器</h1>
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
        <h1 class="ititle">拉弦乐器</h1>
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
import NewSearch from './NewSearch'

export default {
  components: { NewSearch },
  data() {
    return {
      newmessage: '',
      imageItems1: [
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 4', title: '图片4描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 5', title: '图片5描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 6', title: '图片6描述' }
      ],
      imageItems2: [
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 4', title: '图片4描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 5', title: '图片5描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 6', title: '图片6描述' }
      ],
      imageItems3: [
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 4', title: '图片4描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 5', title: '图片5描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 6', title: '图片6描述' }
      ],
      imageItems4: [
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 4', title: '图片4描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 5', title: '图片5描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 6', title: '图片6描述' }
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
    }
  }
}



</script>

<style>
/* 乐器展示页样式 */
#introduction {
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
  margin-top: 25vw;
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
  margin-bottom: 5vw;
  /* 在图片和小标题之间添加一些间距 */
  background-color: rgba(204, 204, 204, 0);
  /* 设置圆角容器背景颜色 */
  overflow: hidden;
  height: 24vw;
  opacity: 1;
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

.ititle {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 10vw;
  color: rgba(51, 34, 23, 1);
  vertical-align: top;
}
</style>
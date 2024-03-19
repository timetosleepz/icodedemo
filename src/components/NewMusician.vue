<template>
  <div>
    <div>
      <!-- todo：用v-for制作一个音乐人展示页 -->
      <!-- 三点要求：1.表层按照即时设计里面做
    2.点击音乐人进入音乐人详情页
    3.收录代表作，使得在详情页上显示他们的作品，点击后可以跳转到作品详情页-->

      <p id="introduction">中华传统音乐家，是中华文化的璀璨星辰，他们承载了深厚的历史底蕴与浓烈的民族情感，以精湛的技艺和独特的风格，为中华文化的传承与发展作出了杰出贡献。</p>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in musicians" :key="index" class="musician-item">
        <img :src="item.src" :alt="item.alt" class="musician-image" @click="goToNewMusicion(item)">
        <div class="musician-name" @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'NewMusician',
  data() {
    return {
      musicians: [ { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述' },
        { src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述' },
      ]
    }
  },
  methods: {
    goToNewMusicion(musicion) {

      this.$router.push({
        name: 'MusicionDetails',
        params: { musicionId: musicion.id },
        query: { title: musicion.title }
      });
    }
  }
}
</script>

<style>
#introduction {
  position: absolute;
  top: 8vw;
  width: 80vw;
  height: 18vw;
  text-align: center;

}
.image-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 一行显示三个 */
  grid-gap: 1rem; /* 间隙大小 */
  padding-top: 29vw; /* 根据需要调整 */
  padding-left: 5rem; /* 向右平移的距离 */
}

.musician-item {
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

.musician-name {
  font-size: 2em;
  font-weight: 700;
  color: rgba(51, 34, 23, 1);
  text-align: center;
  vertical-align: top;
  margin-top: 1vw;
  z-index: 10;
}
.musician-image {
  border-radius: 0.5rem; /* 圆角大小 */
  overflow: hidden; /* 确保圆角有效 */
  width: 100%; /* 图片宽度调整为100%，以适应容器 */
  height: auto; /* 保持图片的宽高比 */
  object-fit: cover; /* 裁剪图片以覆盖整个容器 */
}


</style>
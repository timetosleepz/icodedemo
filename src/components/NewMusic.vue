<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom: 10px;">
      <p id="introduction">中国传统音乐，又称为国乐，是中国几千年文化积淀的重要组成部分。中国传统音乐的旋律优美，节奏韵律丰富，富有深厚的文化内涵和艺术魅力。
      </p>
    </div>
    <div id="musiclink">
      <div class="image-row">
        <div v-for="(item, index) in musics" :key="index" class="music-item">
          <img :src="item.src" :alt="item.alt" class="music-image" @click="goToMusic(item)">
          <div class="music-name" @click="goToMusic(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMusic',
  data() {
    return {
      musics: [{ src: require('@/assets/img/唱片.png'), alt: '高山流水', title: '高山流水' },
      { src: require('@/assets/img/唱片.png'), alt: '广陵散', title: '广陵散' },
      { src: require('@/assets/img/唱片.png'), alt: '平沙落雁', title: '平沙落雁' },
      { src: require('@/assets/img/唱片.png'), alt: '梅花三弄', title: '梅花三弄' },
      { src: require('@/assets/img/唱片.png'), alt: '十面埋伏', title: '十面埋伏' },
      { src: require('@/assets/img/唱片.png'), alt: '夕阳箫鼓', title: '夕阳箫鼓' },
      { src: require('@/assets/img/唱片.png'), alt: '渔樵问答', title: '渔樵问答' },
      { src: require('@/assets/img/唱片.png'), alt: '胡笳十八拍', title: '胡笳十八拍' },
      { src: require('@/assets/img/唱片.png'), alt: '汉宫秋月', title: '汉宫秋月' },
      { src: require('@/assets/img/唱片.png'), alt: '阳春白雪', title: '阳春白雪' },
      { src: require('@/assets/img/唱片.png'), alt: '渔舟唱晚', title: '渔舟唱晚' },
      { src: require('@/assets/img/唱片.png'), alt: '寒鸦戏水', title: '寒鸦戏水' },
      { src: require('@/assets/img/唱片.png'), alt: '月儿高', title: '月儿高' },
      { src: require('@/assets/img/唱片.png'), alt: '妆台秋思', title: '妆台秋思' },
      { src: require('@/assets/img/唱片.png'), alt: '月儿高', title: '月儿高' },
      { src: require('@/assets/img/唱片.png'), alt: '出水莲', title: '出水莲' },
      { src: require('@/assets/img/唱片.png'), alt: '鹧鸪飞', title: '鹧鸪飞' },
      { src: require('@/assets/img/唱片.png'), alt: '潇湘水云', title: '潇湘水云' },
      { src: require('@/assets/img/唱片.png'), alt: '病中吟', title: '病中吟' },
      { src: require('@/assets/img/唱片.png'), alt: '空山鸟语', title: '空山鸟语' },
      { src: require('@/assets/img/唱片.png'), alt: '金蛇狂舞', title: '金蛇狂舞' },
      ]
    }
  },
  methods: {
    goToMusic(music) {
      this.$router.push({
        name: 'MusicDetails',
        params: { musicId: music.id },
        query: { title: music.title }
      });
    }
  }

}
</script>

<style>
.image-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.music-item {
  flex: 1 0 33.33%;
  /* 每张图片占容器的1/3 */
  width: 18vw;
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

.music-name {
  font-size: 2em;
  font-weight: 700;
  color: rgba(51, 34, 23, 1);
  text-align: center;
  vertical-align: top;
  margin-top: 1vw;
  z-index: 10;
}

.music-image {
  border-radius: 0.5rem;
  /* 圆角大小 */
  overflow: hidden;
  /* 确保圆角有效 */
  width: 100%;
  /* 图片宽度调整为100%，以适应容器 */
  height: auto;
  /* 保持图片的宽高比 */
  object-fit: cover;
  /* 裁剪图片以覆盖整个容器 */
}
</style>
<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom:10px">
      <!-- todo：用v-for制作一个音乐人展示页 -->
      <!-- 三点要求：1.表层按照即时设计里面做
    2.点击音乐人进入音乐人详情页
    3.收录代表作，使得在详情页上显示他们的作品，点击后可以跳转到作品详情页-->

      <p id="introduction">中华传统音乐家，是中华文化的璀璨星辰，他们承载了深厚的历史底蕴与浓烈的民族情感，以精湛的技艺和独特的风格，为中华文化的传承与发展作出了杰出贡献。</p>
    </div>
    <div id="musician">
      <div>
        <div v-for="(item, index) in musicians" :key="index" class="musician-item">
          <img :src="item.src" :alt="item.alt" class="musician-image" @click="goToNewMusicion(item)">
          <div class="musician-name" @click="goToNewMusicion(item)">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'NewMusician',
  data() {
    return {
      musicians: [{ src: require('@/assets/musician/师旷.jpg'), alt: '师旷', title: '师旷' },
      { src: require('@/assets/musician/伯牙.jpg'), alt: '伯牙', title: '伯牙' },
      { src: require('@/assets/musician/李延年.jpg'), alt: '李延年', title: '李延年' },
      { src: require('@/assets/musician/嵇康.jpg'), alt: '嵇康', title: '嵇康' },
      { src: require('@/assets/musician/苏袛婆.jpg'), alt: '苏袛婆', title: '苏袛婆' },
      { src: require('@/assets/musician/万宝常.jpg'), alt: '万宝常', title: '万宝常' },
      { src: require('@/assets/musician/李隆基.jpg'), alt: '李隆基', title: '李隆基' },
      { src: require('@/assets/musician/李龟年.jpg'), alt: '李龟年', title: '李龟年' },
      { src: require('@/assets/musician/姜夔.jpg'), alt: '姜夔', title: '姜夔' },
      { src: require('@/assets/musician/朱载堉.jpg'), alt: '朱载堉', title: '朱载堉' },
      { src: require('@/assets/musician/张孔山.jpg'), alt: '张孔山', title: '张孔山' },
      { src: require('@/assets/musician/王玉峰.jpg'), alt: '王玉峰', title: '王玉峰' },
      { src: require('@/assets/musician/白居易.jpg'), alt: '白居易', title: '白居易' },
      { src: require('@/assets/musician/董庭兰.jpg'), alt: '董庭兰', title: '董庭兰' },
      { src: require('@/assets/musician/段善本.jpg'), alt: '段善本', title: '段善本'},
      { src: require('@/assets/musician/雷海青.jpg'), alt: '雷海青', title: '雷海青'},
      { src: require('@/assets/musician/阮籍.jpg'), alt: '阮籍', title: '阮籍'},
      { src: require('@/assets/musician/孔子.jpg'), alt: '孔子', title: '孔子'}


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
#musician {
  column-count: 3;
  column-gap: 1rem;
  padding: 1rem;
}

.image-row {
  display: grid;
  grid-gap: 2rem;
  /* 间隙大小 */
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.musician-item {
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
  break-inside: avoid;
}

.flex-item img {
  width: 100%;
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
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4%;
}
</style>
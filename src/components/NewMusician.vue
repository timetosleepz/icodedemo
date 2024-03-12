<template>
  <div>
    <!-- todo：用v-for制作一个音乐人展示页 -->
    <!-- 三点要求：1.表层按照即时设计里面做
    2.点击音乐人进入音乐人详情页
    3.收录代表作，使得在详情页上显示他们的作品，点击后可以跳转到作品详情页-->

    <p id="introduction">中华传统音乐家，是中华文化的璀璨星辰，他们承载了深厚的历史底蕴与浓烈的民族情感，以精湛的技艺和独特的风格，为中华文化的传承与发展作出了杰出贡献。</p>
  </div>

    <nav id="musician">
      <a href="#tang">唐代名家</a>
      <a href="#song">宋代名家</a>
      <a href="#yuan">元代名家</a>
      <a href="#ming">明代名家</a>
      <a href="#qing">清代名家</a>
    </nav>



  <div class="topic-container" id="tang">
    <div class="topic-title">
      <h1 class="ititle">唐代名家</h1>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in imageItems1" :key="index" class="flex-item">
        <img :src="item.src" :alt="item.alt" @click="goToNewMusicion(item)">
        <div class="image-title">{{ item.title }} @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>

  <div class="topic-container" id="song">
    <div class="topic-title">
      <h1 class="ititle">宋代名家</h1>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in imageItems2" :key="index" class="flex-item">
        <img :src="item.src" :alt="item.alt" @click="goToNewMusicion(item)">
        <div class="image-title">{{ item.title }} @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>

  <div class="topic-container" id="yuan">
    <div class="topic-title">
      <h1 class="ititle">元代名家</h1>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in imageItems3" :key="index" class="flex-item">
        <img :src="item.src" :alt="item.alt" @click="goToNewMusicion(item)">
        <div class="image-title">{{ item.title }} @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>


  <div class="topic-container" id="ming">
    <div class="topic-title">
      <h1 class="ititle">明代名家</h1>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in imageItems4" :key="index" class="flex-item">
        <img :src="item.src" :alt="item.alt" @click="goToNewMusicion(item)">
        <div class="image-title">{{ item.title }} @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>


  <div class="topic-container" id="qing">
    <div class="topic-title">
      <h1 class="ititle">清代名家</h1>
    </div>
    <div class="image-row">
      <div v-for="(item, index) in imageItems5" :key="index" class="flex-item">
        <img :src="item.src" :alt="item.alt" @click="goToNewMusicion(item)">
        <div class="image-title">{{ item.title }} @click="goToNewMusicion(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'NewMusician',
  data() {
    return {
      imageItems1: [
        {src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述'},
      ],
      imageItems2: [
        {src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述'},
      ],
      imageItems3: [
        {src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述'},
      ],
      imageItems4: [
        {src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述'},
      ],
      imageItems5: [
        {src: require('@/assets/img/background.png'), alt: 'Image 1', title: '图片1描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 2', title: '图片2描述'},
        {src: require('@/assets/img/background.png'), alt: 'Image 3', title: '图片3描述'},
      ]
    }
  },
  methods: {
    goToNewMusicion(musicion) {

      this.$router.push({
        name: 'MusicionDetails',
        params: {musicionId: musicion.id},
        query: { title: musicion.title }
      });
    }
  }
}
</script>

<style>

#introduction{
  position: absolute;
  top: 8vw;
  width: 80vw;
  height: 18vw;
  text-align: center;

}
#musician{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:rgba(215, 213, 188, 1);
  margin-top: 29vw;
  width: 100%;
  height: 10vw;
  font-size: 40px;
  font-weight: 400;
}

</style>
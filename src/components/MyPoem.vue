<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom: 10px;">
      <p id="introduction">
        音乐之诗，如涓涓细流滋润心灵，其美在于能将无形的音符化为有形的情感。诗人用文字捕捉旋律的飘逸，描绘和声的色彩，让人们在字里行间感受音乐的魅力，仿佛听到了心灵的回响，沉醉于那无尽的和谐与美好。</p>
    </div>

    <div class="poem-container">
      <div v-for="(item, index) in poems" :key="index" class="poem-card" @mouseover="handleMouseOver(item,index)" @mouseleave="handleMouseLeave">
        <div class="poem-title" @click="goToPD(item)">
          <span v-if="hoveredIndex === index" id="pcontent">{{ content }}</span>
          <span v-else>{{ item.title }}</span> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, inject } from 'vue';
export default {
  name: 'MyPoem',
  data() {
    return {
      content: '加载中',
      hoveredIndex: null,
      poems: [
        { title: '李凭箜篌引', content: '诗一内容...' },
        { title: '听弹琴', content: '诗二内容...' },
        { title: '省试湘灵鼓瑟', content: '诗一内容...' },
        { title: '观胡人吹笛', content: '诗二内容...' },
        { title: '和王七玉门关听吹笛', content: '诗一内容...' },
        { title: '春夜洛阳城闻笛', content: '诗二内容...' },
        { title: '木兰花·晚妆初了明肌雪', content: '诗一内容...' },
        { title: '菩萨蛮·哀筝一弄湘江曲', content: '诗二内容...' },
        { title: '听筝', content: '诗一内容...' },
        { title: '夜坐吟', content: '诗二内容...' },
        { title: '听蜀僧浚弹琴', content: '诗一内容...' },
        { title: '赋得长洲苑送李惠', content: '诗二内容...' },
        { title: '夜泊黄山闻殷十四吴吟', content: '诗一内容...' },
        { title: '伯牙', content: '诗二内容...' },
        { title: '喜张濆及第', content: '诗一内容...' },
        { title: '江亭晚望', content: '诗二内容...' },
        { title: '送郑州周司空', content: '诗一内容...' },
        { title: '关山月', content: '诗二内容...' },
        { title: '听邻家吹笙', content: '诗一内容...' },
        { title: '春夜闻笛', content: '诗二内容...' },
      ]
    }
  },
  setup() {
    const getAction = inject('getAction');
    const action = ref(getAction);
    return { action };
  },
  methods: {
    handleMouseOver(item,index) {
      this.hoveredIndex = index;
      const title = item.title;
      axios.get(this.action + '/poem/' + title)
        .then(response => {
          try {
            const data = response.data.introduction;
            this.content = data;
          } catch (jsonError) {
            console.log('解析 JSON 数据时出错:', jsonError);
          }
        })
        .catch(axiosError => {
          console.log('请求数据时出错:', axiosError);
        });
    },
    handleMouseLeave() {
      this.hoveredIndex = null;
    },
    goToPD(poems) {
      this.$router.push({
        name: 'PoemDetails',
        params: { poemId: poems.id },
        query: { title: poems.title, content: poems.content }
      });
    },
  }
}
</script>

<style>
.poem-content {
  position: absolute;
  top: 100%;
  left: -2vw;
  right: -2vw;
  bottom: -2vw;
  padding: 4vw;
  background: #97CADB;
  border-radius: 2%;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow: auto;
}

#pcontent {
  white-space: pre-wrap;
}

.poem-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
}

.poem-container {
  position: absolute;
  top: 30vw;
}

.poem-card {
  flex: 0 0 calc(50% - 4vw);
  max-width: calc(50% - 4vw);
  margin: 2vw;
  padding: 2vw;
  border-radius: 3%;
  background: #D6E8EE;
  box-sizing: border-box;
  position: relative;

}

.poem-card:hover .poem-content {
  top: 0;
  opacity: 1;
}
</style>

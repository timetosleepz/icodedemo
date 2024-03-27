<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom: 10px;">
      <p id="introduction">
        音乐之诗，如涓涓细流滋润心灵，其美在于能将无形的音符化为有形的情感。诗人用文字捕捉旋律的飘逸，描绘和声的色彩，让人们在字里行间感受音乐的魅力，仿佛听到了心灵的回响，沉醉于那无尽的和谐与美好。</p>
    </div>

    <div class="poem-container">
      <div v-for="(item, index) in poems" :key="index" class="poem-card" @mouseover="handleMouseOver(item,index)" @mouseleave="handleMouseLeave">
        <div class="poem-title" @click="goToPD(item)">
          <span v-if="hoveredIndex === index">{{ content }}</span>
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
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
        { title: '标题', content: '诗一内容...' },
        { title: '标题', content: '诗二内容...' },
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
.poem-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.poem-card {
  width: 30%;
  max-width: calc(50% - 4vw);
  margin: 2vw;
  padding: 2vw;
  border-radius: 5%;
  background: rgba(215, 213, 188, 1);
}

.poem-card:hover .poem-content {
  top: 0;
  opacity: 1;
}
</style>

<template>
  <div>
    <div style="display: flex;justify-content: center;margin-bottom: 10px;">
      <p id="introduction">
        音乐之诗，如涓涓细流滋润心灵，其美在于能将无形的音符化为有形的情感。诗人用文字捕捉旋律的飘逸，描绘和声的色彩，让人们在字里行间感受音乐的魅力，仿佛听到了心灵的回响，沉醉于那无尽的和谐与美好。</p>
    </div>

    <div class="poem-container">
      <div v-for="(item, index) in poems" :key="index" class="poem-card">
        <div class="poem-title" @click="goToPD(item)">{{ item.title }}</div>
        <div class="poem-content" @click="goToPD(item)">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPoem',
  data() {
    return {
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
  methods: {
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
  background: yellowgreen;
  border-radius: 2.5vw;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow: auto;
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
  border-radius: 2.5vw;
  background: rgba(215, 213, 188, 1);
  box-sizing: border-box;
  position: relative;

}

.poem-card:hover .poem-content {
  top: 0;
  opacity: 1;
}
</style>

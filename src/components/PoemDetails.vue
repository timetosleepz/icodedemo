<template>
  <div>
    <div class="poemcontainer">
      <h1 id="poemname">{{ poemTitle }}</h1>
      <p>
        作者：{{ poet }}<br>
      </p>
      <p id="poemcontent">
        {{ text }}<br><br>
      </p>
      <p id="background">
        背景：{{ background }}<br>
      </p>
    </div>

    <svg class="back-button" @click="goBack" width="66" height="66" viewBox="0 0 1024 1024" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1004.032007 907.639505l-395.605202-395.605201 395.605202-395.673468c12.902396-12.902396 19.967993-30.037323 19.967993-48.298651 0-18.158927-7.099731-35.259722-19.93386-48.059717A67.583977 67.583977 0 0 0 955.938156 0.000341c-18.295461 0-35.430388 7.099731-48.298651 19.967994L512.000171 415.573536 116.360836 19.968335A67.720511 67.720511 0 0 0 68.164585 0.000341C49.971525 0.000341 32.87073 7.100072 19.968335 19.968335A67.549844 67.549844 0 0 0 0.000341 68.096319c0 18.227194 7.065598 35.362122 19.967994 48.264517l395.673468 395.673468L19.968335 907.605372A67.720511 67.720511 0 0 0 0.000341 955.835756c0 18.193061 7.099731 35.327988 19.967994 48.196251 12.902396 12.868262 30.00319 19.967993 48.19625 19.967993 18.193061 0 35.327988-7.099731 48.196251-19.967993l395.673468-395.605202 395.605201 395.605202c12.868262 12.868262 30.037323 19.967993 48.230384 19.967993 18.227194 0 35.293855-7.099731 48.127984-19.93386a68.266644 68.266644 0 0 0 0-96.426635z"
        fill="#999999" p-id="4252"></path>
    </svg>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, inject } from 'vue';
export default {
  name: 'PoemDetails',
  setup() {
    const getAction = inject('getAction');
    const action = ref(getAction);
    return { action };
  },
  data() {
    return {
      poemTitle: '加载中...',
      text: '加载中',
      background: '',
      poet: '未知',
    };
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      const title = to.query.title;
      if (title) {
        vm.poemTitle = title;
      }
      try {
        const response = await axios.get(vm.action + '/poem/' + title);
        try {
          const data = response.data.introduction;
          vm.text = data;
          const background = response.data.background;
          vm.background = background;
          const poet = response.data.name;
          vm.poet = poet;
        } catch (jsonError) {
          console.log('解析 JSON 数据时出错:', jsonError);
        }
      } catch (axiosError) {
        console.log('请求数据时出错:', axiosError);
      }
    });
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  
}


</script>

<style>
.poemcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
}

#poemname {
  margin-bottom: 3vw;
}

#poemcontent {
  text-align: center;
  white-space: pre-wrap;
}

#background {
  text-align: left;
  font-size: 30px;
  white-space: pre-wrap;
}


.back-button {
  position: fixed;
  top: 6vw;
  right: 6vw;
  cursor: pointer;
  width: 2vw;
}
</style>
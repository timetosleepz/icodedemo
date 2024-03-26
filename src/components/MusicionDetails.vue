<template>
  <div>
    <div>
      <img class="instru" :src="photo" alt="instrument">
      <h1 class="name">{{ musicionTitle }}</h1>

    </div>

    <svg class="back-button" @click="goBack" width="66" height="66" viewBox="0 0 1024 1024" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1004.032007 907.639505l-395.605202-395.605201 395.605202-395.673468c12.902396-12.902396 19.967993-30.037323 19.967993-48.298651 0-18.158927-7.099731-35.259722-19.93386-48.059717A67.583977 67.583977 0 0 0 955.938156 0.000341c-18.295461 0-35.430388 7.099731-48.298651 19.967994L512.000171 415.573536 116.360836 19.968335A67.720511 67.720511 0 0 0 68.164585 0.000341C49.971525 0.000341 32.87073 7.100072 19.968335 19.968335A67.549844 67.549844 0 0 0 0.000341 68.096319c0 18.227194 7.065598 35.362122 19.967994 48.264517l395.673468 395.673468L19.968335 907.605372A67.720511 67.720511 0 0 0 0.000341 955.835756c0 18.193061 7.099731 35.327988 19.967994 48.196251 12.902396 12.868262 30.00319 19.967993 48.19625 19.967993 18.193061 0 35.327988-7.099731 48.196251-19.967993l395.673468-395.605202 395.605201 395.605202c12.868262 12.868262 30.037323 19.967993 48.230384 19.967993 18.227194 0 35.293855-7.099731 48.127984-19.93386a68.266644 68.266644 0 0 0 0-96.426635z"
        fill="#999999" p-id="4252"></path>
    </svg>
    <div class="play">
      {{ paragraphs }}<br><br>
      代表作有：{{ work }}
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue';
import axios from 'axios';

export default {
  name: 'MusicionDetails',
  setup() {
    const getAction = inject('getAction');
    const action = ref(getAction);
    return { action };
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      const title = to.query.title;
      const photo = to.query.photo;
      if (title) {
        vm.musicionTitle = title;
      }
      if (photo) {
        vm.photo = photo;
      }
      //后端交互部分
      try {
        const response = await axios.get(vm.action + '/musician/' + title);
        try {
          const data = response.data;
          console.log(data);
          vm.text = data.introduction;
          vm.work = data.name;
        } catch (jsonError) {
          console.log('解析 JSON 数据时出错:', jsonError);
        }
      } catch (axiosError) {
        console.log('请求数据时出错:', axiosError);
      }
    });
  },
  data() {
    return {
      musicionTitle: '接收不到数据',
      photo: '',
      text: '',
      work: '',
    }
  },
  beforeCreate() {
    this.savedPosition = this.$route.meta.savedPosition;
  },
  computed: {
    paragraphs() {
      return this.text.replace(/\\n/g, '\n        ');
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  }
}
</script>

<style>
.name {
  position: absolute;
  top: 10vw;
  left: 60vw;
  color: #543624;
}
</style>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'animate.css/animate.min.css' //引入animate.css

import HomePage from './components/HomePage'
import NewInstrument from './components/NewInstrument'
import NewMusician from './components/NewMusician'
import MyPoem from './components/MyPoem'
import NewMusic from './components/NewMusic.vue'
import InstrumentDetails from "@/components/InstrumentDetails.vue"
import MusicionDetails from "@/components/MusicionDetails.vue"

const routes = [
  { path: '/', component: HomePage ,meta: { keepAlive: true },},
  { path: '/home', component: HomePage, meta: { keepAlive: true }, },
  { path: '/instrument', component: NewInstrument, meta: { keepAlive: true }, },
  { path: '/musician', component: NewMusician, meta: { keepAlive: true }, },
  { path: '/poem', component: MyPoem, meta: { keepAlive: true }, },
  { path: '/music', component: NewMusic, meta: { keepAlive: true }, },
  { path: '/instrumentdetails', name: "InstrumentDetails", component: InstrumentDetails, meta: { keepAlive: false }, },
  { path: '/musiciondetails', name: "MusicionDetails", component: MusicionDetails, meta: { keepAlive: false }, }
]

var position = { x: 0, y: 0 }

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(!to.meta.keepAlive){//去到详情页时
          position = savedPosition;
          return resolve({top: 0});
        } else if(!from.meta.keepAlive){//从详情页返回时
          return resolve(position);
        } else {
          return resolve({top: 0});
        }
      }, 330);
    });
  }
});


router.beforeEach((to, from, next) => {
  // 在这里，你可以添加你的导航守卫逻辑
  next();
})

createApp(App).use(router).provide('getAction', 'http://localhost:8088').mount('#app')

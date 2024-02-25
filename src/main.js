import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './components/HomePage'
import NewInstrument from './components/NewInstrument'
import NewMusician from './components/NewMusician'
import MyPoem from './components/MyPoem'
import NewMusic from './components/NewMusic'

const routes = [
  { path: '/', component: HomePage},
  { path: '/home', component: HomePage },
  { path: '/instrument', component: NewInstrument },
  { path: '/musician', component: NewMusician },
  { path: '/poem', component: MyPoem},
  { path: '/music', component: NewMusic}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
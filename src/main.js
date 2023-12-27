import { createApp } from "vue"
import App from './app.vue'
import './assets/global.css'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/home.vue'
import About from './components/about.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/houses', component: Home },
        { path: '/about', component: About },
    ]
});

createApp(App)
  .use(router)
  .mount('#app')


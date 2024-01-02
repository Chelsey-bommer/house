
import { createApp } from "vue"
import App from './app.vue'
import './assets/global.css'
import { createRouter, createWebHistory } from 'vue-router'



import Houses from './components/houses.vue'
import About from './components/about.vue'
import Details from './components/detail.vue'
import AddHouse from './components/addHouse.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/houses', component: Houses },
        { path: '/about', component: About },
        {path: '/house/:id', component: Details, name: 'houseDetails', props: true},
        {path: '/addhouse', component: AddHouse}
    ]
});




            

createApp(App)
  .use(router)
  .mount('#app')
  




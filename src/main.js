
import { createApp } from "vue"
import App from './app.vue'
import './assets/global.css'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store';


import Houses from './components/houses.vue'
import About from './components/about.vue'
import HouseDetails from './components/detail.vue'
import AddHouse from './components/addHouse.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/houses', component: Houses, name: 'Houses' },
        { path: '/about', component: About },
        {
            path: '/house/:id', component: HouseDetails, name: 'houseDetails', props: (route) => ({
                id: route.params.id,
                source: route.query.source,
            })
        },
        { path: '/addhouse', component: AddHouse, name: 'AddHouse', props: true }
    ]
});






createApp(App)
    .use(router)
    .use(store) // Use the Vuex store
    .mount('#app')





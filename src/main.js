
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

var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3s8K-HjLw1vBgI2nelJFMWbcQ6upXDYm");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
 .then(response => response.text())
 .then(result => console.log(result))
 .catch(error => console.log('error', error));

createApp(App)
  .use(router)
  .mount('#app')


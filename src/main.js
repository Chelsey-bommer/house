
import { createApp } from "vue"
import App from './app.vue'
import './assets/global.css'
import { createRouter, createWebHistory } from 'vue-router'



import Houses from './components/houses.vue'
import About from './components/about.vue'
import Details from './components/detail.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/houses', component: Houses },
        { path: '/about', component: About },
        {path: '/house/:id', component: Details, name: 'houseDetails'}
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
                .then(response => response.json())
                .then(result => console.log(result)) //RESULT
                .catch(error => console.log('error', error))

                



createApp(App)
  .use(router)
  .mount('#app')
  




<template> 

    <!--NAVIGATION-->
    <img src="./assets/img/img_logo_dtt@3x.png" alt="">
    <router-link to="/houses" @click="housesClick" :class="{housesIsActive}"> Houses</router-link> <br>
    <router-link to="/about" @click="navClick" :class="{navIsActive}">about</router-link> <br>
   
    <!--SEARCH-->
    <search/>

    <!-- PAGE CONTENT-->
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
 import search from './components/search.vue'

 export default{
    name: 'App',
    components: {
        search
    },
    
    data(){
        return{
            housesIsActive: true,
            navIsActive: false
        }
    },
    methods:{
       housesClick(){
            this.housesIsActive = true,
            this.navIsActive = false
       },
       navClick(){
            this.navIsActive = true,
            this.housesIsActive = false
       }
    }
}
</script>
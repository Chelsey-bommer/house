<template> 

    <!--NAVIGATION-->
    <div class="nav">
        <img src="./assets/img/img_logo_dtt@3x.png" alt="DTT Logo" class="logo">
        <router-link to="/houses" @click="housesClick" :class="{housesIsActive}" class="houses"> Houses</router-link> 
        <router-link to="/about" @click="navClick" :class="{navIsActive}" class="nav">about</router-link> <br>
        
    </div>
   
    <!--SEARCH-->
    <search/>

    <!-- PAGE CONTENT-->
    <div>
        <router-view>
        </router-view>
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
            navIsActive: false,
           
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

<style>
.logo{
    width:200px;
}

.nav{
    background-color: var(--background-color2);
    font-family: 'Montserrat', regular;
    text-decoration: none;
}

.housesIsActive{
    font-weight: bold;
}

.navIsActive{
    font-weight: bold;
}

</style>
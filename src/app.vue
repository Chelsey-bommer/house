<template> 

    <!--NAVIGATION-->
    <div class="nav">
        <img src="./assets/img/img_logo_dtt@3x.png" alt="DTT Logo" class="logo">
        <router-link to="/houses" @click="housesClick" :class="{housesIsActive}" class="houses"> Houses</router-link> 
        <router-link to="/about" @click="navClick" :class="{navIsActive}" class="navlink">about</router-link> <br>
        
    </div>
   
    <!--SEARCH-->
    
    <router-link to="/addhouse">Create new</router-link>

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
    width:150px;
}

.nav{
    background-color: var(--background-color2);
    font-family: 'Montserrat', regular;
    text-decoration: none;
    padding:1em;
}

.nav img{
    margin-left:19%;
}

.navlink{
    padding:1em;
}

.houses{
    padding:1em;
}
.housesIsActive{
    font-weight: bold;
}

.navIsActive{
    font-weight: bold;
}

</style>
<template> 

    <!--NAVIGATION-->
    <router-link to="/houses" @click="housesClick" :class="{housesIsActive}"> Houses</router-link> <br>
    <router-link to="/about" @click="navClick" :class="{navIsActive}">about</router-link> 
   

    <!-- PAGE CONTENT-->
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
 export default{
    name: 'App',
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
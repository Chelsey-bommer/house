<template> 
    <h1>cheez</h1>

    <router-link to="/about">about</router-link> <br>
    <router-link to="/home">home</router-link>

    <div>
        <router-view></router-view>
    </div>
</template>

<script>
 

 export default{
    name: 'App',
    data(){
        return{
           
        }
    },
    methods:{
       
    }
}
</script>
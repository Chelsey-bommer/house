<template> 

    <!--NAVIGATION-->
    <router-link to="/houses">Houses</router-link> <br>
    <router-link to="/about">about</router-link> 
   

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
            books: [
                {title: 'The Hunger Games' , author: 'Susanne Collins', img: 'img/bingus.png', isFav: true},
                {title: 'Catching Fire', author: 'Susanne Collins', img: 'img/cat.jpg', isFav: false},
                {title: 'Mockingjay', author: 'Susanne Collins', img: 'img/cat2.jpg', isFav: true}
            ],
        }
    },
    methods:{
       
    }
}
</script>
<template>
    <h1>Houses!</h1>
    <p>I like most types of food.</p>

  
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>

    
</template>

<script>
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "{api_key}");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));

    export default{
        props: ['header', 'text'],

        methods: {
        
    },

    created() {
        this.getData();
    },
    }
</script>

<style scoped>
    .modal{
        width:400px;
        padding:20px;
        margin:100px auto;
        background: white;
        border-radius:10px
    }

    .backdrop{
        top:0;
        position:fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>
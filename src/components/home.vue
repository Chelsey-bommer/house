<template>
    <h1>Houses!</h1>
    <p>I like most types of food.</p>


    <div>

        <div v-for="item in listItems">
             {{item}}
         </div>

    </div>
</template>


<script>




var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3s8K-HjLw1vBgI2nelJFMWbcQ6upXDYm");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result[0].constructionYear)) //RESULT
    .catch(error => console.log('error', error))


export default {
    props: ['header', 'text'],
    data(){
        return{
            listItems: []
        }
    },

    methods: {
        async getData(){
            const res = await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
            const finalRes = await res.json();
            this.listItems = finalRes
        }
    },
    mounted() {
      this.getData()
    }





}
</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
</style>
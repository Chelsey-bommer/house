<template>
    

    <div>
        <h1>Houses</h1>
        <div v-for="houses in houseList" class="houseslist">
            <img :src="houses.image" alt="" :key="houses.id">
            <div>
             <h2>{{ houses.location.city }} {{ houses.location.street }} {{ houses.location.houseNumber }}</h2>
             <p> {{ houses.price }}</p>
             <p> {{ houses.location.zip }}</p>
             <router-link :to="{ name:'houseDetails', params:{id: houses.id}}" > See tha house</router-link>
            </div>
            
            
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

// fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result[0])) //RESULT
//     .catch(error => console.log('error', error))


export default {
    props: ['header', 'text'],
    data(){
        return{
            houseList: [],
            searchHouses: ''
        }
    },
    computed:{
  
    },

    methods: {
        async getData(){
            const res = await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
            const finalRes = await res.json();
            this.houseList = finalRes
        }
    },
    mounted() {
      this.getData()
    }

}
</script>

<style scoped>
.houseslist{
    background-color: var(--background-color2);

    width:60%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:1em;
    padding:1em;

    border-radius: 5px;

    display:flex;
}

.houseslist img{
    width:200px;
}

h1{
    margin-left:19%;
    margin-top:1em;
}
</style>
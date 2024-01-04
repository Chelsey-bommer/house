<template>
    
    <div v-if="houseList">
        <h1>House Detail page </h1>
        <p>{{ id }}</p>
    
        <div v-for="house in houseList">
            <h2>{{ house.location.street }} {{ house.location.houseNumber }}</h2>
            <p>tha price: {{ house.price }}</p>
            <p>{{ house.location.zip }} {{ house.location.city }}</p>
            <img :src=" house.image" alt="">
            <p>{{ house.description }}</p>
            <p> Bedrooms: {{ house.rooms.bedrooms }} Bathrooms: {{ house.rooms.bathrooms }}</p>
            <p>Size: {{ house.size }}</p>
            <p>Jaar: {{ house.constructionYear }}</p>
            <p>Garage: {{ house.hasGarage }}</p>
        </div>
    </div>
    
</template>


<script>
import { computed, ref, onMounted } from 'vue';
import store from '../store';

var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3s8K-HjLw1vBgI2nelJFMWbcQ6upXDYm");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

export default {
    data() {
        return {
            houseList: null,

        }
    },
    props: ['id'],
    methods: {
        async getData(){
            const res = await fetch("https://api.intern.d-tt.nl/api/houses/" + this.id, requestOptions)
            const finalRes = await res.json();
            this.houseList = finalRes
            console.log(this.houseList)
        }
    },
    mounted() {
      this.getData()
    }


}

</script>

<style scoped>
    img{
        width: 200px;
    }

</style>
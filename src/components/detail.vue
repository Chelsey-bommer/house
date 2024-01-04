<template>
    <div v-if="houseDetails">

        <h1>House Detail page </h1>
        <p>{{ houseDetails.id }}</p>

        <h2>{{ houseDetails.streetname || houseDetails.street }} {{ houseDetails.housenumber || houseDetails.houseNumber
        }}</h2>
        <p>tha price: {{ houseDetails.price }}</p>
        <p>{{ houseDetails.postalcode || houseDetails.zip }} {{ houseDetails.city || houseDetails.city }}</p>
        <img :src="houseDetails.image" alt="">
        <p>{{ houseDetails.description }}</p>
        <p> Bedrooms: {{ houseDetails.bedrooms }} Bathrooms: {{ houseDetails.bathrooms }}</p>
        <p>Size: {{ houseDetails.size }}</p>
        <p>Jaar: {{ houseDetails.constructionYear }}</p>
        <p>Garage: {{ houseDetails.hasGarage }}</p>

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
            houseDetails: null,

        }
    },
    props: ['id', 'source'],
    methods: {
        async fetchHouseDetails() {
            console.log('Source:', this.source);
            console.log('ID:', this.id);

            try {
                if (this.source === 'added') {
                    // Fetch details from addedHouseList
                    const addedHouseList = store.state.addedHouseList;
                    this.houseDetails = addedHouseList.find(house => house.id == this.id) || null;
                } else {
                    // Fetch details from the API using the house ID
                    const res = await fetch(`https://api.intern.d-tt.nl/api/houses/${this.id}`, requestOptions);

                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }

                    this.houseDetails = await res.json();
                }
            } catch (error) {
                console.error('Error fetching house details:', error);
                this.houseDetails = null;
            }
        },
    },
    mounted() {
        this.fetchHouseDetails();
    }
}
</script>

<style scoped>
img {
    width: 200px;
}
</style>
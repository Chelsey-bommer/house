<template>
    <div v-if="houseDetails">
        <h1>House Detail page </h1>
        <div v-if="this.source === 'added'">
            <div>
                <p>{{ houseDetails.id }}</p>
                <h2>
                    {{ houseDetails.streetname || houseDetails.location?.street }}
                    {{ houseDetails.housenumber || houseDetails.location?.houseNumber }}
                </h2>
                <p>tha price: {{ houseDetails.price }}</p>
                <p>{{ houseDetails.postalcode || houseDetails.location?.zip }} {{ houseDetails.city ||
                    houseDetails.location?.city }}</p>
                <img :src="houseDetails.image" alt="">
                <p>{{ houseDetails.description }}</p>
                <p> Bedrooms: {{ houseDetails.bedrooms || houseDetails.rooms?.bedrooms }} Bathrooms: {{
                    houseDetails.bathrooms
                    || houseDetails.rooms?.bathrooms }}</p>
                <p>Size: {{ houseDetails.size }}</p>
                <p>Jaar: {{ houseDetails.date || houseDetails.constructionYear }}</p>
                <p>Garage: {{ houseDetails.hasGarage }}</p>
            </div>
        </div>

        <div v-else v-for="house in houseDetails" :key="house.id">

            <p>{{ house.id }}</p>

            <h2>
                {{ house.streetname || house.location?.street }}
                {{ house.housenumber || house.location?.houseNumber }}
            </h2>
            <p>tha price: {{ house.price }}</p>
            <p>{{ house.postalcode || house.location?.zip }} {{ house.city || house.location?.city }}</p>
            <img :src="house.image" alt="">
            <p>{{ house.description }}</p>
            <p> Bedrooms: {{ house.bedrooms || house.rooms?.bedrooms }} Bathrooms: {{ house.bathrooms ||
                house.rooms?.bathrooms }}</p>
            <p>Size: {{ house.size }}</p>
            <p>Jaar: {{ house.date || house.constructionYear }}</p>
            <p>Garage: {{ house.hasGarage }}</p>
        </div>

    </div>
    <div v-else>
        <p>No house details available.</p>
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
            // Log the current state.houseList
            console.log('Current houseList:', store.state.houseList);
            try {
                if (this.source === 'added') {
                    // Fetch details from addedHouseList
                    const addedHouseList = store.state.addedHouseList;
                    this.houseDetails = addedHouseList.find(house => house.id == this.id) || null;
                } else {
                    // Fetch details from the API using the house ID
                    const res = await fetch("https://api.intern.d-tt.nl/api/houses/" + this.id, requestOptions);

                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const apiHouseDetails = await res.json();
                    store.commit('setHouseDetails', apiHouseDetails);
                    this.houseDetails = apiHouseDetails;

                    console.log('Store House Details:', store.state.houseDetails);
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
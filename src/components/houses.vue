<template>
    <div>
        <h1>Houses</h1>

        <!-- sorting buttons -->
        <button @click="sortHousesByPrice('asc')">Sort by Price ascending</button>
        <button @click="sortHousesByPrice('desc')">Sort by Price descending</button>

        <input v-model="searchHouses" placeholder="Search by City">

        <div v-if="filteredAndSortedHouses.length > 0"> <!-- check for results -->
            <div v-for="houses in filteredAndSortedHouses" class="houseslist">
                <img :src="houses.image" alt="" :key="houses.id">
                <div>
                    <h2> {{ houses.location.street }} {{ houses.location.houseNumber }}</h2>
                    <p> {{ houses.price }}</p>
                    <p> {{ houses.location.zip }} {{ houses.location.city }}</p>
                    <router-link :to="{ name: 'houseDetails', params: { id: houses.id } }"> See tha house</router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <p>There were no houses found in this city</p>
        </div>


    </div>
</template>


<script>
import { computed, ref, onMounted } from 'vue';


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
    data() {
        return {
            houseList: [],
            searchHouses: '',
            sortOrder: 'asc', // Default sorting order (ascending)
        }
    },

    computed: {
        filteredAndSortedHouses() {

            // Filter houses based on the search criteria
            const filteredHouses = this.houseList.filter(house =>
                house.location.city.toLowerCase().includes(this.searchHouses.toLowerCase())
            );

            // Sort the filtered houses
            return filteredHouses.slice().sort((a, b) => {
                const order = this.sortOrder === 'asc' ? 1 : -1;
                return order * (a.price - b.price);
            });
        },
    },

    methods: {
        async getData() {
            const res = await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
            const finalRes = await res.json();
            this.houseList = finalRes
        },

        sortHousesByPrice(order) {
            // Order determined by button
            this.sortOrder = order;
        },
    },
    mounted() {
        this.getData()
    }

}
</script>

<style scoped>
.houseslist {
    background-color: var(--background-color2);

    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    padding: 1em;

    border-radius: 5px;

    display: flex;
}

.houseslist img {
    width: 200px;
}

h1 {
    margin-left: 19%;
    margin-top: 1em;
}
</style>
<template>
    <div>
        <h1>Houses</h1>

        <!-- sorting buttons -->
        <button @click="sortHousesByPrice('asc')">Sort by Price ascending</button>
        <button @click="sortHousesByPrice('desc')">Sort by Price descending</button>

        <!-- <button @click="clearAddedHouseList">Clear Added House List</button> -->

        <input v-model="searchHouses" placeholder="Search by City">
        <button @click="clearSearch">X</button>

        <div v-if="filteredAndSortedHouses.length > 0"> <!-- check for results -->
            <p>Houses found: {{ filteredAndSortedHouses.length }}</p>
            <div v-for="house in filteredAndSortedHouses" :key="house.id" class="houseslist">
                <img :src="house.image" alt="" :key="house.id">
                <div>
                    <h2> {{ house.streetname || house.location.street }} {{ house.housenumber || house.location?.houseNumber
                    }}</h2>
                    <p> {{ house.price }}</p>
                    <p> {{ house.postalcode || house.location.zip }} {{ house.city || house.location?.city }}</p>
                    <router-link :to="getHouseDetailsLink(house)"> See tha house</router-link>

                    <!-- <router-link :to="{ name: 'houseDetails', params: { id: house.id } }"> See tha house</router-link> -->
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
import store from '../store';


var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3s8K-HjLw1vBgI2nelJFMWbcQ6upXDYm");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}


export default {
    props: ['header', 'text', 'addedHouseList'],
    data() {
        return {
            houseList: [],
            addedHouseList: [],
            searchHouses: '',
            sortOrder: 'asc', // Default sorting order (ascending)
        }
    },

    computed: {
        filteredAndSortedHouses() {

            // Filter houses based on the search criteria
            const filteredHouses = this.allHouses.filter(house => {
            if (house.location && house.location.city) {
                return house.location.city.toLowerCase().includes(this.searchHouses.toLowerCase());
            } else if (house.city) {
                // If location.city is undefined, check if house.city is defined
                return house.city.toLowerCase().includes(this.searchHouses.toLowerCase());
            }
        });

            // Sort the filtered houses
            return filteredHouses.slice().sort((a, b) => {
                const order = this.sortOrder === 'asc' ? 1 : -1;
                return order * (a.price - b.price);
            });
        },
        allHouses() {
            // Concatenate houseList and addedHouseList into a new array
            return [...this.houseList, ...store.state.addedHouseList];
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
        clearSearch() {
            this.searchHouses = '';
        },
        // clearAddedHouseList() {
        //  this.$store.dispatch('clearAddedHouseList');
        // },
        getHouseDetailsLink(house) {
            // Check whether the house is from the added list
            const isAddedHouse = store.state.addedHouseList.some(addedHouse => addedHouse.id === house.id);

            // Construct the route object based on the condition
            return {
                name: 'houseDetails',
                params: { id: house.id },
                query: { source: isAddedHouse ? 'added' : 'api' }
            };
        },

    },
    mounted() {
        this.getData()
        // Access addedHouseList prop passed from addHouse.vue
        if (this.$route.params.addedHouseList) {
            this.houseList = this.$route.params.addedHouseList;
        }
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
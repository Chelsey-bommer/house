<template>
    <h1>Create new listing</h1>

    <p>{{ streetname }}</p>

    <form @submit.prevent="submitForm">
        <p>Street name*</p>
        <input type="text" placeholder="Enter the street name" required v-model="streetname">

        <p>House number</p>
        <p>Additional</p>
        <input type="text" placeholder="Enter house number" required v-model="housenumber" pattern="\d{1,5}"> <input type="text"
            placeholder="e.g. A" v-model="additional">

        <p>Postal code</p>
        <input type="text" placeholder="e.g. 1000 AB" required v-model="postalcode"  pattern="\d{4}[A-Za-z]{2}">

        <p>City</p>
        <input type="text" placeholder="e.g. Utrecht" required v-model="city">

        <p>Upload picture</p>
        <!-- ?????????????????????????????????? -->
        <input type="image" required v-model="image">

        <p>Price</p>
        <input type="text" placeholder="e.g. 150.000" required v-model="price">

        <p>Size</p>
        <input type="text" placeholder="e.g. 60m2" required v-model="size">

        <p>Garage</p>
        <p><input type="radio" name="yes_no" checked v-model="yes"> Yes </p>
        <p><input type="radio" name="yes_no" v-model="no"> No </p>

        <p>Bedrooms</p>
        <input type="text" placeholder="Enter amount" required v-model="bedrooms">

        <p>Bathrooms</p>
        <input type="text" placeholder="Enter amount" required v-model="bathrooms">

        <p>Construction date</p>
        <input type="date" placeholder="E.g. 1960" required v-model="date">

        <p>Description</p>
        <input type="text" placeholder="Enter description" required v-model="description">

        <button type="submit">Post</button>

    </form>
</template>


<script>
import { Store } from 'vuex'
import store from '../store';

export default {
    data() {
        return {
            addedHouseList: [],
            housenumber: '',
            additional: '',
            postalcode: '',
            city: '',
            streetname: '',
            image: '',
            price: '',
            size: '',
            yes: true,
            no: false,
            bedrooms: '',
            bathrooms: '',
            date: '',
            description: '',
            id: ''
        }
    },
    methods: {
        async submitForm() {
            // Generate a new house with a new ID
            const newId = await store.dispatch('generateNewId');
            const newHouse = {
                id: newId,
                streetname: this.streetname,
                housenumber: this.housenumber,
                additional: this.additional,
                postalcode: this.postalcode,
                city: this.city,
                image: this.image,
                price: this.price,
                size: this.size,
                garage: this.yes,
                bedrooms: this.bedrooms,
                bathrooms: this.bathrooms,
                date: this.date,
                description: this.description
            }

            this.addedHouseList.push(newHouse);

            // Dispatch the mutation to update addedHouseList in the store
            store.commit('pushToAddedHouseList', newHouse);
            console.log(this.addedHouseList);

            // Redirect to the Houses component and pass addedHouseList as a prop
            this.$router.push({ name: 'houseDetails', params: { id: newHouse.id }, query: { source: 'added' } });
        }
    }

}
</script>
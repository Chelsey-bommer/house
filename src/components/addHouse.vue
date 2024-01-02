<template>
<h1>Create new listing</h1>

    <p>{{ streetname }}</p>

    <form @click="submitForm">
        <p>Street name*</p>
        <input type="text" placeholder="Enter the street name" required v-model="streetname">

        <p>House number</p>
        <p>Additional</p>
        <input type="text" placeholder="Enter house number" required v-model="housenumber"> <input type="text" placeholder="e.g. A" v-model="additional">

        <p>Postal code</p>
        <input type="text" placeholder="e.g. 1000 AB" required v-model="postalcode">

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
        <input type="text" placeholder="E.g. 1960" required v-model="date">

        <p>Description</p>
        <input type="text" placeholder="Enter description" required v-model="description">
    </form>
    <button type="submit" form="formHouse">Post</button>


</template>


<script>
export default {
    data() {
        return {
            streetname: '',
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
        }
    },
    methods:{
        submitForm(){
        }
    }
}
</script>
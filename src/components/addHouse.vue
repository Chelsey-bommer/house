<template>
    <h1>Create new listing</h1>

    <p>{{ streetname }}</p>
    
    <form action="">
        <p>Street name*</p>
        <input type="text" placeholder="Enter the street name" required v-model="streetname">

        <p>House number</p>
        <p>Additional</p>
        <input type="text" placeholder="Enter house number" required> <input type="text" placeholder="e.g. A">

        <p>Postal code</p>
        <input type="text" placeholder="e.g. 1000 AB" required>

        <p>City</p>
        <input type="text" placeholder="e.g. Utrecht" required>

        <p>Upload picture</p>
        <!-- ?????????????????????????????????? -->
        <input type="image">

        <p>Price</p>
        <input type="text" placeholder="e.g. 150.000" required>

        <p>Size</p>
        <input type="text" placeholder="e.g. 60m2" required>

        <p>Garage</p>
        <p><input type="radio" name="yes_no" checked> Yes </p>
        <p><input type="radio" name="yes_no"> No </p>

        <p>Bedrooms</p>
        <input type="text" placeholder="Enter amount" required >

        <p>Bathrooms</p>
        <input type="text" placeholder="Enter amount" required>

        <p>Construction date</p>
        <input type="text" placeholder="E.g. 1960" required>

        <p>Description</p>
        <input type="text" placeholder="Enter description" required>
    </form>

    
</template>


<script>


export default {
    data() {
        return {
            streetname: ''
        }
    }
}
</script>
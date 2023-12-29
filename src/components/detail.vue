<template>
    

    <div v-if="house">
        <h1>House Detail page </h1>
        <p>{{ id }}</p>
    
        <div v-for="house in house">
            <p>{{ house.price }}</p>
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

export default {
    data() {
        return {
            house: null,

        }
    },
    props: ['id'],
    methods: {
        async getData(){
            const res = await fetch("https://api.intern.d-tt.nl/api/houses/" + this.id, requestOptions)
            const finalRes = await res.json();
            this.house = finalRes
            console.log(this.house)
        }
    },
    mounted() {
      this.getData()
    }



}


</script>
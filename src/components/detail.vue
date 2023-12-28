<template>

 <h2>{{ houses.location.city }} {{ houses.location.street }} {{ houses.location.houseNumber }}</h2>
</template>


<script>
    export default{
        data(){
        return{
            houseList: [],
            
        }
    },
    }
</script>
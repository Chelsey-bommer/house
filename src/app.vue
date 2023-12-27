<template> 
    <h1> {{title}} </h1>
    <input type="text" ref="name">
    <button @click="handleClick">click me</button>
    <Modal/>
</template>

<script>
 import Modal from './components/modal.vue'

 export default{
    name: 'App',
    components:{ Modal },
    data(){
        return{
            title: 'My first vue app'
        }
    },
    methods:{
        handleClick(){
            console.log(this.$refs.name)
            this.$refs.name.classList.add('active')
        }
    }
}
</script>
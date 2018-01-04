<template>
    <div class="home-img" id="home-img" >
        <img :src="imgsrc" alt="" />
    </div>
   
</template>

<script>



    export default {
        name: 'home-img',
        props:['imgsrc'],
        data () {
            return {
               
            }
        },
        methods:{
           
        } 
    }


</script>

<style scoped>

</style>

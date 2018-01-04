<template>
    <nav class="home-nav" id="home-nav">
        <ul class="nav" >
            <li v-for="(nav,i) in menu" :key="i" >
                <img :src="nav.pic" alt="">
                <span>{{nav.tag}}</span>
            </li>
        </ul>
    </nav>
   
</template>

<script>
    import axios from 'axios';


    export default {
        name: 'home-nav',
        props:['menu'],
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

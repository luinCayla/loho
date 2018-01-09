<template>
    <nav class="home-nav" id="home-nav">
        <ul class="nav" >
            <li v-for="(nav,i) in menu" :key="i"  @click="a(nav)" >              
                <img :src="nav.pic" alt="">
                <span>{{nav.tag}}</span>                              
            </li>
        </ul>
    </nav>
   
</template>

<script>
  
    export default {
        name: 'home-nav',
        props:['menu'],
        data () {
            return {
            
            }
        },
        methods:{
            a(nav){
                this.$router.push(nav.cid?"/list/"+ nav.cid +"/"+nav.tid+"/"+nav.tag : '/nearbystore')
            }
           
        } 
    }


</script>

<style scoped>

</style>

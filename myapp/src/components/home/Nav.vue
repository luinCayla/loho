<template>
    <nav class="home-nav" id="home-nav">
        <ul class="nav" >
            <li v-for="(nav,i) in menu" :key="i" >
                <router-link  :to=' "/list/"+ nav.cid +"/"+nav.tid+"/"+nav.tag'>
                    <img :src="nav.pic" alt="">
                    <span>{{nav.tag}}</span>               
                </router-link>
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

           
        } 
    }


</script>

<style scoped>

</style>

<template>
   <div class="home-recommend">
        <div class="rec-title">
           <h2>{{popular.title.word}}</h2>
           <span>{{popular.more.word}}</span>
        </div>
        <div class='rec-img'>
            <img :src="popular.img.pic" alt="">
        </div>       
        <ul class='rec-caption'>
            <router-link tag="li" v-for="pop in popular.show" :key='pop.gid' :to='{name:"details"}'>
                <h4>{{pop.tag}}</h4>
                <p>{{pop.tag_en}}</p>
                <img :src="pop.pic" alt="">
           </router-link>
        </ul>
        
    </div>
   
</template>

<script>
   

    export default {
        name: 'home-recommend',
        props:{ 'popular':{
            title:'',
            more:'',
            img:''
        }},
        data () {
            return {
              
            }
        },
        methods:{
           
        },
        
    }


</script>

<style scoped>

</style>
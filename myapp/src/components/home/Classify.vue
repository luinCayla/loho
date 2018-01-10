<template>
    <ul class="home-classify">
        <router-link tag="li" v-for="(item,i) of classify" :key="i" class="cla-top" :to='{name:"details"}'>
            <div class="rec-title">
                <h2>{{item.title.word}}</h2>
                <span>{{item.more.word}}</span>
            </div>
            <div class='rec-img'>
                <img :src="item.img.pic" alt="">
            </div>       
            <div class="rec-content " >
                <div class="cla-left">
                    <h4>{{item.show[0].tag}}</h4>
                    <p>{{item.show[0].tag_en}}</p>
                    <img :src="item.show[0].pic" alt="">
                </div>
                <ol class="cla-right">
                     <li>
                        <h4>{{item.show[1].tag}}</h4>
                        <p>{{item.show[1].tag_en}}</p>
                        <img :src="item.show[1].pic" alt="">
                    </li>
                     <li>
                        <h4>{{item.show[2].tag}}</h4>
                        <p>{{item.show[2].tag_en}}</p>
                        <img :src="item.show[2].pic" alt="">
                    </li>
                </ol>
            </div>
        </router-link>
    </ul>
</template>

<script>
   

    export default {
        name: 'home-classify',
        props:['classify'],
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
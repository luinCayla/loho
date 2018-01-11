<template>
    <ul class="home-classify">
        <li v-for="(item,i) of classify" :key="i" class="cla-top" >
            <div class="rec-title">
                <h2>{{item.title.word}}</h2>
                <span>{{item.more.word}}</span>
            </div>
            <div class='rec-img'>
                <img :src="item.img.pic" alt="">
            </div>       
            <div class="rec-content " >
                <router-link tag='div' class="cla-left" :to="'/details/'+item.show[0].gid">
                    <h4>{{item.show[0].tag}}</h4>
                    <p>{{item.show[0].tag_en}}</p>
                    <img :src="item.show[0].pic" alt="">
                </router-link>
                <ol class="cla-right">
                     <router-link tag='li'  :to="'/details/'+item.show[1].gid" >
                        <h4>{{item.show[1].tag}}</h4>
                        <p>{{item.show[1].tag_en}}</p>
                        <img :src="item.show[1].pic" alt="">
                    </router-link>
                     <router-link tag='li' :to="'/details/'+item.show[2].gid">
                        <h4>{{item.show[2].tag}}</h4>
                        <p>{{item.show[2].tag_en}}</p>
                        <img :src="item.show[2].pic" alt="">
                     </router-link>
                </ol>
            </div>
        </li>
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
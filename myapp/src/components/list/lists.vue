<template>
   
    <div  class="list-lists">
        <ul class="lists-box "  >
            <router-link tag="li" v-for="data in  dataList" :key='data.goodsId' :to="'/details/'+data.goodsId" class="page-infinite-listitem" >
                <div class="lists-img">
                    <img :src="'http://image.loho88.com/'+data.img" alt="">
                </div>
                <p>{{data.title}}</p>
                <div class="lists-info">
                        <span class="list-price">¥{{data.price}}</span>
                        <span class="lists-hot">{{data.salesNum}}人已买</span>
                </div>
            </router-link>
        </ul>
    </div>
   

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'list-lists',
        props:['dataList'],
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
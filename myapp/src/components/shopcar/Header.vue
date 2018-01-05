<template>
    <header id="shop-head" class="public-head">
        <router-link to="/home" class="icon"> 
            <i class="iconfont icon-left" ></i>
        </router-link>       
        <div class="goleft" >
            <i class="iconfont icon-shopping" ></i>
            购物车
        </div>                                    
        <div class="icon">
             <i class="iconfont icon-caidan" ></i>
        </div>
    </header>
</template>


<script>

    export default {
        name: 'shop-header',
         props:{
            title:{
                type:String, //数据的格式
                default:"" //数据的默认值
            }
        },
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
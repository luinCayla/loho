<template>
    <header id="shop-head" class="public-head">
        <router-link to="/home" class="icon-back"> 
            <i class="iconfont icon-left" ></i>
        </router-link>       
        <div class="goleft" >
            <i class="iconfont icon-cart" ></i>
            购物车
        </div>                                    
        <div class="icon"  @click='changeType'>
             <i class="iconfont icon-caidan" ></i>
        </div>
    </header>
</template>


<script>
import bus from '../../modules/bus'
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
            changeType(){           
                bus.$emit("change-type")
            }
        } 
    }

</script>

<style scoped>

</style>
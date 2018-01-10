<template>
    <div id="shopcar" class="add-top">
        <Header />
        <Hide />
       
        <Cart  v-if="isshow" />
        <div class="shop-box"  else> 
            <i class="iconfont icon-cart"></i>
            <p>您的购物车尚未添加商品</p>
            <p>去 <router-link to="/hone">Loho88眼镜生活</router-link>购买商品</p>
        </div>
      
    </div>

</template>

<script>

import Header from './Header'
import Hide from '../groupbuying/Hide'
import Cart from './Cart'

   
   export default {
        name: 'shopcar',
        data () {
            return {
                isshow:false
            }
        },
        components:{
            Header,Hide,Cart
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
<template>
    <nav class="head-menu "  style="display: block;" v-if="isShow">
        <router-link class = "icon-home3 iconfont icon-house"  to="/home">首页</router-link>
        <router-link class = "icon-user iconfont icon-member"  to="/mime">会员中心</router-link>
        <router-link class = "icon-cart iconfont icon-shopping"  to="/shopcar">购物车</router-link>
        <router-link class = "icon-comment iconfont icon-information"  to="/service">在线咨询</router-link>
    </nav> 
            

</template>

<script>
    import bus from '../../modules/bus'
    export default {
        name: 'group-hide',
        data () {
            return {
                isShow:false
            }
        },
        components:{

        },
       mounted(){
           bus.$on('change-type',function(){
               this.isShow = !this.isShow;
           }.bind(this))
       }
    }


</script>

<style  scoped>
  
</style>
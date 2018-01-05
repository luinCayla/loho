<template>
    <nav class="head-menu cl" style="display: block;" v-if="isShow">
        <a class = "icon-home3 iconfont icon-house"  href="">首页</a>
        <a class = "icon-user iconfont icon-member"  href="">会员中心</a>
        <a class = "icon-cart iconfont icon-shopping"  href="">购物车</a>
        <a class = "icon-comment iconfont icon-information"  href="">在线咨询</a>
    </nav> 
            

</template>

<script>
    import bus from '../../module/bus'
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
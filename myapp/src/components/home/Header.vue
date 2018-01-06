<template>
    <header id="home-head" class="home-head">
        <router-link to="/city" class="head-city">
            <span>北京</span> 
            <i class="iconfont icon-xia" ></i>
        </router-link>
        <div class="head-logo"></div>            
        <router-link to="/shopcar" class="icon">
             <i class="iconfont icon-shopcart" ></i>
        </router-link>
         <router-link to="/mime" class="icon">
             <i class="iconfont icon-ren" ></i>
        </router-link>
    </header>
</template>

<script>


    export default {
        name: 'home-header',
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
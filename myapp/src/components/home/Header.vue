<template>
    <header id="home-head" class="home-head">
        <router-link to="/" class="head-city">
            <span>北京市</span> 
            <i class="iconfont icon-xia" ></i>
        </router-link>
        <div class="head-logo"></div>            
        <router-link to="/" class="head-cart">
             <i class="iconfont icon-gouwuche" ></i>
        </router-link>
         <router-link to="/" class="head-peo">
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
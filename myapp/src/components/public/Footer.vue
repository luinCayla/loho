<template>
    <footer class="foot">
       <router-link to="home">
           <i class="iconfont icon-shouye"></i>
           <span>首页</span>
       </router-link>
       <router-link to="groupbuying">
           <i class="iconfont icon-tuangou"></i>
           <span>团购</span>
       </router-link>
       <router-link to="service">
           <i class="iconfont icon-kefu"></i>
           <span>客服</span>
       </router-link>
       <router-link to="nearbystore">
           <i class="iconfont icon-wei"></i>
           <span>附近体验店</span>
       </router-link>
       <router-link to="mime">
           <i class="iconfont icon-me"></i>
           <span>我的</span>
       </router-link>
    </footer>
</template>

<script>


    export default {
        name: 'Footer',
        data () {
            return {
                
            }
        },
        methods:{

        } 
    }


</script>

<style lang='scss' scoped>
    
</style>
<template>
    <footer id="home-foot" class="home-foot">
        <ul  class="foot">
            <li @click="turnout(bar.name)" :key="bar.id" v-for='bar in tabbar' class="foot-bar" >
                <i :class="'iconfont icon-'+bar.name"></i>
                <span>{{bar.content}}</span>
            </li>
        </ul>
    </footer>
    
    
</template>

<script>

    export default {
        name: 'home-foot',
        data () {
            return {
              tabbar:[
                  {id:1,content:"首页",name:'home' },
                  {id:2,content:"团购",name:'groupbuying'},
                  {id:3,content:"客服",name:'service'},
                  {id:4,content:"附近体验店",name:'nearbystore'},
                  {id:5,content:"我的",name:'mime'},
              ]
            }
        },
        methods:{
            turnout(name){
                this.$router.push({name})
            }
        } 
    }


</script>

<style lang='scss' scoped>
   
</style>
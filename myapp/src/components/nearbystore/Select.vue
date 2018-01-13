<template>
    <div class="select-box app-box">
       
        <div class="movied-nav">            
            <router-link class="movie-left " :to="{name:'stores'}"><span>列表</span></router-link><!--:to 相对一个跳转的方向-->
            <router-link class="movie-right" :to="{name:'map'}"><span>地图</span></router-link>
            <router-view></router-view>
        </div>  

    </div>
</template> 

<script>
    export default {
        name:'select-box',
        data (){
            return {
                //isShow:false
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped lang="scss">

.app-box{
    padding-top: .6rem;
}

.router-link-active{
    color: #e8343b !important;
    border-bottom:3px solid #e8343b;
      
}

 
</style>

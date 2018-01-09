<template>
    <div   class="local-box app-box">
       
        <div class="local-nav">
            <div class="local-left list-m" >
                北京共17家体验店（全国<span class="local-color">{{local}}</span>
                家）
            </div>
            <div class="local-right list-m" >
                <span>北京</span> 

                <i class="iconfont icon-xia" ></i>
            </div>
            <router-view></router-view>
        </div>  

    </div>
</template> 

<script>
    export default {
        name:'local-box',
        props:['local'],
        data :function(){
            return {
                //isShow:false
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
.local-color{
    color:#e8343b;
}

</style>






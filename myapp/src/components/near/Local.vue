<template>
    <div   class="local-box app-box">
       
        <div class="local-nav">
            <div class="local-left list-m" >
                北京共17家体验店（全国249家）
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
        data (){
            return {
                //isShow:false
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>


}

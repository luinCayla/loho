<template>
    <div   class="select-box app-box">
       
          <div class="movied-nav">
            <div class="movie-left list-m" ><span>列表</span></div>
           <div class="movie-right list-m" ><span>地图</span></div>
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
<style scoped>

.app-box{
    padding-top: .5rem;
}



 











 
   
</style>

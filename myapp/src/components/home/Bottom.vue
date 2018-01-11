<template>
    <div class="home-bottom" id="home-bottom" >
        <h1 class="foot-bottom"  @click="isShowInfo">你可能喜欢  
            <i class="iconfont icon-xia"></i>
        </h1>
        <p v-if="isShow">点击加载更多...</p>
        <div class="foot-info">
            <div class="foot-info-top">
                <div class="bot-left"> 
                    <i class="iconfont icon-dingwei"></i>欢迎到体验店试戴
                </div>
                <div class="bot-right">
                    <i class="iconfont icon-tell"></i>
                    <article>预约热线：400-887-1920
                        <span>(服务时间：9:00 - 23:00)</span>
                    </article>                  
                </div>
            </div>
            <div class="foot-info-img">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <div class="foot-info-botton">
                <h5>©2005-2016 深圳市乐活电子商务有限公司版权所有，并保留所有权利。</h5>
            </div>
            
        </div>
    </div>
   
</template>

<script>



    export default {
        name: 'home-bottom',     
        data () {
            return {
               isShow:false
            }
        },
        methods:{
            isShowInfo(){
               this.isShow = !this.isShow;
           }
        } 
    }


</script>

<style scoped>

</style>

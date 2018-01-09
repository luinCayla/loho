<template>
    <div   class="box-box app-box">
       <div v-for="item in box":key="item.id">
            <div   class="box-nav">
                <div class="box-small">
                    <span class="box-top">{{item.chineseName}}</span>
                    <i class="iconfont icon-shang"></i>
                </div>
            </div>  

            <div class="box-import">
                <span class="box-title">14.86km</span>
                <div class="box-out">
                    <img  class="box-tupian" src="http://image.loho88.com/themes/template/images/shop/30214/1442662760960864.jpg" alt="">
                </div>
            <!-- //http://image.loho88.com/themes/template/   images/shop/30214/1442662760960864.jpg
                        //images/shop/30223/1489377211640276.jpg -->
                <div class="box-local">地址：{{item.chineseAddress}}</div>

            </div>

            <div class="box-btn">
                <div class="box-bottom">
                    <span class="box-tel">免费预约直营店验光</span>
                    <div class="box-large">
                        <i class="iconfont icon-phone1 box-phone"></i>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
    export default {
        name:'box-box',
        props:['box'],
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
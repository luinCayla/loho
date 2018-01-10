<template>
  <div id="explain">
      <div class="introduct">
        <p class="small-text">价值760元 1.600 MR-8非球面单光镜片配镜套餐团购券，
          仅售399元</p>
          <div class="share-ex">
            <span  class="iconfont icon-share "></span>
            <p @click='changeShow' >分享</p>
             
            <div  v-if="isShow" class="share-sh">
              <a class="wx iconfont icon-weixin" ></a>
              <a class="qq iconfont icon-qq"></a>
              <a class="wb iconfont icon-webo"></a>
            </div>
          </div>
        
      </div>
      
     
     <ul>
        <li><span>￥399</span></li>
        <li class="move">快递：免运费</li>
        <li class="number"><i>0人已购买</i></li>
     </ul>

     <div class="gray">
        <div class="left">
          <i class="iconfont icon-attention"></i>
          <span>免费验光，7天退换</span>
        </div>
        <div class="rig">
          <i class="iconfont icon-attention"></i>
          <span>免费保养</span>
        </div>

     </div>

     <div class="position">
       <p class="sea">东海缤纷天地店</p>
       <div class="length">
         <i class=" iconfont icon-nearbystore"></i>
         <span>0.39km  <em>免费预约直营店验光</em></span>
       </div>
       <div class="det">
          <p>地址：深圳市福田区深南大道7888号东海缤纷天地负二层
            B2002.2003铺</p>
          <span class="iconfont icon-tel"></span>
       </div>
     </div>
     
     <div class="store">
       <a>查看深圳27家门店（全国 <em>253</em>家）</a>
       
       <i class="iconfont icon-right"></i>
       
     </div>
    <p class="blan"></p>
  </div>
</template>
 
 <script>

 import bus from '../../modules/bus'
 export default {
   name:'explain',
    data(){
        return{
            isShow:false
        }
    },
    mounted(){
        bus.$on('change-show',function(){
               this.isShow = !this.isShow;
           }.bind(this))
    },
     methods:{
            changeShow(){           
                bus.$emit("change-show")
        }
        }

 }
 </script>
 
 <style scoped>


 </style>
 
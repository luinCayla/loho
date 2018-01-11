<template>
  <div class="detail-explain">
      <div class="introduct">
        <p class="small-text">{{goodsName}}</p>
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
        <li><span>￥{{price}}</span></li>
        <li class="move">快递：免运费</li>
        <li class="number"><i>{{salesNum}}人已购买</i></li>
     </ul>

     <ol class="gray">
        <li class="left" v-for="(nav,i) in promiseTag" :key="i" >
          <i class="iconfont icon-attention"></i>
          <span>{{nav}}</span>
        </li>
        

     </ol>

     <div class="position">
       <p class="sea">东海缤纷天地店</p>
       <div class="length">
         <i class=" iconfont icon-nearbystore"></i>
         <span>0.39km  <em>免费预约直营店验光</em></span>
       </div>
       <div class="det">
          <p>地址：北京市海淀区学清路甲8号圣熙8号购物中心一层A015 </p>
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
  import axios from 'axios'

 export default {
   name:'detail-explain',
   props:['goodsName','promiseTag'],
    data(){
        return{
            isShow:false,
            price:"",
            salesNum:"",
           
        }
    },
    mounted(){

        var gid =this.$route.params.gid;
        //http://m.loho88.com/goodsInfo/5230
        axios.get('/api/goodsInfo/'+ gid ).then( res=>{
          // console.log(res)
          this.price = res.data.result.price;
          this.salesNum = res.data.result.salesNum;
            
        })
       




    },
     methods:{
        changeShow(){           
          this.isShow = !this.isShow;
        }
    }

 }
 </script>
 
 <style scoped>


 </style>
 
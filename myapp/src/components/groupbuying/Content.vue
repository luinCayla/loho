<template>
  <div class="content">
    <router-link class="main" v-for="nav in navlists" :key="nav.gid" :to="'/details/'+nav.gid" >
      <div class="pic">
        <img class="parw-100" :src="nav.img" >      
      </div>
      <div class="item-info">
        <span class="item-title">
          <a href="">{{nav.title}}</a>
        </span>
      </div>
      <div class="item-main">
        <div class="item-box dib_lr">
          <div class="discount-price dib_lr">
            <span class="color-db1e54 font-s-12 font-w-600" style="color:#ff0000;">优惠价：¥</span>
            <span class="color-db1e54 font-s-16 font-w-600" style="color:#ff0000;">{{nav.price}}</span>
          </div>
          <div class="cost-price font-s-12">￥
            <span class="price-cancal">{{nav.oldprice}}</span>
          </div>
        </div>
        <div class="button-warning color-000 font-w-600 height-20 line-height-20 dib_vm">
          <a   href="">点击下单购买</a>
        </div>
      </div>
    </router-link>
    <router-view></router-view>      
  </div>
</template>

<script>
export default {
  name: "group-content",
  data() {
    return {
      navlists: [
        {
          gid:6110,
          img:
            "http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549371494809876.jpg",
          title: "价值760元 1.600 MR-8非球面单光镜片配镜套餐代金券，仅售399元",
          price: "399",
          oldprice: "760",         
        },
        {
          gid:6165,
          img:
            "http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549196344092016.jpg",
          title: "价值640元 1.60防蓝光非球面镜片配镜套餐团购券，仅售439元",
          price: "640",
          oldprice: "760",          
        },
        {
         gid:6113,
          img:
            "http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549381685185986.jpg",
          title: "价值980元 1.552依视路超薄A3配镜套餐代金券，仅售589元",
          price: "589",
          oldprice: "980",          
        },
        {
          gid:6116,
          img: "http://img2.loho88.com/images/201711/G_1511564328589907582.jpg",
          title: "价值1740元 1.71绿膜单光镜片配镜套餐代金券，仅售699元",
          price: "699",
          oldprice: "1740",          
        },
        {
          gid:6114,
          img:
            "http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549398939255801.jpg",
          title: "价值1280元 1.601依视路钻晶A++配镜套餐代金券，仅售739元",
          price: "739",
          oldprice: "1280",          
        },
        {
          gid:6138,
          img: "http://img2.loho88.com/images/201712/G_1512357197165993428.jpg",
          title: "价值760元 1.600 MR-8非球面单光镜片配镜套餐代金券，仅售399元",
          price: "399",
          oldprice: "760",         
        },
        {
          gid:6115,
          img:
            "http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549416977657409.jpg",
          title: "价值1480元 1.600蔡司A60配镜套餐代金券，仅售839元",
          price: "839",
          oldprice: "1480",          
        },
        {        
          gid:5410,
          img: "http://img2.loho88.com/images/201711/G_1511562889553671690.jpg",
          title: "价值2000元配镜代金券，仅售1299元",
          price: "1299",
          oldprice: "2000"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>

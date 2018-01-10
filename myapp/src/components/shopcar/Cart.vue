<template>
    <div class="shop-cart"  >
        <ul class="cart-list">
            <li v-for="(ele,index) in cartData" class="cart-item" :key="index">
                <div class="cart-header">
                    <div><input type="checkbox" /> 单品</div>
                    <em>￥{{ele.itemList[0].goodsList[0].subtotal}}</em>
                </div>
                <div class="cart-content">
                    <div class="cont-pic">
                        <img :src="'http://image.loho88.com/'+JSON.parse(ele.itemList[0].goodsList[0].goodsAttr).goodsThumb" alt="">
                    </div>
                    <div class="cont-info">
                        <div>{{ele.itemList[0].goodsList[0].goodsName}}</div>
                        <div class="cont-color">{{ele.itemList[0].goodsList[0].goodsColor}}</div>
                        <div class="sub-info">
                            <em>¥:{{ele.itemList[0].goodsList[0].salesPrice}}</em>
                            <span>x{{ele.itemList[0].goodsList[0].number}}</span>
                        </div>
                    </div>
                </div>
                <div class="cart-foot">
                    <span > <i class="iconfont icon-lajitong"></i></span>
                    <div class="num-wrap">
                        <span  @click="changeNum(ele.itemList[0].id,ele.itemList[0].goodsList[0].number,-1)" class="btn">-</span>
                        <input type="text"  readonly :value="ele.itemList[0].goodsList[0].number">
                        <span @click="changeNum(ele.itemList[0].id,ele.itemList[0].goodsList[0].number,1)"  class="btn">+</span>
                    </div>
                </div>
                
            </li>
        </ul>
        <div class="cart-footer">
             <div class="cart-footer-check">
                <span><input type="checkbox" /> </span> 
                 <a >删除选中</a> 
            </div> 
            <em>清空购物车</em>
        </div>

        <footer  class="shop-foot">
            <div>
                合计 (不含运费)   :  <span> ¥ </span>
            </div>
            <mt-button type="danger"  class="totalNum">结算()</mt-button>
        </footer>
    </div>

</template>


<script>
 
    export default {
        name: 'shop-cart',
        data () {
            return {
              
            }
        },
        computed:{
            cartData(){
                //通过计算数据  实时接收数据
                return this.$store.state.cartData
            }
        },
        methods:{
            changeNum(id,num,type){   
                //数量的现在
                this.$store.dispatch("changeNumAction",{id,num,type})//派发修改数量的请求   
            }
        } ,
        mounted(){    
            // console.log(this.$store) =>vuex的store
            this.$store.dispatch("getCartData") //派发获取数据的请求
        }
    }

</script>

<style scoped>

</style>
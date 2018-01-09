<template>
    <div id="mime " >
        <Header title="会员中心" >
            <router-link to="/home" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link>       
            <div class="mime-right"  slot="right">
                <router-link to="/home" class="head-icon">
                    <i class="iconfont icon-zhuye" ></i>
                </router-link>
                <router-link to="/shezhi" class="head-icon" >
                    <i class="iconfont icon-shezhi" ></i>
                </router-link>
            </div>               
        </Header>
            
        <div class="mime-bg">
            <img :src="imgSrc" alt="">
            <span>{{userName}}</span>
        </div>
        <Order />
        <router-view></router-view>
        <router-link class="mime-cash" to="/coupon">
            <div class="cash-left">
                <i class="iconfont icon-qia"></i>
                <div class="cash-cap">
                    <h5>我的现金券</h5>
                    <span>积分余额：0</span>
                </div>
            </div>
            <div class="cash-right">
                <span><label>0</label>张</span> 
                 <i class="iconfont icon-right"></i>
            </div>
        </router-link>
        <Info />

    </div>
</template>

<script>



    import Header from './Header';
    import Order from './Order';
    import Info from './Message' 

    export default {
        name: 'mime',
        data () {
            return {
                imgSrc :'http://img.loho88.com/images/loho-m/index_logo.png',
                userName:"lhsj_12345678911"
            }
        },
        components:{
            Header,Order,Info
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
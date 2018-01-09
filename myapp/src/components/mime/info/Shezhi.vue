<template>
    <div id="mime " class="mime-shezhi ">
        <Header title="会员中心" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
        <div class="login-out">
           <div class="login-out-box">
               <img src="http://img.loho88.com/images/loho-m/logout-logo.png" alt="">
                <p class="login-out-content">LOHO眼镜生活是香港LOHO眼镜生活有限公司旗下，集自主设计、研发生产、互联网与门店销售、配镜服务为一体的中高端眼镜销售品牌。
				LOHO眼镜生活于2011年进军中国内地市场。通过快时尚的定位方式，配合高性价比的配镜方案，赢得广大客户的青睐。
				LOHO产品一直以来坚持三大核心理念：时尚轻便、佩戴舒适、价格透明化。现已在中国多个城市拥有近两百家门店。</p>
                <div class="login-out-botton">
                    <div class="login-out-botton-left">
                        <img src="http://img.loho88.com/images/loho-m/loho88.jpg" alt="">
                    </div>
                    <div class="login-out-botton-right"> 
                        <p>预约热线：400-887-1920</p>
                        <p>(服务时间 09:00 - 23:00)</p>
                    </div>
                </div>
            </div>
            <router-link class="login-exit" to="/login">退出登录</router-link>
           
       </div>

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'mime-shezhi',
        data () {
            return {
               
            }
        },
        components:{
            Header
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
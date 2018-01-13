<template>

    <div clsass='login-check-box'>
        <ul class="login-check" >
            <li>
                <i class='iconfont icon-phone'></i>
                <input type="text" placeholder="请输入您的手机号码">
            </li>
            <li>
                <i class='iconfont icon-save'></i>
                <input type="text" placeholder="请输入图片验证码">
                <div class="img-code">
                    <img :src="getImg" alt="" @click="getImgSrc">
                </div>
            </li>
            <li class="wipe">
                <i class='iconfont icon-check'></i>
                <input type="text" placeholder="请输入短信验证码">
                <div class="send-code">发送验证码</div>
            </li>               
        </ul>
    </div>
            
</template>

<script>

    export default {
        name: 'tel-login',
        data () {
            return {
                getImg:'http://m.loho88.com/code/mobile/getCaptchaCode?'+Math.random(),
               
            }
        },     
        methods:{
           getImgSrc(){//获取图片验证码
                this.getImg ='http://m.loho88.com/code/mobile/getCaptchaCode?'+Math.random();
            }
        } 
    }


</script>

<style scoped>

</style>
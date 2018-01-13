<template>

    <div  class="login-check-box" >
        <ul class="login-check" >
            <li>
                <i class='iconfont icon-geren'></i>                    
                <input type="text" placeholder="请输入手机号">                               
            </li>
            <li>
                <i class='iconfont icon-suo'></i>
                <input type="text" placeholder="请输入密码">
            </li>
            <li class="wipe">
                <i class='iconfont icon-save'></i>
                <input type="text" placeholder="请输入验证码">
                <div class="img-code">
                    <img :src="getImg" alt="" @click="getImgSrc">
                </div>
            </li>
        </ul>
        <p class="forget-pswd">
            忘记密码？
        </p>

    </div>

</template>

<script>


    export default {
        name: 'user-login',
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
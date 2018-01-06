<template>
    <div id="mime" class="add-top">
        <Header title="登录" />
        <div class="mime-banner">
            <img src="../../assets/images/login-banner.png" alt="">
        </div>
        <div class="mime-login-cap">
            <div   @click="isShow=false" >手机号快速登录</div>
            <span>|</span>
            <div @click="isShow=true"  >账号密码登录</div>
        </div>

        <div  class="mime-login-check" v-if="isShow">
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
         <div clsass='mime-login-check' v-else>
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
                    <div class="send-code" @click="getMsgCode">发送验证码</div>
                </li>               
            </ul>
         </div>
       

        <div class="mime-reg">
            <router-link to="register">注册</router-link>
            <router-link class="login-false" to=''>登录</router-link>
        </div>
            

       
    </div>

</template>

<script>
    import axios from 'axios'
    import Header from '../public/Header'

    export default {
        name: 'mime',
        data () {
            return {
                isActive:false,
                isShow:false,
                getImg:'http://m.loho88.com/code/mobile/getCaptchaCode?'+Math.random(),
               
            }
        },
        components:{
            Header
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
<template>
    <div id="mime" class="add-top">
        <Header title="手机快速注册" />      
        <div  class="mime-login-check">
            <ul class="login-check">
                <li>
                    <span>手机号</span>
                    <input type="text" placeholder="请输入手机号" v-model="phone">
                </li>
                <li>
                   <span>图形验证码</span>
                    <input type="text" placeholder="请输入图形验证码" v-model="imgNum">
                    <div class="img-code">
                        <img :src="getImg" alt="" @click="getImgSrc">
                    </div>
                </li>
                 <li>
                   <span>验证码</span>
                    <input type="text" placeholder="请输入短信验证码" v-model="phoneCode">
                    <div class="send-code">发送验证码</div>
                </li>
                 <li>
                   <span>密码</span>
                    <input type="text" placeholder="请输入6-20位数字/字母或符号组合" v-model="pasd">
                </li>
                <li>
                   <span>确认密码</span>
                    <input type="text" placeholder="请在输入一次" v-model="rpasd">
                </li>
            </ul>

            
        </div>

        <p class="mime-agree">完成注册表示您已看过并接受<a>《LOHO用户协议》</a></p>

        <div class="mime-reg login-false">完成注册</div>

            

       
    </div>

</template>

<script>
    import Header from '../public/Header'

    export default {
        name: 'mime',
        data () {
            return {
                phone:'',
                imgNum:'',
                getImg:'http://m.loho88.com/code/mobile/getCaptchaCode?'+Math.random(),
                phoneCode:'',
                pasd:'',
                rpasd:''

            }
        },
        components:{
            Header
        },
        methods:{
            //http://m.loho88.com/code/mobile/getCaptchaCode?0.44347008390430775
            getImgSrc(){
                this.getImg = 'http://m.loho88.com/code/mobile/getCaptchaCode?'+Math.random();
            },
            getMsgCode(){ //获取短信验证码
               
                if(this.phone){ //验证 手机号是否符合规范

                }
                if(this.getImg){ //验证图片验证码是否相等

                }
                //获取短信验证码
                axios.post(`/api/uc/mobile/register/code?captcha=${this.imgCaptcha}&mobile=${this.phone}`).then(res=>{
                    console.log(res.data)
                })
            
            }

        } 
    }


</script>

<style scoped>

</style>
<template>
    <div id="login" class="add-top">
        <Header title="登录" />
           
       
        <div class="login-banner">
            <img src="../../assets/images/login-banner.png" alt="">
        </div>
        <div class="login-cap">
            <router-link  :to="{name:'tellogin'}" class="login-cap-left"> 手机号快速登录</router-link>   
            <router-link :to="{name:'userlogin'}" class="login-cap-right">账号密码登录</router-link>
       
            <router-view></router-view>       
        </div>




        <div class="login-reg">
            <router-link :to="{name:'register'}">注册</router-link>
            <router-link class="login-false" to='/mime'>登录</router-link>
        </div>
            

       
    </div>

</template>

<script>
    import axios from 'axios'
    import Header from '../public/Header'

    export default {
        name: 'login',
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

.router-link-active{
    
    color:#e8343b;
      border-bottom:3px solid #e8343b ;
      
}
</style>
<template>
    <div id="mime " class="my-password">
        <Header title="密码管理" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
           
         <div class="my-info-content">
            <mt-field label="原密码" placeholder="请输入原登录密码" v-model="pswd"></mt-field>
            <mt-field label="新密码" placeholder="请输入6-20位数字、字母或符号组合" v-model="newpswd"></mt-field>
            <mt-field label="确认密码" placeholder="请输入6-20位数字、字母或符号组合" v-model="okpswd"></mt-field>
        </div>
           
        <mt-button type="danger" size="large" class="save-info">提交</mt-button>


    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'my-password',
        data () {
            return {
                pswd:'',
                newpswd:'',
                okpswd:''
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
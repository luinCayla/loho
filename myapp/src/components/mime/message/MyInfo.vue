<template>
    <div id="mime " class="my-info">
        <Header title="个人资料" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
        <div class="my-info-content">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
            <mt-field label="手机" type="tel" v-model="phone"></mt-field>
            <mt-field label="性别" v-model="sex" @click="popupVisible=true" ></mt-field>
            <mt-field label="QQ" placeholder="请输入QQ" v-model="qq"></mt-field>
            <mt-field label="生日"  v-model="birthday"></mt-field>
        </div>
           
        <mt-button type="danger" size="large" class="save-info">保存领积分</mt-button>

        <mt-popup v-model="popupVisible" position="bottom">
      ...
        </mt-popup>
    </div>
</template>

<script>

    import Header from '../Header';


    export default {
        name: 'my-info',
        data () {
            return {
                username:'',
                phone:'13213113187',
                sex:'保密',
                qq:'',
                birthday:'2018-01-08',
                popupVisible:false 
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
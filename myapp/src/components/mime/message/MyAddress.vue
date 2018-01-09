<template>
    <div id="mime " class="my-address">
        <Header title="收货地址" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
           
        <mt-button type="danger" size="large" class="save-info">添加新地址</mt-button>
      
    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'my-address',
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
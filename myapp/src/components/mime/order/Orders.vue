<template>
    <div id="mime " class="mime-orders ">
        <Header title="会员订单" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
      

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'mime-orders',
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
<template>
    <div id="mime " class="mime-coupon ">
        <Header title="我的现金卷" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
      

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'mime-coupon',
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
<template>
    <div id="mime " class="my-groupBuy ">
        <Header title="我的团购" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
           

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'my-groupBuy',
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
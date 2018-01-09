<template>
    <div id="mime " class="mime-receiving ">
        <Header title="待收货" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
      

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'mime-receiving',
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
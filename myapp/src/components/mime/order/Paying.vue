<template>
    <div id="mime " class="mime-obligation ">
        <Header title="代付款" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
           
       </div>

    </div>
</template>

<script>



    import Header from '../Header';


    export default {
        name: 'mime-obligation',
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
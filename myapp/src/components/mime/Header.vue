<template>
    <header class="mime-head ">
        <!-- <router-link to="/mime" class="icon-back"> 
            <i class="iconfont icon-left" ></i>
        </router-link>        -->
        <slot name="left"></slot>
        <div class="mime-center" >{{title}}</div>  
        <slot name="right"></slot>
       
           
                                        
    </header>
</template>


<script>

    export default {
        name: 'mime-header',
         props:{
            title:{
                type:String, //数据的格式
                default:"" //数据的默认值
            }
        },
        data () {
            return {
              
            }
        },
        methods:{

        } 
    }

</script>

<style scoped>

</style>
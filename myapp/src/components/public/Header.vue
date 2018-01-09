<template>
    <header id="public-head" class="public-head">             
        <router-link to="/home" class="icon-back" > 
            <i class="iconfont icon-left" ></i>
        </router-link>              
        <div class="choose" >{{title}}</div>                                                
        <div class="public-right"  slot="right">
            <router-link to="/shopcar" class="icon">
                <i class="iconfont icon-shopcar" ></i>
            </router-link>
            <router-link to="/" class="icon"   @click="changeType" >
                <i class="iconfont icon-memu" ></i>
            </router-link>
        </div>                                   
    </header>
</template>


<script>
    import bus from '../../modules/bus';
    export default {
        name: 'city-header',
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
            changeType(){           
                bus.$emit("change-type")
        }
        } 
    }

</script>

<style scoped>

</style>
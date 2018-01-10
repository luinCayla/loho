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
            <a class="icon" @click="changeType" >
                <i class="iconfont icon-memu" ></i>
            </a>
        </div>  

        <div class="public-menu" v-if="isShow" >
            <router-link  to='/mime'>
                <i class="iconfont icon-mime"></i>
                <em>会员中心</em>
             </router-link>
            <router-link  to='/home'>
                <i class="iconfont icon-home"></i>  
                <em>首页 </em>
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
               isShow:false
            }
        },
        methods:{
            changeType(){           
                this.isShow = !this.isShow;
            }
        } 
    }

</script>

<style scoped>

</style>
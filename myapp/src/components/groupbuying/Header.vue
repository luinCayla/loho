<template>
    <div  id="g-head" >
      
       <h2 class="head-title">团购分类</h2>
        <router-link class="head-ctrl-left"  to='/home'>
           <i class=" toleft iconfont icon-left"></i>
       </router-link>
       <div @click='changeType'  class="head-ctrl-right">
           <a  class=" toright iconfont icon-caidan"></a>
       </div>
            

    </div>
     
</template>

 
<script>
    import bus from '../../modules/bus'
    export default {
       name: 'g-header',
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

<style  scoped>


</style>
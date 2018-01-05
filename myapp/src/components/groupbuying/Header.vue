<template>
    <div  id="g-head" >
      
       <h2 class="head-title">团购分类</h2>
        <div class="head-ctrl-left">
           <a class=" iconfont icon-left"></a>
       </div>
       <div @click='changeType'  class="head-ctrl-right">
           <a  class=" iconfont icon-caidan"></a>
       </div>
            

    </div>
     
</template>

 
<script>
    import bus from '../../module/bus'
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
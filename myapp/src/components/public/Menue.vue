
<template>
  <div class="menue" v-if="isShow" style="border:1px solid gray;margin-right:5px;background:#fff;position:fixed;top:.7rem;right:.05rem;">
      <router-link style="display: block;color:#555;width:1.47rem;height:.46rem;line-height:.46rem;text-align:center;" class="iconfont icon-mime" to='/mime'> 会员中心</router-link>
      <router-link style="display: block;color:#555;width:1.47rem;height:.46rem;line-height:.46rem;padding-left:.32rem;" class="iconfont icon-home" to='/home'>首页</router-link>
  </div>
</template>

<script>
import bus from '../../modules/bus'
export default {
  name:'h-menue',
  data(){
    return{
      isShow:false
    }
  },
  components:{
  
  },
  mounted(){
           bus.$on('change-type',function(){
               this.isShow = !this.isShow;
           }.bind(this))
       }
}
</script>


<style scoped>

</style>

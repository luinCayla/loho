<template>
  <nav id="d-header">
      <router-link class=" toleft iconfont icon-left" to="/home"></router-link>
      <h5 class=" toright iconfont icon-memu"  @click="changeType"></h5>
      <router-link class=" tomiddle iconfont icon-shopcar" to="shopcar"></router-link>
     
  </nav>
</template>

<script>


import bus from '../../modules/bus'
export default {
  name:'d-header',
  data(){
      return{

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

<template>

    <ul class="mime-info" >
        <li class="mime-cash cash-info" v-for="info in mimeMsg" :key="info.id" @click="turnMyInfo(info.to)">
            <div class="cash-left">
                <i :class="'iconfont icon-'+info.name" ></i>
                <div class="cash-cap">
                    <p>{{info.content}}</p>                        
                </div>
            </div>
            <div class="cash-right">                       
                <i class="iconfont icon-right"></i>
            </div>                  
        </li>                        
    </ul>

</template>

<script>
export default {
    name: 'mime-info',
        data () {
            return {
               mimeMsg:[
                  {id:1,content:"个人资料",name:'xingxing', to:'my-info'},
                  {id:2,content:"我的团购",name:'xingxing',to:'my-groupbuy'},
                  {id:3,content:"我的收藏",name:'xingxing',to:'my-collect'},
                  {id:4,content:"我的验光单",name:'eye',to:'my-eyeglass'},
                  {id:5,content:"收货地址",name:'map',to:'my-address'},
                  {id:6,content:"密码管理",name:'suo1',to:'my-password'},
              ]
            }
        },
        components:{
         
        },
        methods:{
              turnMyInfo(name){
                this.$router.push({name})
            }
        } 
}
</script>

<style scoped>

</style>

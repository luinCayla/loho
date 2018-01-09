<template>
    <footer id="mime-order" class="mime-order">
        <ul  class="order-list">
            <li class="foot-bar" v-for='bar in tabbar' :key="bar.id"  @click="turnlist(bar.name)"    >
                <i :class="'iconfont icon-'+bar.name"></i>
                <span>{{bar.content}}</span>
            </li>
        </ul>
    </footer>
    
    
</template>

<script>

    export default {
        name: 'mime-order',
        data () {
            return {
              tabbar:[
                  {id:1,content:"代付款",name:'paying' },
                  {id:2,content:"待收货",name:'receiving'},
                  {id:3,content:"全部评价",name:'evaluate'},
                  {id:4,content:"全部订单",name:'orders'}
 
              ]
            }
        },
        methods:{
            turnlist(name){              
                this.$router.push({name})
            }
        } 
    }


</script>

<style lang='scss' scoped>
   
</style>
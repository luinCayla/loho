<template>
    <div>
        <div  class="local-box ">
            <div class="local-nav">
                <div class="local-left list-m" >
                    {{city}}共{{stores.length}}家体验店（全国<span class="local-color">{{local}}</span>
                    家）
                </div>
                <router-link tag="div" class="local-right list-m" to="/city" >
                    <span>{{city}}</span> 
                    <i class="iconfont icon-xia" ></i>
                </router-link>
            </div>  
        </div>

        <div class="box-box app-box">
            <div v-for="item in stores" :key="item.id" class="box-large">
                <div   class="box-nav">
                    <div class="box-small" >
                        <span class="box-top">{{item.catName}}</span>
                        <i class="iconfont icon-shang"></i>
                    </div>
                </div>  

                <div class="box-import" >
                    <div class="box-local">
                        <i class="iconfont icon-dingwei box-dingwei"></i>
                        <span class="box-title">14.86km</span>
                    </div>
                    
                    <div class="box-out">
                        <img  class="box-tupian" src="http://image.loho88.com/themes/template/images/shop/30214/1442662760960864.jpg" alt="">
                    </div>
                    <div class="box-local">地址：{{item.chineseAddress}}</div>
                </div>

                <div class="box-btn">
                    <div class="box-bottom">
                        <span class="box-tel">免费预约直营店验光</span>
                        <div class="box-large">
                            <i class="iconfont icon-tel box-phone"></i>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    </div>

</template> 

<script>
    import axios from 'axios'

    export default {
        name:'box-box',
        data (){
            return {
                stores:[],
                local:[],
                city:[]
              
            }
        },
        methods:{

        },
        mounted(){

           //http://m.loho88.com/store/302
            axios.get('/api/store/302').then((res)=>{                                
                  
                this.stores = res.data.result.stores;
                this.city = res.data.result.city;
                     
            }),

            //http://m.loho88.com/store/count
            axios.get('/api/store/count').then((res)=>{
              
                this.local = res.data.result
                
            })
        }
    }
</script>
<style scoped>


</style>
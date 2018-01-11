<template>
    <div  class="all-city">
        <p class="add-mar">
            <router-link to="">
                <i class="iconfont icon-dingwei"></i>
                <span>当前城市：{{city}}</span>               
            </router-link>
          
            <router-link to="">
               <i class="iconfont icon-right"></i>
            </router-link>         
        </p>

        <div class="add-mar">
            <p>热门城市</p>
            <ul class="hot-city-name">
                <li v-for="h in hot" :key='h.cityId'>{{h.cityName}}</li>
                
            </ul>
        </div>
        <div class="add-mar">
            <p>全部城市</p>
            <ul class="all-city-code">
                <a v-for="(code,i) in letters" :key='i' :href="'#'+ code" >{{code}}</a>
                  
            </ul>
        </div>
        <ol class="all-city-name " >
            <li v-for="(code,i) in list" :key="i">
                <a :id='i'>{{i}}</a>
                <ul class="all-city-code cityname">
                    <li v-for="c in code" :key="c.cityId"  :href="i">{{c.cityName}}</li>
                </ul>              
            </li>
        </ol>
        
    </div>

</template>

<script>
    import axios from 'axios'

    
    export default {
        name: 'all-city',
        data () {
            return {
                hot:[],
                letters:[],
                list:{
                    code:'',
                    name:[]

                },
                city:''
            }
        },       
        methods:{
            getData(){
                let that = this;
                //http://m.loho88.com/store/clist
                axios.get('/api/store/clist').then( res =>{
                    // console.log(res.data.result)
                    that.hot = res.data.result.hot;
                    that.letters = res.data.result.letters;
                    that.list = res.data.result.list;                   
                });

                //http://m.loho88.com/store/302
                axios.get('/api/store/302').then((res)=>{                  
                   
                    that.city = res.data.result.city;

                      
                })
            }
        },
        created(){
            this.getData();
        }       
    }


</script>

<style scoped>

</style>
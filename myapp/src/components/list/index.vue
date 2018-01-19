<template>
    <div  class="list add-top">
        <Header :title='title' />
        <ul class="list-nav">
            <li @click="getData()" >综合</li>
            <li @click="getData('o1')">销量</li>
            <li @click="getData('o3')">价格</li>
            <router-link tag="li"  to="/filtrate">筛选<i class="iconfont icon-sifting"></i></router-link>
        </ul>    

        <mt-loadmore :bottom-method="loadBottom" :autoFill="false" :bottom-all-loaded="allLoaded" ref="loadmore"  >
            <Lists :dataList ='dataList' />
        </mt-loadmore>

        <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow' />
       
    </div>

</template>

<script>
    import axios from 'axios';

    import Header from '../public/Header'
    import Lists from './Lists'
    import BackTop from '../public/BackTop'

    export default {
        name: 'list',
        data () {
            return {
                dataList:[],
                title:'',
                isBackShow:{value:false},
                allLoaded:false,
                page:1,
                st:{
                    0:'o1',
                    1: 'o3',
                    2:'o5'
                }
            }
        },
        components:{
           Header,Lists,BackTop
        },
        methods:{
             //http://m.loho88.com/search/?e=222&page=1
            //http://m.loho88.com/search/?e=83&page=1&sort=o1  销量
            //http://m.loho88.com/search/?e=83,172&page=1&sort=o5 价格 上
            //http://m.loho88.com/search/?e=83,172&page=1&sort=o3 价格 下
            getData(ty){
                this.page=1;
                let that = this;
                var pid =that.$route.params.tid;
                that.title = that.$route.params.tag;  
               const url= ty == null ? '/api/search/?e='+pid+'&page='+this.page : '/api/search/?e='+pid+'&page='+this.page+'&sort='+ty;                
                              
                axios.get(url).then(res=>{
                    that.dataList = res.data.result.data;           
                }) 
            },
           
            loadBottom(ty){
                //刷新还是请求第一页数据
                console.log("上拉加载")
                let that = this;
                this.page++;
                var pid =that.$route.params.tid;
                const url= ty == null ? '/api/search/?e='+pid+'&page='+this.page : '/api/search/?e='+pid+'&page='+this.page+'&sort='+ty   ;             
                axios.get(url).then(res=>{
                    // that.dataList = res.data.result.data;                     
                  
                  //加载更多需要把本次请求的数据和之前的数据拼接在一起
                    that.dataList =  that.dataList.concat(res.data.result.data)

                  //（如果总数据<=你想要加载的数据 ---说明： 数据已全部获取完毕）
                    if( res.data.result.count <= res.data.result.pageSize * res.data.result.page  ){
                        that.allLoaded = true;
                    }
                    this.$refs.loadmore.onBottomLoaded(); //底部加载完成调用（隐藏loading的）                      
                }) 
            },
           

        },    
        created(){
          this.getData();
        } 
    }


</script>

<style scoped>
    .active{color: red}
</style>
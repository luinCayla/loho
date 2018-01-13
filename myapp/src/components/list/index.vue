<template>
    <div  class="list add-top">
        <Header :title='title' />
        <ul class="list-nav">
            <li @click="composite()">综合</li>
            <li @click="getsales()">销量</li>
            <li @click="getprice()">价格</li>
            <router-link tag="li"  to="/filtrate">筛选<i class="iconfont icon-sifting"></i></router-link>
        </ul>    
        <Lists :dataList ='dataList' />

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
                isBackShow:{value:false}
            }
        },
        components:{
           Header,Lists,BackTop
        },
        methods:{
            composite(){
                let that = this;
                var pid =that.$route.params.tid;
                that.title = that.$route.params.tag;           
                axios.get('/api/search/?e='+pid+'&page=1').then(res=>{
                    that.dataList = res.data.result.data;           
                }) 
            },
            getsales(){
                let that = this;
                var pid =that.$route.params.tid;
                that.title = that.$route.params.tag;           
                axios.get('/api/search/?e='+pid+'&page=1'+'&sort=o1').then(res=>{
                    that.dataList = res.data.result.data;           
                }) 
            },
            getprice(){
                 let that = this;
                var pid =that.$route.params.tid;
                that.title = that.$route.params.tag;           
                axios.get('/api/search/?e='+pid+'&page=1'+'&sort=o5').then(res=>{
                    that.dataList = res.data.result.data;           
                }) 
            }
            
        },
     
        mounted(num){

            var pid =this.$route.params.tid;
            this.title = this.$route.params.tag;

            //http://m.loho88.com/search/?e=222&page=1
            //http://m.loho88.com/search/?e=83&page=1&sort=o1  销量
            //http://m.loho88.com/search/?e=83,172&page=1&sort=o5 价格 上
            //http://m.loho88.com/search/?e=83,172&page=1&sort=o3 价格 下
           
            axios.get('/api/search/?e='+pid+'&page=1').then(res=>{
                this.dataList = res.data.result.data;     
            })              

        },
    

           
        
       
        
    }


</script>

<style scoped>

</style>
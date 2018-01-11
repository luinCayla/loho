<template>
    <div  class="list add-top">
        <Header :title='title' />
        <ul class="list-nav">
            <li>综合</li>
            <li>销量</li>
            <li>价格</li>
            <li>筛选<i class="iconfont icon-sifting"></i></li>
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
           
        },
        mounted(){
            var pid =this.$route.params.tid;
            this.title = this.$route.params.tag;
            //http://m.loho88.com/search/?e=222&page=1
            axios.get('/api/search/?e='+pid+'&page=1').then(res=>{

                this.dataList = res.data.result.data;
               
            })
            //  console.log( this.$route )
        
        }
        
    }


</script>

<style scoped>

</style>

<template>
    <div id="details-fa">
        <Header />
        <Banner :pics='pics' />
        <Explain :goodsName='goodsName' :promiseTag='promiseTag' />      
        <Choose  :txtcontent='txtcontent' />
        <Picture />
        <Footer />
       <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow' />
      
    </div>
</template>


<script>
import axios from 'axios'

import Header from '../public/Header';
import Banner from './Banner';
import Explain from './Explain';
import Choose from './Choose';
import Footer from './Footer';
import BackTop from '../public/BackTop'

export default {
    name:'details-fa',
    data(){
        return{
            isBackShow:{value:false},
            goodsName:'',
            promiseTag:'',
            pics:'',
            txtcontent:''
        }
    },
    components:{
        Header,Banner,Explain,Choose,Footer,BackTop
    },
    methods:{
        
    },
     mounted(){
      
        var gid =this.$route.params.gid;

         //http://m.loho88.com/goods/5230
        axios.get('/api/goods/'+ gid ).then( res=>{
        //   console.log(res)
          this.goodsName = res.data.result.info.goodsName;
          this.promiseTag = res.data.result.info.promiseTag;
          this.pics = res.data.result.info.pics;
          this.txtcontent =res.data.result.txtcontent
        })
    }      
}
</script>

<style>

</style>

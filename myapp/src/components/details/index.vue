
<template>
    <div id="details-fa">
        <Header />
        <Banner />
        <Explain />      
        <Choose />
        <Picture />
        <Footer />
       <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow' />
        <!-- <Evaluate /> -->
        <!-- <Argument /> -->
    </div>
</template>


<script>
import axios from 'axios'

import Header from '../public/Header';
import Banner from './banner';
import Explain from './explain';
import Evaluate from './evaluate';
// import Argument from './argument';

import Choose from './choose';
import Footer from './footer';
import BackTop from '../public/BackTop'

export default {
    name:'details-fa',
    data(){
        return{
            isBackShow:{value:false}
        }
    },
    components:{
        Header,Banner,Explain,Choose,Footer,BackTop
    },
    methods:{

    }
}
</script>

<style>

</style>

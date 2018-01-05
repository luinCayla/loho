<template>
    <div id="home" class="add-top">
        <Header  />        
        <Banner :bans='bans' />
        <Nav :menu='menu' />
        <ImgSrc :imgsrc='imgsrc'/>
        <Recommend :popular='popular' />
        <Classify :classify='classify' />
        <Bottom />
        <Footer />
        <router-view></router-view>  

        <BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow' />
    </div>

</template>

<script>
    import axios from 'axios'

    import Header from './Header';
    import Banner from './Banner';
    import Nav from './Nav';
    import ImgSrc from './ImgSrc';
    import Recommend from './Recommend';
    import Classify from './Classify';
    import Bottom from './Bottom'
    import Footer from './Footer';
    import BackTop from '../public/BackTop'

    export default {
        name: 'home',
        data () {
            return {
                bans:[],
                menu:[],
                imgsrc:[],
                popular:{
                    title:'',
                    more:'',
                    img:''
                },
                classify:[],
                isBackShow:{value:false}
            }
        },
        components:{
            Header,Banner,Nav,ImgSrc,Recommend,Classify,Bottom,Footer,BackTop
        },
        methods:{
            getData(){
                let that = this;
                //http://m.loho88.com/index
                axios.get('/api/index').then( res =>{
                    console.log(res.data.result)
                    that.bans = res.data.result.focus;
                    that.menu = res.data.result.cates;
                    that.imgsrc = res.data.result.ad[0].pic;
                    that.popular = res.data.result.popular;
                    that.classify = res.data.result.classify;
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
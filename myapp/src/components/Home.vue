<template>
    <div id="home">
        <Header  />      
        <Banner :bans='bans' />
        <Nav :menu='menu' />
        <ImgSrc :imgsrc='imgsrc'/>
        <Recommend :popular='popular' />
        <Classify :classify='classify' />
        <Foot />
    </div>

</template>

<script>
    import axios from 'axios'

    import Header from './home/Header';
    import Banner from './home/Banner';
    import Nav from './home/Nav';
    import ImgSrc from './home/ImgSrc';
    import Recommend from './home/Recommend';
    import Classify from './home/Classify';
    import Foot from './home/Footer'

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
               classify:[]
            }
        },
        components:{
            Header,Banner,Nav,ImgSrc,Recommend,Classify,Foot
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
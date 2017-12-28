<template>
    <div id="home">
        <Header  />      
        <Banner :bans='bans' />
        <Nav :menu='menu' />
        <ImgSrc :imgsrc='imgsrc'/>

    </div>

</template>

<script>
    import axios from 'axios'

    import Header from './home/Header';
    import Banner from './home/Banner';
    import Nav from './home/Nav';
    import ImgSrc from './home/ImgSrc';

    export default {
        name: 'home',
        data () {
            return {
               bans:[],
               menu:[],
               imgsrc:[]
            }
        },
        components:{
            Header,Banner,Nav,ImgSrc
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
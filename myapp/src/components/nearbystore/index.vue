<template>
    <div id="nearby-store">
        <Header title="查找体验店" /> 
        <Select />
        <Local :local="local"/>
        <Box  :box="box"/>
       
    </div>
</template>

<script>
 import axios from 'axios'

 import Select from './Select';
 import Local from './Local';
 import Box from './Box';
 import Header from '../public/Header'

    export default {
        name: 'nearby-store',
        data () {
            return {
                box:[],
                local:[]
            }
        },
        components:{
            Header,Select,Local,Box,
        },
        methods:{
            getData(){
                let that =this;
                axios.get('/api/store/302').then((res)=>{
                    console.log(res,111111)
                    //http://image.loho88.com/themes/template/   images/shop/30214/1442662760960864.jpg
                    //images/shop/30223/1489377211640276.jpg
                    this.box = res.data.result.stores
                    console.log(this.box)
                      
                }),
                axios.get('/api/store/count').then((res)=>{
                    console.log(res,111111)
                    //http://image.loho88.com/themes/template/   images/shop/30214/1442662760960864.jpg
                    //images/shop/30223/1489377211640276.jpg
                    this.local = res.data.result
                    
                      
                })
            }

        } ,
        created(){
            this.getData();
        }


    }


</script>

<style scoped>

</style>
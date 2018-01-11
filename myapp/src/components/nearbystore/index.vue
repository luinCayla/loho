<template>
    <div id="nearby-store">
        <Header title="查找体验店" /> 
        <Select />
       
       
    </div>
</template>

<script>
 import axios from 'axios'

 import Header from '../public/Header'
 import Select from './Select';

    export default {
        name: 'nearby-store',
        data () {
            return {
               
            }
        },
        components:{
            Header,Select,
        },
        methods:{
           

        } 


    }


</script>

<style scoped>

</style>
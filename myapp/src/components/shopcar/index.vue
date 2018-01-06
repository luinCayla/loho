<template>
    <div id="shopcar">
        <Header />
        <Hbuying />
    </div>

</template>

<script>
import axios from 'axios'

    import Header from './Header'
    import Hbuying from './Hide'
    export default {
        name: 'shopcar',
        data () {
            return {
                
            }
        },
        components:{
            Header,Hbuying
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
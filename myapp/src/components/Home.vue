<template>
    <div id="home">
        <Header />
        <Banner />

      



    </div>

</template>

<script>
    import Header from './home/Header';
    import Banner from './home/Banner';
   

    

    export default {
        name: 'home',
        data () {
            return {
                
            }
        },
        components:{
            Header,Banner
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
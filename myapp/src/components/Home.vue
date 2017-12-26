<template>
    <div id="home">
        <Header />
        <Banner />

        <Footer />



    </div>

</template>

<script>
    import Header from './public/Header.vue';
    import Banner from './home/Banner.vue';
    import Footer from './public/Footer.vue';

    

    export default {
        name: 'home',
        data () {
            return {
                
            }
        },
        components:{
            Header,Banner,Footer
        },
        methods:{

        } 
    }


</script>

<style scoped>

</style>
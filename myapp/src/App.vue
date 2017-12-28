<template>
    <div id="app">  
        <router-view></router-view>  
        <Footer /> 
       
    </div>
</template>

<script>

import Footer from './components/public/Footer';

  
export default {
    name: 'app',
    data () {
        return {
         
            
        }
    },
    components:{
        Footer
    },
    methods:{
               
    }
}
</script>


<style>

   

</style>

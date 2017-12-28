<template>
    <div id="app">  
        
        <Footer /> 
        <router-view></router-view>  
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

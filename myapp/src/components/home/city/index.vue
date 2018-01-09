<template>
    <div id="city" class="add-top">
        <Header title="选择城市" />
            
      
        <all-city />
    </div>

</template>

<script>


    import Header from '../../public/Header.vue';
    import AllCity from './AllCity';
    import Menue from '../../public/Menue';

    export default {
        name: 'city',
        data () {
            return {
             
            }
        },
        components:{
           Header,AllCity,Menue
        },
        methods:{
           
        },
        
        
    }


</script>

<style scoped>

</style>
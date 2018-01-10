<template>
    <div id="city" class="add-top">
        <Header title="选择城市" />
                  
        <all-city />
    </div>

</template>

<script>

    import Header from '../../public/Header';
    import AllCity from './AllCity';

    export default {
        name: 'city',
        data () {
            return {
             
            }
        },
        components:{
           Header,AllCity
        },
        methods:{
           
        },
        
        
    }


</script>

<style scoped>

</style>
<template>
    <div id="group-buying" >
       <Gbuying />
       <Hbuying /> 
       <Cbuying />
    </div>

</template>

<script>


    import Cbuying from './Content';
    import Hbuying from './Hide';
    import Gbuying from './Header';
    export default {
        name: 'group-buying',
        data () {
            return {
                
            }
        },
        components:{
            Gbuying,Hbuying,Cbuying
        },
        methods:{
               
        } 
    }


</script>

<style scoped>

</style>
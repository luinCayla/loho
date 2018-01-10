<template>
    <div id="group-buying" >
       <Gbuying />
       <Hide /> 
       <Cbuying />
    </div>

</template>

<script>


    import Cbuying from './Content';
    import Hide from './Hide';
    import Gbuying from './Header';
    export default {
        name: 'group-buying',
        data () {
            return {
                
            }
        },
        components:{
            Gbuying,Cbuying,Hide
        },
        methods:{
               
        } 
    }


</script>

<style scoped>

</style>
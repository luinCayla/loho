<template>
    <div  class="add-top">
        <Header title="筛选" />
        <Content />         

    </div>

</template>

<script>

    import Header from '../../public/Header';
    import Content from './Filtcontert'

    export default {
        name: 'filtrate',
        data () {
            return {
             
            }
        },
        components:{
           Header,Content
        },
        methods:{
           
        },
        
        
    }


</script>

<style scoped>

</style>
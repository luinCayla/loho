<template>
  <div id="app">
    <Home />
    <GroupBuying />
    <Service />
    <NearbyStore />
    <Mime />    
  </div>
</template>

<script>

    import Home from './components/Home.vue';
    import GroupBuying from './components/GroupBuying.vue';
    import Service from './components/Service.vue';
    import NearbyStore from './components/NearbyStore';
    import Mime from './components/Mime.vue';


export default {
    name: 'app',
    data () {
        return {
         
            
        }
    },
    components:{
        Home,GroupBuying,Service,NearbyStore,Mime
    },
    methods:{
               
    }
}
</script>


<style>

   

</style>

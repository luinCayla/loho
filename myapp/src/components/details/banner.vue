

<template>
    <div class="home-ban">
        <mt-swipe class="img-box" :show-indicators="false">
            <mt-swipe-item v-for="(pic,i) in pics" :key="i" ><img :src="'http://image.loho88.com/'+ pic"></mt-swipe-item>
           
        </mt-swipe>
        <div class="shade">
            <span></span>
        </div>            
    </div>  
</template>

<script>
export default {
    name: 'detail-ban',
    props:['pics'],
    data () {
        return {
            
        }
    },
    methods:{
        
    },
}
</script>

<style scoped>

</style>

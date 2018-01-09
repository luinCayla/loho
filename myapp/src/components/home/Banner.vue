<template>
    <div class="home-ban">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for='(ban,i) in bans' :key="i" > 
                <router-link to="/one"></router-link>             
                <img :src='ban.pic' alt="" width='100%'>                              
            </mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
    

    export default {
        name: 'banner',
        props:['bans'],
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
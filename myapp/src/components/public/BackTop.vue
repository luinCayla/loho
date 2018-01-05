<template >
	<transition  enter-active-class='animated fadeInUp'  leave-active-class='animated fadeOutDown'>
		<div v-show='isShow.value' class="back-top" >	
			<i class="iconfont icon-up"></i>
		</div>
	</transition>
</template>

<script>
	export default {
		name:'back-top',
		props:['isShow'],
		methods:{
			
		}
	}
</script>

<style scoped>

</style>
<template>
	<div class="m-widget3">
		<div class="m-widget2__header">
			<h3 class="widget1__title">{{title}}</h3>
			<span class="widget1__desc">{{desc}}</span>
		</div>
		<circle-chart></circle-chart>
	</div>
</template>

<script>
 import CircleChart from './circle.vue'
export default{
	name:'project',
	data(){
		return{
			
		}
	},
	props:['title','desc'],
	components:{
		CircleChart
	}
}
</script>

<style>
	.m-widget3{
		padding: 28px;
		border-left:  1px solid #f2f3f8;
	}

</style>
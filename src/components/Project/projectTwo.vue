<template>
	<div class="m-widget2">
		<div class="m-widget2__header">
			<h3 class="widget1__title">{{title}}</h3>
			<span class="widget1__desc">{{desc}}</span>
		</div>
		<line-chart ></line-chart>
	</div>
</template>

<script>
 import LineChart from './LineChart'
export default{
	name:'project',
	data(){
		return{
			
		}
	},
	props:['title','desc'],
	components:{
		LineChart
	}
}
</script>

<style>
	.m-widget2{
		padding: 28px;
		border-left: 1px solid #f2f3f8;
	}
	.m-widget2__header{
		padding: 10px 0;
		margin-bottom: 15px;
	}

</style>
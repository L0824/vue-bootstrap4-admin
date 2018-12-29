<template>
	<div class="m-widget">
		<div class="m-widget__item" v-for='(item,index) in widgetArr'>
			<div class="items" >
				<div class="col">
					<h3 class="widget1__title">{{item.title}}</h3>
					<span class="widget1__desc">{{item.desc}}</span>
				</div>
				<div class="col m--align-right">
					<span class="widget1__number" :class='item.color' >{{item.number}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Project',
		props:{
			widgetArr:{
				type:Array
			}

		}
	}
</script>
<style>
	.m-widget{
		padding: 28px;
	}
	.m-widget__item:first-child{
        padding-top: 10px;
	}
	.m-widget__item:{
		padding: 14px 0;
	}
	.items{
		margin-left: 0;
		margin-right: 0;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0;
		align-items: center !important;
		border-bottom: 1px dashed #ebedf2;
	}
	.widget1__title{
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 0;
		color: #3f4047;
	}
	.widget1__desc{
		display: inline-block;
	    margin-top: 10px;
	    font-size: 12px;
	    font-weight: 300;
	    color: #9699a2;
	}
	.m--align-right{
		margin-left: 0;
		margin-right: 0;
		text-align: right;
	}
	.widget1__number {
       font-size:20px;
       font-weight: 600;
	}
</style>
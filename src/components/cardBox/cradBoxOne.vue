<template>
	<div class="m-portlet">
		<div class="m-portlet__head">
			<div class="m-portlet__head-caption">
				<div class="m-portlet__head-title">
					<h3 class="m-portlet__head-text">Personal Project</h3>
				</div>
			</div>
		</div>
		<div class="m-portlet-body">
			<div class="m-widget-one">
				<div class="m-widget27__pic">
					<img src="../../assets/images/bg-4.jpg" alt="">
					<h3 class="m-widget27-title">WHO ARE YOU</h3>
					<div class="m-widget27-btn">
						<button type='button' class="btn btn-secondary">Personal Profile</button>
					</div>
				</div>
			</div>
		</div>
		<card></card>
		<div class="decPro"> <p>  MCU is the center of Multi Video Conference, which offers multi video mixing and audio mixing. it is developped for Cloud Video Conference. I'm the owner of Call Subsystem of creating. The third is Lync gateway which connects skype for business to Huawei conference system.</p></div>
	</div>
</template>

<script>
import Card from './card'
	export default{
		name:'CardBoxOne',
		components:{
			Card
		}
	}
</script>

<style>
	.m-portlet{
	  box-shadow: 0px 1px 15px 1px rgba(69,65,78,0.08);
      background-color: #fff;
	}
	.m-portlet__head{
		position: relative;
		z-index: 2;
		display: flex;
		align-items: stretch;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 22px;
		height: 66px;
	}
	.m-portlet__head-caption{
		display: flex;
		align-items: center;
		align-content: flex-start;
	}
	.m-portlet__head-title{
		display: flex;
		align-items: center;
		color: #fff;
	}
	.m-portlet__head-text{
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
	}
	.m-portlet-body{
		position: relative;
	    z-index: 1;
	    padding-top: 0;
	    padding: 0 22px;
	    color: #575962;
	    margin-top: -66px;
	    width: 100%;
	}
	.m-widget-one{
		margin-left: -22px;
		margin-right: -22px;
	}
	.m-widget27__pic{
		position: relative;
	}
	.m-widget27__pic img{
		width: 100%;
		height: 280px;
	}
	.m-widget27-title{
		position: absolute;
	    left: 50%;
	    top: 60%;
	    transform: translate(-50%, -50%);
	    display: block;
	    z-index: 1;
	    color: #fff;
	}
	.m-widget27-btn .btn{
		color: #7b7e8a !important;
		outline: none;
		border: none;
		position: absolute;
	    left: 50%;
	    top: 100%;
	    transform: translate(-50%, -50%);
	    z-index: 1;
	    display: block;
	    font-size: 14px;
	    padding: 10px 25px;
	    background-color: #fff !important;
	}
	.decPro{
		width: 100%;
		padding: 20px 22px;
	}
	.nav.nav-pills{
		padding-top: 20px;
	}
</style>
<template>
	<div class="m-portlet  m--bg-warning" style='height:100%;'>
		<div class="m-portlet__head">
			<div class="m-portlet__head-caption">
				<div class="m-portlet__head-title">
					<h3 class="m-portlet__head-text">Packages</h3>
				</div>
			</div>
		</div>
		<div class="m-portlet--body">
			<div class="m-widget-one">
				<div class="m-widget_content">
					<h3 class="m-widget_content-title">Monthly Income</h3>
						<div class="m-widget_content-items">
							<div class="m-widget_content-item">
								<span>Total</span>
								<span class="m--font-accent">$680</span>
							</div>
							<div class="m-widget_content-item">
								<span>Change</span>
								<span class="m--font-brand">+15%</span>
							</div>
							<div class="m-widget_content-item">
								<span>Licenses</span>
								<span>29</span>
							</div>
						</div>
				</div>
				<div class="m-widget_content">
					<h3 class="m-widget_content-title">Key Words</h3>
					<div class="m-widget_content-items">
						<div class="m-widget_content-item">
							<span>VUE</span>
							<span class="m--font-accent">2.50</span>
						</div>
						<div class="m-widget_content-item">
							<span>JAVA</span>
							<span class="m--font-brand">+115%</span>
						</div>
						<div class="m-widget_content-item">
							<span>Javascript</span>
							<span>701</span>
						</div>
					</div>
				</div>
				<div class="m-widget_content">
					<h3 class="m-widget_content-title">Advantage</h3>
						<div class="m-widget_content-items">
							<div class="m-widget_content-item">
								<span>Login</span>
								<span class="m--font-accent">$12,000</span>
							</div>
							<div class="m-widget_content-item">
								<span>GOOD</span>
								<span class="m--font-brand">+15%</span>
							</div>
							<div class="m-widget_content-item">
								<span>Licenses</span>
								<span>29</span>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CardBoxOne',
		components:{
			
		}
	}
</script>

<style>
.m-portlet--body{
	padding: 0.2rem 2.2rem;
	color: #575962;
}
.m--bg-warning{
	background-color: #ffb822 !important;
}
.m-widget_content{
	background-color: #fff;
	margin-bottom: 10px;
	padding: 40px 35px;
	margin: 0 36px;
}
.m-widget_content-title {
    color: #7b7e8a;
    font-size: 18px;
    font-weight: 600;
}
.m-widget_content-items {
    width: 100%;
    display: table;
    table-layout: fixed;
}
 .m-widget_content-item {
    display: table-cell;
}
.m-widget_content-item>span:first-child {
    color: #9699a2;
}
.m-widget_content .m-widget_content-items .m-widget_content-item>span {
    display: block;
    text-align: left;
    line-height: 30px;
}
.m-widget_content-item>span:last-child {
    font-size: 20px;
    font-weight: 600;
}
.m-widget_content-item>span {
    display: block;
    text-align: left;
}
.m--font-accent {
    color: #00c5dc !important;
}
.m--font-brand {
    color: #716aca !important;
}
.m-widget_content-item:last-child>span:last-child {
    color: #FE21BE;
}
.m-widget_content{
	margin-bottom: 30px;
}
</style>
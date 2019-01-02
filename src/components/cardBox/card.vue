<template>
	<div class="card__container">
		<div class="card_item">
			<ul class="m-widget27__nav-items nav nav-pills nav-fill" role="tablist">
				<li class="m-widget27__nav-item nav-item">
					<a class="nav-link active" data-toggle="pill" href="#m_personal_income_quater_1">Quater 1</a>
				</li>
				<li class="m-widget27__nav-item nav-item">
					<a class="nav-link" data-toggle="pill" href="#m_personal_income_quater_2">Quater 2</a>
				</li>
				<li class="m-widget27__nav-item nav-item">
					<a class="nav-link" data-toggle="pill" href="#m_personal_income_quater_3">Quater 3</a>
				</li>
				<li class="m-widget27__nav-item nav-item">
					<a class="nav-link" data-toggle="pill" href="#m_personal_income_quater_4">Quater 4</a>
				</li>
			</ul>
			<div class="m-widget27__tab tab-content m-widget27--no-padding">
				<div id="m_personal_income_quater_1" class="tab-pane active">
					<div class="row  align-items-center">
						<circle></circle>
						<div class="col">
							<div id="m_chart_personal_income_quater_1" style="height: 160px">
								<circle-chart></circle-chart>
							</div>
						</div>
					</div>
				</div>
				<div id="m_personal_income_quater_2" class="tab-pane fade">
					<div class="row  align-items-center">
						<div class="col">
							<div id="m_chart_personal_income_quater_2"  style="height: 160px">
								<h3>我是你的项目介绍二</h3>
							</div>
						</div>
					</div>
				</div>
				<div id="m_personal_income_quater_3" class="tab-pane fade">
					<div class="row  align-items-center">
						<div class="col">
							<div id="m_chart_personal_income_quater_3"  style="height: 160px">
								<h3>我是你的项目介绍三</h3>
							</div>
						</div>
					</div>
				</div>
				<div id="m_personal_income_quater_4" class="tab-pane fade">
					<div class="row  align-items-center">
						<div class="col">
							<div id="m_chart_personal_income_quater_4" style="height: 160px">
								<h3>我是你的项目介绍四</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CircleChart from '../Project/circle'
	export default{
		name:'card',
		components:{
			CircleChart
		}
	}
</script>

<style>
.card_item{
	width: 100%;
	padding: 10px 15px 0 15px;
}
.m-widget27__nav-items {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 7px;
}
.nav.nav-pills {
    margin-bottom: 20px;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.m-widget27__nav-item {
   display: table-cell;
   margin-left: 7px;
}
.nav.nav-pills .nav-item:first-child{
    margin-left: 0;
}
.nav-fill .nav-item{
	flex: 1 1 auto;
    text-align: center;
}
.m-widget27__nav-item>a {
    color: #a4a6ae !important;
    border: 1px solid #ebedf2 !important;
}
.m-widget27__nav-items .m-widget27__nav-item>a.active {
    background-color: #9816f4;
    border-color: #9816f4 !important;
    color: #fff !important;
    text-align: center;
    font-weight: 500;
    padding: 8px 0 8px 0;
}
</style>
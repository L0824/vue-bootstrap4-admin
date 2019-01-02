<template>
	<div class="m-portlet" style='height:100%;'>
		<div class="m-portlet__head">
			<div class="m-portlet__head-caption">
				<div class="m-portlet__head-title">
					<h3 class="m-portlet__head-text">Finance Stats</h3>
				</div>
			</div>
		</div>
		<div class="m-portlet-body">
			<div class="m-widget-one">
				<div class="m-widget28__pic"></div>
				<div class="m-widget28__container">
					<ul class="m-widget28__nav-items nav nav-pills nav-fill" role="tablist">
						<li class="m-widget28__nav-item nav-item">
							<a class="nav-link active" data-toggle="pill" href="#menu11"><span><i class="fa fa-envelope"></i></span><span>GMI Taxes</span></a>
						</li>
						<li class="m-widget28__nav-item nav-item">
							<a class="nav-link" data-toggle="pill" href="#menu21"><span><i class="fa fa-comments"></i></span><span>IMT Invoice</span></a>
						</li>
						<li class="m-widget28__nav-item nav-item">
							<a class="nav-link" data-toggle="pill" href="#menu31"><span><i class="fa fa-thumbs-up"></i></span><span>Main Notes</span></a>
						</li>
					</ul>
					<div class="m-widget28__tab tab-content">
						<div id="menu11" class="m-widget28__tab-container tab-pane active">
							<div class="m-widget28__tab-items">
								<div class="m-widget28__tab-item">
									<span>Company Name</span>
									<span>SLT Back-end Solutions</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>INE Number</span>
									<span>D330-1234562546</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Total Charges</span>
									<span>USD 1,250.000</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Project Description</span>
									<span>Creating Back-end Components</span>
								</div>
							</div>
						</div>
						<div id="menu21" class="m-widget28__tab-container tab-pane fade">
							<div class="m-widget28__tab-items">
								<div class="m-widget28__tab-item">
									<span>Project Description</span>
									<span>Back-End Web Architecture</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Total Charges</span>
									<span>USD 2,170.000</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>INE Number</span>
									<span>D110-1234562546</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Company Name</span>
									<span>SLT Back-end Solutions</span>
								</div>
							</div>
						</div>
						<div id="menu31" class="m-widget28__tab-container tab-pane fade">
							<div class="m-widget28__tab-items">
								<div class="m-widget28__tab-item">
									<span>Total Charges</span>
									<span>USD 3,450.000</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Project Description</span>
									<span>Creating Back-end Components</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>Company Name</span>
									<span>SLT Back-end Solutions</span>
								</div>
								<div class="m-widget28__tab-item">
									<span>INE Number</span>
									<span>D510-7431562548</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		name:'CardBoxTwo',
		components:{
			
		}
	}
</script>

<style>
.m-widget28__pic{
	background-color: #5075E4;
	position: relative;
    min-height: 286px;
}
.m-widget-one .m-widget28__container{
	width: 100%;
}
.m-widget-one .m-widget28__container .m-widget28__nav-items {
    display: table;
    width: 100%;
    table-layout: fixed;
    margin-top: -100px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 10px;

}
.m-widget-one .m-widget28__nav-item {
    display: table-cell;
    padding:0 15px !important;
}
.m-widget-one .m-widget28__nav-item>a.active {
    background-color: #456ADC;
    color: #fff;
}
.m-widget-one .m-widget28__nav-item>a {
    border: 1px solid #9ea7c0 !important;
    color: #fff !important;
    text-align: center;
    padding: 10px 0 10px 0;
}
.m-widget-one .m-widget28__nav-item>a>span {
    display: block;
}
.m-widget-one .m-widget28__nav-item>a>span>i {
    font-size: 22px;
    margin-right: 0;
    padding-bottom: 10px;
    padding-top: 8px;
}
.m-widget-one .m-widget28__tab {
    margin-top: 22px;
    padding: 0 28px;
}
.m-widget28__tab-item:first-child {
    margin-top: 0;
}
.m-widget28__tab-item {
    border-bottom: 1px solid #ebedf2;
    margin-top: 20px;
}
.m-widget28__tab-item>span {
    display: block;
    line-height: 28px;
}
 .m-widget28__tab-item>span:first-child {
    font-size: 12px;
    font-weight: 500;
}
.m-widget28__tab-item>span:last-child {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
 }
</style>
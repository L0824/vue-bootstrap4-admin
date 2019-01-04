<template>
	<div class="m-portlet aciveBox">
		<div class="m-portlet__head active_head">
			<div class="m-portlet__head-caption">
				<h3 class="m-portlet__head-text">
					Recent Activities
				</h3>
			</div>
			<div class="m-portlet__head-tools">
				<ul class="nav nav-pills nav-pills--brand" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#m_widget2_tab1_content" role="tab">
							Today
						</a>
					</li>
					<li class="nav-item m-tabs__item">
						<a class="nav-link" data-toggle="tab" href="#m_widget2_tab2_content" role="tab">
							Week
						</a>
					</li>
					<li class="nav-item m-tabs__item">
						<a class="nav-link" data-toggle="tab" href="#m_widget2_tab3_content" role="tab">
							Month
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="m-portlet__body activeBody">
			<div class="" style="padding:0 15px;">
				<div class="tab-pane" id="m_widget2_tab1_content">
					<div>
						<div class="m-widget2__item" v-for='user in activeArr'>
							<i class="line-act" :class='user.className'></i>
							
						    <input type="checkbox" class="form-check-input">
						   
						 
							<div class="m-widget2__desc act_text" >
								<span class="m-widget2__text">
									{{user.desc}}
								</span><br>
								<span class="m-widget2__user-name">
									<a href="#" class="m-widget2__link">
										{{user.user}}
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane" id="m_widget2_tab2_content"></div>
				<div class="tab-pane" id="m_widget2_tab3_content"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'active',
		props:{
			activeArr:{
				type:Array,
				default:''
			}
		}
	}
</script>

<style>
@media (min-width: 1025px){
   .aciveBox{
      height: calc(100% - 2.2rem);
   }
   .activeBody{
   	   height: calc(100% - 2.2rem - 2.2rem);
   }
}
.activeBody{
	padding: 24px 28px;
}
.aciveBox{
	margin-bottom: 22px;
	margin-top: 15px;
}
.active_head{
	border-bottom: 1px solid #ebedf2;
	width: 100%;
}
.m-portlet__head-tools {
    display: flex;
    align-items: center;
    align-content: flex-end;
}
.nav-link.active {
    background: #716aca !important;
    color: #fff;
}
.m-tabs__link {
    border-radius: 20px !important;
}
.m-widget2__item {
    margin-bottom: 1.4rem;
    position: relative;
}
.m-widget2__user-name a{
	font-size: 12px;
    text-decoration: none;
    color: #c4c5d6;
}
.line-act{
   width: 3px;
   height: 45px;
   position: absolute;
}
.act_text{
	margin-left: 50px;
}
.form-check{
	display: inline-block !important;
}
.form-check-input {
    width: 20px;
    height: 20px;
    margin-left: 17px;
    top: 8px;
}
</style>
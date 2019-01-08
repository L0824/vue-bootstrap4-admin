<template>
	<div class="m-portlet aciveBox">
		<div class="m-portlet__head active_head">
			<div class="m-portlet__head-caption">
				<h3 class="m-portlet__head-text">
					Recent Notifications
				</h3>
			</div>
		</div>
		<div class="m-portlet__body activeBody">
			<div class="tab-content">
				<div class="tab-pane active">
					<div class="m-timeline">
						<div class="m-timeline__items">
							<div class="m-timeline__item" v-for='item in taskArr'>
								<span class="m-timeline__item-time">{{item.time}}</span>
								<i class="line" :class='item.className'></i>
								<div class="m-timeline__item-desc">							 
									<span class="m-timeline__item-text">
									       {{item.desc}}
									</span>
									<br>
									<span class="m-timeline__item-user-name">
									<a href="#" class="m-link m-link--metal m-timeline__item-link">
									    {{item.user}}
									</a>
									</span>		 
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
import 'src/lib/task'
	export default{
		name:'task',
		props:{
			taskArr:{
				type:Array,
				default:''
			}
		}
	}
</script>

<style>
.m-timeline__item{
    position: relative;
    margin-bottom: 10px;
}
.m-timeline__item-time{
	display: table-cell;
    vertical-align: top;
    padding-top: 0.6rem;
    font-weight: 500;
    font-size: 1.3rem;
    position: absolute;
    text-align: right;
    width: 3.57rem;
    color: #898b96;
}
.m-timeline__item-desc{
	display: table-cell;
    width: 100%;
    vertical-align: top;
    font-size: 1rem;
    padding-left: 7rem;
}
.m-timeline__item-text{
	font-size: 14px;
	font-weight: 400;
}
.m-timeline__item-user-name a{
	font-size: 12px;
    text-decoration: none;
    color: #c4c5d6;
}
.line{
  height: 28px;
    width: 3px;
    position: absolute;
    top: 8px;
    left: 80px;
}
.line-info{
    background-color: blue;
}
.line-warn{
	background-color: yellow;
}
.line-succes{
	background-color: green;
}
.line-danger{
	background-color: red;
}
</style>
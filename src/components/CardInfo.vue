<template>
	<div class="cardInfo">
		<div class=" card card-cascade card-cascade narrower">
			<div class="view">
				<img src="../../docs/static/img/pro-signup.jpg"  class="img-fluid" alt="">
				<div class="mask rgba-white-slight ripple-parent"></div>
			</div>
			<div class="card-body">
				<h4 class="font-bold card-title"><strong>{{ProjectName}}</strong></h4>
				<p class="card-text">{{des}}</p>
			</div>
			<div class="links-light profile-card-footer card-footer">
				<span class="right">
					<a href="" class="p-a">  Live Preview</a>
					<i class="fa fa-photo"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CardInfo',
		props:['ProjectName','des']
	}
</script>

<style>
  .view {
    position: relative;
    overflow: hidden;
    cursor: default;
   }
  .img-fluid{
  	max-width: 100%;
  	height: auto;
  	position: relative;
    display: block;
  }
  .view .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
  }
  .rgba-white-slight {
    background-color: rgba(255, 255, 255, 0.1);
}
.ripple-parent {
    cursor: pointer;
    display: table-cell;
}
.card-body {
    flex: 1 1 auto;
    padding:12px !important;
    
}
.card-title{
    margin-bottom: 17px;
    text-align: center;
}
.profile-card-footer{
    background-color: #F7F7F7 !important;
    padding: 20px;
}
.card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}
.card-footer {
    border-top: 1px solid rgba(0,0,0,.125);
    align-items: center;
   vertical-align: middle;
}
.fa-photo{
	color: #007bff;
}
a {
    cursor: pointer;
    text-decoration: none;
    color: #007bff;
    transition: all 0.2s ease-in-out;
}
.p-a{
	display: inline-block;
	padding: 10px;
    text-align: center;
}
</style>
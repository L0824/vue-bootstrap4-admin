<template>
	<div class="user-box card">
		<div class="heard-box">
			<div class="user-box-heard">
				<button type="button" class="btn btn-sm">{{blog}}</button>
			</div>
		</div>
		<div class="user-box-body">
			<div class="">
				<div class="user-picture">
					<img src="../assets/images/blog.jpg" alt="">
				</div>
			</div>
			<div class="user-bottom">
				
                  <img class=" rounded-circle" src="../../docs/static/img/user1.jpg" height="80" width="80" alt="profile image">
                
                <div class="user-details">
                  <div class="userBox">
                    <p class="text-primary font-weight-bold  no-wrap">Stella</p>
                    <p class="font-weight-bold  ellipsis">UX/UI Designer, Google</p>
                  </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'UserBox',
		props:['blog']
	}
</script>
<style>
    @media (min-width: 1025px){
    	.user-box{
    		height: calc(100% - 2.2rem);
    	}
    	.user-box-body{
    		height: calc((100% - 2.2rem) - 2.2rem);
    	}
    }
    .userBox{
    	margin-left: 10px;
    	padding-bottom: 15px;
    }
	.user-box{
		box-shadow: rgba(69, 65, 78, 0.08) 0px 1px 15px 1px;
        background-color: rgb(255, 255, 255);
        overflow: hidden;
	}
	.user-details{
		position: relative;
		display: inline-block;
	}
	.heard-box{
		position: relative;
		padding: 0 40px;
	}
	.user-picture img{
		width: 100%;
		min-height: 286px;
	}
	.user-box-heard{
		display: flex;
	    align-items: center;
	    align-content: flex-start;
	}
	button{
		position: absolute;
		top: 20px;
		background-color: rgb(113, 106, 202) !important;
        border-color: rgb(113, 106, 202) !important;
        color: #fff !important;
        border-radius: 50px !important;
	}
	.m-title{
		position: absolute;
		top: 280px;
		left: 80px;
		color: #ffff;
		z-index: 999;
	}
    .user-bottom{
    	display: table-cell;
	    margin-top: 4px;
	    vertical-align: middle;
	    padding: 18px;
    }
    .user-bottom img{
    	border-radius: 50%;
    	width: 42px !important;
    	height: 42px !important;
    	display: inline-block;
    	margin-top: -43px;
    }
    .ellipsis{
    	color: #7b7e8a;
    }
    .text p{
    	color: #898b96;
    	font-size: 14px;
    	line-height: 20px;
    }
</style>
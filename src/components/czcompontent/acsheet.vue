<template>
	<div class="mint-actionsheet" style="z-index: 2013;">
		<ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
			<li class="mint-actionsheet-listitem">拍照</li>
			<li class="mint-actionsheet-listitem">从相册中选择</li>
		</ul> 
		<a class="mint-actionsheet-button">取消</a>
	</div>
</template>

<script>
</script>

<style>
	.mint-actionsheet {
	    position: fixed;
	    background: #e0e0e0;
	    width: 100%;
	    text-align: center;
	    bottom: 0;
	    left: 50%;
	    -webkit-transform: translate3d(-50%,0,0);
	    transform: translate3d(-50%,0,0);
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	    -webkit-transition: -webkit-transform .3s ease-out;
	    transition: -webkit-transform .3s ease-out;
	    transition: transform .3s ease-out;
	    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
	}
	.mint-actionsheet-list {
    	list-style: none;
    	padding: 0;
    	margin: 0;
	}
	.mint-actionsheet-button, .mint-actionsheet-listitem {
	    display: block;
	    width: 100%;
	    height: 45px;
	    line-height: 45px;
	    font-size: 18px;
	    color: #333;
	    background-color: #fff;
	}
	.actionsheet-float-enter, .actionsheet-float-leave-active {
	  	-webkit-transform: translate3d(-50%, 100%, 0);
      	transform: translate3d(-50%, 100%, 0);
	}
</style>
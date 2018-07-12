<template>
	<div class="toast">
		<div class="mint-toast is-placemiddle" style="padding: 10px;">
			<span class="mint-toast-text" style="padding-top: 0px;">提示信息</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"toast",
		data(){
			return {
				
			}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.toast{
		position:relative;
	}
	.mint-toast.is-placemiddle {
	    left: 50%;
	    top: 50%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	.mint-toast {
	    position: fixed;
	    max-width: 80%;
	    border-radius: 5px;
	    background: rgba(0,0,0,.7);
	    color: #fff;
	    box-sizing: border-box;
	    text-align: center;
	    z-index: 1000;
	    -webkit-transition: opacity .3s linear;
	    transition: opacity .3s linear;
	}
	.mint-toast-text{
	    font-size: 14px;
    	display: block;
    	text-align: center;
	}
</style>
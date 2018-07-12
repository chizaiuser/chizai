<template>
	<div class="mint-toast is-placemiddle" style="padding: 20px;">
		<i class="mint-toast-icon mintui mintui-success"></i>
		<span class="mint-toast-text" style="padding-top: 10px;">操作成功</span>
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
	.mintui {
	    font-family: mintui!important;
	    font-size: 16px;
	    font-style: normal;
	    /*该css属性控制抗锯齿的应用程序 字体渲染 webkit内核*/
	   	/*平滑像素级别上的字体，而不是子像素。在深色背景上从子像素渲染切换到抗锯齿，使其看起来更轻。*/
	    -webkit-font-smoothing: antialiased;
	    /*设置或检索对象中的文字的描边厚度*/
	    -webkit-text-stroke-width: .2px;
	    /*该css属性控制抗锯齿的应用程序 字体渲染 ios和mac系统*/
	    /*平滑像素级别上的字体，而不是子像素。在深色背景上从子像素渲染切换到抗锯齿，使其看起来更轻。*/
	    -moz-osx-font-smoothing: grayscale; 
	}
	/*自己需要配置的编码*/
	.mintui-success::before {
	    content: "\E602"; 
	}
	.mint-toast-text{
	    font-size: 14px;
    	display: block;
    	text-align: center;
	}
	.mint-toast-icon {
	    display: block;
	    text-align: center;
	    font-size: 56px;
	}
</style>
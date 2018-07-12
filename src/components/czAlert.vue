<template>
	<div class="czalert">
		<div class="czcontent">
			<h1>{{title}}</h1>
			<div class="czwrap">{{content}}</div>
			<div class="foot">
				<button @click="srueBtn()">确定</button>
				<button @click="cancelBtn()">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"czalert",
		props:{
			title:{
				type:String,
				default:""
			},
			content:{
				type:String,
				default:""
			}
		},
		data () {
			return {
				controlShow:false
			}
		},
	    mounted () {
	   	
	    },
	    methods:{
	    	srueBtn(){
	    		
	    	},
	    	cancelBtn(){
	    		
	    	}
	    }
	}
</script>

<style>
	.czalert{
		position:absolute;
		left:0;
		top:0;
		bottom:0;
		width:100%;
		background-color:rgba(0,0,0,0.7);
	}
	.czcontent{
		height:350px;
		width:80%;
		position:absolute;
		left:50%;
		top:25%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		background-color:#ffffff;
	}
	.czcontent>h1{
		text-align:center;
		padding:15px 0px;
	}
	.czwrap{
		min-height:250px;
		padding:0px 15px;
	}
	.czcontent .foot{
		overflow:hidden;
		height:50px;
		
	}
</style>
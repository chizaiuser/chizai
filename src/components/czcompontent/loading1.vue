<template>
	<div class="loading">
		<div class="mint-indicator-wrapper" style="padding: 15px;">
			<span class="mint-indicator-spin">
				<div class="mint-spinner-fading-circle circle-color-13" style="width: 32px; height: 32px;">
					<div class="mint-spinner-fading-circle-circle is-circle2"></div>
					<div class="mint-spinner-fading-circle-circle is-circle3"></div>
					<div class="mint-spinner-fading-circle-circle is-circle4"></div>
					<div class="mint-spinner-fading-circle-circle is-circle5"></div>
					<div class="mint-spinner-fading-circle-circle is-circle6"></div>
					<div class="mint-spinner-fading-circle-circle is-circle7"></div>
					<div class="mint-spinner-fading-circle-circle is-circle8"></div>
					<div class="mint-spinner-fading-circle-circle is-circle9"></div>
					<div class="mint-spinner-fading-circle-circle is-circle10"></div>
					<div class="mint-spinner-fading-circle-circle is-circle11"></div>
					<div class="mint-spinner-fading-circle-circle is-circle12"></div>
					<div class="mint-spinner-fading-circle-circle is-circle13"></div>
				</div>
			</span> 
			<span class="mint-indicator-text" style="display: none;"></span>
		</div>
	</div>
</template>

<script>
</script>

<style>
.circle-color-13>div:before{
	background-color: #ccc;
}
.mint-indicator-wrapper {
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
}
.mint-spinner-fading-circle {
    position: relative;
}
.mint-indicator-spin {
    display: inline-block;
    text-align: center;
}
.mint-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}
.mint-spinner-fading-circle-circle::before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
    animation: mint-fading-circle 1.2s infinite ease-in-out both
}
.mint-spinner-fading-circle-circle.is-circle2 {
    -webkit-transform: rotate(30deg);
            transform: rotate(30deg)
}
.mint-spinner-fading-circle-circle.is-circle2::before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s
}
.mint-spinner-fading-circle-circle.is-circle3 {
    -webkit-transform: rotate(60deg);
            transform: rotate(60deg)
}
.mint-spinner-fading-circle-circle.is-circle3::before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s
}
.mint-spinner-fading-circle-circle.is-circle4 {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
}
.mint-spinner-fading-circle-circle.is-circle4::before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s
}
.mint-spinner-fading-circle-circle.is-circle5 {
    -webkit-transform: rotate(120deg);
            transform: rotate(120deg)
}
.mint-spinner-fading-circle-circle.is-circle5::before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s
}
.mint-spinner-fading-circle-circle.is-circle6 {
    -webkit-transform: rotate(150deg);
            transform: rotate(150deg)
}
.mint-spinner-fading-circle-circle.is-circle6::before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s
}
.mint-spinner-fading-circle-circle.is-circle7 {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
}
.mint-spinner-fading-circle-circle.is-circle7::before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s
}
.mint-spinner-fading-circle-circle.is-circle8 {
    -webkit-transform: rotate(210deg);
            transform: rotate(210deg)
}
.mint-spinner-fading-circle-circle.is-circle8::before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s
}
.mint-spinner-fading-circle-circle.is-circle9 {
    -webkit-transform: rotate(240deg);
            transform: rotate(240deg)
}
.mint-spinner-fading-circle-circle.is-circle9::before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s
}
.mint-spinner-fading-circle-circle.is-circle10 {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
}
.mint-spinner-fading-circle-circle.is-circle10::before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s
}
.mint-spinner-fading-circle-circle.is-circle11 {
    -webkit-transform: rotate(300deg);
            transform: rotate(300deg)
}
.mint-spinner-fading-circle-circle.is-circle11::before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s
}
.mint-spinner-fading-circle-circle.is-circle12 {
    -webkit-transform: rotate(330deg);
            transform: rotate(330deg)
}
.mint-spinner-fading-circle-circle.is-circle12::before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s
}
@keyframes mint-fading-circle {
    0%, 39%, 100% {
        opacity: 0
    }
    40% {
        opacity: 1
    }
}
</style>
<template>
	<div class="multInput">
		<div tabindex="0" class="multiselect">
			<div class="multiselect__select"></div>
			<div class="multiselect__tags">
				<div class="multiselect__tags-wrap" style="display: none;"></div>
				<!---->
				<div class="multiselect__spinner" style="display: none;"></div>
				<!---->
				<!----><span class="multiselect__placeholder"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
	            选择一个值
	        </font></font></span></div>
			<div class="multiselect__content-wrapper" style="max-height: 300px; display: none;">
				<ul class="multiselect__content" style="display: inline-block;">
					<!---->
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option multiselect__option--highlight"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择选项</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多张</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">clearOnSelect</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hideSelected</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大高度</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">allowEmpty</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">showLabels</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的onChange</font></font></span></span>
						<!---->
					</li>
					<li class="multiselect__element"><span data-select="" data-selected="" data-deselect="" class="multiselect__option"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感动</font></font></span></span>
						<!---->
					</li>
					<li style="display: none;"><span class="multiselect__option"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到元素。</font><font style="vertical-align: inherit;">考虑更改搜索查询。</font></font></span></li>
					<li style="display: none;"><span class="multiselect__option"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表是空的。</font></font></span></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.multiselect {
    box-sizing: content-box;
    display: block;
    position: relative;
    width: 100%;
    min-height: 40px;
    text-align: left;
    color: #35495E;
    font-family: inherit;
    font-size: 16px;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
.multiselect__select {
    line-height: 16px;
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 40px;
    height: 38px;
    right: 1px;
    top: 1px;
    padding: 4px 8px;
    margin: 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}
.multiselect__select:before {
    position: relative;
    right: 0;
    top: 65%;
    color: #999;
    margin-top: 4px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #999999 transparent transparent transparent;
    content: "";
}
.multiselect__tags {
    min-height: 40px;
    display: block;
    padding: 8px 40px 0 8px;
    border-radius: 5px;
    border: 1px solid #E8E8E8;
    background: #fff;
    font-size: 14px;
}
.multiselect__spinner {
    position: absolute;
    right: 1px;
    top: 1px;
    width: 48px;
    height: 35px;
    background: #fff;
    display: block;
}
.multiselect__content-wrapper {
    position: absolute;
    display: block;
    background: #fff;
    width: 100%;
    max-height: 240px;
    overflow: auto;
    border: 1px solid #E8E8E8;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 50;
    -webkit-overflow-scrolling: touch;
}
.multiselect__content {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;
    min-width: 100%;
    vertical-align: top;
}
.multiselect__element {
    display: block;
}
.multiselect__option--highlight {
    background: #41B883;
    outline: none;
    color: white;
}
.multiselect__option {
    display: block;
    padding: 12px;
    min-height: 40px;
    line-height: 16px;
    text-decoration: none;
    text-transform: none;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
}
</style>
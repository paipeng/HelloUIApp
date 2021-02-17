<template>
	<view class="content">
		<image class="logo" v-bind:src="imgUrl"></image>
		<!-- 缩写 -->
		<image class="logo" :src="imgUrl"></image>
		<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
		<my-component :prop="someThing"></my-component>
	
		<button v-bind:disabled="isButtonDisabled">Button</button>
		
		<!-- 完整语法 -->
		<view v-on:click="doSomething">点击</view>    
		<!-- 缩写 -->
		<view @click="doSomething">点击</view>
		
		<view v-once>This will never change: {{msg}}</view>
		<!-- 有子元素 -->
		<view v-once>
			<text>comment</text>
			<text>{{msg}}</text>
		</view>
		
		<view>
			<view v-html="rawHtml"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imgUrl: '/static/logo.png',
				someThing: '',
				isButtonDisabled: true,
				msg: 'Hello VueJS',
				rawHtml: '<div style="text-align:center;background-color: #AAf0fF;"><div >我是内容</div><img src="/static/logo.png"/></div>'
			}
		},
		onLoad() {

		},
		methods: {
			doSomething() {
				console.log('doSomething');
				this.msg = 'Hello VueJs!!!!';
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

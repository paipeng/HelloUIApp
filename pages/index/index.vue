<template>
	<view class="content">
		<view>
			<!-- class -->
			<view class="static" :class="{ active: isActive}">111</view>
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">222</view>
			<!-- style -->
			<view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">333</view>
		</view>
		<view class="static active"> TEST </view>
		
		<!-- class -->
		<view class="static" :class="[activeClass,errorClass]">111</view>
		<view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">222</view><!-- 三元表达式 -->
		<view class="static" v-bind:class="[{ active: isActive }, errorClass]">333</view>
		<!-- style -->
		<view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">444</view>
		
		<!-- 支持 -->
		<view class="container" :class="computedClassStr">computedClassStr</view>
		<view class="container" :class="{active: isActive}"> isActive</view>
		<!-- 不支持 -->
		<view class="container" :class="computedClassObject">computedClassObject</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: true,
				hasError: false,
				activeColor:"green",
				fontSize:50,
				activeClass: 'active',
				errorClass: 'text-danger'
			}
		},
		onLoad() {

		},
		methods: {
			doSomething() {
				console.log('doSomething');
				this.msg = 'Hello VueJs!!!!';
			}
		},
		computed: {
		  computedClassStr () {
			  return this.isActive ? 'active' : ''
		  },
		  computedClassObject () {
			  return { active: this.isActive }
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
	
	.static{
		color: #2C405A;
		font-size:30rpx;
	}
	.active{
		background-color: #007AFF;
	}
	.text-danger{
		font-size:60rpx;
		color: #DD524D;
	}
	
</style>

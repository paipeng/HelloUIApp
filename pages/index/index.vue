<template>
	<view class="content">
		<view>
			<button v-on:click="counter += 1">Add 1</button>
			<text>The button above has been clicked {{ counter }} times.</text>
		</view>
		<view>
			<!-- `greet` 是在下面定义的方法名 -->
			<button v-on:click="greet">Greet</button>
		</view>
		<view>
			<button v-on:click="say('hi')">Say hi</button>
			<button v-on:click="say('what')">Say what</button>
		</view>
		
		<view>
			<button v-on:click="warn('Form cannot be submitted yet.', $event)">
			  Submit
			</button>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				counter:0,
				name: 'Vue.js'
			}
		},
		// 在 `methods` 对象中定义方法
		methods: {
			greet(event){
				// `event` 是原生 DOM 事件
				console.log(event);
				uni.showToast({
					title: 'Hello ' + this.name + '!'
				});
			},
			say(message) {
				uni.showToast({
					title: message
				});
			},
			warn(message, event) {
				// 现在我们可以访问原生事件对象
				if (event) {
					event.preventDefault()
				}
				uni.showToast({
					title: message
				});
			}
		},
		onLoad() {

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

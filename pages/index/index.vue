<template>
	<view class="content">
		<view v-if="seen">现在你看到我了</view>
		<view v-else>你看不到我了</view>
		
		<view>
			<view v-if="type === 'A'">
				A
			</view>
			<view v-else-if="type === 'B'">
				B
			</view>
			<view v-else-if="type === 'C'">
				C
			</view>
			<view v-else>
				Not A/B/C
			</view>
		</view>
		
		<view v-show="ok">Hello!</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seen: true,
				type: 'B',
				ok: true
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

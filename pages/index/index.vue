<template>
	<view class="content">
		<view>
			<input v-model="message" placeholder="edit me">
			<text>Message is: {{ message }}</text>
		</view>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="picker">
					当前选择：{{array[index]}}
				</view>
			</picker>
		</view>
		<view>
			<radio-group class="radio-group" @change="radioChange">
				<label class="radio" v-for="(item, index) in items" :key="item.name">
					<radio :value="item.name" :checked="item.checked" /> {{item.value}}
				</label>
			</radio-group>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				message:"",
				index: 0,
				array: ['A', 'B', 'C'],
				items: [{
					name: 'USA',
					value: '美国'
				},
				{
					name: 'CHN',
					value: '中国',
					checked: 'true'
				},
				{
					name: 'BRA',
					value: '巴西'
				},
				{
					name: 'JPN',
					value: '日本'
				},
				{
					name: 'ENG',
					value: '英国'
				},
				{
					name: 'TUR',
					value: '法国'
				}
			]
			}
		},
		methods: {
			bindPickerChange(e) {				
				console.log(e.target.value);
				this.index = e.target.value;
			},
			radioChange(e) {
				console.log('radio发生change事件，携带value值为：', e.target.value)
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

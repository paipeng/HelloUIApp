<template>
	<view class="content">
		<view>
			<view v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</view>
		</view>
		<view>
			<view v-for="(value, name, index) in object">
				 {{ index }}. {{ name }}: {{ value }}
			</view>
		</view>
		<view>
			<!-- array 中 item 的某个 property -->
			<view v-for="(item,index) in objectArray" :key="item.id">
				{{index +':'+ item.name}}
			</view>
			<!-- item 本身是一个唯一的字符串或者数字时，可以使用 item 本身 -->
			<view v-for="(item,index) in stringArray" :key="item">
				{{index +':'+ item}}
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				items: [
					{ message: 'Foo' },
					{ message: 'Bar' }
				],
				object: {
					title: 'How to do lists in Vue',
					author: 'Jane Doe',
					publishedAt: '2020-04-10'
				},
				objectArray:[{
					id:0,
					name:'li ming'
				},{
					id:1,
					name:'wang peng'
				}],
				stringArray:['a','b','c']
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

<template>
	<view class="content">
		<view>
			<view>Original message: "{{ message }}"</view>
			<view>Computed reversed message: "{{ reversedMessage }}"</view>
		</view>
		<view>
			<view>{{ fullName }}</view>
		</view>
		<view>
			<button v-on:click="changeFullname">Change Fullname</button>

		</view>
		
		<view>
			<view>Reversed message: "{{ reversedMessage2() }}"</view>
		</view>
		
		<view>
			<view>Now: "{{ now }}"</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				message: 'Hello',
				firstName: 'Foo',
				lastName: 'Bar',
                fullName2: 'Foo Bar'
			}
		},
		computed: {
			// 计算属性的 getter
			reversedMessage(){
			  return this.message.split('').reverse().join('')
			},
			fullName: {
				// getter
				get(){
					return this.firstName + ' ' + this.lastName
				},
				// setter
				set(newValue){
					var names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}
			},
			now(){
				return Date.now()
			}
		},
		methods: {
			changeFullname() {
				this.fullName = 'Pai Peng';
			},
			reversedMessage2(){
				return this.message.split('').reverse().join('')
			}
		},
        watch: {
            firstName: function(val) {
                this.fullName2 = val + ' ' + this.lastName
            },
            lastName: function(val) {
                this.fullName2 = this.firstName + ' ' + val
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

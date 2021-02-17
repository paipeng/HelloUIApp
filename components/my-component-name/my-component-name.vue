<template>
	<view>
		{{myComponentName}} {{title.name}} {{title.index}}
		<view type="default" @click.stop="open" style="height: 30px;">点击</view>
	</view>
</template>

<script>
	export default {
		props: ['title'],
		data() {
			return {
				"myComponentName":"Pai Peng"
			}
		},
		methods:{
			open(){
				console.log("open");
			}
		}
	}
</script>

<style>
</style>

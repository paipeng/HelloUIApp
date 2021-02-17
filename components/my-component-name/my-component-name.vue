<template>
	<view>
		{{myComponentName}} {{title.name}} {{title.index}}
	</view>
</template>

<script>
	export default {
		props: ['title'],
		data() {
			return {
				"myComponentName":"Pai Peng"
			}
		}
	}
</script>

<style>
</style>

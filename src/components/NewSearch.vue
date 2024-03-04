<template>
	<input type="text" :value="message" @input="$emit('update:message', $event.target.value)">
</template>

<script>
export default {
	props: ['message']
}
</script>

<style>
/* 搜索栏样式 */
input {
	width: 20px;
	height: 5px;
	border-radius: 1px;
	color: white;
	background-color: #4CAF50;
}
</style>
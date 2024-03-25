// eslint-disable-next-line vue/no-unused-components
<template>
	<div>
		<input type="text" v-model="searchText" @input="onInput" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: '',
		};
	},
	methods: {
		onInput() {
			this.$emit('input', this.searchText);
		},
	},
};
</script>
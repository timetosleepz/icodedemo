<template id="app">
	<MyNavigation />
	<router-view />
</template>

<script>
import MyNavigation from './components/MyNavigation'

export default {
	name: 'App',
	components: {
		MyNavigation
	}
}
</script>

<style>
#app {
	width: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background-color: #F2F7FA;
	margin-top: 2.5%;
}
</style>

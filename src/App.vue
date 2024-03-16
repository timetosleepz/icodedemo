<template id="app">
	<MyNavigation />
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<script>
import MyNavigation from './components/MyNavigation'

export default {
	name: 'App',
	components: {
		MyNavigation
	},
	computed: {
		cachedComponents() {
			return this.$route.matched
				.filter((routeRecord) => routeRecord && routeRecord.meta && routeRecord.meta.keepAlive)
				.map((routeRecord) => routeRecord.components && routeRecord.components.default && routeRecord.components.default.name);
		},
	}
}

</script>

<style lang="less">
#app {
	width: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background-color: #F2F7FA;
	margin-top: 2.5%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

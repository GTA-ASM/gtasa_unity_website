<template>
	<div id="app">
		<app-navbar></app-navbar>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
	name: 'App',
	components: {
		appFooter: Footer,
		appNavbar: Navbar,
	},
	mounted: function() {
		this.$store.watch(
			(state, getters) => getters.currentLang,
			newValue => {
				if (this.$i18n.locale !== newValue) this.$i18n.locale = newValue;
			}
		);
	},
});
</script>

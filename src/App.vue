<template>
	<div id="app">
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
	name: 'App',
	components: {
		appFooter: Footer,
	},
});
</script>

<template>
  <div id="app" class="h-100">
	<Navbar :locales="''"></Navbar>
    <router-view class="pt-wrapper"/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
	components: { 
		'Navbar': Navbar,
	},
	data: function() {
		return {
			
		};
	},
	methods: {

	},
};
</script>

<style lang="scss">
	@import './assets/scss/main.scss';
</style>

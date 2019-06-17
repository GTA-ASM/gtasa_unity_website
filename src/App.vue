<template>
  <div id="app" class="h-100">
	<Navbar :locales="localesRegistered" :locale="currentLocale"></Navbar>
	<a data-scroll href="#" id="return-to-top"><i class="fas fa-chevron-up"></i></a>
    <router-view class="h-100 w-100"/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Swal from 'sweetalert2/dist/sweetalert2';
import _ from 'lodash';
export default {
	name: 'App',
	components: { 
		'Navbar': Navbar,
	},
	mounted: function() {
		this.askCookieAllow();
	},
	data: function() {
		return {
			localesRegistered: [
				{
					lang: 'en',
					flagCode: 'us',
					name: 'English',
				},
				{
					lang: 'es',
					flagCode: 'es',
					name: 'Español',
				},
				{
					lang: 'de',
					flagCode: 'de',
					name: 'Deutsch',
				},
			],
		};
	},
	computed: {
		currentLocale: function() {
			return _.find(this.localesRegistered, ['lang', this.$root.$i18n.locale]);
		},
	},
	methods: {
		askCookieAllow() {
			const Storage = localStorage;
			const registeredPer = JSON.parse(Storage.getItem('cookiePer')) || null;
			console.log(`Registered Authorization ${registeredPer}`);
			if (registeredPer == false || registeredPer == null) {
				Swal.fire({
					type: 'info',
					toast: true,
					position: 'bottom',
					title: 'Allow Cookies',
					text: 'Our site uses cookies to improve your browsing experience, and your future visits, according to the use of cookies?',
					showConfirmButton: true,
					showCancelButton: true,
					confirmButtonText: 'Yes, Why not! <i class="fas fa-check"><i/>',
					cancelButtonText: 'No, I\'m Fine <i class="fas fa-ban"><i/>',
					cancelButtonColor: 'Red',
					allowEscapeKey: false,
					customClass: {
						popout: 'animated bounce slower',
						confirmButton: 'btn btn-sm',
						cancelButton: 'btn btn-sm',
					},
				}).then(result => {
					if(result.value) {
						Storage.setItem('cookiePer', true);
						Swal.fire({
							type: 'success',
							toast: true,
							position: 'bottom',
							title: 'Allowed',
							text: 'Amazing, thank you, you will not see me next time ;)',
							showConfirmButton: true,
							showCancelButton: false,
							confirmButtonText: 'Ok <i class="fas fa-check"><i/>',
							allowEscapeKey: false,
							timer: 5000,
							customClass: {
								popout: 'animated bounce slower',
								confirmButton: 'btn btn-sm',
							},
						});
					}
					else if (result.dismiss === Swal.DismissReason.cancel) {
						Storage.setItem('cookiePer', false);
						Swal.fire({
							type: 'error',
							toast: true,
							position: 'bottom',
							title: 'Disallowed',
							text: 'Okay, I\'ll remind you next time, if you change your mind :D',
							showConfirmButton: true,
							showCancelButton: false,
							confirmButtonText: 'Ok <i class="fas fa-check"><i/>',
							allowEscapeKey: false,
							timer: 5000,
							customClass: {
								popout: 'animated bounce slower',
								confirmButton: 'btn btn-sm',
							},
						});
					}
				});
			}
		},
	},
};
</script>

<style lang="scss">
	@import './assets/scss/main.scss';
</style>

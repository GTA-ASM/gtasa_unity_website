<template>
	<div id="app">
		<app-navbar></app-navbar>
		<a id="return-to-top" data-scroll href="#">
			<i class="fas fa-chevron-up"></i>
		</a>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { mapActions } from 'vuex';
export default Vue.extend({
	name: 'App',
	components: {
		appFooter: Footer,
		appNavbar: Navbar,
	},
	mounted: async function(): Promise<void> {
		const cookiesLang = Cookies.get('pageLang') !== undefined ? (Cookies.get('pageLang') as string) : null;
		const loadedLang = cookiesLang !== null ? cookiesLang : sessionStorage.getItem('pageLang');
		if (loadedLang !== null) {
			this.selectLang(loadedLang);
			this.$i18n.locale = loadedLang;
		} else {
			this.selectLang('en');
			this.$i18n.locale = 'en';
		}
		this.$store.watch(
			(state, getters) => getters.currentLang,
			newValue => {
				this.$i18n.locale = newValue;
				if (Cookies.get('pageLang') !== undefined) Cookies.remove('pageLang');
				if (Cookies.get('allowCookies') !== undefined) Cookies.set('pageLang', newValue);
				else sessionStorage.setItem('pageLang', newValue);
			}
		);
		if (Cookies.get('allowCookies') === undefined) await this.askForCookies();
	},
	methods: {
		...mapActions(['selectLang']),
		askForCookies: async function(): Promise<void> {
			const askRes = await Swal.fire({
				icon: 'question',
				toast: true,
				position: 'bottom',
				allowEscapeKey: false,
				title: this.$i18n.tc('notifications.cookies.question_prop.title'),
				text: this.$i18n.tc('notifications.cookies.question_prop.text'),
				showConfirmButton: true,
				showCancelButton: true,
				showCloseButton: false,
				confirmButtonText: `${this.$i18n.tc(
					'notifications.cookies.question_prop.allow_text'
				)} <i class="fas fa-check"><i/>`,
				cancelButtonText: `${this.$i18n.tc(
					'notifications.cookies.question_prop.dissmis_text'
				)} <i class="fas fa-ban"><i/>`,
			});

			if (askRes.value) {
				Cookies.set('allowCookies', 'allow');
				await Swal.fire({
					icon: 'success',
					toast: true,
					position: 'bottom',
					allowEscapeKey: false,
					title: this.$i18n.tc('notifications.cookies.allowed_prop.title'),
					text: this.$i18n.tc('notifications.cookies.allowed_prop.text'),
					showCancelButton: false,
					confirmButtonText: 'OK <i class="fas fa-check"><i/>',
					timer: 5000,
					timerProgressBar: true,
				});
			} else if (askRes.dismiss === Swal.DismissReason.cancel) {
				await Swal.fire({
					icon: 'error',
					toast: true,
					position: 'bottom',
					allowEscapeKey: false,
					title: this.$i18n.tc('notifications.cookies.disallowed_prop.title'),
					text: this.$i18n.tc('notifications.cookies.disallowed_prop.text'),
					showCancelButton: false,
					confirmButtonText: 'OK <i class="fas fa-check"><i/>',
					timer: 5000,
					timerProgressBar: true,
				});
			}
		},
	},
});
</script>

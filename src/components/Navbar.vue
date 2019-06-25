<template>
	<nav class="navbar navbar-sticky navbar-expand-md navbar-dark bg-dark sticky-top p-3 text-center">
		<router-link :to="{name: 'home'}" class="navbar-brand">
			<img src="../assets/img/unitylogo.svg" width="40" height="40" class="d-inline-block align-top" alt="Unity LOGO">
		</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav container-fluid">
				<li class="nav-item">
					<router-link :to="{name: 'home'}" class="nav-link"><i class="fas fa-home"></i> {{$t('menus.home')}}</router-link>
				</li>
				<li class="nav-item dropdown" v-if="areHome">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="fas fa-list"></i>
						{{$t('menus.content.title')}}
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" data-scroll href="#welcome">{{$t('menus.content.welcome')}}</a>
						<a class="dropdown-item" data-scroll href="#about">{{$t('menus.content.about')}}</a>
						<a class="dropdown-item" data-scroll href="#gallery">{{$t('menus.content.gallery')}}</a>
					</div>
				</li>
				<li class="nav-item">
					<router-link :to="{name: 'members'}" class="nav-link"><i class="fas fa-user-friends"></i> {{$t('menus.members')}}</router-link>
				</li>
			</ul>
			<multiselect @input="updateLocales()" v-model="currentLocale" :block-keys="['Tab', 'Enter']" track-by="lang" label="name" placeholder="Select your language" :options="this.locales" :searchable="false" :allow-empty="false" class="lang-select">
				<template slot="singleLabel" slot-scope="props">
					<span class="option__title text-capitalize">
						<i :class="flagClass"></i>
						{{ props.option.name }}
					</span>
				</template>
				<template slot="option" slot-scope="props">
					<div class="option__desc text-uppercase">
						<span class="option__title">
							{{ props.option.lang }}
						</span>
					</div>
				</template>
			</multiselect>
		</div>
	</nav>
</template>
<script>
export default {
	props:['locales', 'locale'],
	data: function() {
		return {
			currentLocale: this.locale,
		};
	},
	methods: {
		updateLocales() {
			this.$root.$i18n.locale = this.currentLocale.lang;
			const cookieAuth = JSON.parse(localStorage.getItem('cookiePer')) || null;
			if (cookieAuth == true) {
				localStorage.setItem('uLang', this.currentLocale.lang);
			}
		},
	},
	computed: {
		flagClass: function() {
			return {
				'flag-icon': true,
				[`flag-icon-${this.currentLocale.flagCode}`] : true,
			};
		},
		areHome: function() {
			return this.$route.path === '/';
		},
	},
};
</script>

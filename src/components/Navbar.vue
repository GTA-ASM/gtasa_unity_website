<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
		<router-link :to="{name: 'home'}" class="navbar-brand">
			<img src="../assets/img/unitylogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
			GTA SA UNITY
		</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav container-fluid">
				<li class="nav-item">
					<router-link :to="{name: 'home'}" class="nav-link">{{$t("menus.home")}}</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name: 'members'}" class="nav-link">{{$t("menus.members")}}</router-link>
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
			if (JSON.parse(localStorage.getItem('cookiePer')) == true) {
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
	},
};
</script>

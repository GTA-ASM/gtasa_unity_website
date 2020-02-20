<template>
	<div id="appNav">
		<!-- Image and text -->
		<b-navbar class="bg-bk" type="dark" :fixed="'top'" :toggleable="'md'">
			<b-navbar-brand :to="{ name: 'Home' }">
				<img
					src="@/assets/img/unity-logo_light.svg"
					width="35"
					height="35"
					class="d-inline-block align-middle"
					alt="Unity Logo"
				/>
				GTA SA UNITY
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="text-center">
					<b-nav-item :to="{ name: 'Home' }">
						<i class="fas fa-home"></i>
						{{ $t('menus.home') }}
					</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="text-center ml-md-auto">
					<b-nav-form>
						<multi-select
							track-by="code"
							label="text"
							:value="lang"
							:options="langs"
							:allow-empty="false"
							@select="selectLang"
						>
							<template slot="singleLabel" slot-scope="props">
								<span class="flag-icon" :class="[`flag-icon-${props.option.flag}`]"></span>
								{{ props.option.text }}
							</template>
							<template slot="option" slot-scope="props">
								<span class="flag-icon" :class="[`flag-icon-${props.option.flag}`]"></span>
								{{ props.option.text }}
							</template>
						</multi-select>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import MultiSelect from 'vue-multiselect';
export default Vue.extend({
	name: 'Navbar',
	components: { MultiSelect },
	computed: {
		...mapState(['langs', 'lang']),
	},
	methods: {
		...mapActions(['selectLang']),
	},
});
</script>

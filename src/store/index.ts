import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		lang: { code: 'en', flag: 'us', text: 'English' },
		langs: [
			{ code: 'en', flag: 'us', text: 'English' },
			{ code: 'es', flag: 'mx', text: 'Spanish (MX)' },
			{ code: 'de', flag: 'de', text: 'Deutsch' },
			{ code: 'pl', flag: 'pl', text: 'Polish' },
		],
	},
	mutations: {
		setLang(state, lang) {
			state.lang = lang;
		},
	},
	actions: {
		selectLang({ commit }, lang) {
			commit('setLang', lang);
		},
	},
	getters: {
		currentLang(state): string {
			return state.lang.code;
		},
	},
});

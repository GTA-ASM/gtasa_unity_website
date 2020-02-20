import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

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
		selectLang({ commit }, lang: string | object) {
			if (typeof lang !== 'object') {
				const fLang =
					_.find(this.state.langs, { code: lang }) !== undefined
						? (_.find(this.state.langs, { code: lang }) as object)
						: { code: 'en', flag: 'us', text: 'English' };
				commit('setLang', fLang);
			} else {
				commit('setLang', lang);
			}
		},
	},
	getters: {
		currentLang(state): string {
			return state.lang.code;
		},
	},
});

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import '@/assets/scss/app.scss';
import 'bootstrap';
import '@/utils/global_context';

import BootstrapVue from 'bootstrap-vue';
import VuePlyr from 'vue-plyr';

Vue.use(BootstrapVue);
Vue.use(VuePlyr);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app');

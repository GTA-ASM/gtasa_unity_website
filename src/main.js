import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ScrollReveal from 'scrollreveal';
window.ScrollReveal = ScrollReveal;
import './assets/js/custom';
import 'bootstrap';
import i18n from './i18n';
import MultiSelect from 'vue-multiselect';

Vue.component('multiselect', MultiSelect);


Vue.config.productionTip = false;

new Vue({
	router,
	i18n,
	render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Members from './views/Members.vue';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/members',
			name: 'members',
			component: Members,
		},
	],
});

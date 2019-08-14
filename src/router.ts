import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/map',
      name: 'map',
      component: Home
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () =>
        import(/* webpackChunkName: "calendar" */ './views/pages/Calendar.vue')
    },
    {
      path: '/help',
      name: 'Help',
      component: () =>
        import(/* webpackChunkName: "help" */ './views/pages/Help.vue')
    }
  ]
});

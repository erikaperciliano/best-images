import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import './assets/js/teste.js';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal'
import Index from './Index.vue';
import Demo from './valoraciones.vue';
import admin from './admin.vue';
import comparacion from './Comparacion.vue';
import red from './redSocial.vue';

import VueResource from 'vue-resource';
//import VueCharts.core from 'otro.js';
require("./style.scss");

import App from './App.vue';

//imports para utilizar VueCharts-------------------------
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)
//-------------------------------------------
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/uno', component: Demo},
  { path:'/admin', component: admin},
  { path:'/comparacion', component: comparacion},
  { path:'/redSocial', component: red}

]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

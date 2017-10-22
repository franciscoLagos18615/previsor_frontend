import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import GraficoIsapre from './GraficoComparadorAprobIsapre.vue';
import Demo from './valoraciones.vue';
import admin from './admin.vue';

import VueResource from 'vue-resource';
//import VueCharts.core from 'otro.js';
require("./style.scss");

import App from './App.vue';


Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors},
  { path:'/grafic',component: GraficoIsapre},
  { path:'/uno', component: Demo},
  { path:'/admin', component: admin}

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

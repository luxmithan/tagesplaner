/**
 * Author:      Luxmithan Sukumar
 * File name:   main.js
 * Version:     1.0
 */

import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// Authorization token gets put in http-header
Axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import VuexRouterSync from 'vuex-router-sync';
import App from './App';

Vue.config.productionTip = false;

VuexRouterSync.sync(store, router);

// eslint-disable-next-line no-new
new Vue({
  el: 'app',
  router,
  store,
  ...App,
});

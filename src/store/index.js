import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import User from './modules/user';
import QR from './modules/qr';
import Auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    User,
    QR,
    Auth,
  },
  strict: false,
  plugins: debug ? [createLogger()] : [],
});

export default store;

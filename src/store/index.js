import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import User from './modules/user';
import QR from './modules/qr';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    User,
    QR,
  },
  strict: false,
  plugins: debug ? [createLogger()] : [],
});

export default store;

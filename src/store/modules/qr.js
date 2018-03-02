import axios from 'axios';
import {
  QR_SIGN_UP_REQUEST,
  QR_SIGN_UP_REQUEST_FAILED,
  QR_SIGN_UP_REQUEST_SUCCEED,
  QR_SIGN_IN_REQUEST,
  QR_SIGN_IN_REQUEST_SUCCEED,
  QR_SIGN_IN_REQUEST_FAILED,
} from '../constants/mutation-types';

const state = {
  signUpQRCode: null,
  signInQRCode: null,
  fetchedSignUpQR: true,
  fetchedSignInQR: true,
};

const getters = {};

const mutations = {
  [QR_SIGN_UP_REQUEST](state) {
    state.fetchedSignUpQR = false;
  },
  [QR_SIGN_UP_REQUEST_FAILED](state) {
    state.fetchedSignUpQR = false;
  },
  [QR_SIGN_UP_REQUEST_SUCCEED](state, data) {
    state.fetchedSignUpQR = true;
    state.signUpQRCode = data.appLink;
  },
  [QR_SIGN_IN_REQUEST](state) {
    state.fetchedSignInQR = false;
  },
  [QR_SIGN_IN_REQUEST_FAILED](state) {
    state.fetchedSignInQR = false;
  },
  [QR_SIGN_IN_REQUEST_SUCCEED](state, data) {
    state.fetchedSignInQR = true;
    state.signInQRCode = data.appLink;
  },
};

const actions = {
  getSignInQRCode({ commit }) {
    commit('QR_SIGN_IN_REQUEST');
    axios.post('/login-qr')
      .then((response) => {
        if (response.data.state) {
          commit('QR_SIGN_IN_REQUEST_SUCCEED', response.data);
          commit('SIGN_IN_SESSION_STATE_INITIALIZED', response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        commit('QR_SIGN_IN_REQUEST_FAILED');
      });
  },
  getSignUpQRCode({ commit }) {
    commit('QR_SIGN_UP_REQUEST');
    axios.post('/register-qr')
      .then((response) => {
        if (response.data.state) {
          commit('QR_SIGN_UP_REQUEST_SUCCEED', response.data);
          commit('SIGN_UP_SESSION_STATE_INITIALIZED', response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        commit('QR_SIGN_UP_REQUEST_FAILED');
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

import axios from 'axios';
import {
  QR_SIGN_IN_REQUEST,
  QR_SIGN_IN_REQUEST_SUCCEED,
  QR_SIGN_IN_REQUEST_FAILED,
} from '../constants/mutation-types';

const state = {
  signInQRCode: null,
  fetchedSignInQR: false,
};

const getters = {};

const mutations = {
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
    axios.post('/api/licenseRequest')
      .then((response) => {
        if (response) {
          commit('QR_SIGN_IN_REQUEST_SUCCEED', response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        commit('QR_SIGN_IN_REQUEST_FAILED');
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

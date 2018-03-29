import axios from 'axios';
import {
  AUTHORIZE_URL_REQUEST,
  AUTHORIZE_URL_REQUEST_SUCCEED,
  AUTHORIZE_URL_REQUEST_FAILED,
  USER_DATA_REQUEST,
  USER_DATA_REQUEST_FAILED,
  USER_DATA_REQUEST_SUCCEED,
} from '../constants/mutation-types';
import router from '../../router';

const state = {
  userAuthorized: false,
  authorizeURLFetching: false,
  authorizeURL: null,
};

const mutations = {
  [AUTHORIZE_URL_REQUEST](state) {
    state.userAuthorized = false;
    state.authorizeURLFetching = true;
  },
  [AUTHORIZE_URL_REQUEST_FAILED](state) {
    state.authorizeURLFetching = false;
  },
  [AUTHORIZE_URL_REQUEST_SUCCEED](state, authorizeURL) {
    state.authorizeURL = authorizeURL;
    state.authorizeURLFetching = false;
  },
};

const actions = {
  authorizeUser({ commit, state }) {
    if (!state.userAuthorized) {
      commit(AUTHORIZE_URL_REQUEST);
      axios.post('/oidc/authorize')
        .then((response) => {
          if (response.data) {
            console.log('finished fetching authorization url', response.data);
            commit(AUTHORIZE_URL_REQUEST_SUCCEED);
            window.location.href = response.data;
          }
        })
        .catch((error) => {
          console.error(error);
          commit(AUTHORIZE_URL_REQUEST_FAILED);
        });
    }
  },
  getUserInfo({ commit }, authParams) {
    console.log(authParams);
    if (!state.userAuthorized) {
      commit(USER_DATA_REQUEST);
      axios.post('/oidc/get-user', authParams)
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            commit(USER_DATA_REQUEST_SUCCEED, response.data);
            router.push('/profile');
          }
        })
        .catch((error) => {
          console.error(error);
          commit(USER_DATA_REQUEST_FAILED);
        });
    }
  },
};

export default {
  state,
  mutations,
  actions,
};

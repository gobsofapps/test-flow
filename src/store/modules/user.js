import axios from 'axios';
import {
  USER_DATA_REQUEST,
  USER_DATA_REQUEST_SUCCEED,
  USER_DATA_REQUEST_FAILED,
} from '../constants/mutation-types';
import router from '../../router';

const state = {
  userDataFetched: false,
  userDataLoading: false,
  userData: null,
};

const getters = {
  userData(state) {
    return state.userData;
  },
};

const mutations = {
  [USER_DATA_REQUEST](state) {
    state.userDataFetched = false;
    state.userDataLoading = true;
  },
  [USER_DATA_REQUEST_FAILED](state) {
    state.userDataFetched = false;
    state.userDataLoading = false;
  },
  [USER_DATA_REQUEST_SUCCEED](state, userData) {
    state.userDataFetched = true;
    state.userDataLoading = false;
    state.userData = userData;
  },
};

const actions = {
  getUserData({ commit, state }) {
    if (!state.userDataFetched) {
      commit('USER_DATA_REQUEST');
      axios.post('/api/get-user')
        .then((response) => {
          if (response.data) {
            commit('USER_DATA_REQUEST_SUCCEED', response.data);
            router.push('/profile');
          }
        })
        .catch((error) => {
          console.error(error);
          commit('USER_DATA_REQUEST_FAILED');
        });
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

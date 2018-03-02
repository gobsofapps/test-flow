import axios from 'axios';
import {
  USER_DATA_REQUEST,
  USER_DATA_REQUEST_SUCCEED,
  USER_DATA_REQUEST_FAILED,
  USER_EMAIL_CHANGED,
  USER_NAME_CHANGED,
} from '../constants/mutation-types';

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
  [USER_NAME_CHANGED](state, newName) {
    state.name = newName;
  },
  [USER_EMAIL_CHANGED](state, newEmail) {
    state.email = newEmail;
  },
  [USER_DATA_REQUEST](state) {
    state.userDataFetched = false;
    state.userDataLoading = true;
  },
  [USER_DATA_REQUEST_FAILED](state) {
    state.userDataFetched = false;
    state.userDataLoading = false;
  },
  [USER_DATA_REQUEST_SUCCEED](state, userData) {
    console.log(userData);
    state.userDataFetched = true;
    state.userDataLoading = false;
    state.userData = userData.bankdata;
  },
};

const actions = {
  getUserData({ commit, state }, sessionState) {
    if (!state.userDataFetched) {
      commit('USER_DATA_REQUEST');
      axios.post('/get-user', { sessionState })
        .then((response) => {
          if (response.data) {
            commit('USER_DATA_REQUEST_SUCCEED', response.data);
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

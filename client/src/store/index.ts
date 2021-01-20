/**
 * Author:      Luxmithan Sukumar
 * File name:   index.ts
 * Version:     1.0
 * Description: Vuex store Configurations
 */

import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const getDefaultState = () => ({
  token: '',
  user: {},
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => state.token,
    getUser: (state) => state.user,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    reset: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    // Saves Token into local storage and into axios header
    login: ({ commit }, { token, user }) => {
      commit('setToken', token);
      commit('setUser', user);
      Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    // Deletes token from local storage and header
    logout: ({ commit }) => {
      commit('reset', '');
      Axios.defaults.headers.common.Authorization = '';
    },
  },
});

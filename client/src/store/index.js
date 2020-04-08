/**
 * Author:      Luxmithan Sukumar
 * File name:   index.js
 * Version:     1.0
 * Description: Vuex store Configurations
 */

import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
let getDefaultState = () => {
  return {
    token: "",
    user: {},
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
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
    //Saves Token into local storage and into axios header
    login: ({ commit }, { token, user }) => {
      commit("setToken", token);
      commit("setUser", user);
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    //Deletes token from local storage and header
    logout: ({ commit }) => {
      commit("reset", "");
      Axios.defaults.headers.common["Authorization"] = "";
    },
  },
});

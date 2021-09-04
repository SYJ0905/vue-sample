import Vue from 'vue';
import Vuex from 'vuex';

import sample from './sample';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    data: {
      name: 'Cloud',
      age: 27,
    },
  },
  mutations: {
    UPDATE_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
  },
  getters: {
    data(state) {
      return state.data;
    },
  },
  modules: {
    sample,
  },
});

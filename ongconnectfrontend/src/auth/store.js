// AUTH STORE
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  },
  mutations: {
    setAuthentication(state, value) {
      state.isAuthenticated = value;
      localStorage.setItem('isAuthenticated', value.toString());
    },
  },
});

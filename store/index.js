import Vuex from "vuex";
import auth from "./modules/calculator";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: auth
    },
    actions: {
      async nuxtServerInit({ commit }, { app, redirect, route }) {
        try {
          commit("calculator/RESULTS", user);
        } catch (error) {
          return;
        }
      }
    }
  });
};

export default createStore;

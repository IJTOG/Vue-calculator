import Vuex from "vuex";
import calculator from "./modules/calculator";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      calculator: calculator
    },
    actions: {
      async nuxtServerInit({ commit }, { app, redirect, route }) {
        if (route.path.startsWith("/")) {
        }
      }
    }
  });
};

export default createStore;

const RESULTS = "RESULTS";
const CLEAR = "CLEAR";

const auth = {
  namespaced: true,
  state: {
    results: null
  },
  mutations: {
    [RESULTS](state, payload) {
      state.results = payload;
    },
    [CLEAR](state, payload) {
      state.results = payload;
    }
  },
  actions: {
    save({ commit }) {
      // commit(GETME_SUCCESS, response.data);
      return null;
    },
    find({ commit }, { email, password }) {
      return null;
    },
    clear({ commit }) {
      return null;
    }
  }
};

export default auth;

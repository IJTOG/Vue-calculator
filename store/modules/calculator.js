const RESULTS = "RESULTS";
const FILTERED = "FILTERED";
const CLEAR = "CLEAR";

const calculator = {
  namespaced: true,
  state: {
    results: [],
    filtered: []
  },
  mutations: {
    [RESULTS](state, payload) {
      state.results = payload;
    },
    [FILTERED](state, payload) {
      state.filtered = payload;
    },
    [CLEAR](state) {
      state.results = [];
      state.filtered = [];
    }
  },
  actions: {
    initialiseStore({ commit }) {
      let existing = JSON.parse(localStorage.getItem("results") || "[]");
      if (existing) {
        commit(RESULTS, existing);
        return true;
      }
      return false;
    },
    save({ commit }, result) {
      let existing = JSON.parse(localStorage.getItem("results") || "[]");
      let added;
      if (existing) added = [result, ...existing];
      else added = [result];

      localStorage.setItem("results", JSON.stringify(added));
      commit(RESULTS, added);
      commit(FILTERED, added);
      return null;
    },
    find({ commit }, query) {
      let existing = JSON.parse(localStorage.getItem("results") || "[]");
      if (existing && query !== "" && query !== undefined) {
        const filtered = existing.filter(result => {
          return (
            result.result.toString().includes(query) ||
            result.date.toString().includes(query)
          );
        });
        commit(FILTERED, filtered);
      } else commit(FILTERED, existing);
    },
    select({ commit }, value) {
      let existing = JSON.parse(localStorage.getItem("results") || "[]");
      if (existing && value !== "") {
        const filtered = existing.filter(result => {
          return result.name === value;
        });
        commit(FILTERED, filtered);
      } else commit(FILTERED, existing);
    },
    clear({ commit }) {
      localStorage.setItem("results", JSON.stringify([]));
      commit(CLEAR);
      return null;
    }
  }
};

export default calculator;

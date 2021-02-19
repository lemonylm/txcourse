import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    field: "all",
    tabIndex: 0,
  },
  mutations: {
    selectField(state, field) {
      state.field = field;
    },
    changeTabIndex(state, index) {
      state.tabIndex = tabIndex;
    },
  },
  actions: {},
  modules: {},
});

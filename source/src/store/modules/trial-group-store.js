export default {
  namespaced: true,

  state: {
    groups: []
  },

  getters: {
    groups(state) {
      return state.groups
    }
  },

  mutations: {
    addGroup(state, value) {
      state.groups.push(value)
    },
    removeGroup(state, index) {
      state.groups.splice(index, 1)
    }
  },

  actions: {
    addGroup({ commit }, value) {
      commit('addGroup', value)
    },
    removeGroup({ commit }, index) {
      commit('removeGroup', value)
    }
  }
}

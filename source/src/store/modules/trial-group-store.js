import localforage from 'localforage'

const store = {
  namespaced: true,

  state: {
    groups: [],
    idCounter: 0
  },

  getters: {
    groups(state) {
      return state.groups
    },
    getGroup(state) {
      return (index) => {
        return state.groups.find(val => val.id==index)
      }
    }
  },

  mutations: {
    initStore(state, value) {
      if (value) {
        state.groups = value.groups
        state.idCounter = value.idCounter
      }
    },
    addGroup(state, value) {
      state.groups.push({
        ...value,
        id: ++state.idCounter
      })

      localforage.setItem('trialGroups', state)
    },
    removeGroup(state, index) {
      state.groups.splice(index, 1)

      localforage.setItem('trialGroups', state)
    }
  },

  actions: {
    initStore({ commit }) {
      localforage.getItem('trialGroups').then(
        (value) => {
          commit('initStore', value)
        }
      )
    },
    addGroup({ commit }, value) {
      commit('addGroup', value)
    },
    removeGroup({ commit }, index) {
      commit('removeGroup', index)
    }
  }
}

export default store

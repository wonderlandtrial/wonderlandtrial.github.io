import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'

import trialGroups from './modules/trial-group-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isReady: false
  },

  getters: {
    isReady(state) {
      return state.isReady
    }
  },

  mutations: {
    setToReady(state) {
      state.isReady = true
    }
  },

  actions: {
    init({ dispatch, commit }) {
      dispatch(Actions.TRIAL_GROUP.INIT).then(
        () => {
          commit('setToReady')
        }
      )
    }
  },

  modules: {
    trialGroups
  }
})

store.dispatch('init')

export default {
  ...store,
  ACTIONS: Actions
}

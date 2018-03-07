import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'

import trialGroups from './modules/trial-group-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {

  },

  modules: {
    trialGroups
  }
})

export default {
  ...store,
  ACTIONS: Actions
}

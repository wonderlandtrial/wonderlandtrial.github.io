import localforage from 'localforage'

import Character from '@/models/Character'
import TeamMember from '@/models/TeamMember'

/**
 * Groups (e.g. Monday's Trial, Sunday's Trial)
 * -- Trials (e.g. wt Lv40, Wt4, Wt Lv60)
 * -- -- Teams (e.g. [bangel, nolva, roger, sharice] with notes and annotations)
 */
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
        return {...state.groups.find(val => val.id==index)}
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
        id: ++state.idCounter,
        trials: []
      })
    },
    addTrial(state, {group, trialName}) {
      group.trials.push({
        title: trialName,
        id: ++state.idCounter,
        teamMembers: {
          gold: new TeamMember(new Character('', '', null), 60, ''),
          black: new TeamMember(new Character('', '', null), 60, ''),
          white: new TeamMember(new Character('', '', null), 60, ''),
          advisor: new TeamMember(new Character('', '', null), 60, '')
        }
      })
    },
    modifyTeam(state, {trial, team}) {
      trial.teamMembers = team
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
    addGroup({ state, commit }, value) {
      commit('addGroup', value)
      localforage.setItem('trialGroups', state)
    },
    addTrial({ state, commit }, {id, trialName}) {
      let group = state.groups.find(val => val.id==id)

      commit('addTrial', {
        group,
        trialName
      })

      localforage.setItem('trialGroups', state)
    },
    modifyTeam({ state, commit }, {groupId, trialId, team}) {
      let group = state.groups.find(val => val.id==groupId)
      let trial = group.trials.find(val => val.id==trialId)

      commit('modifyTeam', {
        trial,
        team
      })

      localforage.setItem('trialGroups', state)
    }
  }
}

export default store

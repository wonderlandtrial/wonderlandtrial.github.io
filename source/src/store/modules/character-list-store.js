import CharacterList from '@/models/CharacterList'

const store = {
  namespaced: true,

  state: {
    list: CharacterList
  },

  getters: {
    getList(state) {
      return (type) => {
        return state.list[type]
      }
    }
  }
}

export default store

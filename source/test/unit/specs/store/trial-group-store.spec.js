import { expect } from 'chai'
import store from '@/store/modules/trial-group-store'

describe.skip('mutations', () => {
  it('addGroup', () => {
    const state = {
      groups: [],
      idCounter: 0
    }

    store.mutations.addGroup(state, {a: 1})

    expect(state.groups.length).to.equal(1)
  })
})

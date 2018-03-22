import { shallow, createLocalVue } from '@vue/test-utils'
import VAvatar from 'vuetify/es5/components/VAvatar'

import CharAvatar from '@/components/CharAvatar'
import Character from '@/models/Character'

describe('CharAvatar', () => {
  it('rendered result should match snapshot', () => {
    let char = new Character('Fatima', 'black')

    const wrapper = shallow(CharAvatar, {
      propsData: {
        value: char
      }
      // stubs: {
      //   VAvatar: VAvatar
      // }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

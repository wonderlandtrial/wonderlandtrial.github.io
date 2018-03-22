import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import 'babel-polyfill'

import CharAvatar from '@/components/CharAvatar'
import Character from '@/models/Character'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('CharAvatar', () => {
  it('rendered result should match snapshot', () => {
    let char = new Character('Fatima', 'black')

    const wrapper = mount(CharAvatar, {
      propsData: {
        value: char
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

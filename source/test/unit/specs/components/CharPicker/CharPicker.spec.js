import { shallow, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import 'babel-polyfill'

import CharPicker from '@/components/CharPicker2'
import CharacterList from '@/models/CharacterList'

describe.skip('CharPicker', () => {
  it('rendered empty picker', ()=> {
    const wrapper = shallow(CharPicker)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render white picker', ()=> {
    const localVue = createLocalVue()
    localVue.use(Vuetify)

    const wrapper = shallow(CharPicker, {
      propsData: {
        characters: CharacterList.white
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

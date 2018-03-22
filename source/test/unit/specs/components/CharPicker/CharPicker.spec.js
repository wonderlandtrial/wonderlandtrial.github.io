import { test } from '@/test'

import CharPicker from '@/components/CharPicker2'
import CharacterList from '@/models/CharacterList'

test('CharPicker', ({ mount, localVue }) => {
  it('rendered empty picker', ()=> {
    const wrapper = mount(CharPicker, { localVue })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render white picker', ()=> {
    const wrapper = mount(CharPicker, {
      propsData: {
        characters: CharacterList.white
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

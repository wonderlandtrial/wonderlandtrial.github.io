import { test } from '@/test'

import CharAvatar from '@/components/CharAvatar'
import Character from '@/models/Character'

test('CharAvatar', ({ mount, localVue }) => {
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

import { test } from '@/../../test'
import CharAvatar from '@/components/CharAvatar'
//CHECK inject-loader in vuetify
test('CharAvatar', ({mount, compileToFunctions}) => {
  it('rendered result should match snapshot', () => {
    const wrapper = mount(CharAvatar)

    expect(wrapper.html()).toMatchSnapshot()
  })
})

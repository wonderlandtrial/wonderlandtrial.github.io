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
        characters: CharacterList.white,
        value: false
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('cancel will close dialog', () => {
    const wrapper = mount(CharPicker, {
      propsData: {
        value: true
      },
      localVue
    })

    expect(wrapper.vm.model).toBe(true)

    wrapper.findAll('button').at(1).trigger('click')

    expect(wrapper.vm.model).toBe(false)
    expect(wrapper.emitted().selected).toBeFalsy()
  })

  it('selectChar() will close dialog', () => {
    const wrapper = mount(CharPicker, {
      propsData: {
        value: true
      },
      localVue
    })

    expect(wrapper.vm.model).toBe(true)

    wrapper.findAll('button').at(0).trigger('click')

    expect(wrapper.vm.model).toBe(false)
  })

  it('selectChar() will close emit selected value', () => {
    const wrapper = mount(CharPicker, {
      propsData: {
        value: true
      },
      localVue
    })
    wrapper.setData({
      selectedChar: {foo:'bar'},
      level: 17
    })

    wrapper.findAll('button').at(0).trigger('click')

    expect(wrapper.emitted().selected).toBeTruthy()
    expect(wrapper.emitted().selected[0]).toEqual([
      {
        character: {foo:'bar'},
        level: 17,
        note: ''
      }
    ])
  })
})

import { test } from '@/test'

import TeamMemberPicker from '@/components/TeamMemberPicker'
import CharacterList from '@/models/CharacterList'

test('TemMemberPicker', ({ mount, localVue }) => {
  it('render default view', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'gold'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render action buttons', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'gold'
      }
    })
    wrapper.setData({
      showAction: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render CharPicker dialog', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'gold'
      }
    })
    wrapper.setData({
      showPicker: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('model set', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'gold',
        value: { foo: 'bar' }
      }
    })

    expect(wrapper.vm.teamMember).toEqual({ foo: 'bar' })
  })

  it('picker type set', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black',
        value: { foo: 'bar' }
      }
    })

    expect(wrapper.vm.charList).toEqual(CharacterList.black)
  })

  it('show action', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black',
        value: { foo: 'bar' }
      }
    })

    wrapper.vm.onHover()

    expect(wrapper.vm.showAction).toBe(true)
  })

  it('hide action', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black',
        value: { foo: 'bar' }
      }
    })

    wrapper.setData({
      showAction: true
    })
    wrapper.vm.onLeave()

    expect(wrapper.vm.showAction).toBe(false)
  })

  it('showCharPicker()', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black',
        value: { foo: 'bar' }
      }
    })

    wrapper.setData({
      showPicker: false
    })
    wrapper.vm.showCharPicker()

    expect(wrapper.vm.showPicker).toBe(true)
  })

  it('getSelectedChar()', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black'
      }
    })

    wrapper.vm.getSelectedChar({ foo: 'bar' })

    expect(wrapper.vm.teamMember).toEqual({ foo: 'bar' })
  })

  it('getSelectedChar() modifies v-model', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black'
      }
    })

    wrapper.vm.getSelectedChar({ foo: 'bar' })

    expect(wrapper.emitted().input[0]).toEqual([{ foo: 'bar' }])
  })

  it('v-model is reactive', () => {
    const wrapper = mount(TeamMemberPicker, {
      localVue,
      propsData: {
        type: 'black',
        value: { foo: 'bar' }
      }
    })

    wrapper.setProps({
      value: { bar: 'baz'}
    })

    expect(wrapper.vm.teamMember).toEqual({ bar: 'baz' })
  })
})

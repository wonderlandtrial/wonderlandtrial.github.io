import Vue from 'vue'

import { test } from '@/test'

import CharAvatar from '@/components/CharAvatar'
import Character from '@/models/Character'

test('CharAvatar', ({mount, shallow, compileToFunctions}) => {
  it('rendered result should match snapshot', () => {
    const renderer = require('vue-server-renderer').createRenderer()

    let char = new Character('Fatima', 'black', null, ['lorem', 'ipsum'])

    const vm = new Vue({
      render: h => h(CharAvatar, {
        el: document.createElement('div'),
        props: {
          value: char
        }
      })
    })

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot()
    })
  })

  it.skip('rendered result should match snapshot', () => {
    shallow({
      components: { CharAvatar }
    })

    let char = new Character('Fatima', 'black', null, ['lorem', 'ipsum'])
    const wrapper = mount(CharAvatar, {
      propsData: {
        value: char
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

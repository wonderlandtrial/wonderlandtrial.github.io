import { shallow, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import 'babel-polyfill'

export function test(name, cb) {
  const localVue = createLocalVue()
  localVue.use(Vuetify)

  describe(name, () => cb({
    mount,
    shallow,
    localVue
  }))
}

test.skip = describe.skip

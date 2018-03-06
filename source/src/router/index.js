import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import CharPicker from '@/components/CharPicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharPicker',
      component: CharPicker
    }
  ]
})

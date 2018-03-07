import Vue from 'vue'
import Router from 'vue-router'

import CharPicker from '@/components/CharPicker'
import TrialGroupPage from '@/pages/TrialGroupView'
import GroupView from '@/components/GroupView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrialGroupPage',
      component: TrialGroupPage
    },
    {
      path: '/groups/:id',
      props: true,
      component: GroupView
    }
  ]
})

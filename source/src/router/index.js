import Vue from 'vue'
import Router from 'vue-router'

import TrialGroupPage from '@/pages/TrialGroupView'
import GroupView from '@/pages/GroupView'
import Sandbox from '@/pages/Sandbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrialGroupPage',
      component: TrialGroupPage
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    },
    {
      path: '/groups/:id',
      props: true,
      component: GroupView
    }
  ]
})

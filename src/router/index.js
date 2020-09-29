import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/pages/Work'
import Run from '@/pages/Run'
import SystemSettings from '@/pages/SystemSettings'

import GenerationLoad from '@/pages/GenerationLoad'
import Organization from '@/pages/Organization'
import Authority from '@/pages/Authority'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/HelloWorld/work',
      children:[
        {
          path: 'work',
          name: 'Work',
          component: ()=> import('@/pages/Work')
        },
        {
          path: 'generationLoad',
          name: 'GenerationLoad',
          component:()=> import('@/pages/GenerationLoad')
        },
        {
          path: 'run',
          name: 'Run',
          component:()=> import('@/pages/Run')
        },
        {
          path: 'systemSettings',
          name: 'SystemSettings',
          component:()=> import('@/pages/SystemSettings')
        },
        {
          path: 'organization',
          name: 'Organization',
          component: ()=> import('@/pages/Organization')
        },
        {
          path: 'authority',
          name: 'Authority',
          component:()=> import('@/pages/Authority')
        }
      ]
    },
  ]
})

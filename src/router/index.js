import Vue from 'vue'
import Router from 'vue-router'

import layout from 'src/views/layout/Layout'

import Echart from 'src/views/echarts/Echart'
import Tab from 'src/components/tab/tab'
import Table from 'src/views/table/table'
import ResourceForm  from 'src/views/forms/resourceForm'
// forms


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect:'/home',
      component: () => import('src/views/home/home'),
    },
    {
      path: '/home',
      name:'home',
      component: () => import('src/views/home/home'),
    },
    {
      path: '/views/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/views/echarts',
      name: 'Echart',
      component: Echart
    },
    {
      path: '/views/forms',
      name: 'ResourceForm',
      component: ResourceForm
    },
    {
      path: '/tab/tab',
      name: 'Tab',
      component: Tab
    }
  ],
  linkActiveClass: 'active'
})

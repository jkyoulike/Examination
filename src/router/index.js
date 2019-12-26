import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

import City from '@/pages/City/City'
import Cite from '@/pages/City/Cite'
import Java from '@/pages/City/Java'
import Cityvue from '@/pages/City/Cityvue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Cite',
      name: 'Cite',
      component: Cite
    },
    {
      path:'/Java',
      name:'Java',
      component:Java
    },
    {
      path:'/Cityvue',
      name:'Cityvue',
      component:Cityvue
    },
  ]
})

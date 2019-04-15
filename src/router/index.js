import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Sell from '@/components/sell/index'
import List from '@/components/list/index'
import My from '@/components/my/index'

Vue.use(Router)
export default new Router({
  routes: [ 
    {
      path: '/',
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home
    },
    {
      path:"/list",
      name:"list",
      component:List
    },
    {
      path:"/sell",
      name:"sell",
      component:Sell
    },
    {
      path:"/my",
      name:"my",
      component:My
    }
  ]
})

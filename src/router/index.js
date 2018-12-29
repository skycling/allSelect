import Vue from 'vue'
import Router from 'vue-router'
import allSelect from '@/components/allSelect'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/allSelect',
      name: 'allSelect',
      component: allSelect
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import allSelect from '@/components/allSelect'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allSelect',
      component: allSelect
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})

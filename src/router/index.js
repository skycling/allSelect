import Vue from 'vue'
import Router from 'vue-router'
import allSelect from '@/components/allSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allSelect',
      component: allSelect
    }
  ]
})

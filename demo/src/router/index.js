import Vue from 'vue'
import Router from 'vue-router'
import Purchase from '@/components/purchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Purchase',
      component: Purchase
    }
  ]
})

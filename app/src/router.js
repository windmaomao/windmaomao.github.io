import Vue from 'vue'
import Router from 'vue-router'
import BlogPage from '@/components/blog/BlogPage'
import InvestPage from '@/components/invest/InvestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/invest',
      name: 'InvestPage',
      component: InvestPage
    }
  ]
})

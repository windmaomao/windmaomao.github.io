import Vue from 'vue'
import Router from 'vue-router'
import BlogPage from '@/components/blog/BlogPage'
import StockPage from '@/components/stock/StockPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/stock',
      name: 'StockPage',
      component: StockPage
    }
  ]
})

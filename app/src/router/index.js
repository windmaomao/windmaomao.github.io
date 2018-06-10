import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogPage from '@/components/blog/BlogPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    }
  ]
})

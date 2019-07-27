import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import Home from '@/pages/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            isLogin: true
          }
        }
      ]
    }
  ]
})

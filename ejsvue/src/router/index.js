import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/views/login/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})

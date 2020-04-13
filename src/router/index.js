import Vue from 'vue'
import Router from 'vue-router'
import HealthHome from '@/pages/forhealthHome/healthHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'HealthHome'
    },
    {
      path: '/healthHome',
      name: 'HealthHome',
      component: HealthHome
    }
  ]
})

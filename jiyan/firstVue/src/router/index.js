import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	name: 'login',
      path: '',
      component: login
    },
    {
      name: 'register',
      path: 'register',
      component: register
    }
  ]
})

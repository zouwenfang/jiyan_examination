import Vue from 'vue'
import App from './App'	//引入app这个组件
import VueRouter from 'vue-router' //引入路由配置
import VueResource from 'vue-resource'
import login from './components/login'
import movie from './components/movie'
import register from './components/register'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
	{
		path: '/',
		redirect: 'login'
	},
  	{
  		name: 'login',
  		path: '/login',
  		component: login
  	},
  	{
  		name: 'register',
  		path: '/register',
  		component: register
  	},
  	{
  		name: 'movie',
  		path: '/movie',
  		component: movie
  	}
]

const router = new VueRouter({
	// mode:'history',
	base:__dirname,
    routes // （缩写）相当于 routes: routes

})
const app = new Vue({
  router,
  render : h=>h(App)
}).$mount('#app')

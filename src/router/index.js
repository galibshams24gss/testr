//import Vue from 'vue'
import Vue from 'vue/dist/vue.js';
import Router from 'vue-router'
import vueResource from 'vue-resource'
import About from '@/components/About'
import Clients from '@/components/Clients'
import Add from '@/components/Add'
import Cdetails from '@/components/Cdetails'
import Edit from '@/components/Edit'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Uploadfile from '@/components/Uploadfile'
import ChartPie from '@/components/ChartPie'
import Gmap from '@/components/Gmap'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/client/:id',
      name: 'Cdetails',
      props: true,
      component: Cdetails
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      props: true,
      component: Edit
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/upload',
      name: 'Uploadfile',
      component: Uploadfile
    },
    {
      path: '/pie',
      name: 'ChartPie',
      component: ChartPie
    },
    {
      path: '/gmap',
      name: 'Gmap',
      component: Gmap
    }
  ]
})
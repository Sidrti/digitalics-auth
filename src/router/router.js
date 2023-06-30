import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import PageNotFound from '@/components/PageNotFound'
import Landing from '@/views/Landing'
import Subscription from '@/views/Subscription'
import SuccessPage from '@/views/SuccessPage'
import CancelPage from '@/views/CancelPage'

Vue.use(Router)

let baseRoutes = [
  {
    path: '/',
    name: '',
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter
    }
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      header: AppHeader,
      default: Home,
      footer: AppFooter
    }
  },
  {
    path: '/success',
    name: 'Success',
    components: {
      header: AppHeader,
      default: SuccessPage,
    }
  },
  {
    path: '/cancel',
    name: 'Cancel',
    components: {
      header: AppHeader,
      default: CancelPage,
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      header: AppHeader,
      default: Login,
      footer: AppFooter
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    components: {
      header: AppHeader,
      default: SignUp,
      footer: AppFooter
    }
  },
  {
    path: '/subscription',
    name: 'Subscription',
    components: {
      header: AppHeader,
      default: Subscription,
      footer: AppFooter
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
]

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: baseRoutes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup','/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})

export default router

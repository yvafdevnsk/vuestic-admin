import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout-mock'
import AppLayout from '../components/admin/AppLayout-mock'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../components/auth/login/Login-mock.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: 'Admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../components/dashboard/Dashboard-mock.vue'),
      },
      {
        name: 'report',
        path: 'report',
        component: () => import('../components/report/Report-mock.vue'),
      },
      {
        name: 'user',
        path: 'user',
        component: () => import('../components/user/User-profile-mock.vue'),
      },
    ],
  },
  {
    path: '/404',
    component: EmptyParentComponent,
    children: [
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: { name: 'login' },
  },
]

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    ...demoRoutes,
  ],
})

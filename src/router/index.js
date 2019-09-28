import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'sign-in',
      path: '/sign-in',
      component: () => import('@/views/sign-in')
    },
    {
      name: 'sign-up',
      path: '/sign-up',
      component: () => import('@/views/sign-up')
    },
    {
      name: 'restore-password',
      path: '/restore-password',
      component: () => import('@/views/restore-password')
    },
    {
      name: 'doc',
      path: '/doc',
      component: () => import('@/components/VueDocs')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/about')
    },
    {
      name: 'application',
      path: '/app',
      component: () => import('@/views/application'),
      children: [
        {
          path: 'my-profile',
          component: () => import('@/views/profile')
        },
        {
          path: 'account-state',
          component: () => import('@/views/account-state')
        },
        {
          path: 'import-doc',
          component: () => import('@/views/import-doc')
        }
      ]
    },

    {
      name: 'create-demand',
      path: '/create-demand',
      component: () => import('@/views/create-demand')
    }
  ]
});

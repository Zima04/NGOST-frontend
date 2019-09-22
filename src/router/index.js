import  Vue  from "vue";
import  Router  from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "sign-in",
            path: "/sign-in",
            component: () => import('@/views/sign-in')
        },
        {
            name: "sign-up",
            path: "/sign-up",
            component: () => import('@/views/sign-up')
        },
        {
            name: "about",
            path: "/about",
            component: () => import('@/views/about')
        },
        {
            name: "application",
            path: "/app",
            component: () => import('@/views/application'),
            children: [
                {
                    path: "my-profile",
                    component: () => import('@/views/profile')
                },
                {
                    path: 'account-state',
                    component: () => import('@/views/account-state')
                }
            ]
        },

    ]
});
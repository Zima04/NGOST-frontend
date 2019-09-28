import  Vue  from "vue";
import  Router  from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
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
            name: 'create-demand',
            path: '/create-demand',
            component: () => import('@/views/CreateDemand')
        }
    ]
});

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
    ]
});
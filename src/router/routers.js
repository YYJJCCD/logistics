
import Layout from '@/layout/Index'

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Layout,
        meta: { auth: true },
        children: [
            {
                path: '/commodity',
                name: 'Commodity',
                component: () => import('@/views/basics/Commodity'),
                meta: { auth: true }
            },
            {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            }
        ]
    },
    {

        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login'),
        meta: { auth: false }
    },

]


export default routes

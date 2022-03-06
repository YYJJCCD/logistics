import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from "@/router/routers"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { checkToken } from '@/api/admin'

//顶部进度条样式
NProgress.configure({
    showSpinner: false,
    speed: 800,
});

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch(err => err) }
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由卫士
router.beforeEach((to, from, next) => {
    NProgress.start()
    to.meta.auth && !store.state.user.token ? next("/login") : next()
})

router.afterEach(() => {
    NProgress.done()
})


export default router

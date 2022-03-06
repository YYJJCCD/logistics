
import Layout from "@/layout/Index"

const routes = [

    {
        path: "/",
        name: "Home",
        component: Layout,
        meta: { auth: true },
        children: [
            {
                path: "/commodity",
                name: "Commodity",
                component: () => import("@/views/basics/Commodity"),
                meta: { auth: true }
            },
            {
                path: "/storage",
                name: "Storage",
                component: () => import("@/views/basics/Storage"),
                meta: { auth: true }
            },
            {
                path: "/storage/:id",
                name: "StorageDetail",
                component: () => import("@/views/basics/StorageDetails"),
                meta: { auth: true }
            },
            {
                path: "/employee",
                name: "Employee",
                component: () => import("@/views/basics/Employee"),
                meta: { auth: true }
            },
            {
                path: "/sale/record",
                name: "saleRecord",
                component: () => import("@/views/sale/Record"),
                meta: { auth: true }
            },
            {
                path: "/sale/create",
                name: "saleCreat",
                component: () => import("@/views/sale/Create"),
                meta: { auth: true }
            },,
            {
                path: "/about",
                name: "About",
                component: () => import("@/views/AboutView.vue"),
                meta: { auth: true }
            }
        ]
    },
    {

        path: "/login",
        name: "Login",
        component: () => import("@/views/Login"),
        meta: { auth: false }
    },

]


export default routes

import Vue from 'vue'
import VueRouter from 'vue-router'

// component
import login from "@/components/Login"
import customer from "@/components/Customer"
import product from "@/components/Product"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/login', component: login},
        {path: '/customer', component: customer},
        {path: '/product', component: product},
    ]
})

export default router
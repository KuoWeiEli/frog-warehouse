import Vue from 'vue'
import VueRouter from 'vue-router'

// component
import login from '@/components/Login'
import customer from '@/components/Customer'
import product from '@/components/Product'
import deliverWork from '@/components/deliver/work'
import deliverRecord from '@/components/deliver/record'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/login', component: login},
        {path: '/customer', component: customer},
        {path: '/product', component: product},
        {path: '/deliver/work', component: deliverWork},
        {path: '/deliver/record', component: deliverRecord}
    ]
})

export default router
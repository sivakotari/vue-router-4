
import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/destination/:slug',
        component: () => import('@/views/Destination.vue'),
        name:'destination',
        props: true,
        children: [
            {
                path: ':experienceSlug',
                name: 'destination.experience',
                component: () => import('@/views/DestinationExperience.vue'),
                // props: route => ({...route.params, desitnationId: parseInt(route.params.desitnationId)})
                props: true
            }
        ],
        beforeEnter: (to, from, next) => {
            const destination = sourceData.destinations.find(destination => destination.slug === to.params.slug)
            // if (destination) {
            //     next()
            // } else {
            //     next('/notFound')
            // }
            if(!destination) {
                next ({
                    name: 'notFound',
                    params: { pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash

                })
            } else next()
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound.vue'),
        name: 'notFound',

    },
    {
        path: '/protected',
        component: () => import('@/views/ProtectedPage.vue'),
        name: 'protected',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/invoices',
        name: 'invoices',
        component: () => import('@/views/Invoices.vue'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
    // linkActiveClass: 'custom-active-class'
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        }
        return new Promise((resolve) => {       
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: 'smooth'})
            }, 200)
        })
    }
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        return {name: 'login', query: {redirect: to.fullPath.split('/')[1]}}
    }
})

export default router
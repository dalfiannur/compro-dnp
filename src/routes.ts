import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/home/Home.vue')
    },
    {
        path: '/products',
        component: () => import('./pages/products/Products.vue')
    },
    {
        path: '/products/:slug',
        component: () => import('./pages/product-detail/ProductDetail.vue')
    },
    {
        path: '/about-us',
        component: () => import('./pages/about-us/AboutUs.vue')
    },
    {
        path: '/articles',
        component: () => import('./pages/articles/Articles.vue')
    },
    {
        path: '/articles/:slug',
        component: () => import('./pages/article-detail/ArticleDetail.vue')
    },
    {
        path: '/clinics',
        component: () => import('./pages/clinics/Clinics.vue')
    },
    {
        path: '/product-line-up',
        component: () => import('./pages/product-line-up/ProductLineUp.vue')
    }
]

export default routes

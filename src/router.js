import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import RestaurantsList from './pages/RestaurantsList.vue';
import SingleRestaurant from './pages/SingleRestaurant.vue';
import Checkout from './pages/Checkout.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppContactUs from './pages/AppContactUs.vue';
import AppThankYouPage from './pages/AppThankYouPage.vue';
import PaymentResponse from "./pages/PaymentResponse.vue";
import BasicLayout from "./pages/BasicLayout.vue";




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantsList
        },
        {
            path: '/restaurants/:slug',
            name: 'single-restaurant',
            component: SingleRestaurant
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: AppThankYouPage
        },
        {
            path: '/payment-response/:success',
            name: 'payment-response',
            component: PaymentResponse,
            meta: { layout: BasicLayout },

        },
    ]
});

export { router };
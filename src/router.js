import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import RestaurantsList from './pages/RestaurantsList.vue';
import SingleRestaurant from './pages/SingleRestaurant.vue';
import Checkout from './pages/Checkout.vue';

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
    ]
});

export { router };
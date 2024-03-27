import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import RestaurantsList from './pages/RestaurantsList.vue';

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
    ]
});

export { router };
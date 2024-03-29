<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        getTotalItemsInCart() {
            let totalItems = 0;
            for (const item of this.store.cart.items) {
                totalItems += item.quantity;
            }
            return totalItems;
        }
    }
}
</script>
<template lang="">
    <!-- Header -->
    <header class="fixed-top shadow bg-warning">
        <div class="container">
            <div class="row pt-1">
                <!-- Left -->
                <div class="col-4 d-flex align-items-center pt-2">
                    <a href="/" class="text-decoration-none text-danger">
                        <div class="logo">
                            <img src="/img/logo.png" alt="Deliveboo">
                        </div>
                    </a>
                    <a href="/" class="text-decoration-none text-danger">
                        <div class="logo_text">
                            <img src="/img/logo_text.png" alt="Deliveboo">
                        </div>
                    </a>
                </div>
                <!-- Right  -->
                <div class="col-8 pt-2">
                    <div class="float-end h-100 ">
                        <ul class="list-unstyled d-flex align-items-center h-100 fs-5">
                            <li v-for="(item, index) in store.menuItems" :key="index" class="me-3 text-uppercase ">
                                <router-link :to="{name: item.name}" class="nav-link font-1 fw-light ">
                                    {{item.label}}
                                </router-link>
                            </li>
                            <li class="cart_icon ms-2 position-relative ">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <transition name="fade">
                                    <span v-if="getTotalItemsInCart() > 0" class="badge bg-danger rounded-circle position-absolute top-0 text-center">{{ getTotalItemsInCart() }}</span>
                                </transition>
                            </li>
                            <li class="user ms-3">
                                <a href="http://127.0.0.1:8000/login" class="text-reset"><i class="fa-regular fa-user"></i></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

header {
    height: 100px;

    .logo {
        img {
            width: 80px;
        }
    }

    .logo_text {
        img {
            width: 200px;
        }
    }

    .nav-link {
        color: $secondary_color;
        font-weight: 600;
        opacity: 90%;
        transition: transform 0.3s;

        &:hover {
            opacity: 100%;
            transform: scale(1.05);
            color: $secondary_color;
        }
    }

    .cart_icon,
    .user {
        color: $secondary_color;
        font-weight: 600;
        opacity: 90%;
        transition: transform 0.3s;

        &:hover {
            opacity: 100%;
            transform: scale(1.05);

        }
    }

    /* Stili per il badge */
    .cart-badge {
        position: relative;
        display: inline-block;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .badge {
        position: absolute;
        top: -12px;
        right: -10px;
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 4px 6px;
        font-size: 10px;
    }
}
</style>
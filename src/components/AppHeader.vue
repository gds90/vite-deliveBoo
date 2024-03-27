<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
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
                                <router-link :to="{name: item.name}" class="nav-link">
                                    {{item.label}}
                                </router-link>
                            </li>
                            <li class="cart ms-2">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </li>
                            <li class="user ms-3">
                                <i class="fa-regular fa-user"></i>
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

    .cart,
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
}
</style>
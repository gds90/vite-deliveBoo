<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            cartVisible: false,
            hoveringCart: false
        }
    },
    methods: {
        pauseTimeout() {
            if (this.cartVisible) {
                clearTimeout(this.timeout);
            }
            this.hoveringCart = true;
        },
        // Al puntatore del mouse fuori dal cart_container
        resumeTimeout() {
            if (this.cartVisible) {
                this.timeout = setTimeout(() => {
                    this.cartVisible = false;
                }, 1500);
            }
            this.hoveringCart = false;
        },
        getTotalItemsInCart() {
            let totalItems = 0;
            for (const item of this.store.cart.items) {
                totalItems += item.quantity;
            }
            return totalItems;
        },
        // visualizza  o nascondi il carrello
        toggleCartVisibility() {
            this.cartVisible = !this.cartVisible;
            if (this.cartVisible && !this.hoveringCart) {
                // Se il carrello è visibile e il mouse non è sopra di esso,
                // avvia il timeout per nascondere il carrello
                this.timeout = setTimeout(() => {
                    this.cartVisible = false;
                }, 1500);
            }
        },
        truncate(text, length) {
            if (text.length > length) {
                return text.substring(0, length) + '...';
            }
            return text;
        }
    }
}
</script>
<template lang="">
    <!-- Header -->
    <header  v-if="$route.path  !== '/checkout' && $route.path !== '/confirmed_payment' && $route.path !== '/payment-error'" class="fixed-top shadow">
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
                        <div class="logo_text d-none d-md-block">
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
                            <li class="cart_icon ms-2 position-relative" @click="toggleCartVisibility">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <transition name="fade">
                                    <span v-if="getTotalItemsInCart() > 0" class="badge bg-danger rounded-circle position-absolute top-0 text-center">{{ getTotalItemsInCart() }}</span>
                                </transition>
                            </li>
                            <!-- Carrello -->
                            <transition name="fade" >
                                <div v-if="cartVisible" class="cart_container rounded-4 shadow p-2" @mouseenter="pauseTimeout" @mouseleave="resumeTimeout"> 

                                    <div class="cart p-1">
                                        <h2 class="text-center fw-bold py-2">Il tuo carrello</h2>
                                        <div v-if="store.cart.items.length === 0" class="text-center p-3">
                                            <span>Non ci sono articoli nel carrello!</span>
                        
                                        </div>
                        
                                        <table class="w-100 text-center" v-if="store.cart.items.length > 0">
                                            <thead class="border-bottom">
                                                <tr class="">
                                                    <th colspan="1" class="text-start">Articolo</th>
                                                    <th>Quantità</th>
                                                    <th>Prezzo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(cartItem, index) in store.cart.items" :key="index">
                                                    <td colspan="1" class="text-start item_name d-flex align-items-center ">
                                                        <div class="btn btn-sm btn-outline-danger m-2" @click="store.clearItemFromCart(index)">
                                                            <i class="fas fa-xmark"></i>
                                                        </div>
                                                        <div class="truncate-text">{{ truncate(cartItem.name,25) }}</div>
                                                    </td>
                                                    <td>
                                                        <div class="btn btn-sm btn-danger me-1">
                                                            <i class="fas fa-minus" @click="store.removeFromCart(cartItem)">
                                                            </i>
                                                        </div>
                                                        {{cartItem.quantity}}
                                                        <div class="btn btn-sm btn-warning ms-1 text_secondary">
                                                            <i class="fas fa-plus"
                                                                @click="store.addToCart(cartItem, cartItem.restaurant_id)">
                                                            </i>
                                                        </div>
                                                    </td>
                                                    <td>&euro; {{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2">Totale</th>
                                                    <td><b>&euro; {{ store.totalPrice }}</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- Bottoni -->
                                    <div class="cart_btn d-flex mt-2">
                                        <button class="btn btn-sm btn-warning font-1 text_secondary w-75 fs-5" @click="store.clearCart()">Svuota il Carrello</button>
                                        
                                        <router-link :to="store.cart.items.length > 0 ? '/checkout' : ''" class="">
                                            <div class="cart_btn ms-3">
                                                <button class="btn btn-sm btn-warning font-1 text_secondary fs-5" :disabled="store.cart.items.length === 0">Effettua il
                                                    check-out</button>
                                            </div>
                                        </router-link>
                                    <!-- </div>
                                    <div> -->
                                    </div>
                                </div>
                            </transition>
                            
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
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general' as *;

.truncate-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

header {
    height: 100px;
    backdrop-filter: blur(25px);
    background-color: rgba(245, 195, 68);

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
        transition: opacity 1s;
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

    .cart_container {
        position: absolute;
        top: calc(100% + 20px); // Posizione rispetto all'icona del carrello
        right: 5%;
        backdrop-filter: blur(50px);
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 999;
        font-size: 1rem;

        .cart {

            h2,
            th {
                color: $secondary_color;
            }

            // border: 1px solid $secondary_color;

            table tr {
                border-bottom: 1px solid gray;
            }

            table tr:last-child {
                border: none;
            }

            table img {
                width: 35px;
                height: auto;
            }


        }

        td {
            font-size: 14px;
        }



    }
}

button:hover {
    transform: scale(1.01)
}
</style>
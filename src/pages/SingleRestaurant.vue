<script>
import axios from 'axios';
import { store } from '../store';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleRestaurant',
    components: {
        AppLoader
    },
    data() {
        return {
            store,
            restaurant: null,
            success: false,
            categoryIcons: {
                Pizza: '/img/pizza-icon.png',
                Pasta: '/img/pasta-icon.svg',
                Burger: '/img/burger-icon.svg',
                Pesce: '/img/fish-icon.svg',
                Sushi: '/img/sushi-icon.svg',
                Bevanda: '/img/paper-cup.svg'
            }
        }
    },
    created() {
        this.getRestaurantData();
    },
    methods: {
        getRestaurantData() {
            axios.get(`${this.store.baseUrl}/api/restaurant/${this.$route.params.slug}`).then((response) => {
                setTimeout(() => {
                    if (response.data.success) {
                        this.restaurant = response.data.restaurant;
                        this.success = response.data.success;
                    }
                    else {
                        this.$router.push({ name: 'not-found' })
                    }
                }, 500);
                this.success = false
            });
        },
        getUrlImage() {
            let image = null;
            if (this.restaurant && this.restaurant.cover_image != null) {
                image = 'storage/' + this.restaurant.cover_image;
            }
            return image ? `${this.store.baseUrl}/${image}` : '';
        },
        getDishImage(dish) {
            let image = null;
            if (dish && dish.cover_image != null) {
                image = 'storage/' + dish.cover_image;
            }
            return image ? `${this.store.baseUrl}/${image}` : '';
        }

    }
}
</script>

<template lang="">
    <main class="pt-4">
        <div v-if="!success" class="centered-loader">
            <AppLoader />
        </div>

        <!-- Restaurant Details -->
        <div v-else class="container restaurant_data">
            <div class="row">
                <div class="col-12 text-start mb-5">
                    <router-link to="/restaurants" class="text-decoration-none text-reset "><span class="back fs-4"><i class="fa-solid fa-arrow-left me-3"></i>Indietro</span></router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12 restaurant_name mb-4">
                    <h1 class="font-1 text-white">{{ restaurant.name }}</h1>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-5">
                            <div class="restaurant_image">
                                <img :src="getUrlImage()" :alt="restaurant.name" id="detail-img" class="w-100 rounded shadow"/>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="restaurant_info text-start">
                                <p class="fs-3 fw-bold"><i class="fa-solid fa-location-dot me-2 "></i>{{ restaurant.address }}</p>
                                <template v-for="(type, index) in restaurant.types" :key="index">
                                    <span v-if="index !== restaurant.types.length - 1">
                                        {{ type.name }} •
                                    </span>
                                    <span v-else>
                                        {{ type.name }}
                                    </span>
                                </template>
</div>
</div>
</div>
</div>

</div>
<hr class="my-5">
<!-- Piatti del ristorante -->
<div class="row">
    <div class="col-12 col-lg-8 text-white dishes pe-5">
        <h2 class="fw-bold">Menù del ristorante</h2>

        <ul class="list-unstyled ">
            <li v-for="(dish, index) in restaurant.dishes" :key="index"
                class="bg-body-secondary rounded-4 shadow dish_container opaque-left">
                <div class="row my-4">
                    <div class="col-2">
                        <div class="dish_image align-items-center justify-content-center">
                            <img :src="getDishImage(dish)" class="rounded-4 w-100 h-100" />
                        </div>
                    </div>
                    <div class="col-8 ">
                        <div class="dish_infos ms-2 mt-3">
                            <div class="d-flex align-items-center">
                                <h3 class=" ">{{ dish.name }} </h3>
                                <img v-if="dish.category && categoryIcons[dish.category.name]"
                                    :src="categoryIcons[dish.category.name]" alt="Icona categoria"
                                    class="category-icon ms-2" />
                            </div>
                            <p>{{ dish.price }}€</p>
                            <p></p>
                            <p>{{ dish.description }}</p>
                        </div>
                    </div>
                    <div class="col-2 fs-1 pe-4">
                        <div>
                            <!-- <i class="fas fa-plus btn btn-lg" @click="store.addToCart(dish, dish.restaurant_id)"></i> -->
                            <button class="CartBtn my-2"
                                @click="store.addToCart(dish, dish.restaurant_id, restaurant.slug)">
                                <span class="IconContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                                        fill="rgb(17, 17, 17)" class="cart_icon_add">
                                        <path
                                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                                        </path>
                                    </svg>
                                </span>
                                <p class="text fs-4">+</p>
                            </button>
                            <button class="CartBtnRemove" @click="store.removeFromCart(dish, dish.restaurant_id)">
                                <span class="IconContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                                        fill="rgb(17, 17, 17)" class="cart_icon_add">
                                        <path
                                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                                        </path>
                                    </svg>
                                </span>
                                <p class="text fs-4">-</p>
                            </button>
                        </div>
                        <!-- <div>
                            <i class="fas fa-minus btn btn-lg"
                                @click="store.removeFromCart(dish, dish.restaurant_id)"></i>
                        </div> -->
                    </div>
                </div>
            </li>
        </ul>
    </div>


    <div class="col-lg-4 d-none d-lg-block">
        <!-- Carrello -->
        <div class="sticky_top">

            <div class="cart  bg-white rounded-4 shadow bg-body-secondary p-3">
                <h2 class="text-center fw-bold py-3">Il tuo carrello</h2>
                <div v-if="store.cart.items.length === 0" class="text-center p-3">
                    <span>Non ci sono articoli nel carrello!</span>

                </div>

                <table class="w-100 text-center" v-if="store.cart.items.length > 0">
                    <thead class="border-bottom">
                        <tr class="">
                            <th colspan="2" class="text-start">Articolo</th>
                            <th>Quantità</th>
                            <th>Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cartItem, index) in store.cart.items" :key="index">
                            <td colspan="2" class="text-start ps-1">
                                <i class="btn btn-lg fas fa-xmark" @click="store.clearItemFromCart(index)"></i>
                                {{cartItem.name}}
                            </td>
                            <td><i class="btn btn-sm fas fa-minus" @click="store.removeFromCart(cartItem)">
                                </i>
                                {{cartItem.quantity}}
                                <i class="btn btn-sm fas fa-plus"
                                    @click="store.addToCart(cartItem, cartItem.restaurant_id, restaurant.slug)">
                                </i>
                            </td>
                            <td>&euro;{{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
                        </tr>
                        <tr>
                            <th colspan="2">Totale</th>
                            <td><b>&euro; {{ store.totalPrice }}</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div id="error" class="text-danger text-center p-3 mt-4 rounded-4"></div>
            <!-- <p id="error" class="text-danger text-center py-3"></p> -->
            <!-- Bottoni -->
            <div class="cart_btn m-5 ">
                <button class="btn w-100 btn-warning  " @click="store.clearCart()">Svuota il Carrello</button>
            </div>

        </div>
    </div>

</div>

</div>
</main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#error {
    opacity: 0;
    transition: opacity 1s;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.08);
}

#error.error-show {
    opacity: 1;
}

.opaque-left {

    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.05);
}

.back {
    color: $secondary_color;
}

.restaurant_data {
    padding-top: 120px;

    h1 {
        font-size: 3em;
        text-shadow: 3px 3px 0 rgb(21, 49, 96),
            -3px 3px 0 rgb(21, 49, 96),
            -3px -3px 0 rgb(21, 49, 96),
            3px -3px 0 rgb(21, 49, 96);
    }

    .restaurant_image {
        width: 100%;
    }

    .restaurant_info {
        color: $secondary_color;
    }
}

.dishes {
    h2 {
        color: $secondary_color;
    }

    .dish_container {

        .dish_image {
            width: 110%;
            height: 200px;

            img {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }


        .dish_infos {
            color: $secondary_color;

            .category-icon {
                width: 20px;
                height: 20px;

                img {
                    width: 100%;
                }
            }
        }

        // aggiungi / rimuovi piatto
        .CartBtn {
            width: 100%;
            height: 40px;
            border-radius: 12px;
            border: none;
            background-color: rgb(255, 208, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: .5s;
            overflow: hidden;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
            position: relative;
        }

        .CartBtnRemove {
            width: 100%;
            height: 40px;
            border-radius: 12px;
            border: none;
            background-color: rgb(211, 58, 48);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: .5s;
            overflow: hidden;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
            position: relative;
        }

        .IconContainer {
            position: absolute;
            left: -50px;
            width: 30px;
            height: 30px;
            background-color: transparent;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 2;
            transition-duration: .5s;

            .cart_icon_add {
                font-size: 12px;
                padding-right: 5px;
            }
        }

        .icon {
            border-radius: 1px;
        }

        .text {
            height: 100%;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(17, 17, 17);
            z-index: 1;
            transition-duration: .5s;
            font-size: 12px;
            font-weight: 600;
            padding-top: 15px;

        }

        .CartBtn:hover .IconContainer,
        .CartBtnRemove:hover .IconContainer {
            transform: translateX(58px);
            border-radius: 40px;
            transition-duration: .5s;
        }

        .CartBtn:hover .text,
        .CartBtnRemove:hover .text {
            transform: translate(10px, 0px);
            transition-duration: .5s;
        }

        .CartBtn:active,
        .CartBtnRemove:active {
            transform: scale(0.95);
            transition-duration: .5s;
        }





    }
}

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

.cart_btn {
    position: sticky;
    top: 400px;
    margin-top: 80px;
}

.sticky_top {
    position: sticky;
    top: 150px;
    margin-top: 50px;
}
</style>

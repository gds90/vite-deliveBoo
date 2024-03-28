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
            success: false
        }
    },
    created() {
        this.getRestaurantData();
    },
    methods: {
        getRestaurantData() {
            console.log("Slug:", this.$route.params.slug);

            axios.get(`${this.store.baseUrl}/api/restaurant/${this.$route.params.slug}`).then((response) => {
                setTimeout(() => {
                    if (response.data.success) {
                        console.log(this.response);
                        this.restaurant = response.data.restaurant;
                        this.success = response.data.success;
                        console.log(this.restaurant);
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
                <div class="col-9">
                    <div class="row">
                        <div class="col-8">
                            <div class="restaurant_image">
                                <img :src="getUrlImage()" :alt="restaurant.name" id="detail-img" class="w-100 rounded mb-3 shadow"/>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="restaurant_info text-start">
                                <p><i class="fa-solid fa-location-dot me-2"></i>{{ restaurant.address }}</p>
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
<div class="cart col-3 bg-secondary rounded">
    QUI CI ANDRÀ IL RIEPILOGO DEL CARRELLO
</div>
</div>

<!-- Piatti del ristorante -->
<div class="row">
    <div class="col-12 text-white my-5 dishes">
        <h2 class="fw-bold">Menù del ristorante</h2>
        <hr>
        <ul class="list-unstyled ">
            <li v-for="(dish, index) in restaurant.dishes" :key="index">
                <div class="row m-4">
                    <div class="col-10 d-flex">
                        <div class="dish_image  ">
                            <img :src="getDishImage(dish)" class="rounded-4" />
                        </div>
                        <div class="ms-4">
                            <h3 class="fw-bold ">{{ dish.name }}</h3>
                            <p>{{ dish.price }}€</p>
                            <p>{{ dish.description }}</p>
                        </div>
                    </div>
                    <div class="col-2">
                        QUI ANDRANNO I TASTI PER AGGIUNTA IN CARRELLO
                    </div>
                </div>
            </li>
        </ul>
    </div>

</div>

</div>
</main>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

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
}

.dish_image {
    width: 200px;

    img {
        width: 100%;
        object-fit: cover;
    }
}
</style>

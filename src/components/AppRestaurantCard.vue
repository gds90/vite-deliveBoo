<script>
import { store } from '../store.js';
export default {
    name: 'AppRestaurantCard',
    props: {
        restaurant: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getUrlImage() {
            let image = null;
            if (this.restaurant.cover_image != null) {
                image = 'storage/' + this.restaurant.cover_image;
            }
            return image ? `${this.store.baseUrl}/${image}` : ''; // Aggiunto controllo sull'esistenza dell'immagine
        }
    }
}
</script>

<template>
    <div class="col-4 col-md-3 col-xl-2">
        <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }"
            class="text-decoration-none">
            <div class="card rounded-top-2 shadow position-relative me-1">
                <div class="my_image_card rounded-2">
                    <img class="rounded-2" :src="getUrlImage()" :alt="restaurant.name">
                </div>
                <div class="card-body position-absolute bottom-0 start-0 end-0 rounded-bottom-2 ">
                    <h5 class="card-title fw-bolder text-white mb-0">{{ restaurant.name }}</h5>

                    <template v-for="(type, index) in restaurant.types" :key="index">
                        <span v-if="index !== restaurant.types.length - 1" class="text-white fs_10">
                            {{ type.name }} •
                        </span>
                        <span v-else class="text-white fs_10">
                            {{ type.name }}
                        </span>
                    </template>
                    <p class="card-text text-white">{{ restaurant.address }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss">
.card {
    width: 100%;
    height: 300px;
    cursor: pointer;
    transition: 0.3s all;
    position: relative;

    &:hover {
        transform: scale(1.05)
    }

    .my_image_card {
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-body {
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 0) 100%);
        padding: 1rem;

        .fs_10 {
            font-size: 12px;
        }
    }
}


@media only screen and (max-width: 991px) {}

@media only screen and (max-width: 720px) {}

@media only screen and (max-width: 540px) {}
</style>

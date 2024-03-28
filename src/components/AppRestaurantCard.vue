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
    <div class="col-md-6 col-lg-4 col-xxl-3 my-4">
        <div class="card rounded-top-2 shadow" style="width: 18rem;">
            <div class="my_image_card">
                <img class="rounded-top-2" :src="getUrlImage()" :alt="restaurant.name">
            </div>
            <div class="card-body">
                <h5 class="card-title fw-bolder ">{{ restaurant.name }}</h5>
                <p class="card-text">{{ restaurant.address }}</p>
                <!-- <a href="#" class="btn btn-sm btn-light w-100 ">Ordina</a> -->
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.card {
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
        transform: scale(1.05)
    }

    .my_image_card {

        height: 180px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-body {
        height: 80px;
        font-size: 0.8em;
        background-color: gainsboro;
    }
}
</style>
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
    <div class="col-md-6 col-lg-4 col-xxl-3 my-4 mx-auto">
        <div class="card h-100 shadow" style="width: 18rem;">
            <div class="my_image_card">
                <img class="rounded-top-4" :src="getUrlImage()" :alt="restaurant.name">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ restaurant.name }}</h5>
                <p class="card-text">{{ restaurant.address }}</p>
                <a href="#" class="btn btn-light w-100 ">Ordina</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.card {
    .my_image_card {

        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
<script>
import axios from 'axios';
import { store } from '../store.js';

import AppLoader from '../components/AppLoader.vue';
import AppTypeCard from '../components/AppTypeCard.vue';
import AppRestaurantCard from '../components/AppRestaurantCard.vue';


export default {
    name: 'RestaurantsList',
    components: {
        AppTypeCard,
        AppLoader,
        AppRestaurantCard
    },
    data() {
        return {
            store,
            restaurants: [],
            selectedTypes: [],
            types: [],
            filteredRestaurants: [],
            currentPage: 1,
            lastPage: null,
            success: false
        }
    },
    created() {
        this.getRestaurants();
        this.getTypes();
    },
    methods: {
        // chiamata API che recupera i ristoranti
        getRestaurants(page_num) {
            axios.get(`${this.store.baseUrl}/api/restaurant`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                setTimeout(() => {
                    this.restaurants = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.success = response.data.success;
                }, 1000);
                this.success = false;
            })

        },
        getTypes() {
            axios.get(`${this.store.baseUrl}/api/type`
            ).then((response) => {
                this.types = response.data.results;
                this.types.sort((a, b) => a.name.localeCompare(b.name))
            })
        },
        // selezione/deselezione di una tipologia
        toggleType(type) {

            if (this.selectedTypes.includes(type.id)) {
                // rimuovere la tipologia selezionata dall'array
                const index = this.selectedTypes.indexOf(type.id);
                this.selectedTypes.splice(index, 1);
            } else {
                // agggiungo la tipologia selezionata all'array
                this.selectedTypes.push(type.id);
            }
        }
    },
    computed: {
        filteredRestaurants() {
            let filtered = this.restaurants;

            for (const typeId of this.selectedTypes) {
                filtered = filtered.filter(restaurant => {
                    return restaurant.types.some(type => type.id === typeId);
                });
            }

            return filtered;
        }
    }

}
</script>
<template lang="">
    <main class="pt-2">
        <div v-if="!success" class="centered-loader">
            <AppLoader />
        </div>
         <!-- Types section -->
        <div v-else>
            <div class="container-fluid my-5 pt-2">
                <div class="row m-5">
                    <div class="col-12 text-center text-white font-1 m-5">
                        <h2 class="mt-5">CERCA PER TIPOLOGIA</h2>
                    </div>
                </div>
            </div>
        
            <div class="types my-4">
                <div class="container-fluid d-flex justify-content-between overflow-auto">
                    <AppTypeCard v-for="type, index in types" :key="index" :type="type" @click="toggleType(type)" class="mb-4"/>
                </div>
            </div>

            <!--  Restaurants section -->
            <div class="container-fluid my-5">
                <div class="row m-5">
                    <div class="col-12 text-center text-white font-1 m-auto">
                        <h2 class="">RISTORANTI DISPONIBILI</h2>
                    </div>
                </div>
            </div>
        
            <div class="restaurants my-4">
                <div class="container-fluid d-flex justify-content-between overflow-auto">
                    <AppRestaurantCard v-for="restaurant, index in filteredRestaurants" :key="index" :restaurant="restaurant"/>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
main {
    background: rgb(28, 48, 93);
    background: linear-gradient(0deg, rgba(28, 48, 93, 1) 0%, rgba(245, 195, 68, 1) 62%);

}
</style>
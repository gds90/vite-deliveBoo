<script>
import axios from 'axios';
import { store } from '../store.js';

import AppLoader from '../components/AppLoader.vue';
import AppTypeCard from '../components/AppTypeCard.vue';


export default {
    name: 'RestaurantsList',
    components: {
        AppTypeCard,
        AppLoader,
    },
    data() {
        return {
            store,
            restaurants: [],
            types: [],
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
        getRestaurants(page_num) {
            axios.get(`${this.store.baseUrl}/api/restaurant`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                setTimeout(() => {

                    this.restaurants = response.data.results.data;
                    console.log(this.restaurants)
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.success = response.data.success;
                }, 500);
                this.success = false
            })
        },
        getTypes() {
            axios.get(`${this.store.baseUrl}/api/type`
            ).then((response) => {
                setTimeout(() => {
                    console.log(response);
                    this.types = response.data.results;
                    this.success = response.data.success;
                }, 500);
                this.success = false
            })
        }
    }
}
</script>
<template lang="">
    <main class="pt-2">
        <!-- <div v-if="!success" class="centered-loader">
            <AppLoader />
        </div> -->
        <div class="container-fluid my-5 pt-2">
            <div class="row m-5">
                <div class="col-12 text-center text-white font-1 m-5">
                    <h2 class="mt-5">CERCA PER TIPOLOGIA</h2>
                </div>
            </div>
        </div>
        <!-- Types section -->
        <div class="types my-4">
            <div class="container-fluid d-flex justify-content-between">
                <AppTypeCard v-for="type, index in types" :key="index" :type="type"/>
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
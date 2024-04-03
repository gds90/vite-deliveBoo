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
        getRestaurants() {
            axios.get(`${this.store.baseUrl}/api/restaurant`).then((response) => {
                setTimeout(() => {
                    this.restaurants = response.data.results;
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
        },
        // scroll laterale types 
        startTypeScrolling(amount) {
            this.typeScrollInterval = setInterval(() => {
                const container = document.querySelector('.types .container-fluid');
                if (amount < 0 && container.scrollLeft <= 0) {
                    clearInterval(this.typeScrollInterval);
                } else if (amount > 0 && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    clearInterval(this.typeScrollInterval);
                } else {
                    container.scrollLeft += amount;
                }
            }, 20); // Imposta un intervallo maggiore per rallentare lo scorrimento
        },
        stopTypeScrolling() {
            clearInterval(this.typeScrollInterval);
        },

        // scroll laterale restaurants
        startRestaurantScrolling(amount) {
            this.restaurantScrollInterval = setInterval(() => {
                const container = document.querySelector('.rest');
                if (amount < 0 && container.scrollLeft <= 0) {
                    clearInterval(this.restaurantScrollInterval);
                } else if (amount > 0 && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    clearInterval(this.restaurantScrollInterval);
                } else {
                    container.scrollLeft += amount;
                }
            }, 20); // Imposta la velocità dello scorrimento regolando il valore dell'intervallo
        },

        stopRestaurantScrolling() {
            clearInterval(this.restaurantScrollInterval);
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
                <div class="row mt-5">
                    <div class="col-12 text-center text-white font-1 m-auto">
                        <h2 class="mt-5">CERCA PER TIPOLOGIA</h2>
                    </div>
                </div>
            </div>
        
            <div class="types my-4">
                <div class="container-fluid d-flex justify-content-between overflow-auto types">
                    <AppTypeCard v-for="type, index in types" :key="index" :type="type" @click="toggleType(type)" class="mb-4"/>
                </div>
                
                <div class="button-container">
                    <!-- Pulsante sinistro -->
                    <button class="scroll-btn prev-btn" @mouseenter="startTypeScrolling(-10)" @mouseleave="stopTypeScrolling">&lt;</button>
                    <!-- Pulsante destro -->
                    <button class="scroll-btn next-btn" @mouseenter="startTypeScrolling(10)" @mouseleave="stopTypeScrolling">&gt;</button>
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

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="restaurants my-4 position-relative">
                        <div v-if="filteredRestaurants.length === 0" class="text-center">
                            <p class="text-white fs-5">Nessun ristorante disponibile le tipologie scelte.</p>
                        </div>
                        <div class="ps-md-5 d-flex overflow-auto rest gap-5 gap-md-0">
                            <AppRestaurantCard v-for="restaurant, index in filteredRestaurants" :key="index" :restaurant="restaurant"/>
                        </div>
                        <div class="button-container">
                            <!-- Pulsante sinistro -->
                            <button class="scroll-btn restaurant prev-btn" @mouseenter="startRestaurantScrolling(-10)" @mouseleave="stopRestaurantScrolling">&lt;</button>
                            <!-- Pulsante destro -->
                            <button class="scroll-btn restaurant next-btn" @mouseenter="startRestaurantScrolling(10)" @mouseleave="stopRestaurantScrolling">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>
<style lang="scss">
main {
    background: rgba(28, 48, 93, 0.1);

    /* Hide scrollbar for Chrome, Safari and Opera */
    .types::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .types {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */

        position: relative;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .rest::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .rest {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }



    .prev-btn {
        left: 1rem;
    }

    .next-btn {
        right: 1rem;
    }

    .scroll-btn {
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: rgb(245, 195, 68, 0.5);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1;
        color: white;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        


        &:hover {
            background-color: rgba(245, 195, 68, 1);
            opacity: 1;
            transform: scale(1.5);
            transform: translateY(-50%) scale(1.5); 
            box-shadow: 0 0 0 2px transparent;
        }
    }

    .restaurant{
        top: 50%;
    }

   
}
</style>
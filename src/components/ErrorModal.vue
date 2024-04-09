<script>
import { store } from '../store';
export default {
    name: 'ErrorModal',
    data() {
        return {
            store
        }
    },
    methods: {
        clearCartAndCloseModal() {
            this.store.clearCart();
            this.store.closeModal();
        }
    }
}
</script>
<template lang="">
    <div id="errorModal" class="modal">
    <div class="d-flex vh-100 align-items-center">

        <div class="modal-content">
            <span class="close" @click="store.closeModal()">&times;</span>
            <p id="errorMessage" class="fw-bold my-2"></p>
            <div class="text-center mt-2 ">
                <button @click="clearCartAndCloseModal" class="my-2 mx-md-4 text_secondary font-1 ">Svuota il
                    Carrello</button>
                <a :href="'http://localhost:5174/restaurants/' + store.cart.restaurantSlug"><button
                        class="text_secondary my-2 mx-md-4 font-1 ">Torna al
                        Ristorante</button></a>

            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general' as *;

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

button {
    position: relative;
    top: -80%;
    background-color: rgb(245, 195, 68);
    border-radius: 5px;
    box-shadow: #fff 0px 4px 0px 0px;
    padding: 15px;
    background-repeat: no-repeat;
    cursor: pointer;
    box-sizing: border-box;
    height: 55px;
    color: #fff;
    border: none;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    overflow: hidden;

    &:hover {
        transform: scale(1.1)
    }
}

@media only screen and (max-width: 576px) {
    .modal-content {
        width: 80%;
    }

    button {
        width: 80%;
    }
}
</style>
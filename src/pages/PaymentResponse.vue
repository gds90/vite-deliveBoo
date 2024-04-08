<script>
import { store } from '../store';
export default {
    name: 'PaymentResponse',
    data() {
        return {
            store,
            paymentEvent: false
        };
    },
    mounted() {
        // Accesso al parametro success dalla rotta
        this.paymentEvent = this.$route.params.paymentEvent; // Supponendo che il parametro success sia una stringa rappresentante un valore booleano

        // Controlla se il pagamento non è avvenuto con successo
        if (!this.paymentEvent) {
            // Reindirizzo al checkout dopo 5 secondi
            setTimeout(() => {
                this.$router.push('/checkout');
            }, 5000);
        }
    },
    methods: {
        clearCartAndRedirectToHome() {
            // Svuota il carrello
            this.store.cart.items = [];
            this.store.cart.totalPrice = 0;

            // Rimuovi eventuali altri dati relativi al ristorante (se necessario)
            this.store.cart.restaurantId = null;
            this.store.cart.restaurantSlug = null;

            // Salva il carrello aggiornato nel local storage
            localStorage.setItem('cartItems', JSON.stringify(this.store.cart.items));
            localStorage.removeItem('restaurantSlug');
            localStorage.removeItem('userData');

            // Reindirizza alla home
            this.$router.push('/');
        },
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center ">
                <img src="/img/logo.png" alt="" class="logo" />
            </div>
            <div class="col-12">
                <div class="container-card rounded-4 ">
                    <div class="card" v-if="paymentEvent">
                        <div class="card-header bg-success text-center">
                            <i class="fa-regular fa-circle-check"></i>
                            <h1 class="mb-3">Congratulazioni!</h1>
                            <h5> Il tuo pagamento è stato elaborato con successo.</h5>
                        </div>

                        <!-- <div class="card-body payment-receipt">
                        </div> -->
                        <div class="cart rounded-4 shadow bg-white pb-3 px-3">
                            <h2 class="text-center fw-bold pt-5">Riepilogo del tuo ordine:</h2>
                            <h4 class="text-center pb-4 pt-3">Ristorante <b>{{ store.cart.restaurantName }}</b></h4>
                            <table class="w-100 text-center">
                                <thead class="border-bottom">
                                    <tr class="">
                                        <th colspan="1" class="text-start">Articolo</th>
                                        <th>Quantità</th>
                                        <th>Prezzo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cartItem, index) in store.cart.items" :key="index">
                                        <td colspan="1" class="text-start">
                                            {{ cartItem.name }}
                                        </td>
                                        <td>
                                            {{ cartItem.quantity }}
                                        </td>
                                        <td>&euro;{{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
                                    </tr>

                                    <tr class="pt-5">

                                        <td colspan="1" class="text-start fs-5 fw-bold ">Totale</td>
                                        <td colspan="2" class="text-end fs-5"><b>&euro; {{ store.totalPrice }}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-center mt-5 mb-3">

                                <button @click="clearCartAndRedirectToHome" class="btn btn-outline-success">Torna alla
                                    Home</button>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-else>
                        <div class="card-header bg-danger d-flex justify-content-center py-4">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="card-body text-center py-5">
                            <h1 class="mb-3">Oops!</h1>
                            <h2>Sembra ci sia stato un problema nell'elaborare il tuo pagamento. Controlla i dettagli
                                del pagamento e riprova.</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-12">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    width: 100px;
    padding: 50px 0;
}

.container-card {
    display: flex;
    justify-content: center;
    align-items: top;
    height: 100vh;
    /* Imposta l'altezza al 100% della viewport per centrare verticalmente */

}

.card {
    width: 70%;
    border: none;

}

.card-header {
    font-size: 70px;
    color: white;
}

.card-body {
    height: 100%;
}
</style>
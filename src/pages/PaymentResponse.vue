<script>
import { store } from '../store';
export default {
    name: 'PaymentResponse',
    data() {
        return {
            store,
            success: false
        };
    },
    mounted() {
        // Accesso al parametro success dalla rotta
        this.success = this.$route.params.success; // Supponendo che il parametro success sia una stringa rappresentante un valore booleano
        if (this.success) {
            // Svuota il carrello
            store.cart.items = [];
            store.cart.totalPrice = 0;

            // Rimuovi eventuali altri dati relativi al ristorante (se necessario)
            store.cart.restaurantId = null;
            store.cart.restaurantSlug = null;

            // Salva il carrello aggiornato nel local storage
            localStorage.setItem('cartItems', JSON.stringify(store.cart.items));
            localStorage.removeItem('restaurantSlug');

            // Reindirizzo alla homepage
            setTimeout(() => {
                this.$router.push('/');
            }, 5000);
        }
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="container-card">
                    <div class="card" v-if="success">
                        <div class="card-header bg-success d-flex justify-content-center py-4">
                            <i class="fa-regular fa-circle-check"></i>
                        </div>
                        <div class="card-body text-center py-5">
                            <h1 class="mb-3">Congratulations!</h1>
                            <h2>Your payment has been successfully processed.</h2>
                        </div>
                    </div>
                    <div class="card" v-else>
                        <div class="card-header bg-danger d-flex justify-content-center py-4">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="card-body text-center py-5">
                            <h1 class="mb-3">Oops!</h1>
                            <h2>It seems there was an issue processing your payment. Please check your payment details
                                and try again.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-card {
    display: flex;
    justify-content: center;
    align-items: center;
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
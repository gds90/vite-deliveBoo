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
    }
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
                            <h1 class="mb-3">Congratulazioni!</h1>
                            <h2> Il tuo pagamento è stato elaborato con successo.</h2>
                        </div>
                    </div>
                    <div class="card" v-else>
                        <div class="card-header bg-danger d-flex justify-content-center py-4">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <div class="card-body text-center py-5">
                            <h1 class="mb-3">Oops!</h1>
                            <h2>Sembra ci sia stato un problema nell'elaborare il tuo pagamento. Controlla i dettagli del pagamento e riprova.</h2>
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
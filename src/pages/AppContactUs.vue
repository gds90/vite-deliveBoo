<script>
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContactUs',
    components: {
        AppContactForm
    },
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <div class="container-fluid contact_us_container text-white">
        <div class="row mt-5">
            <div class="col-md-6 offset-md-3 contact_us_form rounded-4">
                <h1 class="mt-5 text-uppercase ">Contattaci</h1>
                <p>Benvenuti nel nostro modulo di contatto. Se avete domande, commenti o richieste, non esitate a contattarci compilando il modulo sottostante. Saremo lieti di rispondervi nel più breve tempo possibile. Grazie per il vostro interesse!</p>
                <!-- Form -->
                <AppContactForm/>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.contact_us_container {
    // background-image: url('/img/contact_us.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 110px); // -110px di header

    .contact_us_form {
        margin: 110px auto 10px;
        padding: 2rem;
        backdrop-filter: blur(25px);
        background-color: rgba(255, 255, 255, 0.1);
    }
}
</style>
<script>

export default {
    name: 'AppBecomePartner',
}
</script>
<template lang="">
    <div class="container px-5">
        <hr class="text-white mb-5">
        <div class="row gap-0 text-white">
            <div class="row">
                <div class="left-column col-lg-6 p-5 rounded-start-4">
                    <h2 class="mb-4">Porta il tuo ristorante al successo con noi!</h2>
                    <p class="pe-md-5 fs-6">Se sei un ristoratore appassionato, desideroso di ampliare la tua visibilità e raggiungere nuovi clienti, sei nel posto giusto. Unisciti alla nostra piattaforma e scopri come possiamo aiutarti a crescere il tuo business. Sfrutta le nostre soluzioni innovative e raggiungi nuove vette di successo con il tuo ristorante!</p>
                </div>
                <div class="right-column col-lg-6 p-0">
                    <div class="image-container">
                        <img src="/img/work_with_us.jpg" alt="Lavora con noi" class="img-fluid rounded-end-4">
                    </div>
                </div>
            </div>
            
            <div class="col-12  text-center my-5">
                <div class="register-wwu">
                    <!-- Link alla registrazione -->
                    <a href="http://127.0.0.1:8000/register" class=""><button class="font-1 ">REGISTRATI</button></a>
                    
                </div>
            </div>
        </div>
        <hr class="text-white mb-5">
    </div>

</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {

    .left-column {
        backdrop-filter: blur(25px);
        background-color: rgba(245, 195, 68, 0.05);
    }

    .image-container {
        height: 100%;
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>
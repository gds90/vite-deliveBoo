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
                <div class="left-column col-lg-6 p-5">
                    <h2 class="mb-4">Porta il tuo ristorante al successo con noi!</h2>
                    <p class="pe-md-5 fs-6">Se sei un ristoratore appassionato, desideroso di ampliare la tua visibilità e raggiungere nuovi clienti, sei nel posto giusto. Unisciti alla nostra piattaforma e scopri come possiamo aiutarti a crescere il tuo business. Sfrutta le nostre soluzioni innovative e raggiungi nuove vette di successo con il tuo ristorante!</p>
                </div>
                <div class="right-column col-lg-6 p-0">
                    <div class="image-container">
                        <img src="/img/work_with_us.jpg" alt="Lavora con noi" class="img-fluid">
                    </div>
                </div>
            </div>
            
            <div class="col-12  text-center my-5">
                <div class="register-wwu">
                    <!-- Link alla registrazione -->
                    <a href="http://127.0.0.1:8000/register" class=""><button class="font-1 text_secondary">REGISTRATI</button></a>
                    
                </div>
            </div>
        </div>
        <hr class="text-white mb-5">
    </div>

</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general' as *;

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
    width: 230px;
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

button::before {
    content: "";
    background-color: #fff;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 700ms ease-in-out;
    display: inline-block;
}

button:hover::before {
    width: 100%;
}

@media only screen and (max-width: 768px) {

    .left-column {
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .right-column img {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
    }
}

@media only screen and (min-width: 769px) {

    .left-column {
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.75rem;
        border-bottom-right-radius: 0;
    }

    .right-column img {
        border-top-left-radius: 0;
        border-top-right-radius: 0.75rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0.75rem;
    }
}
</style>
<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    }
}
</script>
<template lang="">
<!-- Footer -->
<footer v-if="$route.path  !== '/checkout' && $route.path !== '/confirmed_payment' && $route.path !== '/payment-error'" class="text-center text-lg-start bg_footer text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-lg-start justify-content-center p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block text-white ">
            <span>Connettiti con noi sui social network:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div class="text-white ">
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <!-- Right -->
    </section>
    <!-- Section: Social media -->
<!-- Section: Links  -->
<section class="">
    <div class="container text-center text-md-start mt-5 text-white ">
        <!-- Grid row -->
        <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <div class="logo">
                    <img src="/img/logo.png" alt="Deliveboo" class="w-25 d-lg-block d-none">
                </div>
                <h6 class="text-uppercase text-warning  mb-4 fs-5 font-1">
                    Deliveboo S.r.L.
                </h6>
                <p>
                    Rendi il tuo business un successo digitale: soluzioni gestionali per la tua delivery,
                    ottimizzando tempi e risorse per massimizzare l'efficienza.
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase text-warning mb-4 fs-5 font-1">
                    Ristoratori
                </h6>
                <ul class="list-unstyled ">
                    <li>
                        <a href="#!" class="text-reset text-decoration-none">Diventa un Partner</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Registrati</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Scopri i Nostri Servizi</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Domande Frequenti</a>
                    </li>
                </ul>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase text-warning mb-4 fs-5 font-1">
                    Clienti
                </h6>
                <ul class="list-unstyled ">
                    <li>
                        <a href="#!" class="text-reset text-decoration-none">Crea un Account</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Cerca Ristoranti</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Esplora i Menu</a>
                    </li>
                    <li class="mt-3">
                        <a href="#!" class="text-reset text-decoration-none">Assistenza Clienti</a>
                    </li>
                </ul>
            </div>

            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase text-warning mb-4 fs-5 font-1">Contatti</h6>
                <p><i class="fas fa-home me-3"></i> Via Roma, 123 - 00100 Roma (RM)</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@deliveboo.com
                </p>
                <p><i class="fas fa-phone me-3"></i> +39 0123 456789</p>
                <p><i class="fas fa-globe me-3"></i> www.deliveboo.com</p>
            </div>
            <!-- Grid column -->
        </div>
        <!-- Grid row -->
    </div>
</section>
<!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center text-white p-4 open-sans" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2024 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Deliveboo.com</a>
    </div>
    <!-- Copyright -->
</footer>
<!-- Footer -->
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg_footer {
    background: $secondary_color;
}

.logo {
    position: absolute;
    left: -100px;
    opacity: 0.4;
}
</style>
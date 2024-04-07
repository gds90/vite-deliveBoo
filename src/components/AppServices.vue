<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center text-white font-1 mb-5">
                <h2>I NOSTRI SERVIZI</h2>
            </div>
        </div>
        <div class="row justify-content-center align-items-stretch mb-5">
            <!-- Single Service -->
            <div class="col-9 col-md-6 col-xl-4 mb-4 mb-md-0">
                <div class="service pb-3">
                    <div class="card text-center">
                        <div class="card-info d-flex flex-column p-3">
                          <p class="title fs-3 font-1 fw-light ">Consegna veloce</p>
                          <img src="/img/services/delivery.png" alt="Delivery" class="w-25"/>
                          <p class="description text-white fw-bold mt-3 ">Consegna del cibo in pochi minuti.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9 col-md-6 col-xl-4 mb-4 mb-md-0">
                <div class="service pb-3">
                    <div class="card text-center">
                        <div class="card-info d-flex flex-column ">
                            <p class="title fs-3 font-1 fw-light ">Pagamenti sicuri</p>
                            <img src="/img/services/payment.png" alt="Payment" class="w-25 ps-2 mb-2"/>
                            <p class="description text-white fw-bold mt-3 ">Tranquillità nell'ordine con pagamenti sicuri.</p>
                          </div>
                    </div>
                </div>
            </div>
            <div class="col-9 col-md-6 col-xl-4 mb-4 mb-md-0">
                <div class="service pb-3">
                    <div class="card text-center">
                        <div class="card-info d-flex flex-column p-2">
                            <p class="title fs-3 font-1 fw-light">Assistenza clienti 24/7</p>
                            <img src="/img/services/assistance.png" alt="Assistance" class="w-25"/>
                            <p class="description text-white fw-bold mt-3 ">Supporto clienti sempre disponibile.</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.card {
    --background: linear-gradient(to left, #fff 0%, #f5c344 100%);
    height: 254px;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: #f7ba2b;
    background: var(--background);
    position: relative;
    z-index: 1;
    width: auto;
}

.card::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(25px);
    background: #f7ba2b;
    background: var(--background);
    transition: opacity .5s;
}

.card-info {
    --color: rgb(21, 49, 96, 0.8);
    background: var(--color);
    color: #f7ba2b;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
}

.card .title {
    font-weight: bold;
    letter-spacing: .1em;
}

/*Hover*/
.card:hover::after {
    opacity: 100;
}

.card:hover .card-info {
    color: #fff;
    transition: color 1s;
}
</style>
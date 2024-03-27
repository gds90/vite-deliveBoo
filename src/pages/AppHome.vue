<script>
import AppBecomePartner from '../components/AppBecomePartner.vue';
import AppServices from '../components/AppServices.vue';
import AppJumbotron from '../components/AppJumbotron.vue';
export default {
    name: 'AppHome',

    components: {
        AppServices,
        AppBecomePartner,
        AppJumbotron
    },

    methods: {
    },
}
</script>
<template lang="">
    <AppJumbotron/>
    <!-- Order button -->
    <div class="container order_button mb-5">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <!-- Router link a lista Progetti -->
                <router-link to="/restaurants" class=""><button class="font-1 ">ORDINA SUBITO</button></router-link>
            </div>
        </div>
    </div>
    <!-- <AppBecomePartner /> -->
    <!-- Services section -->
    <AppServices/>

</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 400px;

    left: 180px;
    top: 50px;
}

.input {
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    width: 100%;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    color: #0d0c22;
    box-shadow: 0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb;
    transition: .3s ease;
}

.input::placeholder {
    color: #777;
}

.icon {
    position: absolute;
    left: 1rem;
    fill: #777;
    width: 1rem;
    height: 1rem;
}

button {
    position: relative;
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
}

button::before {
    content: "";
    background-color: rgb(245, 173, 68);
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
</style>
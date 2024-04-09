<script>
export default {

}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 mt-5 my-auto ">
                <div class="text-center fs-1 text-success mt-5"><i class="fa-solid fa-circle-check"></i></div>
                <h2 class="text-huge text-center mt-3 text-white">Grazie per averci contattato. Riceverai una risposta a breve.</h2>
                <h5 class="text-big text-center mt-3 mb-5 text-white">Lo staff di Deliveboo.com</h5>
                <div class="text-center">
                    <!-- Router link to home -->
                    <router-link to="/" class=""><button class="font-1 text_secondary my-5">TORNA ALLA HOME</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general' as *;

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
</style>
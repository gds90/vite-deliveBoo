<template lang="">
    <!-- Jumbotron -->
    <div class="jumbotron">
        <div class="container-fluid">
            <div class="row justify-content-center text-white pt-5 bg-sm-img">
                <!-- <div class="col-6 d-xl-block d-none">
                    <div class="content_jumbo_left">
                        <img src="/img/jumbo_hamburger.png" alt="Deliveboo">
                    </div>
                </div> -->
                <div class="col-12 m-auto  background">
                    <div class="content_jumbo_right pt-5">
                        <div class="jumbo_text text-center font-1 pt-5">
                            <h2>Scopri il GUSTO</h2>
                            <div>
                                <h1>a portata di CLICK!</h1>
                            </div>
                            <div class="mt-4">
                                <h4>Sapore e comodità, consegnati a domicilio.</h4>
                            </div>
                        </div>
                        <!-- Searchbar -->
                        <!-- <div class="searchbar">
                            <div class="group">
                                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                                <input placeholder="Cerca ristorante o categoria" type="search" class="input">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end Jumbotron -->
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.jumbotron {
    margin-top: 82px;
    height: 400px;
    position: relative;
    width: 100%;
    height: 700.63px;
    top: -70px;
    border-top-right-radius: 0;
    background: rgb(28, 48, 93);
    background: linear-gradient(0deg, rgba(28, 48, 93, 1) 0%, rgba(245, 195, 68, 1) 62%);

    img {
        width: 120%;

        position: relative;
        top: 100px;
        left: -10px;
    }

    .jumbo_text {

        h1,
        h2 {
            font-size: 5em;
            padding-top: 20px;
            text-shadow: 3px 3px 0 rgb(21, 49, 96),
                -3px 3px 0 rgb(21, 49, 96),
                -3px -3px 0 rgb(21, 49, 96),
                3px -3px 0 rgb(21, 49, 96);
        }
    }

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

    .background {
        background-image: url('/img/jumbo_hamburger.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 250px;
        width: 100%;
    }
}


@media only screen and (max-width: 925px) {
    .jumbotron .background {
        padding-top: 200px;
    }
}

@media only screen and (max-width: 768px) {
    .jumbotron .background {
        padding-top: 50px;
    }
}
</style>
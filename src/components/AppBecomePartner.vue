<script>

export default {
    name: 'AppBecomePartner',
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-8 p-5 rounded-start-4">
                <h3>VUOI DIVENTARE NOSTRO PARTNER?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod reprehenderit natus aspernatur eos minima eius similique nostrum? Voluptatibus aliquid nam facilis aut soluta veritatis iusto, ipsam similique. Unde, veritatis?</p>
                
            </div>
            <div class="col-4 rounded-4">
               <div class="image-container">
                  
               </div>
            </div>
            <div class="col 12 text-center py-3">
                <button type="button" class="btn btn-warning rounded-pill">Registrati</button>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {

    .col-8 {
        background-color: $primary_color;

    }

    .image-container {
        height: 100%;
        width: 100%;
        background-image: url('/img/jumbo_hamburger.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>
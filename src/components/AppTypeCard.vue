<script>
export default {
    name: 'AppTypeCard',
    props: {
        type: Object
    },
    data() {
        return {
            isHighlighted: false // Aggiungi una variabile per tenere traccia dello stato di evidenziazione dell'immagine
        }
    },
    methods: {
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted; // Inverti lo stato di evidenziazione dell'immagine quando viene cliccata
        }
    },
}
</script>
<template>
    <div class="type-container text-center me-4 h-100 " @click="toggleHighlight">
        <div class="image-button rounded-image shadow ">
            <img :class="{ 'highlighted': isHighlighted }" :src="`/img/type-image/${type.slug}.jpeg`">
        </div>

        <div class="text-white type-name mt-2 fw-bold ">
            {{ type.name }}
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.type-container {
    transition: 0.3s all;
    position: relative;

    &:hover {
        transform: scale(1.2)
    }
}

.rounded-image {
    position: relative;
    width: 140px; // Larghezza del contenitore circolare
    height: 140px; // Altezza del contenitore circolare
    border-radius: 50%;
    overflow: hidden; // Assicura che l'immagine venga visualizzata correttamente all'interno del bordo arrotondato
    transition: border-color 0.3s ease; // Aggiungi una transizione per il cambio di colore del bordo
}

@media screen and (max-width: 576px) {
    .rounded-image {
        width: 70px;
        /* La metà della larghezza specificata quando lo schermo è sotto i 576px */
        height: 70px;
        /* La metà dell'altezza specificata quando lo schermo è sotto i 576px */
    }

    .type-name {
        font-size: 0.7rem;
    }
}


.rounded-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; // Imposta la larghezza dell'immagine al 100% del contenitore
    height: 100%; // Imposta l'altezza dell'immagine al 100% del contenitore
    object-fit: cover; // Imposta l'immagine in modo da coprire il contenitore senza deformazioni
    border-radius: 50%; // Assicura che l'immagine sia arrotondata
}

.rounded-image img.highlighted {
    border: 5px solid $primary_color; // Cambia il colore del bordo quando l'immagine è evidenziata
}

.type-container {
    display: inline-block;
    cursor: pointer;
}

.text-dark {
    margin-top: 5px;
}
</style>
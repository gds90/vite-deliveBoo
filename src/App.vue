<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    // controllo se ci sono dati nel localStorage per il carrello
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      // aggiorna lo store con i dati del carrello dal localStorage
      this.store.cart.items = cartItems;

      if (cartItems.length > 0) {
        this.store.cart.restaurantId = cartItems[0].restaurant_id;
      }
    }

    this.calculateTotalPrice();
  },
  methods: {
    calculateTotalPrice() {
      // Implementa la logica per calcolare il totale qui
      // Ad esempio:
      store.calculateTotalPrice();
    }
  },
  computed: {
    isCustomLayout() {
      // Controlla se la rotta attiva ha un layout personalizzato
      return this.$route.meta.layout !== undefined;
    }
  }
}
</script>
<template lang="">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <AppHeader v-if="!isCustomLayout"/> <!-- Renderizza l'header solo se non è presente un layout personalizzato -->
  <router-view></router-view>
  <AppFooter v-if="!isCustomLayout"/> <!-- Renderizza il footer solo se non è presente un layout personalizzato -->
</template>
<style lang="scss">
@use './styles/general.scss' as *;
</style>
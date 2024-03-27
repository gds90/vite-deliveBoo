<script>
import AppBecomePartner from '../components/AppBecomePartner.vue';
export default {
    name: 'AppHome',
    methods: {
    },
    components: {
        AppBecomePartner
    }
}
</script>
<template lang="">
    <!-- Jumbotron -->
    <div class="jumbotron">
        
    </div>
    <AppBecomePartner />
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.jumbotron {
    margin-top: 80px;
    height: 400px;

    img {
        width: 100%;
    }
}
</style>
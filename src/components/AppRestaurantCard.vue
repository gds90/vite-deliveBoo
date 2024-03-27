<script>
export default {
    name: 'AppRestaurantCard',
    props: {
        restaurant: Object
    },
}
</script>
<template lang="">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src=""
            :alt="{{ $restaurant->name }}">
        <div class="card-body">
            <h5 class="card-title">{{ restaurant->name }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ $restaurant->address }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss"></style>
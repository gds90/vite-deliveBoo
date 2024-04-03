<script>
export default {
    name: 'AppLoader'
}
</script>
<template lang="">
    <div class="loader-container">
        <span class="loader"></span>
    </div>
</template>
<style lang="scss">
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .loader {
        box-sizing: border-box;
        position: relative;
        width: 48px;
        height: 48px;
        animation: spin 1s linear infinite;
    }

    .loader:after,
    .loader:before {
        content: "";
        width: 24px;
        height: 24px;
        position: absolute;
        border-radius: 50%;
        background: rgb(245, 195, 68);
        animation: spin 1s linear infinite;
        transform-origin: 0px 100%;
    }

    .loader:before {
        transform-origin: 0 50%;
        background: #fff;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

}
</style>
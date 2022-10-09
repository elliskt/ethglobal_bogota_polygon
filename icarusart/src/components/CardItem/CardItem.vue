<template>
    <div class="card">
        <div class="card2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(163deg, white 100%, #3700ff 100%);
    border-radius: 12px;
    transition: all .3s;
}

.card2 {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    border-radius: inherit;
    transition: all .2s;
}

.card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
}

.card:hover {
    box-shadow: 0px 0px 30px 2px rgba(0, 255, 255, 10);

}
</style>
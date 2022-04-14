<script lang="ts" setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header />
    <div class="mt-24">
        <slot />
    </div>
    <Footer class="mt-24" />
</template>
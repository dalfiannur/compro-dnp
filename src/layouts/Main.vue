<script lang="ts" setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer/Footer.vue'
</script>

<template>
    <Header />
    <div class="mt-24">
        <slot />
    </div>
    <Footer />
</template>
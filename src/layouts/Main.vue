<script lang="ts" setup>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <div class="my-24">
      <slot />
    </div>
    <Footer />
  </div>
</template>

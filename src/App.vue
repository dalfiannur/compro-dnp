<script setup lang="ts">
import Layout from './layouts/Main.vue'
import ProductDetailVue from './pages/product-detail/ProductDetail.vue';
</script>

<template>
  <Layout>
    <router-view :key="$route.path" />
  </Layout>
</template>

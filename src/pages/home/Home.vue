<script setup lang="ts">
import ProductSlider from '../../components/Slider/ProductSlider.vue'
import ProductList from './components/ProductList.vue'
import HowToFind from '../../components/HowToFind.vue'
</script>

<template>
    <div id="product-slider" class="pt-10">
        <ProductSlider />
    </div>
    <div id="product-list" class="mt-20">
        <ProductList />
    </div>
    <div id="how-to-find" class="mt-20">
        <HowToFind />
    </div>
</template>
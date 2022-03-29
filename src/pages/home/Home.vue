<script setup lang="ts">
// Import Components
import ProductSlider from '../../components/Slider/ProductSlider.vue'
import ProductList from './components/ProductList.vue'
import HowToFind from '../../components/HowToFind.vue'

// Import Composable
import useGetFeaturedProduct from '../../composable/useGetFeaturedProduct'


// Initial Composable
const { data: featuredProducts } = useGetFeaturedProduct()
</script>

<template>
    <div id="product-slider" class="pt-10">
        <ProductSlider :items="featuredProducts" />
    </div>
    <div id="product-list" class="mt-20">
        <ProductList />
    </div>
    <div id="how-to-find" class="mt-20">
        <HowToFind />
    </div>
</template>